import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getAllTags, a as getItemsForTag } from './tags_BJSnwKLq.mjs';

async function getStaticPaths() {
  const tags = await getAllTags();
  return tags.map((t) => ({
    params: { tag: t.name.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-") }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { articles, variants, skills, plugins, blogPosts } = await getItemsForTag(tag);
  const title = `标签: #${tag} — AgentUpdate.ai`;
  const description = `在 AgentUpdate.ai 探索所有关于 #${tag} 的博客、新闻、衍生产品、技能库和插件`;
  const vTypeInfo = {
    big_tech: { label: "科技巨头", color: "#3b82f6" },
    startup: { label: "初创公司", color: "#f59e0b" },
    open_source: { label: "开源社区", color: "#10b981" },
    hosting: { label: "托管服务", color: "#8b5cf6" },
    hardware: { label: "硬件设备", color: "#ef4444" }
  };
  const pCatInfo = {
    "dev-tools": { label: "开发工具", color: "#3b82f6" },
    "productivity": { label: "效率", color: "#8b5cf6" },
    "data": { label: "数据分析", color: "#10b981" },
    "communication": { label: "沟通协作", color: "#f59e0b" },
    "cloud": { label: "云服务", color: "#0ea5e9" },
    "content": { label: "内容创作", color: "#ec4899" },
    "search": { label: "搜索爬虫", color: "#6366f1" },
    "finance": { label: "金融理财", color: "#eab308" },
    "security": { label: "安全防护", color: "#ef4444" },
    "iot": { label: "物联网", color: "#14b8a6" }
  };
  const sTypeInfo = {
    marketplace: { label: "综合市场", color: "#3b82f6" },
    vendor: { label: "官方市场", color: "#8b5cf6" },
    awesome: { label: "精选资源", color: "#f59e0b" },
    toolkit: { label: "开发套件", color: "#10b981" }
  };
  function parseTags(itemTags) {
    if (Array.isArray(itemTags)) return itemTags;
    if (typeof itemTags === "string") {
      try {
        const parsed = JSON.parse(itemTags);
        if (Array.isArray(parsed)) return parsed;
      } catch {
      }
    }
    return [];
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "zh", "data-astro-cid-e6et34wn": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-e6et34wn> <section class="page-hero" data-astro-cid-e6et34wn> <div class="container hero-container" data-astro-cid-e6et34wn> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "标签", url: "/zh/tags" },
    { label: tag }
  ], "data-astro-cid-e6et34wn": true })} <h1 class="display-title" data-astro-cid-e6et34wn>INDEX // <span class="accent-text" data-astro-cid-e6et34wn>#${tag.toUpperCase()}</span></h1> <p class="hero-stats" data-astro-cid-e6et34wn>SYSTEM // ACTIVE // AGGREGATED TELEMETRY FOR ECOSYSTEM NODE</p> </div> </section> <div class="container main-content-container" data-astro-cid-e6et34wn> <!-- Products --> ${variants.length > 0 && renderTemplate`<section class="hub-section" data-astro-cid-e6et34wn> <div class="section-header-readout" data-astro-cid-e6et34wn> <span class="readout-category" data-astro-cid-e6et34wn>PRODUCTS // 关联产品</span> <span class="readout-total" data-astro-cid-e6et34wn>TOTAL: 0${variants.length}</span> </div> <div class="hub-grid" data-astro-cid-e6et34wn> ${variants.map((v) => {
    const info = vTypeInfo[v.type] || { label: v.type, color: "#888" };
    const tgs = parseTags(v.tags);
    return renderTemplate`<a${addAttribute(`/zh/product/${v.slug}`, "href")} class="hub-card" data-astro-cid-e6et34wn> <div class="h-top" data-astro-cid-e6et34wn> <div class="h-icon"${addAttribute(`color:${info.color}; border-color:${info.color}40`, "style")} data-astro-cid-e6et34wn>${v.name.charAt(0)}</div> <div class="h-info" data-astro-cid-e6et34wn> <div class="h-title" data-astro-cid-e6et34wn>${v.name}</div> <div class="h-sub"${addAttribute(`color:${info.color}`, "style")} data-astro-cid-e6et34wn>${info.label.toUpperCase()}</div> </div> </div> <p class="h-desc" data-astro-cid-e6et34wn>${v.description}</p> <div class="h-tags" data-astro-cid-e6et34wn> ${tgs.slice(0, 3).map((t) => renderTemplate`<span class="monospace-tag" data-astro-cid-e6et34wn>#${t.toUpperCase()}</span>`)} </div> </a>`;
  })} </div> </section>`} <!-- Skills --> ${skills.length > 0 && renderTemplate`<section class="hub-section" data-astro-cid-e6et34wn> <div class="section-header-readout" data-astro-cid-e6et34wn> <span class="readout-category" data-astro-cid-e6et34wn>SKILLS // 技能市场</span> <span class="readout-total" data-astro-cid-e6et34wn>TOTAL: 0${skills.length}</span> </div> <div class="hub-grid" data-astro-cid-e6et34wn> ${skills.map((s) => {
    const info = sTypeInfo[s.type] || { label: s.type, color: "#888" };
    const tgs = parseTags(s.tags);
    return renderTemplate`<a${addAttribute(s.url, "href")} target="_blank" rel="noopener" class="hub-card" data-astro-cid-e6et34wn> <div class="h-top" data-astro-cid-e6et34wn> <div class="h-icon"${addAttribute(`color:${info.color}; border-color:${info.color}40`, "style")} data-astro-cid-e6et34wn>${s.name.charAt(0)}</div> <div class="h-info" data-astro-cid-e6et34wn> <div class="h-title" data-astro-cid-e6et34wn>${s.name}</div> <div class="h-sub"${addAttribute(`color:${info.color}`, "style")} data-astro-cid-e6et34wn>${info.label.toUpperCase()}</div> </div> </div> <p class="h-desc" data-astro-cid-e6et34wn>${s.description}</p> <div class="h-tags" data-astro-cid-e6et34wn> ${tgs.slice(0, 3).map((t) => renderTemplate`<span class="monospace-tag" data-astro-cid-e6et34wn>#${t.toUpperCase()}</span>`)} </div> </a>`;
  })} </div> </section>`} <!-- Plugins --> ${plugins.length > 0 && renderTemplate`<section class="hub-section" data-astro-cid-e6et34wn> <div class="section-header-readout" data-astro-cid-e6et34wn> <span class="readout-category" data-astro-cid-e6et34wn>PLUGINS // 专配插件</span> <span class="readout-total" data-astro-cid-e6et34wn>TOTAL: 0${plugins.length}</span> </div> <div class="hub-grid" data-astro-cid-e6et34wn> ${plugins.map((p) => {
    const info = pCatInfo[p.category] || { label: p.category, color: "#888" };
    const tgs = parseTags(p.tags);
    return renderTemplate`<a${addAttribute(p.repoUrl || "#", "href")}${addAttribute(p.repoUrl ? "_blank" : "_self", "target")} rel="noopener" class="hub-card" data-astro-cid-e6et34wn> <div class="h-top" data-astro-cid-e6et34wn> <div class="h-icon"${addAttribute(`color:${info.color}; border-color:${info.color}40`, "style")} data-astro-cid-e6et34wn>${p.icon || p.name.charAt(0)}</div> <div class="h-info" data-astro-cid-e6et34wn> <div class="h-title" data-astro-cid-e6et34wn>${p.name}</div> <div class="h-sub"${addAttribute(`color:${info.color}`, "style")} data-astro-cid-e6et34wn>${info.label.toUpperCase()}</div> </div> </div> <p class="h-desc" data-astro-cid-e6et34wn>${p.description}</p> <div class="h-tags" data-astro-cid-e6et34wn> ${tgs.slice(0, 3).map((t) => renderTemplate`<span class="monospace-tag" data-astro-cid-e6et34wn>#${t.toUpperCase()}</span>`)} </div> </a>`;
  })} </div> </section>`} <!-- News --> ${articles.length > 0 && renderTemplate`<section class="hub-section" data-astro-cid-e6et34wn> <div class="section-header-readout" data-astro-cid-e6et34wn> <span class="readout-category" data-astro-cid-e6et34wn>NEWS // 最新资讯</span> <span class="readout-total" data-astro-cid-e6et34wn>TOTAL: 0${articles.length}</span> </div> <div class="hub-grid" data-astro-cid-e6et34wn> ${articles.map((a) => {
    const tgs = parseTags(a.tags);
    return renderTemplate`<a${addAttribute(`/zh/news/${a.slug}`, "href")} class="hub-card news-card" data-astro-cid-e6et34wn> <div class="news-cover-container" data-astro-cid-e6et34wn> ${a.coverImage ? renderTemplate`<img${addAttribute(a.coverImage, "src")}${addAttribute(a.title, "alt")} class="news-cover-img" loading="lazy" data-astro-cid-e6et34wn>` : renderTemplate`<div class="news-cover-fallback" data-astro-cid-e6et34wn> <span class="fallback-telemetry" data-astro-cid-e6et34wn>IMAGE // READOUT // NULL</span> </div>`} </div> <div class="news-body-content" data-astro-cid-e6et34wn> <div class="h-title" data-astro-cid-e6et34wn>${a.title}</div> <div class="h-tags" data-astro-cid-e6et34wn> ${tgs.slice(0, 3).map((t) => renderTemplate`<span class="monospace-tag" data-astro-cid-e6et34wn>#${t.toUpperCase()}</span>`)} </div> </div> </a>`;
  })} </div> </section>`} <!-- Blog Posts --> ${blogPosts && blogPosts.length > 0 && renderTemplate`<section class="hub-section" data-astro-cid-e6et34wn> <div class="section-header-readout" data-astro-cid-e6et34wn> <span class="readout-category" data-astro-cid-e6et34wn>BLOGS // 技术深度洞察</span> <span class="readout-total" data-astro-cid-e6et34wn>总计: 0${blogPosts.length}</span> </div> <div class="hub-grid" data-astro-cid-e6et34wn> ${blogPosts.map((b) => {
    const tgs = parseTags(b.tags);
    return renderTemplate`<a${addAttribute(`/zh/blog/${b.slug}`, "href")} class="hub-card news-card" data-astro-cid-e6et34wn> <div class="news-cover-container" data-astro-cid-e6et34wn> ${b.coverImage ? renderTemplate`<img${addAttribute(b.coverImage, "src")}${addAttribute(b.title, "alt")} class="news-cover-img" loading="lazy" data-astro-cid-e6et34wn>` : renderTemplate`<div class="news-cover-fallback" data-astro-cid-e6et34wn> <span class="fallback-telemetry" data-astro-cid-e6et34wn>IMAGE // READOUT // NULL</span> </div>`} </div> <div class="news-body-content" data-astro-cid-e6et34wn> <div class="h-title" data-astro-cid-e6et34wn>${b.title}</div> <div class="h-tags" data-astro-cid-e6et34wn> ${tgs.slice(0, 3).map((t) => renderTemplate`<span class="monospace-tag" data-astro-cid-e6et34wn>#${t.toUpperCase()}</span>`)} </div> </div> </a>`;
  })} </div> </section>`} </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/tags/[tag].astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/tags/[tag].astro";
const $$url = "/zh/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
