import type { Locale } from "./site";

export type GuideSlug =
  | "iphone-storage-full"
  | "storage-cost-calculator"
  | "icloud-photo-deletion"
  | "optimize-iphone-storage"
  | "similar-vs-duplicate-photos";

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

export type GuideArticle = {
  slug: GuideSlug;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  kind?: "calculator";
  sections: GuideSection[];
};

export const guideArticles: Record<Locale, GuideArticle[]> = {
  en: [
    {
      slug: "iphone-storage-full",
      title: "iPhone storage full: clean up or buy more iCloud?",
      description: "A practical decision guide for choosing between deleting clutter, optimizing photos, upgrading iCloud, and buying more device storage next time.",
      category: "Buying Guide",
      readingTime: "6 min read",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      sections: [
        { heading: "Start by finding the actual limit", paragraphs: ["Device storage and iCloud storage are separate. Open Settings > General > iPhone Storage to inspect the phone, then Settings > your name > iCloud to inspect cloud usage. Fix the one that is actually full."], bullets: ["Device full: apps may fail to update, the camera may stop saving, and the phone has less working room.", "iCloud full: backups and photo syncing may pause even when the phone still has free space."] },
        { heading: "Use the least expensive reversible step first", paragraphs: ["Review large videos, screenshots, downloads, exact duplicates, and photos you already know you do not need. If the library still matters but local space is tight, iCloud Photos with Optimize Storage can reduce local use without removing the library from view."], callout: "Do not delete photos just to remove their local copy while iCloud Photos is on. A deletion syncs to every device using that library." },
        { heading: "When paying is reasonable", paragraphs: ["iCloud+ is useful when you want syncing, backup capacity, and access across devices. More built-in iPhone storage is useful when you need originals, large apps, or offline video available without a connection. Many people benefit from both; they solve different constraints."] },
      ],
    },
    {
      slug: "storage-cost-calculator",
      title: "iCloud vs iPhone storage cost calculator",
      description: "Compare the long-term subscription cost of iCloud+ with the one-time price of additional iPhone storage, without pretending the two products do the same job.",
      category: "Buying Guide",
      readingTime: "3 min read",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      kind: "calculator",
      sections: [
        { heading: "What the result means", paragraphs: ["The calculator compares cash cost only. Local storage is fast, offline capacity tied to one phone. iCloud is recurring cloud capacity used for syncing, backups, files, and shared access. A lower number does not automatically make one choice better."] },
        { heading: "A useful way to decide", paragraphs: ["Use the time horizon you normally keep a phone. Enter the real storage-upgrade price difference shown when you buy, then compare it with the iCloud plan you would actually need. Finally, consider whether cleanup or compression could delay either purchase."], callout: "iCloud+ prices are regional and can change. The calculator labels when its presets were checked and lets you edit the device upgrade cost." },
      ],
    },
    {
      slug: "icloud-photo-deletion",
      title: "Does deleting an iPhone photo delete it from iCloud?",
      description: "Understand where a deleted photo goes, which devices are affected, and how long you normally have to recover it.",
      category: "Q&A",
      readingTime: "4 min read",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      sections: [
        { heading: "The short answer", paragraphs: ["When iCloud Photos is enabled, deleting a photo or video on one device also deletes it from the other devices using the same Apple Account and iCloud Photos library. iCloud Photos is synchronization, not a separate archive that keeps every deleted item forever."] },
        { heading: "Recently Deleted is the safety window", paragraphs: ["Deleted items normally remain in Recently Deleted for 30 days before permanent removal. You can restore them during that period, or delete them immediately to recover cloud space sooner."], callout: "Before a large cleanup, make a separate copy of irreplaceable photos. A second device showing the same iCloud library is not an independent backup." },
        { heading: "Check before confirming a cleanup", paragraphs: ["Confirm that syncing is complete, inspect selected items at full size, and pay special attention to shared libraries. Cleanup apps can help you review candidates, but the final deletion still changes the Apple Photos library you approved."] },
      ],
    },
    {
      slug: "optimize-iphone-storage",
      title: "Does Optimize iPhone Storage delete your original photos?",
      description: "Learn where the full-resolution originals stay, what remains on the phone, and when optimization is the right answer.",
      category: "Q&A",
      readingTime: "4 min read",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      sections: [
        { heading: "No—the originals stay in iCloud", paragraphs: ["With iCloud Photos and Optimize Storage enabled, full-resolution originals remain in iCloud while the iPhone can keep smaller space-saving versions. The phone downloads an original when it is needed, subject to network access and available space."] },
        { heading: "Optimization is not cleanup", paragraphs: ["Optimization reduces local pressure, but it does not reduce the size of the iCloud photo library. If iCloud itself is full, you still need to remove unneeded content, reduce file sizes, or change the iCloud+ plan."] },
        { heading: "When it fits", paragraphs: ["It works well for people who want the whole library visible and are comfortable depending on iCloud for full-resolution originals. Keep a separate backup if the photos are irreplaceable, and choose Download and Keep Originals before going offline for an extended period."] },
      ],
    },
    {
      slug: "similar-vs-duplicate-photos",
      title: "Similar vs duplicate photos: which should you clean first?",
      description: "See the difference between exact duplicates and visually similar shots, and use the safest workflow for each group.",
      category: "How-to",
      readingTime: "5 min read",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      sections: [
        { heading: "Duplicates are the simpler category", paragraphs: ["Apple Photos can identify duplicate photos and videos and offer to merge them. This is a strong first step because the items represent the same or substantially matching content, and the system preserves relevant information in the merged result."] },
        { heading: "Similar photos require judgment", paragraphs: ["A burst, repeated portrait, or several frames of the same scene may look alike while preserving different expressions, focus, motion, or composition. There is no universally correct image to keep. Compare them as a group and zoom in before deciding."] },
        { heading: "A safe order", paragraphs: ["Start with exact duplicates, then obvious screenshots and failed shots, then review similar groups. Leave emotionally important events until last. Tools such as LessPhoto can make grouping and comparison faster, but the keep-or-delete decision should remain yours."], callout: "If Apple Photos does not show Duplicates yet, the phone may still be indexing the library. Detection can require the device to be locked and connected to power." },
      ],
    },
  ],
  "zh-hans": [
    {
      slug: "iphone-storage-full",
      title: "iPhone 存储空间不足：清理还是购买 iCloud？",
      description: "先判断真正不足的是设备容量还是 iCloud，再决定清理照片、开启优化储存空间或升级方案。",
      category: "选购指南",
      readingTime: "约 6 分钟",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      sections: [
        { heading: "先确认满的是哪一个空间", paragraphs: ["iPhone 设备存储空间和 iCloud 储存空间是两套容量。前往“设置 > 通用 > iPhone 储存空间”查看本机使用量；前往“设置 > 你的姓名 > iCloud”查看云端使用量。先解决真正达到上限的那一个。"], bullets: ["设备空间不足：相机可能无法继续保存，App 更新也可能受影响。", "iCloud 空间不足：备份和照片同步可能暂停，但手机本身仍可能有剩余容量。"] },
        { heading: "先做成本最低、可以反悔的处理", paragraphs: ["先检查大型视频、截屏、下载内容、重复项目和明确不需要的照片。如果照片仍想保留、只是本机空间紧张，可以考虑开启 iCloud 照片的“优化储存空间”。"], callout: "开启 iCloud 照片时，不要通过“删除照片”来达到只移除本机副本的目的；删除会同步到使用同一图库的设备。" },
        { heading: "什么时候值得付费", paragraphs: ["需要跨设备同步、云端照片和备份容量时，iCloud+ 更合适；需要离线保存原片、大型 App 或大量本地视频时，更大的 iPhone 设备容量更有价值。两者解决的问题不同，并不是简单的二选一。"] },
      ],
    },
    {
      slug: "storage-cost-calculator",
      title: "iCloud 与 iPhone 容量成本计算器",
      description: "比较 iCloud+ 的长期订阅成本和 iPhone 容量升级的一次性差价，同时理解两者并不能完全互相替代。",
      category: "选购指南",
      readingTime: "约 3 分钟",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      kind: "calculator",
      sections: [
        { heading: "这个结果应该怎么看", paragraphs: ["计算器只比较现金成本。本地容量是跟随一台 iPhone、无需网络即可使用的高速空间；iCloud 是持续付费的云端容量，用于同步、备份、文件和跨设备访问。数值更低，不代表一定更适合你。"] },
        { heading: "更实用的比较方式", paragraphs: ["选择你通常持有一台 iPhone 的年限，填入购买时页面显示的真实容量差价，再选择你实际需要的 iCloud+ 方案。最后再判断，清理无用照片或压缩大文件是否能推迟其中一项支出。"], callout: "iCloud+ 会因地区定价，也可能调整价格。页面会标明预设价格的核对日期；iPhone 容量差价则始终允许自行修改。" },
      ],
    },
    {
      slug: "icloud-photo-deletion",
      title: "删除 iPhone 照片，会同步删除 iCloud 吗？",
      description: "了解照片会从哪些设备消失、会在“最近删除”保留多久，以及大批清理前应当检查什么。",
      category: "问题解答",
      readingTime: "约 4 分钟",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      sections: [
        { heading: "简短答案", paragraphs: ["开启 iCloud 照片后，在一台设备删除照片或视频，也会从登录同一 Apple 账户并使用同一 iCloud 照片图库的其他设备删除。iCloud 照片的核心是同步，不是会永久保留所有已删除内容的独立存档。"] },
        { heading: "“最近删除”是主要的反悔窗口", paragraphs: ["删除的项目通常会在“最近删除”中保留 30 天，之后才会永久移除。在这段时间内可以恢复，也可以主动永久删除以更快释放云端空间。"], callout: "大批清理前，请给不可替代的照片留一份独立备份。另一台显示同一 iCloud 图库的设备，不等于独立备份。" },
        { heading: "确认清理前检查三件事", paragraphs: ["确认同步已经完成；放大查看被选中的照片；如果使用共享图库，额外确认内容归属。整理工具可以帮助筛选候选项，但最终删除仍会改变你确认过的 Apple 照片图库。"] },
      ],
    },
    {
      slug: "optimize-iphone-storage",
      title: "“优化 iPhone 储存空间”会删除照片原图吗？",
      description: "了解全分辨率原片保存在哪里、手机中留下什么，以及它为什么不能解决 iCloud 本身已满的问题。",
      category: "问题解答",
      readingTime: "约 4 分钟",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      sections: [
        { heading: "不会，原片会保存在 iCloud", paragraphs: ["同时开启 iCloud 照片和“优化储存空间”后，全分辨率照片和视频原片保存在 iCloud，iPhone 可以保留更节省空间的版本。查看或编辑时，系统会根据网络和剩余空间下载所需原片。"] },
        { heading: "优化不等于清理", paragraphs: ["优化主要缓解 iPhone 本机容量压力，并不会缩小 iCloud 照片图库。如果满的是 iCloud，仍然需要删除不需要的内容、减小文件体积，或更换 iCloud+ 方案。"] },
        { heading: "什么情况下适合开启", paragraphs: ["如果你希望整个图库始终可见，也能接受完整原片依赖 iCloud，优化储存空间通常很有帮助。重要照片仍建议另做备份；准备长时间离线前，可以提前选择“下载并保留原片”。"] },
      ],
    },
    {
      slug: "similar-vs-duplicate-photos",
      title: "相似照片和重复照片，应该先清理哪种？",
      description: "重复项目通常可以先处理；相似照片则需要比较表情、清晰度和构图后再决定保留哪张。",
      category: "使用指南",
      readingTime: "约 5 分钟",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      sections: [
        { heading: "重复照片更适合先处理", paragraphs: ["Apple 照片可以识别重复照片和视频，并提供“合并”操作。由于它们代表相同或高度一致的内容，通常比相似照片更容易判断，也适合作为第一次清理的入口。"] },
        { heading: "相似照片仍然需要人的判断", paragraphs: ["连拍、人像重复拍摄或同一场景的多个画面，看起来接近，但表情、对焦、动作和构图可能不同。并不存在对所有人都正确的“最佳照片”，应当把它们放在同一组中放大比较。"] },
        { heading: "更安全的整理顺序", paragraphs: ["先处理完全重复的内容，再处理明显无用的截屏和失败照片，最后比较相似照片。重要活动和有情感价值的照片留到最后。LessPhoto 可以帮助分组和对比，但保留或删除的决定应当始终由你确认。"], callout: "如果 Apple 照片暂时没有显示“重复项目”，可能仍在为图库建立索引。检测通常需要设备锁定并连接电源。" },
      ],
    },
  ],
  "zh-hant": [
    {
      slug: "iphone-storage-full",
      title: "iPhone 儲存空間不足：整理還是購買 iCloud？",
      description: "先判斷不足的是裝置容量還是 iCloud，再決定整理相片、開啟最佳化儲存空間或升級方案。",
      category: "選購指南",
      readingTime: "約 6 分鐘",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      sections: [
        { heading: "先確認哪一個空間已滿", paragraphs: ["iPhone 裝置儲存空間和 iCloud 儲存空間是兩套容量。前往「設定 > 一般 > iPhone 儲存空間」查看本機使用量；前往「設定 > 你的姓名 > iCloud」查看雲端使用量。先處理真正達到上限的一方。"], bullets: ["裝置空間不足：相機可能無法繼續儲存，App 更新也可能受影響。", "iCloud 空間不足：備份和相片同步可能暫停，但手機本身仍可能有剩餘容量。"] },
        { heading: "先做成本最低、可以還原的處理", paragraphs: ["先檢查大型影片、截圖、下載內容、重複項目和確定不需要的相片。如果相片仍想保留、只是本機空間緊張，可以考慮開啟 iCloud 相片的「最佳化儲存空間」。"], callout: "開啟 iCloud 相片時，不要透過刪除來達到只移除本機副本的目的；刪除會同步到使用同一圖庫的裝置。" },
        { heading: "甚麼時候值得付費", paragraphs: ["需要跨裝置同步、雲端相片和備份容量時，iCloud+ 較合適；需要離線保存原片、大型 App 或大量本機影片時，較大的 iPhone 裝置容量更有價值。兩者解決的問題並不相同。"] },
      ],
    },
    {
      slug: "storage-cost-calculator",
      title: "iCloud 與 iPhone 容量成本計算器",
      description: "比較 iCloud+ 的長期訂閱成本和 iPhone 容量升級的一次性差價，同時理解兩者不能完全互相取代。",
      category: "選購指南",
      readingTime: "約 3 分鐘",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      kind: "calculator",
      sections: [
        { heading: "如何理解計算結果", paragraphs: ["計算器只比較現金成本。本機容量是跟隨一部 iPhone、無需網絡即可使用的高速空間；iCloud 是持續付費的雲端容量，用於同步、備份、檔案和跨裝置存取。數值較低，不代表一定較適合你。"] },
        { heading: "更實用的比較方式", paragraphs: ["選擇你通常使用一部 iPhone 的年期，填入購買頁顯示的真實容量差價，再選擇實際需要的 iCloud+ 方案。最後判斷整理不需要的相片或壓縮大型檔案，是否能延後其中一項支出。"], callout: "iCloud+ 會因地區定價，也可能調整價格。頁面會標明預設價格的核對日期；iPhone 容量差價則可以自行修改。" },
      ],
    },
    {
      slug: "icloud-photo-deletion",
      title: "刪除 iPhone 相片，會同步刪除 iCloud 嗎？",
      description: "了解相片會從哪些裝置消失、會在「最近刪除」保留多久，以及大量整理前應檢查甚麼。",
      category: "問題解答",
      readingTime: "約 4 分鐘",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      sections: [
        { heading: "簡短答案", paragraphs: ["開啟 iCloud 相片後，在一部裝置刪除相片或影片，也會從登入同一 Apple 帳戶並使用同一 iCloud 相片圖庫的其他裝置刪除。iCloud 相片的核心是同步，不是永久保留所有已刪除內容的獨立存檔。"] },
        { heading: "「最近刪除」是主要的反悔期限", paragraphs: ["刪除的項目通常會在「最近刪除」中保留 30 天，之後才會永久移除。這段時間內可以復原，也可以立即永久刪除以更快釋放雲端空間。"], callout: "大量整理前，請為不可取代的相片保留一份獨立備份。另一部顯示同一 iCloud 圖庫的裝置，不等於獨立備份。" },
        { heading: "確認整理前檢查三件事", paragraphs: ["確認同步已完成；放大查看選中的相片；如果使用共享圖庫，額外確認內容歸屬。整理工具可協助篩選候選項目，但最終刪除仍會改變你確認過的 Apple 相片圖庫。"] },
      ],
    },
    {
      slug: "optimize-iphone-storage",
      title: "「最佳化 iPhone 儲存空間」會刪除相片原檔嗎？",
      description: "了解完整解像度原檔保存在哪裡、手機中留下甚麼，以及它為何不能解決 iCloud 本身已滿。",
      category: "問題解答",
      readingTime: "約 4 分鐘",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      sections: [
        { heading: "不會，原檔會保存在 iCloud", paragraphs: ["同時開啟 iCloud 相片和「最佳化儲存空間」後，完整解像度相片和影片原檔保存在 iCloud，iPhone 可以保留較節省空間的版本。查看或編輯時，系統會按網絡和剩餘空間下載所需原檔。"] },
        { heading: "最佳化不等於整理", paragraphs: ["最佳化主要緩解 iPhone 本機容量壓力，並不會縮小 iCloud 相片圖庫。如果已滿的是 iCloud，仍需要刪除不需要的內容、減小檔案，或更換 iCloud+ 方案。"] },
        { heading: "甚麼情況適合開啟", paragraphs: ["如果你希望整個圖庫一直可見，也能接受完整原檔依賴 iCloud，最佳化儲存空間通常很有幫助。重要相片仍建議另作備份；準備長時間離線前，可以提前選擇下載並保留原檔。"] },
      ],
    },
    {
      slug: "similar-vs-duplicate-photos",
      title: "相似相片和重複相片，應該先整理哪種？",
      description: "重複項目通常可以先處理；相似相片則需要比較表情、清晰度和構圖後再決定保留哪張。",
      category: "使用指南",
      readingTime: "約 5 分鐘",
      publishedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      sections: [
        { heading: "重複相片較適合先處理", paragraphs: ["Apple 相片可以識別重複相片和影片，並提供合併操作。由於它們代表相同或高度一致的內容，通常比相似相片更容易判斷，也適合作為第一次整理的入口。"] },
        { heading: "相似相片仍需要人的判斷", paragraphs: ["連拍、人像重複拍攝或同一場景的多個畫面，看起來接近，但表情、對焦、動作和構圖可能不同。並不存在對所有人都正確的最佳相片，應把它們放在同一組中放大比較。"] },
        { heading: "更安全的整理次序", paragraphs: ["先處理完全重複的內容，再處理明顯無用的截圖和失敗相片，最後比較相似相片。重要活動和有情感價值的內容留到最後。LessPhoto 可以協助分組和比較，但保留或刪除的決定應由你確認。"], callout: "如果 Apple 相片暫時沒有顯示「重複項目」，可能仍在為圖庫建立索引。偵測通常需要裝置鎖定並連接電源。" },
      ],
    },
  ],
};

export const guideNavigation = Object.fromEntries(
  Object.entries(guideArticles).map(([locale, articles]) => [
    locale,
    articles.map((article) => ({
      path: `guides/${article.slug}`,
      label: article.title,
      publishedAt: article.publishedAt,
    })),
  ]),
) as Record<Locale, Array<{ path: string; label: string; publishedAt: string }>>;

export const getGuideArticle = (locale: Locale, slug: string) =>
  guideArticles[locale].find((article) => article.slug === slug);
