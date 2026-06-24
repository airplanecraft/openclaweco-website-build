import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { r as renderTemplate, b as renderComponent, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { g as getAllSkillMarkets } from './skills_BD3JmS3O.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const skillsData = await getAllSkillMarkets();
  const dailyStats = await getDailyStats();
  const title = "Skill Marketplaces — AgentUpdate.ai";
  const description = "Discover the best AI agent skill marketplaces, community collections, and developer toolkits across Claude, Cursor, OpenClaw, and more.";
  const typeInfo = {
    marketplace: { label: "Marketplace", icon: "🏪", color: "#3b82f6" },
    vendor: { label: "Vendor", icon: "🏢", color: "#8b5cf6" },
    awesome: { label: "Awesome List", icon: "⭐", color: "#f59e0b" },
    toolkit: { label: "Toolkit", icon: "🔧", color: "#10b981" }
  };
  const types = [...new Set(skillsData.map((s) => s.type))];
  const platformIcons = {
    claude: "🟣",
    cursor: "🔵",
    antigravity: "🟢",
    openclaw: "🟠",
    mcp: "🔗",
    chatgpt: "💚",
    tencent: "🟦",
    wechat: "💬"
  };
  return renderTemplate(_a || (_a = __template(["", " <script>\n  document.querySelectorAll('.filter-pill').forEach(btn => {\n    btn.addEventListener('click', () => {\n      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));\n      btn.classList.add('active');\n      const t = btn.dataset.type;\n      document.querySelectorAll('.sd-card').forEach(c => {\n        c.style.display = t === 'all' || c.dataset.type === t ? '' : 'none';\n      });\n    });\n  });\n<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "en", "data-astro-cid-w5zqxstw": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="swiss-skills-page" data-astro-cid-w5zqxstw> <section class="page-hero" data-astro-cid-w5zqxstw> <div class="container hero-container" data-astro-cid-w5zqxstw> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Skill Markets" }
  ], "data-astro-cid-w5zqxstw": true })} <h1 class="display-title" data-astro-cid-w5zqxstw>SKILLS <span class="accent-text" data-astro-cid-w5zqxstw>// Skill Marketplaces</span></h1> <p class="hero-stats" data-astro-cid-w5zqxstw>SYSTEM // INDEXED: 0${skillsData.length} // AGENT SYSTEM CAPABILITY DIRECTORY</p> <div class="today-bar-wrap" data-astro-cid-w5zqxstw> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "skills", "lang": "en", "data-astro-cid-w5zqxstw": true })} </div> </div> </section> <section class="skills-dir-section" data-astro-cid-w5zqxstw> <div class="container" data-astro-cid-w5zqxstw> <!-- Filter --> <div class="filter-bar" data-astro-cid-w5zqxstw> <button class="filter-pill active" data-type="all" data-astro-cid-w5zqxstw>All (${skillsData.length})</button> ${types.map((t) => {
    const info = typeInfo[t];
    const count = skillsData.filter((s) => s.type === t).length;
    return renderTemplate`<button class="filter-pill"${addAttribute(t, "data-type")}${addAttribute(`--accent: ${info?.color ?? "#888"}`, "style")} data-astro-cid-w5zqxstw> ${info?.icon} ${info?.label ?? t} (${count})
</button>`;
  })} </div> <!-- Grid --> <div class="skills-dir-grid" data-astro-cid-w5zqxstw> ${skillsData.map((s) => {
    const info = typeInfo[s.type];
    const color = info?.color ?? "#888";
    return renderTemplate`<div class="sd-card"${addAttribute(s.type, "data-type")} style="position:relative;" data-astro-cid-w5zqxstw> <a${addAttribute(s.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(s.nameEn ?? s.name, "aria-label")} style="position:absolute; inset:0; z-index:10;" data-astro-cid-w5zqxstw></a> <div class="sd-card-top" data-astro-cid-w5zqxstw> <div class="sd-icon"${addAttribute(`background: ${color}12; color: ${color}`, "style")} data-astro-cid-w5zqxstw>${(s.nameEn ?? s.name).charAt(0)}</div> <div data-astro-cid-w5zqxstw> <div class="sd-name" data-astro-cid-w5zqxstw>${s.nameEn ?? s.name}</div> <div class="sd-url" data-astro-cid-w5zqxstw>${s.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</div> </div> <span class="sd-type"${addAttribute(`background: ${color}12; color: ${color}`, "style")} data-astro-cid-w5zqxstw>${info?.icon} ${info?.label}</span> </div> <p class="sd-desc" data-astro-cid-w5zqxstw>${s.descriptionEn ?? s.description}</p> <div class="sd-platforms" data-astro-cid-w5zqxstw> ${s.platforms.map((p) => renderTemplate`<span class="sd-platform"${addAttribute(p, "title")} data-astro-cid-w5zqxstw>${platformIcons[p] ?? "🔹"} ${p}</span>`)} ${(Array.isArray(s.tags) ? s.tags : JSON.parse(typeof s.tags === "string" ? s.tags : "[]")).slice(0, 3).map(
      (t) => renderTemplate`<a${addAttribute(`/tags/${t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-")}`, "href")} class="sd-platform" style="text-transform:none; border-style:dashed; text-decoration:none; position:relative; z-index:20;" data-astro-cid-w5zqxstw>#${t}</a>`
    )} </div> ${(s.featuresEn ?? s.features).length > 0 && renderTemplate`<div class="sd-features" data-astro-cid-w5zqxstw> ${(s.featuresEn ?? s.features).slice(0, 4).map((f) => renderTemplate`<span class="sd-feat" data-astro-cid-w5zqxstw>${f}</span>`)} </div>`} <div class="sd-footer" style="position:relative; z-index:20;" data-astro-cid-w5zqxstw> ${s.pricing && renderTemplate`<span class="sd-pricing" data-astro-cid-w5zqxstw>${s.pricing}</span>`} <span class="sd-country" data-astro-cid-w5zqxstw>${s.country === "cn" ? "🇨🇳 China" : "🌍 Global"}</span> <a${addAttribute(s.url, "href")} target="_blank" rel="noopener noreferrer" class="sd-visit" style="text-decoration:none;" data-astro-cid-w5zqxstw>Visit ↗</a> </div> </div>`;
  })} </div> </div> </section> </main> ` }));
}, "/Users/eric/work/openclaweco.com/website/src/pages/skills/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/skills/index.astro";
const $$url = "/skills";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
