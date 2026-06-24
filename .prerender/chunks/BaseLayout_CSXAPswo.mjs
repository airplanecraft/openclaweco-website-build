import { A as AstroError, I as InvalidComponentArgs, r as renderTemplate, b as renderComponent, F as Fragment, e as renderSlot, c as addAttribute, f as renderHead, u as unescapeHTML } from './prerender_BfEYESbt.mjs';
import 'piccolore';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c, _d;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "AgentUpdate.ai — Your trusted source for AI agent news, tools, training, and ecosystem updates.",
    ogImage = "/og-default.jpg",
    ogType = "website",
    lang = "en",
    structuredData,
    keywords,
    showProgressBar = false
  } = Astro2.props;
  const ogImageAbs = ogImage.startsWith("http") ? ogImage : new URL(ogImage, Astro2.site).href;
  let optimizedTitle = title;
  if (optimizedTitle && !optimizedTitle.includes("AgentUpdate")) {
    if (lang === "zh") {
      optimizedTitle = `${optimizedTitle} - AgentUpdate.ai | AI智能体技术与开源工具教程`;
    } else {
      optimizedTitle = `${optimizedTitle} - AgentUpdate.ai | AI Agents News & Tutorials`;
    }
  }
  let optimizedDesc = description || "";
  if (optimizedDesc.length < 120) {
    const cta = lang === "zh" ? " 阅读 AgentUpdate.ai 带来的深度分析，为您提供最新的 AI 智能体技术、开源工具及开发教程。" : " Read the latest updates and in-depth analysis on AgentUpdate.ai.";
    optimizedDesc = optimizedDesc + cta;
  }
  if (optimizedDesc.length > 160) {
    const truncated = optimizedDesc.substring(0, 157);
    const lastSpace = truncated.lastIndexOf(" ");
    optimizedDesc = (lastSpace > 110 ? truncated.substring(0, lastSpace) : truncated) + "...";
  }
  const defaultKeywords = ["AI agents", "AI tools", "autonomous agents", "artificial intelligence", "LLM plugins", "AgentUpdate"];
  const keywordsStr = keywords ? Array.isArray(keywords) ? keywords.filter(Boolean).join(", ") : keywords : defaultKeywords.join(", ");
  let cleanPathname = Astro2.url.pathname;
  cleanPathname = cleanPathname.replace(/\/$/, "");
  cleanPathname = cleanPathname.replace(/\.html$/, "");
  cleanPathname = cleanPathname.replace(/\/$/, "");
  if (cleanPathname.endsWith("/index")) {
    cleanPathname = cleanPathname.slice(0, -6);
  } else if (cleanPathname === "index" || cleanPathname === "/index") {
    cleanPathname = "/";
  }
  if (cleanPathname === "") cleanPathname = "/";
  if (cleanPathname !== "/" && !cleanPathname.endsWith("/")) {
    cleanPathname = cleanPathname + "/";
  }
  cleanPathname = cleanPathname.replace(/#/g, "%23");
  const canonicalURL = new URL(cleanPathname, Astro2.site);
  const globalStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AgentUpdate.ai",
      "url": "https://www.agentupdate.ai",
      "logo": "https://www.agentupdate.ai/favicon.svg",
      "description": "Your trusted source for AI agent news, tools, skills, plugins, and tutorials.",
      "sameAs": [
        "https://github.com/airplanecraft/agentupdate",
        "https://x.com/agentupdate_ai",
        "https://www.linkedin.com/company/agentupdate"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "availableLanguage": ["English", "Chinese"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "AgentUpdate.ai",
      "url": "https://www.agentupdate.ai",
      "inLanguage": ["en", "zh-CN"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.agentupdate.ai/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];
  const is404 = cleanPathname === "/404/" || cleanPathname === "/zh/404/" || cleanPathname === "/404" || cleanPathname === "/zh/404" || cleanPathname === "404";
  const zhURL = is404 ? new URL("/zh/", Astro2.site) : lang === "en" ? new URL(`/zh${cleanPathname === "/" ? "/" : cleanPathname}`, Astro2.site) : canonicalURL;
  const enURL = is404 ? new URL("/", Astro2.site) : lang === "zh" ? new URL(cleanPathname.replace(/^\/zh/, "") || "/", Astro2.site) : canonicalURL;
  const switchToZhHref = is404 ? "/zh/" : lang === "en" ? `/zh${cleanPathname === "/" ? "/" : cleanPathname}` : cleanPathname;
  const switchToEnHref = is404 ? "/" : lang === "zh" ? cleanPathname.replace(/^\/zh/, "") || "/" : cleanPathname;
  let techArticleSchema = null;
  if (cleanPathname.includes("/tutorial/") && cleanPathname !== "/tutorial/" && cleanPathname !== "/zh/tutorial/") {
    techArticleSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": optimizedTitle,
      "description": optimizedDesc,
      "inLanguage": lang === "zh" ? "zh-CN" : "en",
      "url": canonicalURL.href,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalURL.href
      },
      "publisher": {
        "@type": "Organization",
        "name": "AgentUpdate.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.agentupdate.ai/favicon.svg"
        }
      },
      "dependencies": "Astro, Claude Code, Antigravity, OpenClaw",
      "proficienciesRequired": "AI Agent Development, JavaScript, Python"
    };
  }
  return renderTemplate(_d || (_d = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><meta name="keywords"', '><link rel="canonical"', '><!-- hreflang --><link rel="alternate" hreflang="en"', '><link rel="alternate" hreflang="zh-CN"', '><link rel="alternate" hreflang="x-default"', '><!-- Open Graph --><meta property="og:locale"', '><meta property="og:locale:alternate"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type"', '><meta property="og:site_name" content="AgentUpdate.ai"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Sitemap --><link rel="sitemap" href="/sitemap.xml"><!-- RSS Feeds --><link rel="alternate" type="application/rss+xml" title="AgentUpdate.ai - News & Tutorials" href="/rss.xml"><link rel="alternate" type="application/rss+xml" title="AgentUpdate.ai - 新闻与教程" href="/zh/rss.xml"><!-- Pagefind UI (injected after build) --><link rel="stylesheet" href="/pagefind/pagefind-ui.css"><script src="/pagefind/pagefind-ui.js"><\/script><!-- Schema.org structured data: global Organization + WebSite --><script type="application/ld+json">', "<\/script>", "", '<!-- AI-friendly meta tags --><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><meta name="generator"', ">", `<!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-BZG252PSQD"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BZG252PSQD');
    <\/script>`, '</head> <body class="min-h-screen font-sans antialiased"> <!-- Navbar --> <header class="site-header"> <div class="container"> <a href="/" class="logo">\nAgentUpdate<span>.ai</span> </a> <!-- Mobile: always-visible right controls --> <div class="header-right"> <a', ' target="_blank" class="rss-link-header" title="RSS Feed"> <span class="rss-icon">RSS</span> </a> ', ' <div id="search-trigger" class="search-icon" title="Search" aria-label="Open search">⌕</div> <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu">☰</button> </div> <!-- Desktop navigation (inside header for sticky flow) --> <nav class="nav-links nav-desktop" id="nav-links-desktop"> <a', ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", '</a> <span class="nav-desktop-only"> <a', ' target="_blank" class="rss-link-header" title="RSS Feed"> <span class="rss-icon">RSS</span> </a> ', ' <div id="search-trigger-desktop" class="search-icon" title="Search" aria-label="Open search">⌕</div> </span> </nav> </div> ', ' </header> <!-- Mobile nav overlay (OUTSIDE header to avoid sticky stacking context) --> <nav class="mobile-nav-overlay" id="mobile-nav-overlay"> <a', ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", '</a> </nav> <!-- Pagefind modal --> <div id="search-modal" class="search-modal hidden"> <div class="search-modal-inner"> <button id="search-close" class="search-close" aria-label="Close search">✕</button> <div id="pagefind-ui"></div> </div> </div> ', ' <footer class="site-footer"> <div class="container"> <div class="footer-links"> ', " </div> <p>© 2026 AgentUpdate.ai. Powered by AI Agents.</p> </div> </footer> <script>\n      // Hamburger toggle (targets mobile overlay which is outside sticky header)\n      document.getElementById('menu-toggle')?.addEventListener('click', () => {\n        const overlay = document.getElementById('mobile-nav-overlay');\n        overlay?.classList.toggle('open');\n        const btn = document.getElementById('menu-toggle');\n        if (btn) btn.textContent = overlay?.classList.contains('open') ? '✕' : '☰';\n      });\n\n      // Close menu when a link is clicked (mobile UX)\n      document.querySelectorAll('#mobile-nav-overlay a').forEach(link => {\n        link.addEventListener('click', () => {\n          document.getElementById('mobile-nav-overlay')?.classList.remove('open');\n          const btn = document.getElementById('menu-toggle');\n          if (btn) btn.textContent = '☰';\n        });\n      });\n\n      // Pagefind search modal (both triggers)\n      function openSearch() {\n        document.getElementById('search-modal')?.classList.remove('hidden');\n        if (typeof PagefindUI !== 'undefined' && !window._pfInitialized) {\n          new PagefindUI({ element: '#pagefind-ui', showImages: true });\n          window._pfInitialized = true;\n        }\n      }\n      document.getElementById('search-trigger')?.addEventListener('click', openSearch);\n      document.getElementById('search-trigger-desktop')?.addEventListener('click', openSearch);\n      document.getElementById('search-close')?.addEventListener('click', () => {\n        document.getElementById('search-modal')?.classList.add('hidden');\n      });\n    <\/script> </body> </html>"])), addAttribute(lang === "zh" ? "zh-CN" : "en", "lang"), optimizedTitle, addAttribute(optimizedDesc, "content"), addAttribute(keywordsStr, "content"), addAttribute(canonicalURL, "href"), addAttribute(enURL.href, "href"), addAttribute(zhURL.href, "href"), addAttribute(enURL.href, "href"), addAttribute(lang === "zh" ? "zh_CN" : "en_US", "content"), addAttribute(lang === "zh" ? "en_US" : "zh_CN", "content"), addAttribute(optimizedTitle, "content"), addAttribute(optimizedDesc, "content"), addAttribute(ogImageAbs, "content"), addAttribute(canonicalURL.href, "content"), addAttribute(ogType, "content"), addAttribute(optimizedTitle, "content"), addAttribute(optimizedDesc, "content"), addAttribute(ogImageAbs, "content"), unescapeHTML(JSON.stringify(globalStructuredData)), techArticleSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(techArticleSchema))), structuredData && (Array.isArray(structuredData) ? structuredData.map((sd) => renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(sd)))) : renderTemplate(_c || (_c = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)))), addAttribute(`Astro`, "content"), renderSlot($$result, $$slots["head"]), renderHead(), addAttribute(lang === "zh" ? "/zh/rss.xml" : "/rss.xml", "href"), lang === "en" ? renderTemplate`<a${addAttribute(switchToZhHref, "href")} class="lang-btn">中文</a>` : renderTemplate`<a${addAttribute(switchToEnHref, "href")} class="lang-btn">EN</a>`, addAttribute(lang === "zh" ? "/zh/" : "/", "href"), lang === "zh" ? "首页" : "Home", addAttribute(lang === "zh" ? "/zh/news" : "/news", "href"), lang === "zh" ? "新闻" : "News", addAttribute(lang === "zh" ? "/zh/product" : "/product", "href"), lang === "zh" ? "产品" : "Products", addAttribute(lang === "zh" ? "/zh/skills" : "/skills", "href"), lang === "zh" ? "技能市场" : "Skills", addAttribute(lang === "zh" ? "/zh/plugins" : "/plugins", "href"), lang === "zh" ? "插件" : "Plugin", addAttribute(lang === "zh" ? "/zh/releases" : "/releases", "href"), lang === "zh" ? "产品更新" : "Releases", addAttribute(lang === "zh" ? "/zh/tags" : "/tags", "href"), lang === "zh" ? "标签" : "Tags", addAttribute(lang === "zh" ? "/zh/tutorial" : "/tutorial", "href"), lang === "zh" ? "教程" : "Tutorials", addAttribute(lang === "zh" ? "/zh/blog" : "/blog", "href"), lang === "zh" ? "博客" : "Blog", addAttribute(lang === "zh" ? "/zh/simulators" : "/simulators", "href"), lang === "zh" ? "模拟器" : "Simulators", addAttribute(lang === "zh" ? "/zh/rss.xml" : "/rss.xml", "href"), lang === "en" ? renderTemplate`<a${addAttribute(switchToZhHref, "href")} class="lang-btn">中文</a>` : renderTemplate`<a${addAttribute(switchToEnHref, "href")} class="lang-btn">EN</a>`, showProgressBar && renderTemplate`<div class="reading-progress-bar" id="reading-progress-bar"></div>`, addAttribute(lang === "zh" ? "/zh/" : "/", "href"), lang === "zh" ? "首页" : "Home", addAttribute(lang === "zh" ? "/zh/news" : "/news", "href"), lang === "zh" ? "新闻" : "News", addAttribute(lang === "zh" ? "/zh/product" : "/product", "href"), lang === "zh" ? "产品" : "Products", addAttribute(lang === "zh" ? "/zh/skills" : "/skills", "href"), lang === "zh" ? "技能市场" : "Skills", addAttribute(lang === "zh" ? "/zh/plugins" : "/plugins", "href"), lang === "zh" ? "插件" : "Plugin", addAttribute(lang === "zh" ? "/zh/releases" : "/releases", "href"), lang === "zh" ? "产品更新" : "Releases", addAttribute(lang === "zh" ? "/zh/tags" : "/tags", "href"), lang === "zh" ? "标签" : "Tags", addAttribute(lang === "zh" ? "/zh/tutorial" : "/tutorial", "href"), lang === "zh" ? "教程" : "Tutorials", addAttribute(lang === "zh" ? "/zh/blog" : "/blog", "href"), lang === "zh" ? "博客" : "Blog", addAttribute(lang === "zh" ? "/zh/simulators" : "/simulators", "href"), lang === "zh" ? "模拟器" : "Simulators", renderSlot($$result, $$slots["default"]), lang === "zh" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="/zh/about">关于我们</a> <span class="separator">•</span> <a href="/zh/contact">联系我们</a> <span class="separator">•</span> <a href="/zh/privacy">隐私政策</a> <span class="separator">•</span> <a href="/zh/terms">服务条款</a> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="/about">About Us</a> <span class="separator">•</span> <a href="/contact">Contact</a> <span class="separator">•</span> <a href="/privacy">Privacy Policy</a> <span class="separator">•</span> <a href="/terms">Terms of Service</a> ` })}`);
}, "/Users/eric/work/openclaweco.com/website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, createComponent as c };
