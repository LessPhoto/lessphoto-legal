const langMap = {
  CN: "zh-CN",
  HK: "zh-HK",
  TW: "zh-HK",
  default: "en",
};

const copy = {
  en: {
    navHome: "Home",
    navTerms: "Terms of Use",
    navPrivacy: "Privacy Policy",
    navLanguage: "Language",
    heroTitle: "Less is More. Curate Your Photos",
    heroDesc:
      "LessPhoto identifies duplicate or similar photos and keeps the best ones for you. One-tap bulk cleanup of unnecessary screenshots. Instantly free up storage space.",
    download: "Download on App Store",
    langPill: "English",
  },
  "zh-CN": {
    navHome: "首页",
    navTerms: "用户协议",
    navPrivacy: "隐私条款",
    navLanguage: "语言",
    heroTitle: "少即是多，精选你的照片",
    heroDesc: "LessPhoto可识别相似照片，为你保留最佳照片。一键批量清理无用截屏，瞬间释放空间。",
    download: "App Store 下载",
    langPill: "简体中文",
  },
  "zh-HK": {
    navHome: "首頁",
    navTerms: "用戶協議",
    navPrivacy: "隱私條款",
    navLanguage: "語言",
    heroTitle: "少即是多，精選你的照片",
    heroDesc: "LessPhoto 可識別相似照片，為你保留最佳照片。一鍵批量清理無用截圖，瞬間釋放空間。",
    download: "App Store 下載",
    langPill: "繁體中文",
  },
};

const DOC_MAP = {
  terms: {
    en: "./docs/terms-en.md",
    "zh-CN": "./docs/terms-zh-CN.md",
    "zh-HK": "./docs/terms-zh-HK.md",
  },
  privacy: {
    en: "./docs/privacy-en.md",
    "zh-CN": "./docs/privacy-zh-CN.md",
    "zh-HK": "./docs/privacy-zh-HK.md",
  },
};

const state = {
  lang: "en",
  route: "home",
};

const APP_STORE_URL = "https://apps.apple.com/app/id6772085946";

// 全局变量，暴露给测试脚本
let homePage, docPage, menuOverlay, langOverlay, docMarkdown;
window.homePage = homePage;
window.docPage = docPage;
window.menuOverlay = menuOverlay;
window.langOverlay = langOverlay;
const OVERLAY_ANIM_MS = 300;
const overlayTimers = new WeakMap();

function closeOverlay(overlay) {
  if (overlayTimers.has(overlay)) {
    clearTimeout(overlayTimers.get(overlay));
    overlayTimers.delete(overlay);
  }
  if (overlay.classList.contains("hidden")) {
    return;
  }
  overlay.classList.remove("is-open");
  overlay.classList.add("is-closing");
  const timer = setTimeout(() => {
    overlay.classList.add("hidden");
    overlay.classList.remove("is-closing");
    overlayTimers.delete(overlay);
  }, OVERLAY_ANIM_MS);
  overlayTimers.set(overlay, timer);
}

function openOverlay(overlay) {
  console.log('openOverlay called with:', overlay);
  if (!overlay) {
    console.error('overlay is null or undefined');
    return;
  }
  if (overlayTimers.has(overlay)) {
    clearTimeout(overlayTimers.get(overlay));
    overlayTimers.delete(overlay);
  }
  // 先移除hidden类，让面板准备好
  overlay.classList.remove("hidden");
  overlay.classList.remove("is-closing");
  console.log('overlay classes after removing hidden:', overlay.classList);
  // 强制重排，确保面板已经准备好
  void overlay.offsetWidth;
  // 然后添加is-open类，触发动画
  requestAnimationFrame(() => {
    overlay.classList.add("is-open");
    console.log('overlay classes after adding is-open:', overlay.classList);
  });
}

