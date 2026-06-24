import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { r as renderTemplate, b as renderComponent, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { g as getAllPlugins } from './plugins_Ct6aVhnc.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pluginsData = await getAllPlugins();
  const dailyStats = await getDailyStats();
  const title = "插件图谱 — AgentUpdate.ai";
  const description = "探索 OpenClaw 生态系统中最全面的 AI Agent 插件和扩展集合。";
  const categoryInfo = {
    "dev-tools": { label: "开发工具", icon: "👨‍💻", color: "#3b82f6" },
    "productivity": { label: "效率工具", icon: "⚡", color: "#8b5cf6" },
    "data": { label: "数据分析", icon: "📊", color: "#10b981" },
    "communication": { label: "沟通协作", icon: "💬", color: "#f59e0b" },
    "cloud": { label: "云服务", icon: "☁️", color: "#0ea5e9" },
    "content": { label: "内容创作", icon: "📝", color: "#ec4899" },
    "search": { label: "搜索发现", icon: "🔍", color: "#6366f1" },
    "finance": { label: "金融理财", icon: "💰", color: "#eab308" },
    "security": { label: "安全防护", icon: "🔒", color: "#ef4444" },
    "iot": { label: "物联网", icon: "🔌", color: "#14b8a6" }
  };
  const categories = Object.keys(categoryInfo);
  return renderTemplate(_a || (_a = __template(["", " <script>\n  document.querySelectorAll('.filter-pill').forEach(btn => {\n    btn.addEventListener('click', () => {\n      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));\n      btn.classList.add('active');\n      const cat = btn.dataset.cat;\n      document.querySelectorAll('.pl-card').forEach(c => {\n        c.style.display = (cat === 'all' || c.dataset.category === cat) ? 'flex' : 'none';\n      });\n    });\n  });\n<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "zh", "data-astro-cid-xvh4sqxk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="swiss-plugins-page" data-astro-cid-xvh4sqxk> <section class="page-hero" data-astro-cid-xvh4sqxk> <div class="container hero-container" data-astro-cid-xvh4sqxk> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "插件市场" }
  ], "data-astro-cid-xvh4sqxk": true })} <h1 class="display-title" data-astro-cid-xvh4sqxk>PLUGINS <span class="accent-text" data-astro-cid-xvh4sqxk>// 插件市场</span></h1> <p class="hero-stats" data-astro-cid-xvh4sqxk>SYSTEM // INDEXED: 0${pluginsData.length} // AGENT SYSTEM PLUGINS AND CAPABILITIES</p> <div class="today-bar-wrap" data-astro-cid-xvh4sqxk> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "plugins", "lang": "zh", "data-astro-cid-xvh4sqxk": true })} </div> </div> </section> <section class="plugins-dir-section" data-astro-cid-xvh4sqxk> <div class="container" data-astro-cid-xvh4sqxk> <!-- Filter Bar --> <div class="filter-bar" data-astro-cid-xvh4sqxk> <button class="filter-pill active" data-cat="all" data-astro-cid-xvh4sqxk>全部 (${pluginsData.length})</button> ${categories.map((cat) => {
    const info = categoryInfo[cat];
    const count = pluginsData.filter((p) => p.category === cat).length;
    if (count === 0) return null;
    return renderTemplate`<button class="filter-pill"${addAttribute(cat, "data-cat")}${addAttribute(`--accent: ${info?.color}`, "style")} data-astro-cid-xvh4sqxk> ${info?.icon} ${info?.label} (${count})
</button>`;
  })} </div> <!-- Plugins Grid --> <div class="plugins-dir-grid" data-astro-cid-xvh4sqxk> ${pluginsData.map((p) => {
    const info = categoryInfo[p.category];
    const color = info?.color ?? "#888";
    return renderTemplate`<div class="pl-card"${addAttribute(p.category, "data-category")} data-astro-cid-xvh4sqxk> <div class="pl-card-top" data-astro-cid-xvh4sqxk> <div class="pl-icon"${addAttribute(`background: ${color}15; border: 1px solid ${color}33;`, "style")} data-astro-cid-xvh4sqxk> ${p.icon ? renderTemplate`<span style="font-size: 24px;" data-astro-cid-xvh4sqxk>${p.icon}</span>` : renderTemplate`<span${addAttribute(`color: ${color}; font-size: 20px; font-weight: 800;`, "style")} data-astro-cid-xvh4sqxk>${(p.nameEn ?? p.name).charAt(0)}</span>`} </div> <div class="pl-titles" data-astro-cid-xvh4sqxk> <div class="pl-name" data-astro-cid-xvh4sqxk>${p.name}</div> <div class="pl-author" data-astro-cid-xvh4sqxk>
由 ${p.authorUrl ? renderTemplate`<a${addAttribute(p.authorUrl, "href")} target="_blank" rel="noopener" data-astro-cid-xvh4sqxk>${p.author}</a>` : p.author} 开发
</div> </div> </div> <p class="pl-desc" data-astro-cid-xvh4sqxk>${p.description}</p> <div class="pl-metrics" data-astro-cid-xvh4sqxk> <span title="安装量" data-astro-cid-xvh4sqxk>⬇️ ${p.installCount > 1e3 ? (p.installCount / 1e3).toFixed(1) + "k" : p.installCount}</span> <span title="Stars" data-astro-cid-xvh4sqxk>⭐ ${p.stars > 1e3 ? (p.stars / 1e3).toFixed(1) + "k" : p.stars}</span> ${p.version && renderTemplate`<span title="版本号" data-astro-cid-xvh4sqxk>v${p.version}</span>`} <span class="pl-cat"${addAttribute(`background: ${color}15; color: ${color}`, "style")} data-astro-cid-xvh4sqxk>${info?.label}</span> </div> <div class="pl-footer" data-astro-cid-xvh4sqxk> <div class="pl-tags" data-astro-cid-xvh4sqxk> ${p.tags.slice(0, 3).map((t) => renderTemplate`<span class="pl-tag" data-astro-cid-xvh4sqxk>${t}</span>`)} </div> ${p.repoUrl && renderTemplate`<a${addAttribute(p.repoUrl, "href")} target="_blank" rel="noopener" class="pl-visit" data-astro-cid-xvh4sqxk>开源仓库 ↗</a>`} </div> </div>`;
  })} </div> </div> </section> </main> ` }));
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/plugins/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/plugins/index.astro";
const $$url = "/zh/plugins";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
