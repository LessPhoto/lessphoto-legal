import type { Locale } from "./site";

export type FeatureSlug =
  | "duplicate-photo-cleaner"
  | "similar-photo-cleaner"
  | "swipe-photo-cleaner"
  | "photo-compressor"
  | "screenshot-cleaner";

export type FeatureVariant = "duplicates" | "similar" | "swipe" | "compression" | "screenshots";

export interface FeatureLandingContent {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  variant: FeatureVariant;
  stepsTitle: string;
  steps: Array<[string, string, string]>;
  detailsTitle: string;
  details: Array<{ title: string; description: string }>;
  companion?: {
    slug: "duplicate-photo-cleaner" | "similar-photo-cleaner";
    title: string;
    description: string;
    linkLabel: string;
  };
  faqTitle: string;
  faqs: Array<[string, string]>;
  finalTitle: string;
  finalDescription: string;
}

export const featureSlugs: FeatureSlug[] = [
  "duplicate-photo-cleaner",
  "similar-photo-cleaner",
  "swipe-photo-cleaner",
  "photo-compressor",
  "screenshot-cleaner",
];

export const featureSlugByKey: Partial<Record<FeatureVariant, FeatureSlug>> = {
  similar: "duplicate-photo-cleaner",
  swipe: "swipe-photo-cleaner",
  compression: "photo-compressor",
  screenshots: "screenshot-cleaner",
};

export const featureLandingUi: Record<Locale, {
  download: string;
  relatedTitle: string;
}> = {
  en: {
    download: "Get the app",
    relatedTitle: "More from LessPhoto",
  },
  "zh-hans": {
    download: "下载 App",
    relatedTitle: "LessPhoto 更多功能",
  },
  "zh-hant": {
    download: "下載 App",
    relatedTitle: "LessPhoto 更多功能",
  },
};

