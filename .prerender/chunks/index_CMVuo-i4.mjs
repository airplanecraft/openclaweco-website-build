import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { r as renderScript } from './script_BnvikXWp.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { c as getLatestReleases, d as getProductsWithLatestReleases } from './releases_By2gwyzE.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const latestReleases = await getLatestReleases(30);
  const productData = await getProductsWithLatestReleases(5);
  const dailyStats = await getDailyStats();
  function fmtTimelineDate(d) {
    if (!d) return "";
    return new Intl.DateTimeFormat("zh-CN", { month: "short", day: "numeric" }).format(d);
  }
  const getBrandColorVar = (slug) => {
    if (slug.includes("claude")) return "var(--accent)";
    if (slug.includes("gemini")) return "#3b82f6";
    if (slug.includes("mistral")) return "#ea580c";
    if (slug.includes("openai") || slug.includes("gpt") || slug.includes("deepseek")) return "#10b981";
    return "var(--muted)";
  };
  const getBrandColorRgb = (slug) => {
    if (slug.includes("claude")) return "0, 242, 254";
    if (slug.includes("gemini")) return "59, 130, 246";
    if (slug.includes("mistral")) return "234, 88, 12";
    if (slug.includes("openai") || slug.includes("gpt") || slug.includes("deepseek")) return "16, 185, 129";
    return "100, 116, 139";
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AI 工具产品更新追踪 | AgentUpdate.ai", "description": "统一追踪并结构化呈现全球顶级 AI 产品更新、模型特性发布和前沿进度的时间线。", "lang": "zh", "data-astro-cid-6dlswyw4": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="swiss-releases-page" data-astro-cid-6dlswyw4> <section class="page-hero" data-astro-cid-6dlswyw4> <div class="container hero-container" data-astro-cid-6dlswyw4> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "发版控制台" }
  ], "data-astro-cid-6dlswyw4": true })} <div class="page-header-flex" data-astro-cid-6dlswyw4> <div class="header-title-wrapper" data-astro-cid-6dlswyw4> <h1 class="display-title" data-astro-cid-6dlswyw4>RELEASES <span class="accent-text" data-astro-cid-6dlswyw4>// 发版控制台</span></h1> <p class="hero-stats" data-astro-cid-6dlswyw4>SYSTEM // LIVE // TIMELINE CHRONICLE OF AI ECOSYSTEM</p> </div> <div class="search-container" data-astro-cid-6dlswyw4> <div class="search-icon-pos" data-astro-cid-6dlswyw4> <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-6dlswyw4> <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" data-astro-cid-6dlswyw4></path> </svg> </div> <input type="text" placeholder="全局搜索产品..." class="search-input" id="search-input" data-astro-cid-6dlswyw4> </div> </div> <div class="today-bar-wrap" data-astro-cid-6dlswyw4> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "releases", "lang": "zh", "data-astro-cid-6dlswyw4": true })} </div> </div> </section> <div class="container main-content-container" data-astro-cid-6dlswyw4> <!-- Global Timeline Dashboard --> <section class="timeline-dashboard" data-astro-cid-6dlswyw4> <div class="dashboard-header" data-astro-cid-6dlswyw4> <span class="section-tag" data-astro-cid-6dlswyw4>发布纪事 // 近 30 天追踪</span> <div class="lane-scroll-hint" data-astro-cid-6dlswyw4>横向滑动查看更多 →</div> </div> <div class="timeline-lane-wrapper" data-astro-cid-6dlswyw4> <div class="timeline-lane" data-astro-cid-6dlswyw4> ${latestReleases.map((release) => {
    const brandColor = getBrandColorVar(release.product.slug);
    const brandColorRgb = getBrandColorRgb(release.product.slug);
    return renderTemplate`<div${addAttribute(`timeline-column ${release.isMajor ? "major" : "minor"}`, "class")}${addAttribute(`window.location.href='/zh/releases/${release.product.slug}'`, "onclick")} data-astro-cid-6dlswyw4> <div${addAttribute(`timeline-node ${release.isMajor ? "major-node" : ""}`, "class")}${addAttribute(`--brand-color: ${brandColor}; --brand-color-rgb: ${brandColorRgb}`, "style")} data-astro-cid-6dlswyw4> <div class="node-icon-frame" data-astro-cid-6dlswyw4> ${release.product.logoUrl ? renderTemplate`<img${addAttribute(release.product.logoUrl, "src")} class="node-logo" alt="" width="20" height="20" decoding="async" data-astro-cid-6dlswyw4>` : renderTemplate`<span class="node-fallback" data-astro-cid-6dlswyw4>⚡</span>`} </div> <div class="node-info" data-astro-cid-6dlswyw4> <div style="display: flex; gap: 4px; align-items: center;" data-astro-cid-6dlswyw4> <div class="node-title" data-astro-cid-6dlswyw4>${release.product.name}</div> ${release.isMajor && renderTemplate`<span class="mini-major-indicator" title="重大发版" data-astro-cid-6dlswyw4>🚀</span>`} </div> <div class="node-date" data-astro-cid-6dlswyw4>${fmtTimelineDate(release.publishedAt ?? release.createdAt)}</div> </div> </div> <div${addAttribute(`timeline-dot ${release.isMajor ? "major-dot" : ""}`, "class")}${addAttribute(`--brand-color: ${brandColor}`, "style")} data-astro-cid-6dlswyw4></div> </div>`;
  })} </div> </div> </section> <!-- Filtering & Layout Controls --> <div class="controls-row" data-astro-cid-6dlswyw4> <div class="filter-bar" id="filter-bar" data-astro-cid-6dlswyw4> <button class="filter-chip active" data-cat="all" data-astro-cid-6dlswyw4>[ 全部产品 ]</button> <button class="filter-chip" data-cat="llm" data-astro-cid-6dlswyw4>[ 大语言模型 ]</button> <button class="filter-chip" data-cat="agent" data-astro-cid-6dlswyw4>[ 智能体 ]</button> <button class="filter-chip" data-cat="coding" data-astro-cid-6dlswyw4>[ 开发工具 ]</button> </div> </div> <!-- Product Card Grid --> <section class="card-grid" id="product-grid" data-astro-cid-6dlswyw4> ${productData.map((product) => {
    const brandColor = getBrandColorVar(product.slug);
    const latestVersion = product.releases[0]?.version || "全新发布";
    return renderTemplate`<article class="product-card"${addAttribute(product.category, "data-category")}${addAttribute(product.name.toLowerCase(), "data-name")}${addAttribute(`--brand-color: ${brandColor}`, "style")} data-astro-cid-6dlswyw4> <div class="card-header" data-astro-cid-6dlswyw4> <div class="card-title-row" data-astro-cid-6dlswyw4> ${product.logoUrl ? renderTemplate`<img${addAttribute(product.logoUrl, "src")} class="card-logo" alt="" width="24" height="24" decoding="async" data-astro-cid-6dlswyw4>` : renderTemplate`<div class="card-logo-fallback" data-astro-cid-6dlswyw4>⚡</div>`} <h3 class="card-title" data-astro-cid-6dlswyw4>${product.name}</h3> </div> <span class="version-badge" data-astro-cid-6dlswyw4>${latestVersion}</span> </div> <p class="card-desc" data-astro-cid-6dlswyw4>
跟踪 ${product.name} 的底层框架升级、智能体集成及版本特性迭代轨迹与时间线。
</p> <div class="mini-timeline-section" data-astro-cid-6dlswyw4> <span class="mini-timeline-label" data-astro-cid-6dlswyw4>历史发版轨迹</span> <div class="mini-timeline" data-astro-cid-6dlswyw4> ${Array.from({ length: 5 }).map((_, i) => {
      const hasRelease = !!product.releases[i];
      if (hasRelease) {
        return renderTemplate`<div class="mini-dot active"${addAttribute(`--brand-color: ${brandColor}`, "style")}${addAttribute(product.releases[i].version || "Release", "title")} data-astro-cid-6dlswyw4></div>`;
      } else {
        return renderTemplate`<div class="mini-dot empty" data-astro-cid-6dlswyw4></div>`;
      }
    })} </div> </div> <a${addAttribute(`/zh/releases/${product.slug}`, "href")} class="btn-view" data-astro-cid-6dlswyw4>[ 详细追踪 ]</a> </article>`;
  })} </section> </div> </main> ` })} ${renderScript($$result, "/Users/eric/work/openclaweco.com/website/src/pages/zh/releases/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/releases/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/releases/index.astro";
const $$url = "/zh/releases";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
