export const APP_STORE_ID = "6772085946";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;
export const APP_STORE_PROVIDER_TOKEN = "128874359";
export const APP_STORE_CAMPAIGNS = {
  product: "web-product",
  blog: "web-blog",
} as const;
export type AppStoreCampaign = typeof APP_STORE_CAMPAIGNS[keyof typeof APP_STORE_CAMPAIGNS];

export const appStoreCampaignUrl = (campaign: AppStoreCampaign) =>
  `https://apps.apple.com/app/apple-store/id${APP_STORE_ID}?pt=${APP_STORE_PROVIDER_TOKEN}&ct=${encodeURIComponent(campaign)}&mt=8`;
export const SITE_URL = "https://lessphoto.cc";

export type Locale = "en" | "zh-hans" | "zh-hant";
export type LegalPage = "terms" | "privacy" | "support";

export const locales: Locale[] = ["en", "zh-hans", "zh-hant"];

export const localeMeta: Record<Locale, { label: string; htmlLang: string }> = {
  en: { label: "English", htmlLang: "en" },
  "zh-hans": { label: "简体中文", htmlLang: "zh-Hans" },
  "zh-hant": { label: "繁體中文", htmlLang: "zh-Hant" },
};

export const localeShortLabel: Record<Locale, string> = {
  en: "EN",
  "zh-hans": "简体",
  "zh-hant": "繁體",
};

export const languageSuggestionCopy = {
  "zh-hans": {
    ariaLabel: "语言建议",
    prompt: "切换到你的常用语言？",
    switchLabel: "简体中文",
    closeLabel: "继续使用 English",
  },
  "zh-hant": {
    ariaLabel: "語言建議",
    prompt: "切換到你的常用語言？",
    switchLabel: "繁體中文",
    closeLabel: "繼續使用 English",
  },
} satisfies Record<Exclude<Locale, "en">, {
  ariaLabel: string;
  prompt: string;
  switchLabel: string;
  closeLabel: string;
}>;

export const localePath = (locale: Locale, path = "") => {
  const normalized = path.replace(/^\/+|\/+$/g, "");
  const prefix = locale === "en" ? "" : `/${locale}`;
  return normalized ? `${prefix}/${normalized}/` : `${prefix || ""}/`;
};

