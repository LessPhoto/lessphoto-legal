export type ConverterTaskResult = {
  file: File;
  blob?: Blob;
  url?: string;
  error?: boolean;
  format?: string;
};

export type ConverterTaskVisualState = {
  id: number;
  startedAt: number;
};

type ConverterTaskSettings = {
  format: string;
  quality: number;
  scale: number;
};

type ConverterTaskListContext = {
  container: HTMLUListElement;
  selectedFiles: File[];
  results: ConverterTaskResult[];
  processingIndex: number;
  visualProcessing: Map<File, ConverterTaskVisualState>;
  completionAnimations: Map<File, ConverterTaskVisualState>;
  messages: Record<string, string>;
  failedLabel: string;
  downloadLabel: string;
  outputFormat: string;
  taskSettings: Map<File, ConverterTaskSettings>;
  isPackaging: boolean;
  previewUrlFor: (file: File) => string;
  extensionFor: (name: string) => string;
  formatBytes: (bytes: number) => string;
  formatLabel: (format: string) => string;
  outputNameFor: (file: File, format: string) => string;
  onRemove: (file: File, index: number) => void;
};

export const renderConverterTaskItems = ({
  container,
  selectedFiles,
  results,
  processingIndex,
  visualProcessing,
  completionAnimations,
  messages,
  failedLabel,
  downloadLabel,
  outputFormat,
  taskSettings,
  isPackaging,
  previewUrlFor,
  extensionFor,
  formatBytes,
  formatLabel,
  outputNameFor,
  onRemove,
}: ConverterTaskListContext) => {
  container.replaceChildren();

  selectedFiles.forEach((file, index) => {
    const item = document.createElement("li");
    const result = results.find((candidate) => candidate.file === file);
    const isProcessing = processingIndex === index || visualProcessing.has(file);
    const resultIsReady = !!result && !isProcessing;
    const visualState = visualProcessing.get(file);
    const completionState = completionAnimations.get(file);
    const stateName = result?.blob && resultIsReady ? "done" : result?.error && resultIsReady ? "error" : isProcessing ? "processing" : "waiting";
    item.className = `webp-file-list__item${result?.blob && resultIsReady ? "" : " webp-file-list__item--pending"}${completionState ? " webp-file-list__item--completing" : ""}`;

    const state = document.createElement("span");
    state.className = "tool-task-state";
    state.dataset.state = stateName;
    state.textContent = result?.blob && resultIsReady
      ? messages.done || "Done"
      : result?.error && resultIsReady
        ? failedLabel
        : isProcessing
          ? messages.processingShort || messages.processing || "Processing…"
          : messages.waiting || "Waiting";

    const progress = document.createElement("span");
    progress.className = "tool-task-progress";
    const progressTrack = document.createElement("span");
    progressTrack.className = "tool-task-progress__track";
    const progressFill = document.createElement("span");
    progressFill.className = "tool-task-progress__fill";
    const progressText = document.createElement("span");
    progressText.className = "tool-task-progress__text";
    const progressValue = result?.blob && resultIsReady ? 100 : isProcessing ? 80 : 0;
    progress.style.setProperty("--progress", `${progressValue}%`);
    if (visualState) {
      progress.style.setProperty("--webp-progress-animation-delay", `-${Math.max(0, performance.now() - visualState.startedAt)}ms`);
    }
    if (completionState) {
      progress.style.setProperty("--webp-completion-animation-delay", `-${Math.max(0, performance.now() - completionState.startedAt)}ms`);
    }
    progress.dataset.state = stateName;
    progressText.textContent = result?.blob && resultIsReady ? "100%" : isProcessing ? "…" : "0%";
    progressTrack.append(progressFill);
    progress.append(progressTrack, progressText);

    const thumb = document.createElement("span");
    thumb.className = "tool-task-thumb";
    const inputExtension = extensionFor(file.name);
    const needsFormatPlaceholder = ["heic", "heif", "avif"].includes(inputExtension);
    if (needsFormatPlaceholder) {
      const placeholder = document.createElement("span");
      placeholder.className = `tool-task-thumb__placeholder tool-task-thumb__placeholder--${inputExtension}`;
      placeholder.textContent = inputExtension === "heif" ? "HEIC" : formatLabel(inputExtension);
      placeholder.setAttribute("aria-hidden", "true");
      thumb.append(placeholder);
    } else {
      const thumbImage = document.createElement("img");
      thumbImage.src = previewUrlFor(file);
      thumbImage.alt = "";
      thumb.append(thumbImage);
    }

    const content = document.createElement("div");
    content.className = "webp-file-list__content";
    const name = document.createElement("span");
    name.className = "webp-file-list__name";
    name.textContent = file.name;
    const inputMeta = document.createElement("div");
    inputMeta.className = "webp-file-list__meta";
    const inputFormat = document.createElement("span");
    inputFormat.className = `tool-format-badge tool-format-badge--input tool-format-badge--${inputExtension}`;
    inputFormat.textContent = formatLabel(inputExtension);
    const inputSize = document.createElement("small");
    inputSize.textContent = formatBytes(file.size);
    inputMeta.append(inputFormat, inputSize);
    content.append(name, inputMeta);

    const resultInfo = document.createElement("div");
    resultInfo.className = "webp-file-list__result";
    const resultSummary = document.createElement("div");
    resultSummary.className = "webp-file-list__result-summary";
    const savings = document.createElement("strong");
    savings.className = "webp-file-list__savings";
    if (result?.blob) {
      const change = Math.round((1 - result.blob.size / file.size) * 100);
      savings.textContent = `${change >= 0 ? "−" : "+"}${Math.abs(change)}%`;
    } else {
      savings.textContent = isProcessing ? "…" : "—";
    }
    const outputSize = document.createElement("small");
    outputSize.textContent = result?.blob ? formatBytes(result.blob.size) : "—";
    resultSummary.append(savings, outputSize);
    const progressRow = document.createElement("div");
    progressRow.className = "webp-file-list__progress-row";
    progressRow.append(progress);
    if (result?.blob && resultIsReady) resultInfo.append(resultSummary);

    const rowActions = document.createElement("div");
    rowActions.className = "webp-file-list__actions";
    if (!result?.blob || !resultIsReady) rowActions.append(progressRow);
    const resultFormat = result?.format || taskSettings.get(file)?.format || outputFormat;
    if (result?.blob && resultIsReady && result.url) {
      const download = document.createElement("a");
      download.className = `secondary-button tool-result-download tool-format-action tool-format-action--${resultFormat}`;
      download.dataset.outputFormat = resultFormat;
      download.href = result.url;
      download.download = outputNameFor(file, resultFormat);
      download.innerHTML = `<span class="tool-format-download-icon" aria-hidden="true"></span><span>${formatLabel(resultFormat)}</span>`;
      download.setAttribute("aria-label", `${downloadLabel} ${file.name}`);
      rowActions.append(download);
    }
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "tool-remove-file";
    remove.innerHTML = `<img src="/assets/webp-converter/remove-processing.svg" alt="" aria-hidden="true" />`;
    remove.setAttribute("aria-label", `Remove ${file.name}`);
    remove.disabled = isPackaging;
    remove.addEventListener("click", () => onRemove(file, index));
    rowActions.append(remove);
    item.append(thumb, content, resultInfo, rowActions);
    container.append(item);
  });
};
