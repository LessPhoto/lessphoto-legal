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
  console.log('setRoute called with:', route);
  // 确保DOM元素已经被获取
  if (!homePage || !docPage) {
    console.error('homePage or docPage is null or undefined');
    // 尝试重新获取DOM元素
    homePage = document.getElementById("homePage");
    docPage = document.getElementById("docPage");
    if (!homePage || !docPage) {
      console.error('Failed to get homePage or docPage');
      return;
    }
  }
  
  state.route = route;
  
  // 更新浏览器地址栏
  if (route === "home") {
    // 移除route参数
    const url = new URL(window.location.href);
    url.searchParams.delete('route');
    window.history.replaceState({}, '', url);
    
    console.log('Setting route to home');
    homePage.classList.remove("hidden");
    docPage.classList.add("hidden");
    return;
  }

  // 添加route参数
  const url = new URL(window.location.href);
  url.searchParams.set('route', route);
  window.history.replaceState({}, '', url);
  
  console.log('Setting route to:', route);
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
    // 模拟香港地区IP
    // return langMap["HK"];
    
    // 模拟美国地区IP
    // return langMap["US"];
    
    // 正常调用API
    const res = await fetch("http://ip-api.com/json/");
    if (!res.ok) {
      throw new Error("ip-api request failed");
    }
    const data = await res.json();
    const countryCode = (data.countryCode || "").toUpperCase();
    return langMap[countryCode] || langMap.default;
  } catch (error) {
    return langMap.default;
  }
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
      window.open("https://apps.apple.com", "_blank", "noopener");
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
    console.log('Starting bootstrap...');
    
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
    
    // 检查元素是否存在
    console.log('homePage:', homePage);
    console.log('docPage:', docPage);
    console.log('menuOverlay:', menuOverlay);
    console.log('langOverlay:', langOverlay);
    console.log('docMarkdown:', docMarkdown);
    
    try {
        bindEvents();
        console.log('Events bound');

        // 先隐藏所有页面，避免闪烁
        docPage.classList.add("hidden");
        console.log('docPage hidden');

        // --- 新增代码开始：读取 URL 参数 ---
        const urlParams = new URLSearchParams(window.location.search);
        let targetRoute = urlParams.get('route'); // 读取 ?route=xxx
        console.log('URL route:', targetRoute);

        // 如果 URL 中没有 route 参数，或者参数无效，则默认为 'home'
        if (!targetRoute || (targetRoute !== 'home' && targetRoute !== 'terms' && targetRoute !== 'privacy')) {
            targetRoute = 'home';
            console.log('Defaulting to home route');
        }
        // --- 新增代码结束 ---

        const savedLang = localStorage.getItem("lessphoto_lang");
        const manual = localStorage.getItem("lessphoto_lang_manual") === "1";
        console.log('Saved lang:', savedLang);
        console.log('Manual lang:', manual);
        
        if (savedLang && manual) {
            console.log('Using saved language:', savedLang);
            setLang(savedLang, false);
        } else {
            try {
                const autoLang = await detectLangByIP();
                console.log('Detected language:', autoLang);
                setLang(autoLang, false);
                localStorage.setItem("lessphoto_lang", autoLang);
                localStorage.removeItem("lessphoto_lang_manual");
            } catch (error) {
                console.error('Error detecting language:', error);
                setLang('zh-CN', false);
            }
        }

        // --- 修改代码：使用从 URL 读取的 targetRoute ---
        console.log('Setting route:', targetRoute);
        setRoute(targetRoute);
        console.log('Route set, homePage hidden class:', homePage.classList.contains('hidden'));
    } catch (error) {
        console.error('Error in bootstrap:', error);
        // 即使出错，也显示首页
        homePage.classList.remove("hidden");
        docPage.classList.add("hidden");
    }
    
    console.log('Bootstrap completed');
}

bootstrap();