export const copy = {
  en: {
    seoTitle: "iPhone Photo Cleaner: Duplicate & Similar Photos | LessPhoto",
    seoDescription:
      "Clean duplicate and similar photos, review by month or at random, compress large photos, and clear old screenshots—privately on your iPhone.",
    navHome: "Home",
    navFeatures: "Features",
    navBlog: "Blog",
    navAbout: "About",
    relatedInformationLabel: "Related information",
    navPrivacy: "Privacy Policy",
    navGet: "Get the app",
    menuLabel: "Menu",
    resourceNavLabel: "Resources",
    blogDirectoryLabel: "Recommended articles",
    blogReadingLabel: "Reading now",
    blogArticleBreadcrumb: "Article",
    blogCtaDescription: "Clean up iPhone photos, free up more space.",
    emptyBlogDirectoryLabel: "Published blog articles will appear here.",
    skipToContent: "Skip to content",
    homeAria: "LessPhoto home",
    primaryNavAria: "Primary navigation",
    footerNavAria: "Footer navigation",
    footerExplore: "Explore",
    heroTitle: "Clean Up Photos. Free Up iPhone Space.",
    heroTitleAccent: "Free Up iPhone Space",
    heroDescription:
      "Clean duplicates and similar shots, swipe through old photos, compress large images, and clear screenshots. All photo processing stays on your iPhone.",
    heroPrimary: "Get the app",
    featureLearnMore: "Learn more",
    featureDuplicateLink: "Clean duplicate photos",
    featureSimilarLink: "Clean similar photos",
    features: [
      {
        key: "similar",
        title: "Clean Up Duplicate & Similar Photos.",
        titleAccent: "Duplicate & Similar Photos",
        description:
          "Merge duplicates without losing albums or favorites. For similar photos, keep the best shots and unique perspectives, then review what LessPhoto preselects.",
      },
      {
        key: "swipe",
        title: "Swipe to Clean Up iPhone Photos.",
        titleAccent: "Swipe to Clean Up",
        description:
          "Review by month or at random. Swipe unwanted photos to the trash, check the batch, then delete.",
      },
      {
        key: "compression",
        title: "Compress Large iPhone Photos.",
        titleAccent: "Compress Large",
        description:
          "Choose More Detail or Smaller Size. Create a HEIC copy and compare it with the original.",
      },
      {
        key: "screenshots",
        title: "Clear Old iPhone Screenshots.",
        titleAccent: "Clear Old",
        description:
          "Filter screenshots by age, review them together, and delete what you no longer need.",
      },
    ],
    privacyTitle: "Private by Design. Processed on iPhone.",
    privacyTitleAccent: "Processed on iPhone",
    privacyDescription:
      "LessPhoto analyzes, compares, and processes photos on your device. Your photo library is not uploaded, and no account is required for core tools.",
    faqTitle: "FAQ",
    faqs: [
      ["Does LessPhoto upload my photos?", "No. Photo analysis and compression are performed locally on your device."],
      ["What is the difference between duplicate and similar photos?", "Duplicates are matching files or images. Similar photos are separate shots that look alike, such as several photos taken moments apart."],
      ["Does LessPhoto delete photos automatically?", "No. LessPhoto provides suggestions, but you review selections and approve deletion through the iOS system flow."],
      ["What happens when iCloud Photos is enabled?", "Deletions follow the behavior of your Apple Photos library and can sync to your other devices. Review important photos before confirming."],
    ],
    finalTitle: "Start cleaning your photo library.",
    finalDescription: "Keep the photos you love and clear the ones you no longer need.",
    languageLabel: "Language",
    artworkLabel: "Artwork placeholder",
    artworkHint: "Final product artwork will be added here.",
  },
  "zh-hans": {
    seoTitle: "LessPhoto：iPhone 照片清理｜重复照片、相似照片与大图压缩",
    seoDescription: "清理 iPhone 中的重复与相似照片，按月份或随机回顾照片，压缩占空间的大图，并按日期批量清理旧截图。",
    navHome: "首页",
    navFeatures: "功能介绍",
    navBlog: "博客",
    navAbout: "关于",
    relatedInformationLabel: "相关信息",
    navPrivacy: "隐私政策",
    navGet: "下载 App",
    menuLabel: "菜单",
    resourceNavLabel: "资源与帮助",
    blogDirectoryLabel: "文章推荐",
    blogReadingLabel: "正在阅读",
    blogArticleBreadcrumb: "正文",
    blogCtaDescription: "清理 iPhone 照片，释放更多空间。",
    emptyBlogDirectoryLabel: "博客文章发布后会显示在这里。",
    skipToContent: "跳到主要内容",
    homeAria: "LessPhoto 首页",
    primaryNavAria: "主导航",
    footerNavAria: "页尾导航",
    footerExplore: "探索",
    heroTitle: "清理 iPhone 照片，释放更多空间。",
    heroTitleAccent: "释放更多空间",
    heroDescription: "扫描重复与相似照片，一键清理重复项；按月份或随机回顾照片，压缩占空间的大图，并按日期清理旧截图。所有处理均在 iPhone 本机完成。",
    heroPrimary: "下载 App",
    featureLearnMore: "了解更多",
    featureDuplicateLink: "清理重复照片",
    featureSimilarLink: "对比相似照片",
    features: [
      { key: "similar", title: "清理重复照片与相似照片。", titleAccent: "相似照片", description: "合并重复照片时，自动保留用户相簿与收藏状态。整理相似照片时，标记通常更值得关注的最佳照片与特色视角，方便你重点比较后确认。" },
      { key: "swipe", title: "滑动删除与整理照片。", titleAccent: "滑动删除", description: "按月份或随机回顾照片，上滑将不需要的照片加入回收站，完成后集中检查并一键删除。" },
      { key: "compression", title: "压缩占空间的大图。", titleAccent: "压缩", description: "选择「保持高清细节」或「更省空间」，生成 HEIC 压缩副本后直接与原图对比。" },
      { key: "screenshots", title: "按日期清理旧截图。", titleAccent: "清理旧截图", description: "筛选 3 天前、1 周前或 1 个月前的截图，集中检查并批量删除。" },
    ],
    privacyTitle: "照片只在 iPhone 本机处理。",
    privacyTitleAccent: "iPhone 本机",
    privacyDescription: "照片的分析、对比和整理都在设备本机完成。LessPhoto 不会上传照片库内容，核心功能也无需注册账号。",
    faqTitle: "常见问题",
    faqs: [["LessPhoto 会上传我的照片吗？", "不会。照片分析与压缩都在你的设备本机完成。"], ["重复照片和相似照片有什么区别？", "重复照片是匹配的文件或图像；相似照片是多张独立拍摄、但画面接近的照片。"], ["LessPhoto 会自动删除照片吗？", "不会。LessPhoto 会给出整理建议，但选择和系统删除都需要由你确认。"], ["开启 iCloud 照片后会发生什么？", "删除操作会遵循 Apple 照片库的同步规则，并可能同步到其他设备。确认前请仔细检查重要照片。"]],
    finalTitle: "开始整理你的 iPhone 照片。",
    finalDescription: "保留喜欢的照片，清理不再需要的内容。",
    languageLabel: "语言",
    artworkLabel: "功能图占位",
    artworkHint: "后续将在这里替换最终产品视觉。",
  },
  "zh-hant": {
    seoTitle: "LessPhoto：iPhone 相片整理｜重複相片、相似相片與大圖壓縮",
    seoDescription: "整理 iPhone 中的重複與相似相片，按月份或隨機回顧相片，壓縮佔空間的大圖，並按日期批次整理舊截圖。",
    navHome: "首頁",
    navFeatures: "功能介紹",
    navBlog: "部落格",
    navAbout: "關於",
    relatedInformationLabel: "相關資訊",
    navPrivacy: "隱私政策",
    navGet: "下載 App",
    menuLabel: "選單",
    resourceNavLabel: "資源與協助",
    blogDirectoryLabel: "文章推薦",
    blogReadingLabel: "閱讀中",
    blogArticleBreadcrumb: "正文",
    blogCtaDescription: "清理 iPhone 相片，釋放更多空間。",
    emptyBlogDirectoryLabel: "部落格文章發佈後會顯示在這裡。",
    skipToContent: "跳到主要內容",
    homeAria: "LessPhoto 首頁",
    primaryNavAria: "主導覽",
    footerNavAria: "頁尾導覽",
    footerExplore: "探索",
    heroTitle: "整理 iPhone 相片，釋放更多空間。",
    heroTitleAccent: "釋放更多空間",
    heroDescription: "掃描重複與相似相片，一鍵整理重複項目；按月份或隨機回顧相片，壓縮佔空間的大圖，並按日期整理舊截圖。所有處理均在 iPhone 本機完成。",
    heroPrimary: "下載 App",
    featureLearnMore: "了解更多",
    featureDuplicateLink: "整理重複相片",
    featureSimilarLink: "比較相似相片",
    features: [
      { key: "similar", title: "整理重複相片與相似相片。", titleAccent: "相似相片", description: "合併重複相片時，自動保留使用者相簿與喜好項目狀態。整理相似相片時，標記通常更值得關注的最佳相片與特色視角，方便你重點比較後確認。" },
      { key: "swipe", title: "滑動刪除與整理相片。", titleAccent: "滑動刪除", description: "按月份或隨機回顧相片，上滑將不需要的相片加入回收站，完成後集中檢查並一鍵刪除。" },
      { key: "compression", title: "壓縮佔空間的大圖。", titleAccent: "壓縮", description: "選擇「保持高清細節」或「更省空間」，產生 HEIC 壓縮副本後直接與原圖比較。" },
      { key: "screenshots", title: "按日期整理舊截圖。", titleAccent: "整理舊截圖", description: "篩選 3 天前、1 週前或 1 個月前的截圖，集中檢查並批次刪除。" },
    ],
    privacyTitle: "相片只在 iPhone 本機處理。",
    privacyTitleAccent: "iPhone 本機",
    privacyDescription: "照片的分析、比較與整理都在裝置本機完成。LessPhoto 不會上傳照片庫內容，核心功能也無需註冊帳號。",
    faqTitle: "常見問題",
    faqs: [["LessPhoto 會上傳我的照片嗎？", "不會。照片分析與壓縮都在你的裝置本機完成。"], ["重複照片和相似照片有什麼分別？", "重複照片是匹配的檔案或圖像；相似照片是多張獨立拍攝、但畫面接近的照片。"], ["LessPhoto 會自動刪除照片嗎？", "不會。LessPhoto 會提供整理建議，但選擇和系統刪除都需要由你確認。"], ["開啟 iCloud 照片後會發生什麼？", "刪除操作會遵循 Apple 照片庫的同步規則，並可能同步到其他裝置。確認前請仔細檢查重要照片。"]],
    finalTitle: "開始整理你的 iPhone 相片。",
    finalDescription: "保留喜歡的相片，清理不再需要的內容。",
    languageLabel: "語言",
    artworkLabel: "功能圖佔位",
    artworkHint: "後續將在這裡替換最終產品視覺。",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export const legalDocuments: Record<Locale, Record<LegalPage, string>> = {
  en: {
    terms: "docs/terms-en.md",
    privacy: "docs/privacy-en.md",
    support: "docs/support-en.md",
  },
  "zh-hans": {
    terms: "docs/terms-zh-CN.md",
    privacy: "docs/privacy-zh-CN.md",
    support: "docs/support-zh-CN.md",
  },
  "zh-hant": {
    terms: "docs/terms-zh-HK.md",
    privacy: "docs/privacy-zh-HK.md",
    support: "docs/support-zh-HK.md",
  },
};

export const legalLabels: Record<Locale, Record<LegalPage, string>> = {
  en: { terms: "User Agreement", privacy: "Privacy Policy", support: "Support" },
  "zh-hans": { terms: "用户协议", privacy: "隐私政策", support: "技术支持" },
  "zh-hant": { terms: "使用者協議", privacy: "隱私政策", support: "技術支援" },
};

export const blogIndexCopy: Record<Locale, {
  seoTitle: string;
  seoDescription: string;
}> = {
  en: {
    seoTitle: "LessPhoto Blog – iPhone Photo Organization",
    seoDescription: "Practical guidance for organizing iPhone photos, reviewing similar shots, managing screenshots, and understanding iCloud deletion behavior.",
  },
  "zh-hans": {
    seoTitle: "LessPhoto 博客：iPhone 照片整理",
    seoDescription: "了解如何整理 iPhone 照片、对比相似照片、清理截屏，以及理解 iCloud 照片删除规则。",
  },
  "zh-hant": {
    seoTitle: "LessPhoto 部落格：iPhone 相片整理",
    seoDescription: "了解如何整理 iPhone 相片、比較相似相片、清理截圖，以及理解 iCloud 相片刪除規則。",
  },
};
