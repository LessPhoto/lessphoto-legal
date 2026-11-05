import createLibheif from "libheif-js/libheif-wasm/libheif-bundle.mjs";
import { decode as decodeAvif } from "@jsquash/avif";

type CodecFormat = "heic" | "heif" | "avif";

type DecodeRequest = {
  id: number;
  format: CodecFormat;
  buffer: ArrayBuffer;
};

type DecodeSuccess = {
  id: number;
  ok: true;
  width: number;
  height: number;
  data: ArrayBuffer;
};

type DecodeFailure = {
  id: number;
  ok: false;
  error: string;
};

type LibheifImage = {
  get_width: () => number;
  get_height: () => number;
  is_primary: () => boolean;
  display: (imageData: ImageData, callback: (result: ImageData | null) => void) => void;
  free?: () => void;
};

type LibheifModule = {
  HeifDecoder: new () => { decode: (data: Uint8Array) => LibheifImage[] };
};

let libheifPromise: Promise<LibheifModule> | undefined;
const workerScope = self as unknown as { postMessage: (message: unknown, transfer?: Transferable[]) => void };

const getLibheif = () => {
  libheifPromise ||= createLibheif() as unknown as Promise<LibheifModule>;
  return libheifPromise;
};

const decodeHeif = async (buffer: ArrayBuffer) => {
  const libheif = await getLibheif();
  const decoder = new libheif.HeifDecoder();
  const images = decoder.decode(new Uint8Array(buffer));
  const image = images.find((candidate) => candidate.is_primary?.()) || images[0];
  if (!image) throw new Error("No image was found in the HEIC file");

  const width = image.get_width();
  const height = image.get_height();
  const imageData = new ImageData(width, height);
  await new Promise<void>((resolve, reject) => {
    image.display(imageData, (displayedImage) => {
      if (!displayedImage) {
        reject(new Error("HEIC pixels could not be decoded"));
        return;
      }
      resolve();
    });
  });
  image.free?.();
  return { width, height, imageData };
};

const decode = async (request: DecodeRequest) => {
  if (request.format === "avif") {
    const imageData = await decodeAvif(request.buffer);
    if (!imageData) throw new Error("AVIF pixels could not be decoded");
    return { width: imageData.width, height: imageData.height, imageData };
  }
  return decodeHeif(request.buffer);
};

self.addEventListener("message", async (event: MessageEvent<DecodeRequest>) => {
  const request = event.data;
  try {
    const result = await decode(request);
    const response: DecodeSuccess = {
      id: request.id,
      ok: true,
      width: result.width,
      height: result.height,
      data: result.imageData.data.buffer,
    };
    workerScope.postMessage(response, [response.data]);
  } catch (error) {
    const response: DecodeFailure = {
      id: request.id,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
    workerScope.postMessage(response);
  }
});
