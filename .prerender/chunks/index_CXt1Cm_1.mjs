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
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(d);
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AI Release Hub | Dashboard & Changelogs", "description": "The unified premium timeline of AI product updates.", "lang": "en", "data-astro-cid-zitg5ur3": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="swiss-releases-page" data-astro-cid-zitg5ur3> <section class="page-hero" data-astro-cid-zitg5ur3> <div class="container hero-container" data-astro-cid-zitg5ur3> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Releases" }
  ], "data-astro-cid-zitg5ur3": true })} <div class="page-header-flex" data-astro-cid-zitg5ur3> <div class="header-title-wrapper" data-astro-cid-zitg5ur3> <h1 class="display-title" data-astro-cid-zitg5ur3>RELEASES <span class="accent-text" data-astro-cid-zitg5ur3>// Release Hub</span></h1> <p class="hero-stats" data-astro-cid-zitg5ur3>SYSTEM // LIVE // TIMELINE CHRONICLE OF AI ECOSYSTEM</p> </div> <div class="search-container" data-astro-cid-zitg5ur3> <div class="search-icon-pos" data-astro-cid-zitg5ur3> <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-zitg5ur3> <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" data-astro-cid-zitg5ur3></path> </svg> </div> <input type="text" placeholder="SEARCH RELEASES..." class="search-input" id="search-input" data-astro-cid-zitg5ur3> </div> </div> <div class="today-bar-wrap" data-astro-cid-zitg5ur3> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "releases", "lang": "en", "data-astro-cid-zitg5ur3": true })} </div> </div> </section> <div class="container main-content-container" data-astro-cid-zitg5ur3> <!-- Global Timeline Dashboard --> <section class="timeline-dashboard" data-astro-cid-zitg5ur3> <div class="dashboard-header" data-astro-cid-zitg5ur3> <span class="section-tag" data-astro-cid-zitg5ur3>CHRONICLE LANE // LAST 30 DAYS</span> <div class="lane-scroll-hint" data-astro-cid-zitg5ur3>SCROLL HORIZONTALLY →</div> </div> <div class="timeline-lane-wrapper" data-astro-cid-zitg5ur3> <div class="timeline-lane" data-astro-cid-zitg5ur3> ${latestReleases.map((release) => {
    const brandColor = getBrandColorVar(release.product.slug);
    const brandColorRgb = getBrandColorRgb(release.product.slug);
    return renderTemplate`<div${addAttribute(`timeline-column ${release.isMajor ? "major" : "minor"}`, "class")}${addAttribute(`window.location.href='/releases/${release.product.slug}'`, "onclick")} data-astro-cid-zitg5ur3> <div${addAttribute(`timeline-node ${release.isMajor ? "major-node" : ""}`, "class")}${addAttribute(`--brand-color: ${brandColor}; --brand-color-rgb: ${brandColorRgb}`, "style")} data-astro-cid-zitg5ur3> <div class="node-icon-frame" data-astro-cid-zitg5ur3> ${release.product.logoUrl ? renderTemplate`<img${addAttribute(release.product.logoUrl, "src")} class="node-logo" alt="" width="20" height="20" decoding="async" data-astro-cid-zitg5ur3>` : renderTemplate`<span class="node-fallback" data-astro-cid-zitg5ur3>⚡</span>`} </div> <div class="node-info" data-astro-cid-zitg5ur3> <div style="display: flex; gap: 4px; align-items: center;" data-astro-cid-zitg5ur3> <div class="node-title" data-astro-cid-zitg5ur3>${release.product.name}</div> ${release.isMajor && renderTemplate`<span class="mini-major-indicator" title="Major Advancement" data-astro-cid-zitg5ur3>🚀</span>`} </div> <div class="node-date" data-astro-cid-zitg5ur3>${fmtTimelineDate(release.publishedAt ?? release.createdAt)}</div> </div> </div> <div${addAttribute(`timeline-dot ${release.isMajor ? "major-dot" : ""}`, "class")}${addAttribute(`--brand-color: ${brandColor}`, "style")} data-astro-cid-zitg5ur3></div> </div>`;
  })} </div> </div> </section> <!-- Filtering & Layout Controls --> <div class="controls-row" data-astro-cid-zitg5ur3> <div class="filter-bar" id="filter-bar" data-astro-cid-zitg5ur3> <button class="filter-chip active" data-cat="all" data-astro-cid-zitg5ur3>[ ALL PRODUCTS ]</button> <button class="filter-chip" data-cat="llm" data-astro-cid-zitg5ur3>[ LLMS ]</button> <button class="filter-chip" data-cat="agent" data-astro-cid-zitg5ur3>[ AGENTS ]</button> <button class="filter-chip" data-cat="coding" data-astro-cid-zitg5ur3>[ DEVELOPER TOOLS ]</button> </div> </div> <!-- Product Card Grid --> <section class="card-grid" id="product-grid" data-astro-cid-zitg5ur3> ${productData.map((product) => {
    const brandColor = getBrandColorVar(product.slug);
    const latestVersion = product.releases[0]?.version || "v.NEW";
    return renderTemplate`<article class="product-card"${addAttribute(product.category, "data-category")}${addAttribute(product.name.toLowerCase(), "data-name")}${addAttribute(`--brand-color: ${brandColor}`, "style")} data-astro-cid-zitg5ur3> <div class="card-header" data-astro-cid-zitg5ur3> <div class="card-title-row" data-astro-cid-zitg5ur3> ${product.logoUrl ? renderTemplate`<img${addAttribute(product.logoUrl, "src")} class="card-logo" alt="" width="24" height="24" decoding="async" data-astro-cid-zitg5ur3>` : renderTemplate`<div class="card-logo-fallback" data-astro-cid-zitg5ur3>⚡</div>`} <h3 class="card-title" data-astro-cid-zitg5ur3>${product.name}</h3> </div> <span class="version-badge" data-astro-cid-zitg5ur3>${latestVersion}</span> </div> <p class="card-desc" data-astro-cid-zitg5ur3>
Tracking architectural advancements, model specifications, and capability updates for ${product.name}.
</p> <div class="mini-timeline-section" data-astro-cid-zitg5ur3> <span class="mini-timeline-label" data-astro-cid-zitg5ur3>RELEASE PATTERN</span> <div class="mini-timeline" data-astro-cid-zitg5ur3> ${Array.from({ length: 5 }).map((_, i) => {
      const hasRelease = !!product.releases[i];
      if (hasRelease) {
        return renderTemplate`<div class="mini-dot active"${addAttribute(`--brand-color: ${brandColor}`, "style")}${addAttribute(product.releases[i].version || "Release", "title")} data-astro-cid-zitg5ur3></div>`;
      } else {
        return renderTemplate`<div class="mini-dot empty" data-astro-cid-zitg5ur3></div>`;
      }
    })} </div> </div> <a${addAttribute(`/releases/${product.slug}`, "href")} class="btn-view" data-astro-cid-zitg5ur3>[ VIEW DETAILS ]</a> </article>`;
  })} </section> </div> </main> ` })} ${renderScript($$result, "/Users/eric/work/openclaweco.com/website/src/pages/releases/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/releases/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/releases/index.astro";
const $$url = "/releases";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
