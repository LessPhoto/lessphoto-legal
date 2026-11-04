import type { Locale } from "./site";

export const webpConverterCopy: Record<Locale, {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  pageTitle: string;
  description: string;
  dropTitle: string;
  dropHint: string;
  manualUpload: string;
  continueAdding: string;
  formatSupportShort: string;
  addImages: string;
  browse: string;
  outputFormat: string;
  outputWebp: string;
  outputPng: string;
  outputJpg: string;
  formatHint: string;
  quality: string;
  qualityReset: string;
  reconvert: string;
  qualityLossless: string;
  convert: string;
  clear: string;
  clearList: string;
  taskList: string;
  selectedFiles: string;
  waiting: string;
  done: string;
  noFiles: string;
  download: string;
  downloadAll: string;
  processing: string;
  completed: string;
  unsupported: string;
  failed: string;
  inputFormats: string;
  inputFormatsDescription: string;
  privacyTitle: string;
  privacyDescription: string;
  backToLessPhoto: string;
  appFooter: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  messages: {
    filesAdded: string;
    unsupportedFile: string;
    noFiles: string;
    processing: string;
    processingShort: string;
    waiting: string;
    converted: string;
    failed: string;
    summary: string;
  };
}> = {
  en: {
    seoTitle: "WebP Converter: PNG, JPG & WebP Images | LessPhoto",
    seoDescription: "Convert PNG, JPG, and WebP images in your browser. Drag and drop files, process them in batches, and download the results locally.",
    eyebrow: "LessPhoto Tools",
    title: "Convert images in your browser.",
    pageTitle: "WebP Converter",
    description: "Convert PNG and JPG images to WebP, or turn WebP files back into PNG or JPG. Your files stay on your device.",
    dropTitle: "Drop images here",
    dropHint: "PNG, JPG, JPEG, and WebP · batch processing supported",
    manualUpload: "Choose files",
    continueAdding: "Drop images here",
    formatSupportShort: "Supported formats",
    addImages: "Add images",
    browse: "Choose files",
    outputFormat: "Output format",
    outputWebp: "WebP",
    outputPng: "PNG",
    outputJpg: "JPG",
    formatHint: "New uploads use the current format. Existing tasks stay unchanged.",
    quality: "Quality",
    qualityReset: "Reset to 80%",
    reconvert: "Reconvert",
    qualityLossless: "PNG is lossless",
    convert: "Convert images",
    clear: "Clear all",
    clearList: "Clear list",
    taskList: "Tasks",
    selectedFiles: "Selected files",
    waiting: "Waiting",
    done: "Done",
    noFiles: "No files selected",
    download: "Download",
    downloadAll: "Download all",
    processing: "Processing…",
    completed: "Ready to download",
    unsupported: "Unsupported format",
    failed: "Could not convert",
    inputFormats: "Supported formats",
    inputFormatsDescription: "PNG, JPG, JPEG, and WebP are supported. Animated GIF files are not supported in this first version.",
    privacyTitle: "Private by design",
    privacyDescription: "Images are decoded and converted in your browser. They are not uploaded to LessPhoto or sent to a server.",
    backToLessPhoto: "Back to LessPhoto",
    appFooter: "LessPhoto photo cleaner",
    ctaTitle: "Need to clean up your iPhone photo library?",
    ctaDescription: "LessPhoto finds duplicate, similar, large, and old screenshot photos directly on your iPhone.",
    ctaButton: "Get LessPhoto",
    messages: {
      filesAdded: "{count} files ready",
      unsupportedFile: "{name} is not supported. GIF and other formats were skipped.",
      noFiles: "Choose at least one supported image.",
      processing: "Converting {current} of {total}…",
      processingShort: "Processing…",
      waiting: "Waiting",
      converted: "{count} files converted.",
      failed: "{name} could not be converted.",
      summary: "{completed}/{total} completed · {saved}",
    },
  },
  "zh-hans": {
    seoTitle: "WebP 图片转换器：PNG、JPG 与 WebP 相互转换｜LessPhoto",
    seoDescription: "在浏览器中转换 PNG、JPG 和 WebP 图片。支持拖拽、批量处理和本地下载，图片不会上传。",
    eyebrow: "LessPhoto 工具",
    title: "在浏览器中转换图片。",
    pageTitle: "WebP转换",
    description: "将 PNG、JPG 图片转换为 WebP，也可以将 WebP 转回 PNG 或 JPG。图片只在你的设备上处理。",
      dropTitle: "把图片拖到这里",
    dropHint: "支持 PNG、JPG、JPEG 和 WebP · 支持批量处理",
    manualUpload: "手动上传",
      continueAdding: "把图片拖到这里",
    formatSupportShort: "说明支持格式",
    addImages: "添加图片",
    browse: "选择图片",
    outputFormat: "输出格式",
    outputWebp: "WebP",
    outputPng: "PNG",
    outputJpg: "JPG",
    formatHint: "新上传的图片使用当前格式，已有任务保持不变。",
    quality: "图片质量",
    qualityReset: "重置为 80%",
    reconvert: "重新转换",
    qualityLossless: "PNG 为无损格式",
    convert: "开始转换",
    clear: "清空全部",
    clearList: "清空列表",
    taskList: "任务列表",
    selectedFiles: "已选择的图片",
    waiting: "等待中",
    done: "完成",
    noFiles: "还没有选择图片",
    download: "下载",
    downloadAll: "全部下载",
    processing: "正在处理……",
    completed: "可以下载",
    unsupported: "不支持的格式",
    failed: "转换失败",
    inputFormats: "支持的格式",
    inputFormatsDescription: "支持 PNG、JPG、JPEG 和 WebP。当前版本暂不支持 GIF 动图。",
    privacyTitle: "图片只在本地处理",
    privacyDescription: "图片会在你的浏览器中读取和转换，不会上传到 LessPhoto 或其他服务器。",
    backToLessPhoto: "返回 LessPhoto",
    appFooter: "LessPhoto 照片清理",
    ctaTitle: "想清理整部 iPhone 相册？",
    ctaDescription: "LessPhoto 可以直接在 iPhone 上查找重复、相似、大图和旧截图。",
    ctaButton: "下载 LessPhoto",
    messages: {
      filesAdded: "已准备 {count} 张图片",
      unsupportedFile: "不支持 {name}，GIF 和其他格式已跳过。",
      noFiles: "请至少选择一张支持的图片。",
      processing: "正在转换第 {current} / {total} 张……",
      processingShort: "处理中……",
      waiting: "等待中",
      converted: "已转换 {count} 张图片。",
      failed: "{name} 转换失败。",
      summary: "{completed}/{total} 已完成 · {saved}",
    },
  },
  "zh-hant": {
    seoTitle: "WebP 圖片轉換器：PNG、JPG 與 WebP 互相轉換｜LessPhoto",
    seoDescription: "在瀏覽器中轉換 PNG、JPG 和 WebP 圖片。支援拖放、批量處理和本機下載，圖片不會上傳。",
    eyebrow: "LessPhoto 工具",
    title: "在瀏覽器中轉換圖片。",
    pageTitle: "WebP轉換",
    description: "將 PNG、JPG 圖片轉換為 WebP，也可以將 WebP 轉回 PNG 或 JPG。圖片只在你的裝置上處理。",
      dropTitle: "把圖片拖到這裡",
    dropHint: "支援 PNG、JPG、JPEG 和 WebP · 支援批量處理",
    manualUpload: "手動上傳",
    continueAdding: "把圖片拖到這裡",
    formatSupportShort: "說明支援格式",
    addImages: "新增圖片",
    browse: "選擇圖片",
    outputFormat: "輸出格式",
    outputWebp: "WebP",
    outputPng: "PNG",
    outputJpg: "JPG",
    formatHint: "新上傳的圖片使用目前格式，已有任務保持不變。",
    quality: "圖片品質",
    qualityReset: "重設為 80%",
    reconvert: "重新轉換",
    qualityLossless: "PNG 為無損格式",
    convert: "開始轉換",
    clear: "清空全部",
    clearList: "清空列表",
    taskList: "任務列表",
    selectedFiles: "已選擇的圖片",
    waiting: "等待中",
    done: "完成",
    noFiles: "尚未選擇圖片",
    download: "下載",
    downloadAll: "全部下載",
    processing: "正在處理……",
    completed: "可以下載",
    unsupported: "不支援的格式",
    failed: "轉換失敗",
    inputFormats: "支援的格式",
    inputFormatsDescription: "支援 PNG、JPG、JPEG 和 WebP。目前版本暫不支援 GIF 動圖。",
    privacyTitle: "圖片只在本機處理",
    privacyDescription: "圖片會在你的瀏覽器中讀取和轉換，不會上傳到 LessPhoto 或其他伺服器。",
    backToLessPhoto: "返回 LessPhoto",
    appFooter: "LessPhoto 相片清理",
    ctaTitle: "想整理整部 iPhone 相片圖庫？",
    ctaDescription: "LessPhoto 可以直接在 iPhone 上找出重複、相似、大圖和舊截圖。",
    ctaButton: "下載 LessPhoto",
    messages: {
      filesAdded: "已準備 {count} 張圖片",
      unsupportedFile: "不支援 {name}，GIF 和其他格式已跳過。",
      noFiles: "請至少選擇一張支援的圖片。",
      processing: "正在轉換第 {current} / {total} 張……",
      processingShort: "處理中……",
      waiting: "等待中",
      converted: "已轉換 {count} 張圖片。",
      failed: "{name} 轉換失敗。",
      summary: "{completed}/{total} 已完成 · {saved}",
    },
  },
};
