import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { r as renderScript } from './script_BnvikXWp.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { g as getAllPlugins } from './plugins_Ct6aVhnc.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pluginsData = await getAllPlugins();
  const dailyStats = await getDailyStats();
  const title = "Plugin Registry — AgentUpdate.ai";
  const description = "Explore the ultimate collection of AI agent plugins and extensions for the OpenClaw ecosystem.";
  const categoryInfo = {
    "dev-tools": { label: "Dev Tools", color: "#3b82f6" },
    "productivity": { label: "Productivity", color: "#8b5cf6" },
    "data": { label: "Data Analysis", color: "#10b981" },
    "communication": { label: "Communication", color: "#f59e0b" },
    "cloud": { label: "Cloud", color: "#0ea5e9" },
    "content": { label: "Content Gen", color: "#ec4899" },
    "search": { label: "Search/Web", color: "#6366f1" },
    "finance": { label: "Finance", color: "#eab308" },
    "security": { label: "Security", color: "#ef4444" },
    "iot": { label: "IoT/Smart", color: "#14b8a6" }
  };
  const categories = Object.keys(categoryInfo);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "en", "data-astro-cid-iiwaxleo": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="swiss-plugins-page" data-astro-cid-iiwaxleo> <section class="page-hero" data-astro-cid-iiwaxleo> <div class="container hero-container" data-astro-cid-iiwaxleo> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Plugins" }
  ], "data-astro-cid-iiwaxleo": true })} <h1 class="display-title" data-astro-cid-iiwaxleo>PLUGINS <span class="accent-text" data-astro-cid-iiwaxleo>// Plugin Registry</span></h1> <p class="hero-stats" data-astro-cid-iiwaxleo>SYSTEM // INDEXED: 0${pluginsData.length} // AGENT SYSTEM PLUGINS AND CAPABILITIES</p> <div class="today-bar-wrap" data-astro-cid-iiwaxleo> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "plugins", "lang": "en", "data-astro-cid-iiwaxleo": true })} </div> </div> </section> <section class="plugins-dir-section" data-astro-cid-iiwaxleo> <div class="container main-content-container" data-astro-cid-iiwaxleo> <!-- Filter Bar --> <div class="filter-bar" data-astro-cid-iiwaxleo> <button class="filter-pill active" data-cat="all" data-astro-cid-iiwaxleo>[ ALL (${pluginsData.length}) ]</button> ${categories.map((cat) => {
    const info = categoryInfo[cat];
    const count = pluginsData.filter((p) => p.category === cat).length;
    if (count === 0) return null;
    return renderTemplate`<button class="filter-pill"${addAttribute(cat, "data-cat")}${addAttribute(`--accent-color: ${info?.color}`, "style")} data-astro-cid-iiwaxleo>
[ ${info?.label.toUpperCase()} (${count}) ]
</button>`;
  })} </div> <!-- Plugins Grid --> <div class="plugins-dir-grid" data-astro-cid-iiwaxleo> ${pluginsData.map((p) => {
    const info = categoryInfo[p.category];
    const color = info?.color ?? "var(--muted)";
    return renderTemplate`<article class="pl-card"${addAttribute(p.category, "data-category")}${addAttribute(`--brand-color: ${color}`, "style")} data-astro-cid-iiwaxleo> <div class="pl-card-top" data-astro-cid-iiwaxleo> <div class="pl-icon" data-astro-cid-iiwaxleo> <span class="pl-icon-char" data-astro-cid-iiwaxleo>${(p.nameEn ?? p.name).charAt(0).toUpperCase()}</span> </div> <div class="pl-titles" data-astro-cid-iiwaxleo> <h2 class="pl-name" data-astro-cid-iiwaxleo>${p.nameEn ?? p.name}</h2> <div class="pl-author" data-astro-cid-iiwaxleo> ${p.authorUrl ? renderTemplate`<a${addAttribute(p.authorUrl, "href")} target="_blank" rel="noopener" data-astro-cid-iiwaxleo>BY ${p.author.toUpperCase()}</a>` : `BY ${p.author.toUpperCase()}`} </div> </div> </div> <p class="pl-desc" data-astro-cid-iiwaxleo>${p.descriptionEn ?? p.description}</p> <div class="pl-metrics" data-astro-cid-iiwaxleo> <span data-astro-cid-iiwaxleo>INSTALLS // ${p.installCount > 1e3 ? (p.installCount / 1e3).toFixed(1) + "k" : p.installCount}</span> <span data-astro-cid-iiwaxleo>STARS // ${p.stars > 1e3 ? (p.stars / 1e3).toFixed(1) + "k" : p.stars}</span> ${p.version && renderTemplate`<span data-astro-cid-iiwaxleo>V // ${p.version}</span>`} <span class="pl-cat" data-astro-cid-iiwaxleo>${info?.label.toUpperCase()}</span> </div> <div class="pl-footer" data-astro-cid-iiwaxleo> <div class="pl-tags" data-astro-cid-iiwaxleo> ${p.tags.slice(0, 3).map((t) => renderTemplate`<span class="pl-tag-pill" data-astro-cid-iiwaxleo>#${t.toUpperCase()}</span>`)} </div> ${p.repoUrl && renderTemplate`<a${addAttribute(p.repoUrl, "href")} target="_blank" rel="noopener" class="pl-visit" data-astro-cid-iiwaxleo>[ SOURCE → ]</a>`} </div> </article>`;
  })} </div> </div> </section> </main> ` })} ${renderScript($$result, "/Users/eric/work/openclaweco.com/website/src/pages/plugins/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/plugins/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/plugins/index.astro";
const $$url = "/plugins";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