export const featurePages: Record<Locale, Record<FeatureSlug, FeatureLandingContent>> = {
  en: {
    "duplicate-photo-cleaner": {
      seoTitle: "iPhone Duplicate Photo Cleaner | LessPhoto",
      seoDescription: "Find and merge duplicate photos on iPhone. Keep the best copy while Smart Album Inheritance preserves albums and favorites.",
      eyebrow: "Duplicate photo cleaner for iPhone",
      title: "Clean Up Duplicate Photos on iPhone.",
      titleAccent: "Duplicate Photos",
      description: "Review duplicate groups or merge them all at once. LessPhoto keeps the best copy and carries over its albums and favorite status.",
      variant: "duplicates",
      stepsTitle: "How It Works",
      steps: [
        ["1", "Review duplicate groups", "See matching photos grouped together."],
        ["2", "Choose how to merge", "Merge one group or every group at once."],
        ["3", "Confirm cleanup", "Keep the better photo with its albums and favorite status."],
      ],
      detailsTitle: "Key Features",
      details: [
        { title: "Smart Album Inheritance", description: "Pioneered by LessPhoto, it moves albums and favorite status to the photo you keep." },
        { title: "Free forever", description: "Duplicate-photo cleanup is free forever." },
      ],
      companion: {
        slug: "similar-photo-cleaner",
        title: "Duplicate vs. Similar Photos",
        description: "Duplicate photos are nearly identical copies and can usually be merged directly. Similar photos are separate shots of the same scene, with differences in framing, expression, focus, or clarity, so they should be compared before cleanup.",
        linkLabel: "Learn about similar photos",
      },
      faqTitle: "Duplicate Photo Cleaner FAQ",
      faqs: [
        ["Does LessPhoto delete every duplicate automatically?", "No. LessPhoto shows the detected groups and estimated savings before you choose Merge All."],
        ["What happens to favorites and albums?", "Smart Album Inheritance transfers user-album membership and favorite status from removed copies to the kept photo."],
        ["How is this different from similar-photo cleanup?", "Duplicate photos can be merged directly. Similar photos are separate shots whose framing, expression, or quality may differ, so they should be compared first."],
        ["Are my photos uploaded for duplicate detection?", "No. Duplicate-photo analysis is performed on your iPhone."],
      ],
      finalTitle: "Clear duplicate photos first.",
      finalDescription: "Merge matching copies, recover space, then move on to the photos that need a closer look.",
    },
    "similar-photo-cleaner": {
      seoTitle: "iPhone Similar Photo Cleaner | LessPhoto",
      seoDescription: "Find similar photos on iPhone. Keep the best shot and unique perspectives, then review the rest before cleanup.",
      eyebrow: "Similar photo cleaner for iPhone",
      title: "Find Similar Photos on iPhone. Keep the Best.",
      titleAccent: "Similar Photos",
      description: "LessPhoto groups bursts, retakes, and look-alike shots. It marks the best photo, keeps unique perspectives, and preselects the rest for review.",
      variant: "similar",
      stepsTitle: "How It Works",
      steps: [
        ["1", "Review similar groups", "See bursts, retakes, and look-alike shots together."],
        ["2", "Compare suggestions", "View the full frame and check the best-photo and unique-perspective labels."],
        ["3", "Adjust and clean", "Change any selection, then confirm the current batch."],
      ],
      detailsTitle: "Key Features",
      details: [
        { title: "Best photo and unique perspectives", description: "Keep the strongest shot without losing other worthwhile angles." },
        { title: "Original aspect ratios", description: "Portrait, landscape, and square photos stay visually distinct while you compare them." },
        { title: "Switch batches or view all", description: "Review a fresh batch, open every similar group, or start filtering from a chosen point in time." },
        { title: "Processed groups stay out of the way", description: "Kept photos are marked after cleanup so the same group does not keep reappearing." },
      ],
      companion: {
        slug: "duplicate-photo-cleaner",
        title: "Duplicate vs. Similar Photos",
        description: "Duplicate photos are nearly identical copies and can usually be merged directly. Similar photos are separate shots of the same scene, with differences in framing, expression, focus, or clarity, so they should be compared before cleanup.",
        linkLabel: "Learn about duplicate photos",
      },
      faqTitle: "Similar Photo Cleaner FAQ",
      faqs: [
        ["Does LessPhoto delete similar photos automatically?", "No. LessPhoto preselects redundant shots, but you can change the selection and must confirm cleanup."],
        ["What is the difference between similar and duplicate photos?", "Duplicates are matching files or images. Similar photos are separate shots that look alike, such as a short burst or repeated composition."],
        ["What if one group contains many photos?", "You can review the group in smaller, manageable decisions instead of approving one large automatic deletion."],
        ["Are my photos uploaded for comparison?", "No. Similar-photo analysis is performed on your iPhone."],
      ],
      finalTitle: "Compare the whole photo before deleting.",
      finalDescription: "See the framing, keep the right shot, and stay in control of every deletion.",
    },
    "swipe-photo-cleaner": {
      seoTitle: "Swipe Photo Cleaner for iPhone | LessPhoto",
      seoDescription: "Review iPhone photos by month or at random. Swipe unwanted shots to the trash, check the batch, then delete.",
      eyebrow: "Swipe photo cleaner for iPhone",
      title: "Swipe to Clean Up Photos on iPhone.",
      titleAccent: "Swipe to Clean Up",
      description: "Review photos by month or at random. Swipe unwanted shots to the trash, check the batch, then delete when you are ready.",
      variant: "swipe",
      stepsTitle: "How It Works",
      steps: [
        ["1", "Choose a month or random review", "Continue a month you were organizing or rediscover photos in a random batch."],
        ["2", "Swipe unwanted photos up", "Review one photo at a time and move unwanted shots into the trash."],
        ["3", "Check the trash and confirm", "Review the pending deletions, then approve the batch when you are ready."],
      ],
      detailsTitle: "Key Features",
      details: [
        { title: "Continue where you stopped", description: "Monthly cleanup keeps your latest progress ready on the home screen." },
        { title: "Random rediscovery", description: "Unexpected memories make cleanup feel less like a chore." },
        { title: "Organize while you review", description: "Add a photo to an album without leaving the swipe flow." },
      ],
      faqTitle: "Swipe Photo Cleaner FAQ",
      faqs: [
        ["Does a swipe delete the photo immediately?", "No. A swipe records your choice. You can review the selection before confirming deletion."],
        ["Do I need to finish the whole library at once?", "No. You can leave and continue later from your saved progress."],
        ["Can I change a choice before deleting?", "Yes. Review the selected photos before you approve the final cleanup."],
        ["What happens when iCloud Photos is enabled?", "Confirmed deletions follow your Apple Photos library settings and may sync to other devices."],
      ],
      finalTitle: "Turn a crowded camera roll into a few easy decisions.",
      finalDescription: "Swipe a little now, continue later, and only delete when you are ready.",
    },
    "photo-compressor": {
      seoTitle: "iPhone Photo Compressor for Large Photos | LessPhoto",
      seoDescription: "Compress large iPhone photos to HEIC. Choose more detail or a smaller size, then compare the result with the original.",
      eyebrow: "HEIC photo compressor for iPhone",
      title: "Compress Large Photos on iPhone.",
      titleAccent: "Compress Large Photos",
      description: "Create smaller HEIC copies with More Detail or Smaller Size. Compare each result with the original before deciding what to keep.",
      variant: "compression",
      stepsTitle: "How It Works",
      steps: [
        ["1", "Choose large photos", "Open Large Photo Compression in the toolbox and select the photos you want to compress."],
        ["2", "Choose a compression mode", "Select More Detail or Smaller Size."],
        ["3", "Create and compare", "Generate the compressed copies, compare them with the originals, then decide what to keep."],
      ],
      detailsTitle: "Key Features",
      details: [
        { title: "Native HEIC format", description: "Balance visible detail and file size with the high-efficiency format supported by iOS." },
        { title: "Original and compressed side by side", description: "Compare both versions directly instead of searching for the original again." },
      ],
      faqTitle: "Photo Compression FAQ",
      faqs: [
        ["Does compression delete the original automatically?", "No. Compression creates a processed copy so you can review it before deciding whether to remove the original."],
        ["Why does LessPhoto use HEIC?", "HEIC is the high-efficiency image format used by the iPhone camera. It can store a clear photo in less space than older formats such as JPEG."],
        ["Will HEIC compression reduce quality?", "Reducing file size involves a quality tradeoff. LessPhoto prioritizes clarity, shows the estimated savings, and lets you review the result before removing the original."],
        ["Are photos uploaded for compression?", "No. LessPhoto processes photos on your iPhone."],
      ],
      finalTitle: "Keep the photo. Use less space.",
      finalDescription: "Find large photos, preview the savings, and create smaller HEIC copies on your iPhone.",
    },
    "screenshot-cleaner": {
      seoTitle: "iPhone Screenshot Cleaner by Date | LessPhoto",
      seoDescription: "Filter old iPhone screenshots by date. Review screenshots older than three days, one week, or one month, then delete them in batches.",
      eyebrow: "Screenshot cleaner for iPhone",
      title: "Clean Up Old Screenshots on iPhone.",
      titleAccent: "Old Screenshots",
      description: "Filter screenshots older than three days, one week, or one month. Review the results, then delete what you no longer need.",
      variant: "screenshots",
      stepsTitle: "How It Works",
      steps: [
        ["1", "Open Screenshot Cleanup", "See your screenshots together without searching through the whole photo library."],
        ["2", "Choose a date range", "Filter screenshots from three days ago, one week ago, one month ago, or another period."],
        ["3", "Select and delete in batches", "Choose the screenshots you no longer need, then confirm deletion."],
      ],
      detailsTitle: "Key Features",
      details: [
        { title: "Everyday date ranges", description: "Quickly narrow the list to screenshots that are more likely to have expired." },
        { title: "Album Protection", description: "Photos added to a user album or Favorites stay out of the selection and deletion flow when protection is enabled." },
        { title: "Free forever", description: "Screenshot cleanup is free forever." },
      ],
      faqTitle: "Screenshot Cleaner FAQ",
      faqs: [
        ["Can I already find screenshots in Apple Photos?", "Yes. LessPhoto adds a focused cleanup flow with age filters, batch selection, and a clear review step for screenshots you no longer need."],
        ["Does LessPhoto delete screenshots automatically?", "No. You choose the screenshots and confirm deletion through the iOS system flow."],
        ["What happens when iCloud Photos is enabled?", "Confirmed deletions follow your Apple Photos library settings and may sync to other devices."],
        ["Are screenshots uploaded for analysis?", "No. Screenshot organization and review happen on your iPhone."],
      ],
      finalTitle: "Clear the screenshots you no longer need.",
      finalDescription: "Filter by age, review in batches, and keep the screenshots that still matter.",
    },
  },
  "zh-hans": {
    "duplicate-photo-cleaner": {
      seoTitle: "iPhone 重复照片清理：一键合并｜LessPhoto",
      seoDescription: "在 iPhone 本机查找内容高度一致的重复照片，逐组合并或一键清理全部重复项，并通过相簿智能继承保留用户相簿和收藏状态。",
      eyebrow: "iPhone 重复照片清理",
      title: "清理 iPhone 重复照片，一键合并。",
      titleAccent: "重复照片",
      description: "LessPhoto 在 iPhone 本机查找内容高度一致的重复照片。你可以逐组合并，也可以一键清理全部重复项。保留照片会自动继承被删除照片所在的用户相簿和收藏状态。",
      variant: "duplicates",
      stepsTitle: "使用步骤",
      steps: [
        ["1", "查看重复照片分组", "进入重复照片功能，查看内容高度一致的照片分组。"],
        ["2", "选择合并方式", "逐组合并，或一键合并全部重复项。"],
        ["3", "确认清理", "LessPhoto 保留质量更好的照片，并完成相簿智能继承。"],
      ],
      detailsTitle: "功能亮点",
      details: [
        { title: "首创相簿智能继承", description: "被删除照片所在的用户相簿和收藏状态，会自动转移给质量更好的保留照片。" },
        { title: "永久免费", description: "重复照片清理功能永久免费。" },
      ],
      companion: {
        slug: "similar-photo-cleaner",
        title: "重复照片与相似照片有什么不同？",
        description: "重复照片是内容几乎一致的副本，通常可以直接合并。相似照片是同一场景下的不同拍摄，构图、表情、焦点或清晰度可能不同，需要对比后再选择。",
        linkLabel: "了解相似照片",
      },
      faqTitle: "重复照片清理 FAQ",
      faqs: [
        ["LessPhoto 会自动删除全部重复照片吗？", "不会。LessPhoto 会先展示识别结果和预计节省空间，再由你选择是否合并全部。"],
        ["收藏状态和相簿信息会保留吗？", "会。相簿智能继承会把被删除照片所在的用户相簿和收藏状态转移给保留照片。"],
        ["重复照片和相似照片有什么区别？", "重复照片可以直接合并；相似照片是分别拍摄的画面，构图、表情或清晰度可能不同，需要先对比。"],
        ["识别重复照片时会上传吗？", "不会。重复照片分析在 iPhone 本机完成。"],
      ],
      finalTitle: "先清理重复照片。",
      finalDescription: "合并相同副本，释放空间，再处理需要仔细比较的相似照片。",
    },
    "similar-photo-cleaner": {
      seoTitle: "iPhone 相似照片清理：查找、对比与删除｜LessPhoto",
      seoDescription: "在 iPhone 本机查找连拍、重拍和构图接近的照片，智能保留最佳照片与特色视角，调整勾选后再清理当前批次。",
      eyebrow: "iPhone 相似照片清理",
      title: "查找 iPhone 相似照片，只留更好的。",
      titleAccent: "iPhone 相似照片",
      description: "LessPhoto 在 iPhone 本机找出连拍、重拍或构图接近的照片。智能选择会默认保留一张最佳照片和部分特色视角，并自动勾选其余冗余照片，供你调整后清理。",
      variant: "similar",
      stepsTitle: "使用步骤",
      steps: [
        ["1", "查看相似照片分组", "进入相似照片功能，查看连拍、重拍和构图接近的照片。"],
        ["2", "对比照片与智能建议", "查看完整画面，并检查最佳照片和特色视角标签。"],
        ["3", "调整并确认清理", "修改保留项和待删除项，然后清理当前批次。"],
      ],
      detailsTitle: "功能亮点",
      details: [
        { title: "最佳照片与特色视角", description: "不只保留一张最佳照片，也能留下值得保留的不同视角。" },
        { title: "按原始画幅展示", description: "横图、竖图和方图保持原始比例，照片方向一眼可见。" },
        { title: "换一批或查看全部", description: "可以换一批、查看全部相似照片，也可以从任意时间点开始筛选。" },
        { title: "避免重复出现", description: "完成清理后会标记保留照片，避免相同分组下次再次出现。" },
      ],
      companion: {
        slug: "duplicate-photo-cleaner",
        title: "重复照片与相似照片有什么不同？",
        description: "重复照片是内容几乎一致的副本，通常可以直接合并。相似照片是同一场景下的不同拍摄，构图、表情、焦点或清晰度可能不同，需要对比后再选择。",
        linkLabel: "了解重复照片",
      },
      faqTitle: "相似照片清理 FAQ",
      faqs: [
        ["LessPhoto 会自动删除相似照片吗？", "不会。LessPhoto 会自动勾选冗余照片，但你可以修改勾选，并需要确认后才会清理。"],
        ["相似照片和重复照片有什么区别？", "重复照片是匹配的文件或图像；相似照片是多张独立拍摄、但画面接近的照片。"],
        ["一组相似照片很多怎么办？", "可以分步处理，而不是一次同意删除整组照片。"],
        ["对比照片时会上传吗？", "不会。相似照片分析在 iPhone 本机完成。"],
      ],
      finalTitle: "看完整照片，再决定删除。",
      finalDescription: "看清构图，留下合适的照片，每一次删除都由你决定。",
    },
    "swipe-photo-cleaner": {
      seoTitle: "iPhone 滑动删除照片：按月份或随机回顾｜LessPhoto",
      seoDescription: "按月份或随机回顾 iPhone 照片，上滑将不需要的照片加入回收站，集中检查后再确认一键删除。",
      eyebrow: "iPhone 滑动照片清理",
      title: "在 iPhone 上滑动删除照片。",
      titleAccent: "滑动删除",
      description: "按月份或随机回顾照片，轻轻上滑，将不需要的照片加入回收站。完成一批后，可以集中检查并一键删除。",
      variant: "swipe",
      stepsTitle: "使用步骤",
      steps: [
        ["1", "选择月份或随机回顾", "继续整理某个月份，或随机回顾一批照片。"],
        ["2", "上滑不需要的照片", "逐张回顾，将不需要的照片上滑至回收站。"],
        ["3", "检查回收站并确认", "查看待删除照片，准备好后再一键删除。"],
      ],
      detailsTitle: "功能亮点",
      details: [
        { title: "保留整理进度", description: "按月份整理时，首页会保留上次进度，方便继续。" },
        { title: "随机回顾", description: "随机遇见旧照片，让整理过程多一点发现感。" },
        { title: "随时分类到相簿", description: "回顾照片时，可以直接将照片加入相簿。" },
      ],
      faqTitle: "滑动照片清理 FAQ",
      faqs: [
        ["滑动一次就会删除照片吗？", "不会。滑动只会记录你的选择，最后仍可以检查并确认。"],
        ["需要一次整理完全部照片吗？", "不需要。你可以随时离开，之后再继续。"],
        ["删除前可以改变选择吗？", "可以。在最终清理前检查已选照片。"],
        ["开启 iCloud 照片后会怎样？", "确认删除后，操作会遵循 Apple 照片库的设置，并可能同步到其他设备。"],
      ],
      finalTitle: "把拥挤的照片库，变成几个简单决定。",
      finalDescription: "今天滑一点，下次再继续，准备好时才删除。",
    },
    "photo-compressor": {
      seoTitle: "iPhone 照片压缩：HEIC 大图压缩与对比｜LessPhoto",
      seoDescription: "自动找出 iPhone 中占空间的大图，选择保持高清细节或更省空间，生成 HEIC 副本并与原图直接对比。",
      eyebrow: "iPhone HEIC 照片压缩",
      title: "在 iPhone 上压缩大照片。",
      titleAccent: "压缩大照片",
      description: "LessPhoto 自动找出 iPhone 中占用空间较大的照片，并将其压缩为 iOS 原生的 HEIC 格式。压缩完成后，可以直接对比原图与压缩图，再决定是否删除原图。",
      variant: "compression",
      stepsTitle: "使用步骤",
      steps: [
        ["1", "选择需要压缩的大图", "进入「工具箱－大照片压缩」，选择需要处理的照片。"],
        ["2", "选择压缩模式", "选择「保持高清细节」或「更省空间」。"],
        ["3", "生成并对比", "生成压缩副本，与原图对比后再决定保留哪个版本。"],
      ],
      detailsTitle: "功能亮点",
      details: [
        { title: "iOS 原生 HEIC", description: "使用 iOS 原生支持的高效格式，在画面细节与文件体积之间取得更好的平衡。" },
        { title: "原图与压缩图直接对比", description: "压缩后无需重新查找原图，可以直接比较两个版本。" },
      ],
      faqTitle: "照片压缩 FAQ",
      faqs: [
        ["压缩会自动删除原文件吗？", "不会。压缩会生成处理后的副本，你可以检查后再决定是否删除原文件。"],
        ["为什么使用 HEIC？", "HEIC 是 iPhone 相机使用的高效图像格式。与 JPEG 等较旧格式相比，它通常能用更小体积保存清晰照片。"],
        ["HEIC 压缩会影响画质吗？", "减小文件体积会在容量和画质之间取舍。LessPhoto 优先保留清晰度，并让你在移除原图前检查压缩结果。"],
        ["压缩照片时会上传吗？", "不会。LessPhoto 在 iPhone 本机处理照片。"],
      ],
      finalTitle: "保留照片，少占空间。",
      finalDescription: "找出大图，预估节省容量，在 iPhone 本机生成更小的 HEIC 副本。",
    },
    "screenshot-cleaner": {
      seoTitle: "iPhone 截图清理：按日期筛选并批量删除｜LessPhoto",
      seoDescription: "筛选 iPhone 中 3 天前、1 周前或 1 个月前的截图，批量选择不再需要的内容，再统一确认删除。",
      eyebrow: "iPhone 截图清理",
      title: "在 iPhone 上按日期清理旧截图。",
      titleAccent: "按日期清理旧截图",
      description: "LessPhoto 提供 3 天前、1 周前、1 个月前等日期范围，帮助你快速筛选较早的截图。批量选择不再需要的内容后，再统一确认删除。",
      variant: "screenshots",
      stepsTitle: "使用步骤",
      steps: [
        ["1", "进入截图清理", "集中查看截图，无需在整个照片库中翻找。"],
        ["2", "选择日期范围", "筛选 3 天前、1 周前、1 个月前或其他时间范围的截图。"],
        ["3", "批量选择并删除", "选择不再需要的截图，然后统一确认删除。"],
      ],
      detailsTitle: "功能亮点",
      details: [
        { title: "贴近日常的日期范围", description: "快速定位更可能已经失去用途的旧截图。" },
        { title: "相簿保护", description: "开启后，加入用户相簿或个人收藏的照片不会被选中或删除。" },
        { title: "永久免费", description: "截图清理功能永久免费。" },
      ],
      faqTitle: "截图清理 FAQ",
      faqs: [
        ["Apple 照片本身也能找到截图吗？", "可以。LessPhoto 进一步提供时间筛选、批量选择和清晰的确认流程，更适合集中清理不再需要的截图。"],
        ["LessPhoto 会自动删除截图吗？", "不会。截图由你选择，并通过 iOS 系统流程确认删除。"],
        ["开启 iCloud 照片后会怎样？", "确认删除后，操作会遵循 Apple 照片库设置，并可能同步到其他设备。"],
        ["整理截图时会上传吗？", "不会。截图分类与检查都在 iPhone 本机完成。"],
      ],
      finalTitle: "清掉已经不再需要的截图。",
      finalDescription: "按时间筛选，批量检查，留下仍然有用的截图。",
    },
  },
  "zh-hant": {
    "duplicate-photo-cleaner": {
      seoTitle: "iPhone 重複相片整理：一鍵合併｜LessPhoto",
      seoDescription: "在 iPhone 本機找出內容高度一致的重複相片，逐組合併或一鍵整理全部重複項目，並透過相簿智慧繼承保留使用者相簿和喜好項目狀態。",
      eyebrow: "iPhone 重複相片整理",
      title: "清理 iPhone 重複相片，一鍵合併。",
      titleAccent: "重複相片",
      description: "LessPhoto 在 iPhone 本機找出內容高度一致的重複相片。你可以逐組合併，也可以一鍵整理全部重複項目。保留相片會自動繼承被刪除相片所在的使用者相簿和喜好項目狀態。",
      variant: "duplicates",
      stepsTitle: "使用步驟",
      steps: [
        ["1", "查看重複相片群組", "進入重複相片功能，查看內容高度一致的相片群組。"],
        ["2", "選擇合併方式", "逐組合併，或一鍵合併全部重複項目。"],
        ["3", "確認整理", "LessPhoto 保留品質更好的相片，並完成相簿智慧繼承。"],
      ],
      detailsTitle: "功能亮點",
      details: [
        { title: "首創相簿智慧繼承", description: "被刪除相片所在的使用者相簿和喜好項目狀態，會自動轉移給品質更好的保留相片。" },
        { title: "永久免費", description: "重複相片整理功能永久免費。" },
      ],
      companion: {
        slug: "similar-photo-cleaner",
        title: "重複相片與相似相片有什麼不同？",
        description: "重複相片是內容幾乎一致的副本，通常可以直接合併。相似相片是同一場景下的不同拍攝，構圖、表情、焦點或清晰度可能不同，需要比較後再選擇。",
        linkLabel: "了解相似相片",
      },
      faqTitle: "重複相片整理 FAQ",
      faqs: [
        ["LessPhoto 會自動刪除全部重複相片嗎？", "不會。LessPhoto 會先顯示識別結果和預計節省空間，再由你選擇是否合併全部。"],
        ["喜好項目狀態和相簿資訊會保留嗎？", "會。相簿智慧繼承會把被刪除相片所在的使用者相簿和喜好項目狀態轉移給保留相片。"],
        ["重複相片和相似相片有什麼分別？", "重複相片可以直接合併；相似相片是分別拍攝的畫面，構圖、表情或清晰度可能不同，需要先比較。"],
        ["識別重複相片時會上傳嗎？", "不會。重複相片分析在 iPhone 本機完成。"],
      ],
      finalTitle: "先整理重複相片。",
      finalDescription: "合併相同副本，釋放空間，再處理需要仔細比較的相似相片。",
    },
    "similar-photo-cleaner": {
      seoTitle: "iPhone 相似相片整理：最佳相片與特色視角｜LessPhoto",
      seoDescription: "在 iPhone 本機找出連拍、重拍和構圖接近的相片，智慧保留最佳相片與特色視角，調整勾選後再整理目前批次。",
      eyebrow: "iPhone 相似相片整理",
      title: "尋找 iPhone 相似相片，只留更好的。",
      titleAccent: "iPhone 相似相片",
      description: "LessPhoto 在 iPhone 本機找出連拍、重拍或構圖接近的相片。智慧選擇會預設保留一張最佳相片和部分特色視角，並自動勾選其餘冗餘相片，供你調整後整理。",
      variant: "similar",
      stepsTitle: "使用步驟",
      steps: [
        ["1", "查看相似相片群組", "進入相似相片功能，查看連拍、重拍和構圖接近的相片。"],
        ["2", "比較相片與智慧建議", "查看完整畫面，並檢查最佳相片和特色視角標籤。"],
        ["3", "調整並確認整理", "修改保留項目和待刪除項目，然後整理目前批次。"],
      ],
      detailsTitle: "功能亮點",
      details: [
        { title: "最佳相片與特色視角", description: "不只保留一張最佳相片，也能留下值得保留的不同視角。" },
        { title: "按原始畫幅顯示", description: "橫圖、直圖和方圖保持原始比例，相片方向一眼可見。" },
        { title: "換一批或查看全部", description: "可以換一批、查看全部相似相片，也可以從任意時間點開始篩選。" },
        { title: "避免重複出現", description: "完成整理後會標記保留相片，避免相同群組下次再次出現。" },
      ],
      companion: {
        slug: "duplicate-photo-cleaner",
        title: "重複相片與相似相片有什麼不同？",
        description: "重複相片是內容幾乎一致的副本，通常可以直接合併。相似相片是同一場景下的不同拍攝，構圖、表情、焦點或清晰度可能不同，需要比較後再選擇。",
        linkLabel: "了解重複相片",
      },
      faqTitle: "相似相片整理 FAQ",
      faqs: [
        ["LessPhoto 會自動刪除相似相片嗎？", "不會。LessPhoto 會自動勾選冗餘相片，但你可以修改勾選，並需要確認後才會整理。"],
        ["相似相片和重複相片有什麼分別？", "重複相片是匹配的檔案或圖像；相似相片是多張獨立拍攝、但畫面接近的相片。"],
        ["一組相似相片很多怎麼辦？", "可以分步處理，而不是一次同意刪除整組相片。"],
        ["比較相片時會上傳嗎？", "不會。相似相片分析在 iPhone 本機完成。"],
      ],
      finalTitle: "看完整相片，再決定刪除。",
      finalDescription: "看清構圖，留下合適的相片，每一次刪除都由你決定。",
    },
    "swipe-photo-cleaner": {
      seoTitle: "iPhone 滑動刪除相片：按月份或隨機回顧｜LessPhoto",
      seoDescription: "按月份或隨機回顧 iPhone 相片，上滑將不需要的相片加入回收站，集中檢查後再確認一鍵刪除。",
      eyebrow: "iPhone 滑動相片整理",
      title: "在 iPhone 上滑動刪除相片。",
      titleAccent: "滑動刪除",
      description: "按月份或隨機回顧相片，輕輕上滑，將不需要的相片加入回收站。完成一批後，可以集中檢查並一鍵刪除。",
      variant: "swipe",
      stepsTitle: "使用步驟",
      steps: [
        ["1", "選擇月份或隨機回顧", "繼續整理某個月份，或隨機回顧一批相片。"],
        ["2", "上滑不需要的相片", "逐張回顧，將不需要的相片上滑至回收站。"],
        ["3", "檢查回收站並確認", "查看待刪除相片，準備好後再一鍵刪除。"],
      ],
      detailsTitle: "功能亮點",
      details: [
        { title: "保留整理進度", description: "按月份整理時，首頁會保留上次進度，方便繼續。" },
        { title: "隨機回顧", description: "隨機遇見舊相片，讓整理過程多一點發現感。" },
        { title: "隨時分類到相簿", description: "回顧相片時，可以直接將相片加入相簿。" },
      ],
      faqTitle: "滑動相片整理 FAQ",
      faqs: [
        ["滑動一次就會刪除相片嗎？", "不會。滑動只會記錄你的選擇，最後仍可以檢查並確認。"],
        ["需要一次整理完全部相片嗎？", "不需要。你可以隨時離開，之後再繼續。"],
        ["刪除前可以改變選擇嗎？", "可以。在最終整理前檢查已選相片。"],
        ["開啟 iCloud 相片後會怎樣？", "確認刪除後，操作會遵循 Apple 相片庫的設定，並可能同步到其他裝置。"],
      ],
      finalTitle: "把擁擠的相片庫，變成幾個簡單決定。",
      finalDescription: "今天滑一點，下次再繼續，準備好時才刪除。",
    },
    "photo-compressor": {
      seoTitle: "iPhone 相片壓縮：HEIC 大圖壓縮與比較｜LessPhoto",
      seoDescription: "自動找出 iPhone 中佔空間的大圖，選擇保持高清細節或更省空間，產生 HEIC 副本並與原圖直接比較。",
      eyebrow: "iPhone HEIC 相片壓縮",
      title: "在 iPhone 上壓縮大相片。",
      titleAccent: "壓縮大相片",
      description: "LessPhoto 自動找出 iPhone 中佔用空間較大的相片，並將其壓縮為 iOS 原生的 HEIC 格式。壓縮完成後，可以直接比較原圖與壓縮圖，再決定是否刪除原圖。",
      variant: "compression",
      stepsTitle: "使用步驟",
      steps: [
        ["1", "選擇需要壓縮的大圖", "進入「工具箱－大相片壓縮」，選擇需要處理的相片。"],
        ["2", "選擇壓縮模式", "選擇「保持高清細節」或「更省空間」。"],
        ["3", "產生並比較", "產生壓縮副本，與原圖比較後再決定保留哪個版本。"],
      ],
      detailsTitle: "功能亮點",
      details: [
        { title: "iOS 原生 HEIC", description: "使用 iOS 原生支援的高效格式，在畫面細節與檔案容量之間取得更好的平衡。" },
        { title: "原圖與壓縮圖直接比較", description: "壓縮後無需重新尋找原圖，可以直接比較兩個版本。" },
      ],
      faqTitle: "相片壓縮 FAQ",
      faqs: [
        ["壓縮會自動刪除原檔案嗎？", "不會。壓縮會產生處理後的副本，你可以檢查後再決定是否刪除原檔案。"],
        ["為什麼使用 HEIC？", "HEIC 是 iPhone 相機使用的高效影像格式。與 JPEG 等較舊格式相比，它通常能用較小容量保存清晰相片。"],
        ["HEIC 壓縮會影響畫質嗎？", "減小檔案容量會在容量和畫質之間取捨。LessPhoto 優先保留清晰度，並讓你在移除原圖前檢查壓縮結果。"],
        ["壓縮相片時會上傳嗎？", "不會。LessPhoto 在 iPhone 本機處理相片。"],
      ],
      finalTitle: "保留相片，少佔空間。",
      finalDescription: "找出大圖，預估節省容量，在 iPhone 本機產生更小的 HEIC 副本。",
    },
    "screenshot-cleaner": {
      seoTitle: "iPhone 截圖整理：按日期篩選並批次刪除｜LessPhoto",
      seoDescription: "篩選 iPhone 中 3 天前、1 週前或 1 個月前的截圖，批次選擇不再需要的內容，再統一確認刪除。",
      eyebrow: "iPhone 截圖整理",
      title: "在 iPhone 上按日期整理舊截圖。",
      titleAccent: "按日期整理舊截圖",
      description: "LessPhoto 提供 3 天前、1 週前、1 個月前等日期範圍，協助你快速篩選較早的截圖。批次選擇不再需要的內容後，再統一確認刪除。",
      variant: "screenshots",
      stepsTitle: "使用步驟",
      steps: [
        ["1", "進入截圖整理", "集中查看截圖，無需在整個相片庫中翻找。"],
        ["2", "選擇日期範圍", "篩選 3 天前、1 週前、1 個月前或其他時間範圍的截圖。"],
        ["3", "批次選擇並刪除", "選擇不再需要的截圖，然後統一確認刪除。"],
      ],
      detailsTitle: "功能亮點",
      details: [
        { title: "貼近日常的日期範圍", description: "快速定位更可能已經失去用途的舊截圖。" },
        { title: "相簿保護", description: "開啟後，加入使用者相簿或喜好項目的相片不會被選中或刪除。" },
        { title: "永久免費", description: "截圖整理功能永久免費。" },
      ],
      faqTitle: "截圖整理 FAQ",
      faqs: [
        ["Apple 相片本身也能找到截圖嗎？", "可以。LessPhoto 進一步提供時間篩選、批次選擇和清楚的確認流程，更適合集中整理不再需要的截圖。"],
        ["LessPhoto 會自動刪除截圖嗎？", "不會。截圖由你選擇，並透過 iOS 系統流程確認刪除。"],
        ["開啟 iCloud 相片後會怎樣？", "確認刪除後，操作會遵循 Apple 相片庫設定，並可能同步到其他裝置。"],
        ["整理截圖時會上傳嗎？", "不會。截圖分類與檢查都在 iPhone 本機完成。"],
      ],
      finalTitle: "清掉已經不再需要的截圖。",
      finalDescription: "按時間篩選，批次檢查，留下仍然有用的截圖。",
    },
  },
};