function setRoute(route) {
  // 确保DOM元素已经被获取
  if (!homePage || !docPage) {
    // 尝试重新获取DOM元素
    homePage = document.getElementById("homePage");
    docPage = document.getElementById("docPage");
    if (!homePage || !docPage) {
      return;
    }
  }
  
  state.route = route;
  
  // 更新浏览器地址栏
  if (route === "home") {
    window.history.replaceState({}, "", window.location.pathname);
    homePage.classList.remove("hidden");
    docPage.classList.add("hidden");
    return;
  }

  window.history.replaceState({}, "", `#/${route}`);
  homePage.classList.add("hidden");
  docPage.classList.remove("hidden");
  renderDoc(route);
}

function setLang(lang, persist = true) {
  state.lang = copy[lang] ? lang : "en";
  document.documentElement.lang = state.lang;

  const t = copy[state.lang];
  document.getElementById("heroTitle").textContent = t.heroTitle;
  document.getElementById("heroDesc").textContent = t.heroDesc;
  document.getElementById("downloadBtn").textContent = t.download;
  document.getElementById("menuHomeBtn").textContent = t.navHome;
  document.getElementById("menuTermsBtn").textContent = t.navTerms;
  document.getElementById("menuPrivacyBtn").textContent = t.navPrivacy;
  document.getElementById("menuLanguageLabel").textContent = t.navLanguage;
  document.getElementById("currentLanguagePill").textContent = t.langPill;

  document.querySelectorAll("#langOverlay .menu-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === state.lang);
  });

  if (state.route !== "home") {
    renderDoc(state.route);
  }

  if (persist) {
    localStorage.setItem("lessphoto_lang", state.lang);
    localStorage.setItem("lessphoto_lang_manual", "1");
  }
}

async function renderDoc(route) {
  const lang = state.lang in DOC_MAP[route] ? state.lang : "en";
  const file = DOC_MAP[route][lang];
  try {
    const res = await fetch(file);
    const markdown = await res.text();
    docMarkdown.innerHTML = window.marked.parse(markdown);
  } catch (error) {
    docMarkdown.innerHTML = "<p>Failed to load document.</p>";
  }
}

async function detectLangByIP() {
  try {
    const res = await fetch("https://ipwho.is/");
    if (!res.ok) {
      throw new Error("ipwho request failed");
    }
    const data = await res.json();
    if (data.success === false) {
      throw new Error("ipwho lookup failed");
    }
    const countryCode = (data.country_code || "").toUpperCase();
    return langMap[countryCode] || null;
  } catch (error) {
    return null;
  }
}

function detectLangByBrowser() {
  const languages = navigator.languages && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language || ""];

  for (const language of languages) {
    const normalized = language.toLowerCase();
    if (normalized.startsWith("zh-hant") || normalized.startsWith("zh-hk") || normalized.startsWith("zh-tw")) {
      return "zh-HK";
    }
    if (normalized.startsWith("zh")) {
      return "zh-CN";
    }
  }

  return null;
}

function getInitialLang() {
  const urlParams = new URLSearchParams(window.location.search);
  const queryLang = urlParams.get("lang");
  if (copy[queryLang]) {
    return queryLang;
  }

  const hashQuery = window.location.hash.split("?")[1] || "";
  const hashLang = new URLSearchParams(hashQuery).get("lang");
  if (copy[hashLang]) {
    return hashLang;
  }

  return null;
}

