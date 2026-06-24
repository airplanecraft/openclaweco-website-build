import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { r as renderTemplate, b as renderComponent, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { g as getAllVariants } from './variants_CC1gBVGE.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Agent Products — Ecosystem Product Directory";
  const description = "Explore 20+ products and forks built on OpenClaw — from NVIDIA NemoClaw to community-driven lightweight alternatives.";
  const variants = await getAllVariants();
  const dailyStats = await getDailyStats();
  const typeInfo = {
    big_tech: { label: "Big Tech", icon: "🏢", color: "#3b82f6" },
    startup: { label: "Startup", icon: "🚀", color: "#f59e0b" },
    open_source: { label: "Open Source", icon: "🔓", color: "#10b981" },
    hosting: { label: "Hosting", icon: "☁️", color: "#8b5cf6" },
    hardware: { label: "Hardware", icon: "🔧", color: "#ef4444" },
    agent: { label: "Agent", icon: "🤖", color: "#ec4899" },
    Agent: { label: "Agent", icon: "🤖", color: "#ec4899" }
  };
  const types = [...new Set(variants.map((v) => v.type))];
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const searchInput = document.getElementById('variant-search');\n  \n  document.querySelectorAll('.filter-pill').forEach(btn => {\n    btn.addEventListener('click', () => {\n      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));\n      btn.classList.add('active');\n      filterGrid();\n    });\n  });\n\n  searchInput?.addEventListener('input', () => {\n    filterGrid();\n  });\n\n  function filterGrid() {\n    const t = document.querySelector('.filter-pill.active')?.dataset.type || 'all';\n    const q = searchInput?.value.toLowerCase() || '';\n    \n    document.querySelectorAll('.v-card').forEach(c => {\n      const typeMatch = t === 'all' || c.dataset.type === t;\n      const textMatch = !q || c.innerText.toLowerCase().includes(q);\n      c.style.display = typeMatch && textMatch ? '' : 'none';\n    });\n  }\n<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "en", "data-astro-cid-rnqo2yuk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="swiss-product-page" data-astro-cid-rnqo2yuk> <section class="page-hero" data-astro-cid-rnqo2yuk> <div class="container hero-container" data-astro-cid-rnqo2yuk> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Products" }
  ], "data-astro-cid-rnqo2yuk": true })} <h1 class="swiss-title" data-astro-cid-rnqo2yuk>Ecosystem <span class="focus-text" data-astro-cid-rnqo2yuk>Products</span></h1> <p class="swiss-lead" data-astro-cid-rnqo2yuk>SYSTEM // QUANTIFIED: 0${variants.length} // AGENT SYSTEM VARIANTS AND DEPLOYMENTS</p> <div class="today-bar-wrap" data-astro-cid-rnqo2yuk> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "products", "lang": "en", "data-astro-cid-rnqo2yuk": true })} </div> </div> </section> <section class="variants-section" data-astro-cid-rnqo2yuk> <div class="container" data-astro-cid-rnqo2yuk> <!-- Swiss Control Panel --> <div class="control-panel" data-astro-cid-rnqo2yuk> <div class="search-section" data-astro-cid-rnqo2yuk> <span class="section-tag" data-astro-cid-rnqo2yuk>SEARCH</span> <input type="text" id="variant-search" placeholder="Filter products, companies, descriptions..." class="search-input" data-astro-cid-rnqo2yuk> </div> <div class="filter-section" data-astro-cid-rnqo2yuk> <span class="section-tag" data-astro-cid-rnqo2yuk>CLASSIFICATION</span> <div class="filter-bar" data-astro-cid-rnqo2yuk> <button class="filter-pill active" data-type="all" data-astro-cid-rnqo2yuk>All (${variants.length})</button> ${types.map((t) => {
    const info = typeInfo[t];
    const count = variants.filter((v) => v.type === t).length;
    return renderTemplate`<button class="filter-pill"${addAttribute(t, "data-type")}${addAttribute(`--accent: ${info?.color ?? "#64748b"}`, "style")} data-astro-cid-rnqo2yuk> ${info?.label ?? t} (${count})
</button>`;
  })} </div> </div> </div> <!-- Grid --> <div class="variants-grid" data-astro-cid-rnqo2yuk> ${variants.map((v) => {
    const info = typeInfo[v.type];
    const color = info?.color ?? "#64748b";
    const displayName = v.nameEn || v.name;
    const displayCompany = v.companyEn || v.company;
    const displayDesc = v.descriptionEn || v.description;
    const displayFeatures = v.featuresEn && v.featuresEn.length > 0 ? v.featuresEn : v.features;
    return renderTemplate`<div class="v-card"${addAttribute(v.type, "data-type")} data-astro-cid-rnqo2yuk> <a${addAttribute(`/product/${v.slug}`, "href")} class="v-card-link"${addAttribute(`View details of ${displayName}`, "aria-label")} data-astro-cid-rnqo2yuk></a> <div class="v-card-header" data-astro-cid-rnqo2yuk> ${v.logo ? renderTemplate`<img${addAttribute(v.logo, "src")} alt="" class="v-icon" loading="lazy" width="100" height="100" decoding="async" data-astro-cid-rnqo2yuk>` : renderTemplate`<div class="v-icon-fallback"${addAttribute(`background: ${color}12; color: ${color}; border: 1px solid ${color}25`, "style")} data-astro-cid-rnqo2yuk> ${displayName.charAt(0)} </div>`} <div class="v-title-block" data-astro-cid-rnqo2yuk> <div class="v-name" data-astro-cid-rnqo2yuk>${displayName}</div> <div class="v-company" data-astro-cid-rnqo2yuk>${displayCompany}</div> </div> <span class="v-type"${addAttribute(`--type-color: ${color}`, "style")} data-astro-cid-rnqo2yuk>${info?.label || v.type}</span> </div> <p class="v-desc" data-astro-cid-rnqo2yuk>${displayDesc}</p> <div class="v-badges-row" data-astro-cid-rnqo2yuk> ${v.language && renderTemplate`<span class="v-badge lang" data-astro-cid-rnqo2yuk>${v.language}</span>`} <span class="v-badge country" data-astro-cid-rnqo2yuk>${v.country === "cn" ? "China" : "Global"}</span> ${v.pricing && renderTemplate`<span class="v-badge pricing" data-astro-cid-rnqo2yuk>${v.pricing}</span>`} ${v.status === "beta" && renderTemplate`<span class="v-badge beta" data-astro-cid-rnqo2yuk>Beta</span>`} </div> ${displayFeatures.length > 0 && renderTemplate`<div class="v-features-section" data-astro-cid-rnqo2yuk> <span class="section-tag" data-astro-cid-rnqo2yuk>CAPABILITIES</span> <div class="v-features-grid" data-astro-cid-rnqo2yuk> ${displayFeatures.slice(0, 3).map((f) => renderTemplate`<span class="v-feat" data-astro-cid-rnqo2yuk>${f}</span>`)} ${displayFeatures.length > 3 && renderTemplate`<span class="v-feat more" data-astro-cid-rnqo2yuk>+${displayFeatures.length - 3}</span>`} </div> </div>`} <div class="v-tags-section" data-astro-cid-rnqo2yuk> ${(Array.isArray(v.tags) ? v.tags : JSON.parse(typeof v.tags === "string" ? v.tags : "[]")).slice(0, 3).map(
      (t) => renderTemplate`<a${addAttribute(`/tags/${t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-")}`, "href")} class="v-tag-link" data-astro-cid-rnqo2yuk>#${t}</a>`
    )} </div> <div class="v-links" data-astro-cid-rnqo2yuk> ${v.websiteUrl && renderTemplate`<a${addAttribute(v.websiteUrl, "href")} target="_blank" rel="noopener" class="v-link" data-astro-cid-rnqo2yuk>Website ↗</a>`} ${v.githubUrl && renderTemplate`<a${addAttribute(v.githubUrl, "href")} target="_blank" rel="noopener" class="v-link" data-astro-cid-rnqo2yuk>GitHub ↗</a>`} ${v.skillHubUrl && renderTemplate`<a${addAttribute(v.skillHubUrl, "href")} target="_blank" rel="noopener" class="v-link focus" data-astro-cid-rnqo2yuk>Skills ↗</a>`} </div> </div>`;
  })} </div> </div> </section> </main> ` }));
}, "/Users/eric/work/openclaweco.com/website/src/pages/product/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/product/index.astro";
const $$url = "/product";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
