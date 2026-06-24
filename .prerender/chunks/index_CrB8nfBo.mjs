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
  const title = "Agent 产品图谱 — 生态产品目录";
  const description = "探索 20+ 个来自各大厂和开源社区的 AI Agent 智能体产品和分支 — 从 NVIDIA NemoClaw 到社区驱动的轻量级替代方案。";
  const variants = await getAllVariants();
  const dailyStats = await getDailyStats();
  const typeInfo = {
    big_tech: { label: "大厂产品", icon: "🏢", color: "#3b82f6" },
    startup: { label: "创业公司", icon: "🚀", color: "#f59e0b" },
    open_source: { label: "开源项目", icon: "🔓", color: "#10b981" },
    hosting: { label: "托管平台", icon: "☁️", color: "#8b5cf6" },
    hardware: { label: "硬件适配", icon: "🔧", color: "#ef4444" },
    agent: { label: "智能产品", icon: "🤖", color: "#ec4899" },
    Agent: { label: "智能产品", icon: "🤖", color: "#ec4899" }
  };
  const types = [...new Set(variants.map((v) => v.type))];
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const searchInput = document.getElementById('variant-search');\n  \n  document.querySelectorAll('.filter-pill').forEach(btn => {\n    btn.addEventListener('click', () => {\n      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));\n      btn.classList.add('active');\n      filterGrid();\n    });\n  });\n\n  searchInput?.addEventListener('input', () => {\n    filterGrid();\n  });\n\n  function filterGrid() {\n    const t = document.querySelector('.filter-pill.active')?.dataset.type || 'all';\n    const q = searchInput?.value.toLowerCase() || '';\n    \n    document.querySelectorAll('.v-card').forEach(c => {\n      const typeMatch = t === 'all' || c.dataset.type === t;\n      const textMatch = !q || c.innerText.toLowerCase().includes(q);\n      c.style.display = typeMatch && textMatch ? '' : 'none';\n    });\n  }\n<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "zh", "data-astro-cid-p4tn6xcb": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="swiss-product-page" data-astro-cid-p4tn6xcb> <section class="page-hero" data-astro-cid-p4tn6xcb> <div class="container hero-container" data-astro-cid-p4tn6xcb> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "智能产品" }
  ], "data-astro-cid-p4tn6xcb": true })} <h1 class="swiss-title" data-astro-cid-p4tn6xcb>Ecosystem <span class="focus-text" data-astro-cid-p4tn6xcb>产品</span></h1> <p class="swiss-lead" data-astro-cid-p4tn6xcb>SYSTEM // QUANTIFIED: 0${variants.length} // AGENT SYSTEM VARIANTS AND DEPLOYMENTS</p> <div class="today-bar-wrap" data-astro-cid-p4tn6xcb> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "products", "lang": "zh", "data-astro-cid-p4tn6xcb": true })} </div> </div> </section> <section class="variants-section" data-astro-cid-p4tn6xcb> <div class="container" data-astro-cid-p4tn6xcb> <!-- Swiss Control Panel --> <div class="control-panel" data-astro-cid-p4tn6xcb> <div class="search-section" data-astro-cid-p4tn6xcb> <span class="section-tag" data-astro-cid-p4tn6xcb>搜索产品</span> <input type="text" id="variant-search" placeholder="搜索产品名称、公司、描述..." class="search-input" data-astro-cid-p4tn6xcb> </div> <div class="filter-section" data-astro-cid-p4tn6xcb> <span class="section-tag" data-astro-cid-p4tn6xcb>分类筛选</span> <div class="filter-bar" data-astro-cid-p4tn6xcb> <button class="filter-pill active" data-type="all" data-astro-cid-p4tn6xcb>全部 (${variants.length})</button> ${types.map((t) => {
    const info = typeInfo[t];
    const count = variants.filter((v) => v.type === t).length;
    return renderTemplate`<button class="filter-pill"${addAttribute(t, "data-type")}${addAttribute(`--accent: ${info?.color ?? "#64748b"}`, "style")} data-astro-cid-p4tn6xcb> ${info?.label ?? t} (${count})
</button>`;
  })} </div> </div> </div> <!-- Grid --> <div class="variants-grid" data-astro-cid-p4tn6xcb> ${variants.map((v) => {
    const info = typeInfo[v.type];
    const color = info?.color ?? "#64748b";
    const displayName = v.name || v.nameEn;
    const displayCompany = v.company || v.companyEn;
    const displayDesc = v.description || v.descriptionEn;
    return renderTemplate`<div class="v-card"${addAttribute(v.type, "data-type")} data-astro-cid-p4tn6xcb> <a${addAttribute(`/zh/product/${v.slug}`, "href")} class="v-card-link"${addAttribute(`查看 ${displayName} 详情`, "aria-label")} data-astro-cid-p4tn6xcb></a> <div class="v-card-header" data-astro-cid-p4tn6xcb> ${v.logo ? renderTemplate`<img${addAttribute(v.logo, "src")} alt="" class="v-icon" loading="lazy" width="100" height="100" decoding="async" data-astro-cid-p4tn6xcb>` : renderTemplate`<div class="v-icon-fallback"${addAttribute(`background: ${color}12; color: ${color}; border: 1px solid ${color}25`, "style")} data-astro-cid-p4tn6xcb> ${displayName.charAt(0)} </div>`} <div class="v-title-block" data-astro-cid-p4tn6xcb> <div class="v-name" data-astro-cid-p4tn6xcb>${displayName}</div> <div class="v-company" data-astro-cid-p4tn6xcb>${displayCompany}</div> </div> <span class="v-type"${addAttribute(`--type-color: ${color}`, "style")} data-astro-cid-p4tn6xcb>${info?.label || v.type}</span> </div> <p class="v-desc" data-astro-cid-p4tn6xcb>${displayDesc}</p> <div class="v-badges-row" data-astro-cid-p4tn6xcb> ${v.language && renderTemplate`<span class="v-badge lang" data-astro-cid-p4tn6xcb>${v.language}</span>`} <span class="v-badge country" data-astro-cid-p4tn6xcb>${v.country === "cn" ? "中国" : "全球"}</span> ${v.pricing && renderTemplate`<span class="v-badge pricing" data-astro-cid-p4tn6xcb>${v.pricing}</span>`} ${v.status === "beta" && renderTemplate`<span class="v-badge beta" data-astro-cid-p4tn6xcb>测试期</span>`} </div> ${v.features.length > 0 && renderTemplate`<div class="v-features-section" data-astro-cid-p4tn6xcb> <span class="section-tag" data-astro-cid-p4tn6xcb>核心能力</span> <div class="v-features-grid" data-astro-cid-p4tn6xcb> ${v.features.slice(0, 3).map((f) => renderTemplate`<span class="v-feat" data-astro-cid-p4tn6xcb>${f}</span>`)} ${v.features.length > 3 && renderTemplate`<span class="v-feat more" data-astro-cid-p4tn6xcb>+${v.features.length - 3}</span>`} </div> </div>`} <div class="v-tags-section" data-astro-cid-p4tn6xcb> ${(Array.isArray(v.tags) ? v.tags : JSON.parse(typeof v.tags === "string" ? v.tags : "[]")).slice(0, 3).map(
      (t) => renderTemplate`<a${addAttribute(`/zh/tags/${t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-")}`, "href")} class="v-tag-link" data-astro-cid-p4tn6xcb>#${t}</a>`
    )} </div> <div class="v-links" data-astro-cid-p4tn6xcb> ${v.websiteUrl && renderTemplate`<a${addAttribute(v.websiteUrl, "href")} target="_blank" rel="noopener" class="v-link" data-astro-cid-p4tn6xcb>官网 ↗</a>`} ${v.githubUrl && renderTemplate`<a${addAttribute(v.githubUrl, "href")} target="_blank" rel="noopener" class="v-link" data-astro-cid-p4tn6xcb>GitHub ↗</a>`} ${v.skillHubUrl && renderTemplate`<a${addAttribute(v.skillHubUrl, "href")} target="_blank" rel="noopener" class="v-link focus" data-astro-cid-p4tn6xcb>技能市场 ↗</a>`} </div> </div>`;
  })} </div> </div> </section> </main> ` }));
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/product/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/product/index.astro";
const $$url = "/zh/product";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