function getInitialRoute() {
  const hashRoute = window.location.hash.replace(/^#\/?/, "").split("?")[0];
  if (hashRoute === "terms" || hashRoute === "privacy") {
    return hashRoute;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const queryRoute = urlParams.get("route");
  if (queryRoute === "terms" || queryRoute === "privacy") {
    return queryRoute;
  }

  return "home";
}

function bindEvents() {
  // 获取DOM元素
  const openMenuBtn = document.getElementById("openMenuBtn");
  const docOpenMenuBtn = document.getElementById("docOpenMenuBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const openLangBtn = document.getElementById("openLangBtn");
  const closeLangBtn = document.getElementById("closeLangBtn");
  const goHomeBtn = document.getElementById("goHomeBtn");
  const docGoHomeBtn = document.getElementById("docGoHomeBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  
  // 使用全局变量，不重新声明
  menuOverlay = document.getElementById("menuOverlay");
  langOverlay = document.getElementById("langOverlay");
  
  console.log('bindEvents - openMenuBtn:', openMenuBtn);
  console.log('bindEvents - menuOverlay:', menuOverlay);
  
  // 绑定事件
  if (openMenuBtn) {
    openMenuBtn.addEventListener("click", () => {
      console.log('openMenuBtn clicked');
      openOverlay(menuOverlay);
    });
  }
  
  if (docOpenMenuBtn) {
    docOpenMenuBtn.addEventListener("click", () => {
      console.log('docOpenMenuBtn clicked');
      openOverlay(menuOverlay);
    });
  }
  
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", () => {
      console.log('closeMenuBtn clicked');
      closeOverlay(menuOverlay);
    });
  }
  
  if (openLangBtn) {
    openLangBtn.addEventListener("click", () => {
      console.log('openLangBtn clicked');
      closeOverlay(menuOverlay);
      // 语言面板打开动画延迟200ms
      setTimeout(() => {
        openOverlay(langOverlay);
      }, 200);
    });
  }
  
  if (closeLangBtn) {
    closeLangBtn.addEventListener("click", () => {
      console.log('closeLangBtn clicked');
      closeOverlay(langOverlay);
    });
  }

  if (goHomeBtn) {
    goHomeBtn.addEventListener("click", () => setRoute("home"));
  }
  
  if (docGoHomeBtn) {
    docGoHomeBtn.addEventListener("click", () => setRoute("home"));
  }
  
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      window.open(APP_STORE_URL, "_blank", "noopener");
    });
  }

  if (menuOverlay) {
    document.querySelectorAll("#menuOverlay .menu-item[data-route]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const route = btn.dataset.route;
        document.querySelectorAll("#menuOverlay .menu-item[data-route]").forEach((item) => {
          item.classList.toggle("active", item.dataset.route === route);
        });
        setRoute(route);
        closeOverlay(menuOverlay);
      });
    });

    menuOverlay.addEventListener("click", (event) => {
      if (event.target === menuOverlay) {
        closeOverlay(menuOverlay);
      }
    });
  }

  if (langOverlay) {
    document.querySelectorAll("#langOverlay .menu-item[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.dataset.lang, true);
        closeOverlay(langOverlay);
      });
    });

    langOverlay.addEventListener("click", (event) => {
      if (event.target === langOverlay) {
        closeOverlay(langOverlay);
      }
    });
  }
}

async function bootstrap() {
    // 获取DOM元素
    homePage = document.getElementById("homePage");
    docPage = document.getElementById("docPage");
    menuOverlay = document.getElementById("menuOverlay");
    langOverlay = document.getElementById("langOverlay");
    docMarkdown = document.getElementById("docMarkdown");
    
    // 更新全局window对象
    window.homePage = homePage;
    window.docPage = docPage;
    window.menuOverlay = menuOverlay;
    window.langOverlay = langOverlay;
    
    try {
        bindEvents();

        // 先隐藏所有页面，避免闪烁
        docPage.classList.add("hidden");
        const targetRoute = getInitialRoute();
        const urlLang = getInitialLang();

        const savedLang = localStorage.getItem("lessphoto_lang");
        const manual = localStorage.getItem("lessphoto_lang_manual") === "1";
        
        if (urlLang) {
            setLang(urlLang, false);
            localStorage.setItem("lessphoto_lang", urlLang);
            localStorage.removeItem("lessphoto_lang_manual");
        } else if (savedLang && manual) {
            setLang(savedLang, false);
        } else {
            const browserLang = detectLangByBrowser();
            const ipLang = browserLang ? null : await detectLangByIP();
            const autoLang = browserLang || ipLang || langMap.default;
            setLang(autoLang, false);
            localStorage.setItem("lessphoto_lang", autoLang);
            localStorage.removeItem("lessphoto_lang_manual");
        }

        setRoute(targetRoute);
    } catch (error) {
        console.error('Error in bootstrap:', error);
        // 即使出错，也显示首页
        homePage.classList.remove("hidden");
        docPage.classList.add("hidden");
    }
}

bootstrap();
