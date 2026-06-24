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
  const title = `Tag: #${tag} — AgentUpdate.ai`;
  const description = `Discover all Blogs, News, Products, Skills, and Plugins tagged with #${tag} on AgentUpdate.ai`;
  const vTypeInfo = {
    big_tech: { label: "Big Tech", color: "#3b82f6" },
    startup: { label: "Startup", color: "#f59e0b" },
    open_source: { label: "Open Source", color: "#10b981" },
    hosting: { label: "Hosting", color: "#8b5cf6" },
    hardware: { label: "Hardware", color: "#ef4444" }
  };
  const pCatInfo = {
    "dev-tools": { label: "Dev Tools", color: "#3b82f6" },
    "productivity": { label: "Productivity", color: "#8b5cf6" },
    "data": { label: "Data", color: "#10b981" },
    "communication": { label: "Comm", color: "#f59e0b" },
    "cloud": { label: "Cloud", color: "#0ea5e9" },
    "content": { label: "Content", color: "#ec4899" },
    "search": { label: "Search", color: "#6366f1" },
    "finance": { label: "Finance", color: "#eab308" },
    "security": { label: "Security", color: "#ef4444" },
    "iot": { label: "IoT", color: "#14b8a6" }
  };
  const sTypeInfo = {
    marketplace: { label: "Marketplace", color: "#3b82f6" },
    vendor: { label: "Vendor", color: "#8b5cf6" },
    awesome: { label: "Awesome List", color: "#f59e0b" },
    toolkit: { label: "Toolkit", color: "#10b981" }
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "en", "data-astro-cid-tge3q7ae": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-tge3q7ae> <section class="page-hero" data-astro-cid-tge3q7ae> <div class="container hero-container" data-astro-cid-tge3q7ae> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Tags", url: "/tags" },
    { label: tag }
  ], "data-astro-cid-tge3q7ae": true })} <h1 class="display-title" data-astro-cid-tge3q7ae>INDEX // <span class="accent-text" data-astro-cid-tge3q7ae>#${tag.toUpperCase()}</span></h1> <p class="hero-stats" data-astro-cid-tge3q7ae>SYSTEM // ACTIVE // AGGREGATED TELEMETRY FOR ECOSYSTEM NODE</p> </div> </section> <div class="container main-content-container" data-astro-cid-tge3q7ae> <!-- Products --> ${variants.length > 0 && renderTemplate`<section class="hub-section" data-astro-cid-tge3q7ae> <div class="section-header-readout" data-astro-cid-tge3q7ae> <span class="readout-category" data-astro-cid-tge3q7ae>PRODUCTS // Ecosystem Node</span> <span class="readout-total" data-astro-cid-tge3q7ae>TOTAL: 0${variants.length}</span> </div> <div class="hub-grid" data-astro-cid-tge3q7ae> ${variants.map((v) => {
    const info = vTypeInfo[v.type] || { label: v.type, color: "#888" };
    const tgs = parseTags(v.tags);
    return renderTemplate`<a${addAttribute(`/product/${v.slug}`, "href")} class="hub-card" data-astro-cid-tge3q7ae> <div class="h-top" data-astro-cid-tge3q7ae> <div class="h-icon"${addAttribute(`color:${info.color}; border-color:${info.color}40`, "style")} data-astro-cid-tge3q7ae>${v.nameEn?.charAt(0) || v.name.charAt(0)}</div> <div class="h-info" data-astro-cid-tge3q7ae> <div class="h-title" data-astro-cid-tge3q7ae>${v.nameEn || v.name}</div> <div class="h-sub"${addAttribute(`color:${info.color}`, "style")} data-astro-cid-tge3q7ae>${info.label.toUpperCase()}</div> </div> </div> <p class="h-desc" data-astro-cid-tge3q7ae>${v.descriptionEn || v.description}</p> <div class="h-tags" data-astro-cid-tge3q7ae> ${tgs.slice(0, 3).map((t) => renderTemplate`<span class="monospace-tag" data-astro-cid-tge3q7ae>#${t.toUpperCase()}</span>`)} </div> </a>`;
  })} </div> </section>`} <!-- Skills --> ${skills.length > 0 && renderTemplate`<section class="hub-section" data-astro-cid-tge3q7ae> <div class="section-header-readout" data-astro-cid-tge3q7ae> <span class="readout-category" data-astro-cid-tge3q7ae>SKILLS // Skill Markets</span> <span class="readout-total" data-astro-cid-tge3q7ae>TOTAL: 0${skills.length}</span> </div> <div class="hub-grid" data-astro-cid-tge3q7ae> ${skills.map((s) => {
    const info = sTypeInfo[s.type] || { label: s.type, color: "#888" };
    const tgs = parseTags(s.tags);
    return renderTemplate`<a${addAttribute(s.url, "href")} target="_blank" rel="noopener" class="hub-card" data-astro-cid-tge3q7ae> <div class="h-top" data-astro-cid-tge3q7ae> <div class="h-icon"${addAttribute(`color:${info.color}; border-color:${info.color}40`, "style")} data-astro-cid-tge3q7ae>${s.nameEn?.charAt(0) || s.name.charAt(0)}</div> <div class="h-info" data-astro-cid-tge3q7ae> <div class="h-title" data-astro-cid-tge3q7ae>${s.nameEn || s.name}</div> <div class="h-sub"${addAttribute(`color:${info.color}`, "style")} data-astro-cid-tge3q7ae>${info.label.toUpperCase()}</div> </div> </div> <p class="h-desc" data-astro-cid-tge3q7ae>${s.descriptionEn || s.description}</p> <div class="h-tags" data-astro-cid-tge3q7ae> ${tgs.slice(0, 3).map((t) => renderTemplate`<span class="monospace-tag" data-astro-cid-tge3q7ae>#${t.toUpperCase()}</span>`)} </div> </a>`;
  })} </div> </section>`} <!-- Plugins --> ${plugins.length > 0 && renderTemplate`<section class="hub-section" data-astro-cid-tge3q7ae> <div class="section-header-readout" data-astro-cid-tge3q7ae> <span class="readout-category" data-astro-cid-tge3q7ae>PLUGINS // Integrations</span> <span class="readout-total" data-astro-cid-tge3q7ae>TOTAL: 0${plugins.length}</span> </div> <div class="hub-grid" data-astro-cid-tge3q7ae> ${plugins.map((p) => {
    const info = pCatInfo[p.category] || { label: p.category, color: "#888" };
    const tgs = parseTags(p.tags);
    return renderTemplate`<a${addAttribute(p.repoUrl || "#", "href")}${addAttribute(p.repoUrl ? "_blank" : "_self", "target")} rel="noopener" class="hub-card" data-astro-cid-tge3q7ae> <div class="h-top" data-astro-cid-tge3q7ae> <div class="h-icon"${addAttribute(`color:${info.color}; border-color:${info.color}40`, "style")} data-astro-cid-tge3q7ae>${p.icon || p.nameEn?.charAt(0) || p.name.charAt(0)}</div> <div class="h-info" data-astro-cid-tge3q7ae> <div class="h-title" data-astro-cid-tge3q7ae>${p.nameEn || p.name}</div> <div class="h-sub"${addAttribute(`color:${info.color}`, "style")} data-astro-cid-tge3q7ae>${info.label.toUpperCase()}</div> </div> </div> <p class="h-desc" data-astro-cid-tge3q7ae>${p.descriptionEn || p.description}</p> <div class="h-tags" data-astro-cid-tge3q7ae> ${tgs.slice(0, 3).map((t) => renderTemplate`<span class="monospace-tag" data-astro-cid-tge3q7ae>#${t.toUpperCase()}</span>`)} </div> </a>`;
  })} </div> </section>`} <!-- News --> ${articles.length > 0 && renderTemplate`<section class="hub-section" data-astro-cid-tge3q7ae> <div class="section-header-readout" data-astro-cid-tge3q7ae> <span class="readout-category" data-astro-cid-tge3q7ae>NEWS // Latest Activity</span> <span class="readout-total" data-astro-cid-tge3q7ae>TOTAL: 0${articles.length}</span> </div> <div class="hub-grid" data-astro-cid-tge3q7ae> ${articles.map((a) => {
    const tgs = parseTags(a.tags);
    return renderTemplate`<a${addAttribute(`/news/${a.slug}`, "href")} class="hub-card news-card" data-astro-cid-tge3q7ae> <div class="news-cover-container" data-astro-cid-tge3q7ae> ${a.coverImageEn ? renderTemplate`<img${addAttribute(a.coverImageEn, "src")}${addAttribute(a.titleEn || a.title, "alt")} class="news-cover-img" loading="lazy" data-astro-cid-tge3q7ae>` : a.coverImage ? renderTemplate`<img${addAttribute(a.coverImage, "src")}${addAttribute(a.titleEn || a.title, "alt")} class="news-cover-img" loading="lazy" data-astro-cid-tge3q7ae>` : renderTemplate`<div class="news-cover-fallback" data-astro-cid-tge3q7ae> <span class="fallback-telemetry" data-astro-cid-tge3q7ae>IMAGE // READOUT // NULL</span> </div>`} </div> <div class="news-body-content" data-astro-cid-tge3q7ae> <div class="h-title" data-astro-cid-tge3q7ae>${a.titleEn || a.title}</div> <div class="h-tags" data-astro-cid-tge3q7ae> ${tgs.slice(0, 3).map((t) => renderTemplate`<span class="monospace-tag" data-astro-cid-tge3q7ae>#${t.toUpperCase()}</span>`)} </div> </div> </a>`;
  })} </div> </section>`} <!-- Blog Posts --> ${blogPosts && blogPosts.length > 0 && renderTemplate`<section class="hub-section" data-astro-cid-tge3q7ae> <div class="section-header-readout" data-astro-cid-tge3q7ae> <span class="readout-category" data-astro-cid-tge3q7ae>BLOGS // Technical Insights</span> <span class="readout-total" data-astro-cid-tge3q7ae>TOTAL: 0${blogPosts.length}</span> </div> <div class="hub-grid" data-astro-cid-tge3q7ae> ${blogPosts.map((b) => {
    const tgs = parseTags(b.tags);
    return renderTemplate`<a${addAttribute(`/blog/${b.slug}`, "href")} class="hub-card news-card" data-astro-cid-tge3q7ae> <div class="news-cover-container" data-astro-cid-tge3q7ae> ${b.coverImage ? renderTemplate`<img${addAttribute(b.coverImage, "src")}${addAttribute(b.titleEn || b.title, "alt")} class="news-cover-img" loading="lazy" data-astro-cid-tge3q7ae>` : renderTemplate`<div class="news-cover-fallback" data-astro-cid-tge3q7ae> <span class="fallback-telemetry" data-astro-cid-tge3q7ae>IMAGE // READOUT // NULL</span> </div>`} </div> <div class="news-body-content" data-astro-cid-tge3q7ae> <div class="h-title" data-astro-cid-tge3q7ae>${b.titleEn || b.title}</div> <div class="h-tags" data-astro-cid-tge3q7ae> ${tgs.slice(0, 3).map((t) => renderTemplate`<span class="monospace-tag" data-astro-cid-tge3q7ae>#${t.toUpperCase()}</span>`)} </div> </div> </a>`;
  })} </div> </section>`} </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/tags/[tag].astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
