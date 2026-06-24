import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { r as renderTemplate, a as defineScriptVars, b as renderComponent, m as maybeRenderHead } from './prerender_BfEYESbt.mjs';
import fs from 'fs';
import path from 'path';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "404 Page Not Found — AgentUpdate.ai";
  const description = "The page you are looking for could not be found. Search or explore the AI agent ecosystem on AgentUpdate.ai.";
  let redirectsMap = {};
  try {
    const redirectsFilePath = path.resolve("public/_redirects");
    if (fs.existsSync(redirectsFilePath)) {
      const fileContent = fs.readFileSync(redirectsFilePath, "utf-8");
      const lines = fileContent.split("\n");
      lines.forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) return;
        const parts = trimmed.split(/\s+/);
        if (parts.length === 3) {
          const [src, dst] = parts;
          const key = src.endsWith("/") ? src.slice(0, -1) : src;
          redirectsMap[key.toLowerCase()] = dst;
        }
      });
    }
  } catch (err) {
    console.error("Failed to parse _redirects for 404 fallback routing:", err);
  }
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
  // Client-side auto-redirect based on public/_redirects mapping
  const currentPath = window.location.pathname;
  const currentPathLower = currentPath.toLowerCase();
  
  // 1. Client-side fallback for legacy .html paths
  if (currentPathLower.endsWith('.html')) {
    const cleanPath = currentPath.slice(0, -5) + '/';
    window.location.replace(cleanPath + window.location.search + window.location.hash);
  }

  // Normalise current path to check keys (strip trailing slash)
  const normalizedKey = currentPathLower.endsWith('/') ? currentPathLower.slice(0, -1) : currentPathLower;
  
  if (redirectsMap && redirectsMap[normalizedKey]) {
    const targetUrl = redirectsMap[normalizedKey];
    window.location.replace(targetUrl + window.location.search + window.location.hash);
  } else if (currentPath.includes('/tags')) {
    // Client-side fallback for legacy tag URLs with capitals or spaces
    const normalizedPath = currentPath
      .toLowerCase()
      .trim()
      .replace(/\\s+/g, '-')
      .replace(/-+/g, '-');
    if (normalizedPath !== currentPath) {
      window.location.replace(normalizedPath + window.location.search + window.location.hash);
    }
  }

  // Client-side bilingual adaptation based on URL context
  const isZh = window.location.pathname.startsWith('/zh');
  
  if (isZh) {
    // Document Title
    document.title = '404 页面未找到 — AgentUpdate.ai';

    // Content translations
    const titleEl = document.getElementById('error-title');
    const descEl = document.getElementById('error-desc');
    const linksHeaderEl = document.getElementById('links-header');
    
    if (titleEl) titleEl.textContent = '页面未找到';
    if (descEl) descEl.textContent = '抱歉，您访问的页面可能已被移动、删除或暂时不可用。请尝试搜索或通过下方快捷链接返回。';
    if (linksHeaderEl) linksHeaderEl.textContent = '快捷导航';

    // Button translations & links adjustment
    const homeText = document.getElementById('link-home');
    const homeLink = document.getElementById('home-link');
    if (homeText) homeText.textContent = '返回首页';
    if (homeLink) homeLink.setAttribute('href', '/zh/');

    const newsText = document.getElementById('link-news');
    const newsLink = document.getElementById('news-link');
    if (newsText) newsText.textContent = '生态新闻';
    if (newsLink) newsLink.setAttribute('href', '/zh/news');

    const productText = document.getElementById('link-product');
    const productLink = document.getElementById('product-link');
    if (productText) productText.textContent = '智能体产品';
    if (productLink) productLink.setAttribute('href', '/zh/product');

    const tutorialText = document.getElementById('link-tutorial');
    const tutorialLink = document.getElementById('tutorial-link');
    if (tutorialText) tutorialText.textContent = '实战教程';
    if (tutorialLink) tutorialLink.setAttribute('href', '/zh/tutorial');
  }

  // Initialize pagefind UI for 404 search box
  window.addEventListener('DOMContentLoaded', () => {
    if (typeof PagefindUI !== 'undefined') {
      new PagefindUI({
        element: '#pagefind-ui-404',
        showImages: true,
        translations: isZh ? {
          placeholder: '搜索全站内容...',
          clear_search: '清除',
          load_more: '加载更多结果',
          search_label: '搜索此站点',
          filters_label: '筛选',
          zero_results: '没有找到关于 "[SEARCH_TERM]" 的内容',
          many_results: '找到 [COUNT] 个关于 "[SEARCH_TERM]" 的结果',
          one_result: '找到 1 个关于 "[SEARCH_TERM]" 的结果',
          alt_search: '没有找到结果，正在展示 "[ALT_TERM]" 的结果',
          search_suggestion: '没有找到结果，请尝试以下词汇：[SUGGESTION]',
          searching: '正在搜索 "[SEARCH_TERM]"...'
        } : undefined
      });
    }
  });
})();<\/script>`], ["", " <script>(function(){", `
  // Client-side auto-redirect based on public/_redirects mapping
  const currentPath = window.location.pathname;
  const currentPathLower = currentPath.toLowerCase();
  
  // 1. Client-side fallback for legacy .html paths
  if (currentPathLower.endsWith('.html')) {
    const cleanPath = currentPath.slice(0, -5) + '/';
    window.location.replace(cleanPath + window.location.search + window.location.hash);
  }

  // Normalise current path to check keys (strip trailing slash)
  const normalizedKey = currentPathLower.endsWith('/') ? currentPathLower.slice(0, -1) : currentPathLower;
  
  if (redirectsMap && redirectsMap[normalizedKey]) {
    const targetUrl = redirectsMap[normalizedKey];
    window.location.replace(targetUrl + window.location.search + window.location.hash);
  } else if (currentPath.includes('/tags')) {
    // Client-side fallback for legacy tag URLs with capitals or spaces
    const normalizedPath = currentPath
      .toLowerCase()
      .trim()
      .replace(/\\\\s+/g, '-')
      .replace(/-+/g, '-');
    if (normalizedPath !== currentPath) {
      window.location.replace(normalizedPath + window.location.search + window.location.hash);
    }
  }

  // Client-side bilingual adaptation based on URL context
  const isZh = window.location.pathname.startsWith('/zh');
  
  if (isZh) {
    // Document Title
    document.title = '404 页面未找到 — AgentUpdate.ai';

    // Content translations
    const titleEl = document.getElementById('error-title');
    const descEl = document.getElementById('error-desc');
    const linksHeaderEl = document.getElementById('links-header');
    
    if (titleEl) titleEl.textContent = '页面未找到';
    if (descEl) descEl.textContent = '抱歉，您访问的页面可能已被移动、删除或暂时不可用。请尝试搜索或通过下方快捷链接返回。';
    if (linksHeaderEl) linksHeaderEl.textContent = '快捷导航';

    // Button translations & links adjustment
    const homeText = document.getElementById('link-home');
    const homeLink = document.getElementById('home-link');
    if (homeText) homeText.textContent = '返回首页';
    if (homeLink) homeLink.setAttribute('href', '/zh/');

    const newsText = document.getElementById('link-news');
    const newsLink = document.getElementById('news-link');
    if (newsText) newsText.textContent = '生态新闻';
    if (newsLink) newsLink.setAttribute('href', '/zh/news');

    const productText = document.getElementById('link-product');
    const productLink = document.getElementById('product-link');
    if (productText) productText.textContent = '智能体产品';
    if (productLink) productLink.setAttribute('href', '/zh/product');

    const tutorialText = document.getElementById('link-tutorial');
    const tutorialLink = document.getElementById('tutorial-link');
    if (tutorialText) tutorialText.textContent = '实战教程';
    if (tutorialLink) tutorialLink.setAttribute('href', '/zh/tutorial');
  }

  // Initialize pagefind UI for 404 search box
  window.addEventListener('DOMContentLoaded', () => {
    if (typeof PagefindUI !== 'undefined') {
      new PagefindUI({
        element: '#pagefind-ui-404',
        showImages: true,
        translations: isZh ? {
          placeholder: '搜索全站内容...',
          clear_search: '清除',
          load_more: '加载更多结果',
          search_label: '搜索此站点',
          filters_label: '筛选',
          zero_results: '没有找到关于 "[SEARCH_TERM]" 的内容',
          many_results: '找到 [COUNT] 个关于 "[SEARCH_TERM]" 的结果',
          one_result: '找到 1 个关于 "[SEARCH_TERM]" 的结果',
          alt_search: '没有找到结果，正在展示 "[ALT_TERM]" 的结果',
          search_suggestion: '没有找到结果，请尝试以下词汇：[SUGGESTION]',
          searching: '正在搜索 "[SEARCH_TERM]"...'
        } : undefined
      });
    }
  });
})();<\/script>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "en", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="error-page-container" data-astro-cid-zetdm5md> <!-- Ambient Neon Mesh Background Glow --> <div class="glow-container" data-astro-cid-zetdm5md> <div class="glow-circle bg-glow-blue" data-astro-cid-zetdm5md></div> <div class="glow-circle bg-glow-purple" data-astro-cid-zetdm5md></div> </div> <div class="container error-content" data-astro-cid-zetdm5md> <div class="glass-card" data-astro-cid-zetdm5md> <!-- Glowing Accent Indicator --> <div class="accent-glow" data-astro-cid-zetdm5md></div> <div class="icon-container" data-astro-cid-zetdm5md> <span class="animated-icon" data-astro-cid-zetdm5md>🤖</span> </div> <div class="error-code" data-astro-cid-zetdm5md>404</div> <h1 id="error-title" class="gradient-text" data-astro-cid-zetdm5md>Page Not Found</h1> <p id="error-desc" class="desc-text" data-astro-cid-zetdm5md>
The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
</p> <!-- Dynamic Search Box Integrated with Pagefind --> <div class="search-box" data-astro-cid-zetdm5md> <div id="pagefind-ui-404" data-astro-cid-zetdm5md></div> </div> <!-- Quick Links Grid --> <div class="action-links" data-astro-cid-zetdm5md> <div class="links-title" id="links-header" data-astro-cid-zetdm5md>Quick Links</div> <div class="links-grid" data-astro-cid-zetdm5md> <a href="/" id="home-link" class="link-btn" data-astro-cid-zetdm5md> <span class="link-icon" data-astro-cid-zetdm5md>🏠</span> <span class="link-text" id="link-home" data-astro-cid-zetdm5md>Home</span> </a> <a href="/news" id="news-link" class="link-btn" data-astro-cid-zetdm5md> <span class="link-icon" data-astro-cid-zetdm5md>📰</span> <span class="link-text" id="link-news" data-astro-cid-zetdm5md>News</span> </a> <a href="/product" id="product-link" class="link-btn" data-astro-cid-zetdm5md> <span class="link-icon" data-astro-cid-zetdm5md>🚀</span> <span class="link-text" id="link-product" data-astro-cid-zetdm5md>Products</span> </a> <a href="/tutorial" id="tutorial-link" class="link-btn" data-astro-cid-zetdm5md> <span class="link-icon" data-astro-cid-zetdm5md>🎓</span> <span class="link-text" id="link-tutorial" data-astro-cid-zetdm5md>Tutorials</span> </a> </div> </div> </div> </div> </main> ` }), defineScriptVars({ redirectsMap }));
}, "/Users/eric/work/openclaweco.com/website/src/pages/404.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
