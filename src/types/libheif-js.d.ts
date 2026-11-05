declare module "libheif-js/libheif-wasm/libheif-bundle.mjs" {
  type LibheifImage = {
    get_width(): number;
    get_height(): number;
    is_primary(): boolean;
    display(imageData: ImageData, callback: (result: ImageData | null) => void): void;
    free?(): void;
  };

  type LibheifModule = {
    HeifDecoder: new () => {
      decode(data: Uint8Array): LibheifImage[];
    };
  };

  const createLibheif: () => Promise<LibheifModule>;
  export default createLibheif;
}
