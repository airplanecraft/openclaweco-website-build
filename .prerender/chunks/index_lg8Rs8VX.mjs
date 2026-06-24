import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { g as getPublishedBlogPosts } from './blog_Bxjvca-5.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "zh";
  const posts = await getPublishedBlogPosts();
  const dailyStats = await getDailyStats();
  function fmt(iso) {
    return new Date(iso).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Shanghai"
    });
  }
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "技术博客 — AgentUpdate.ai", "description": "来自 AgentUpdate.ai 的深度技术博客、AI 智能体实践、以及系统架构深度剖析。", "lang": lang, "data-astro-cid-msoszkmk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="swiss-blog-page" data-astro-cid-msoszkmk> <section class="page-hero" data-astro-cid-msoszkmk> <div class="container hero-container" data-astro-cid-msoszkmk> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "技术博客" }
  ], "data-astro-cid-msoszkmk": true })} <h1 class="swiss-title" data-astro-cid-msoszkmk>Tech <span class="focus-text" data-astro-cid-msoszkmk>博客</span></h1> <p class="swiss-lead" data-astro-cid-msoszkmk>SYSTEM // PUBLISHED: 0${posts.length} // 前沿 AI 智能体技术解读专栏</p> <div class="today-bar-wrap" data-astro-cid-msoszkmk> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "news", "lang": "zh", "data-astro-cid-msoszkmk": true })} </div> </div> </section> <div class="container blog-list-container" data-astro-cid-msoszkmk> ${posts.length === 0 ? renderTemplate`<div class="empty-msg" data-astro-cid-msoszkmk>暂无博客文章，请稍后再来。</div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-msoszkmk": true }, { "default": async ($$result3) => renderTemplate`${featuredPost && renderTemplate`<div class="featured-blog-section" data-astro-cid-msoszkmk> <span class="section-tag" data-astro-cid-msoszkmk>推荐文章</span> <div class="featured-blog-card" data-testid="blog-card-zh" data-astro-cid-msoszkmk> <a${addAttribute(`/zh/blog/${featuredPost.slug}`, "href")}${addAttribute(featuredPost.title, "aria-label")} class="featured-card-link" data-astro-cid-msoszkmk></a> <div class="featured-blog-card-img-wrapper" data-astro-cid-msoszkmk> ${featuredPost.coverImage ? renderTemplate`<img class="featured-blog-card-img"${addAttribute(featuredPost.coverImage, "src")}${addAttribute(featuredPost.title, "alt")} loading="eager" width="800" height="450" decoding="async" data-astro-cid-msoszkmk>` : renderTemplate`<div class="placeholder-fallback" data-astro-cid-msoszkmk>⚡</div>`} </div> <div class="featured-blog-card-body" data-astro-cid-msoszkmk> <div class="agent-sig-badge" data-astro-cid-msoszkmk>
AGENT-SYS // DEEP-SYNTHESIS
</div> <h2 class="featured-blog-title" data-astro-cid-msoszkmk> ${featuredPost.title} </h2> ${featuredPost.summary && renderTemplate`<p class="featured-blog-summary" data-astro-cid-msoszkmk>${featuredPost.summary}</p>`} <div class="featured-blog-meta" data-astro-cid-msoszkmk> <span class="meta-item" data-astro-cid-msoszkmk>${fmt(featuredPost.publishedAt)}</span> ${featuredPost.author && renderTemplate`<span class="meta-item" data-astro-cid-msoszkmk>作者: ${featuredPost.author}</span>`} </div> <div class="featured-blog-tags" data-astro-cid-msoszkmk> ${featuredPost.tags.slice(0, 3).map((t) => renderTemplate`<a${addAttribute(`/zh/tags/${t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-")}`, "href")} class="v-tag-link" data-astro-cid-msoszkmk>#${t}</a>`)} </div> <span class="featured-read-action" data-astro-cid-msoszkmk>
阅读全文 <span data-astro-cid-msoszkmk>→</span> </span> </div> </div> </div>`}${secondaryPosts.length > 0 && renderTemplate`<div class="blog-grid-section" data-astro-cid-msoszkmk> <span class="section-tag" data-astro-cid-msoszkmk>博客归档</span> <div class="blog-editorial-grid" id="blog-list-zh" data-astro-cid-msoszkmk> ${secondaryPosts.map((p) => renderTemplate`<div class="blog-editorial-card" data-testid="blog-card-zh" data-astro-cid-msoszkmk> <a${addAttribute(`/zh/blog/${p.slug}`, "href")}${addAttribute(p.title, "aria-label")} class="card-overlay-link" data-astro-cid-msoszkmk></a> <div class="blog-editorial-card-img-wrapper" data-astro-cid-msoszkmk> ${p.coverImage ? renderTemplate`<img class="blog-editorial-card-img"${addAttribute(p.coverImage, "src")}${addAttribute(p.title, "alt")} loading="lazy" width="800" height="450" decoding="async" data-astro-cid-msoszkmk>` : renderTemplate`<div class="placeholder-fallback" data-astro-cid-msoszkmk>⚡</div>`} </div> <div class="blog-editorial-card-body" data-astro-cid-msoszkmk> <div class="agent-sig-badge" data-astro-cid-msoszkmk>
AGENT-SYS // HASH-SYNTH
</div> <h3 class="blog-editorial-card-title" data-astro-cid-msoszkmk> ${p.title} </h3> ${p.summary && renderTemplate`<p class="blog-editorial-card-summary" data-astro-cid-msoszkmk>${p.summary}</p>`} <div class="blog-editorial-card-meta" data-astro-cid-msoszkmk> <span class="meta-item" data-astro-cid-msoszkmk>${fmt(p.publishedAt)}</span> ${p.author && renderTemplate`<span class="meta-item" data-astro-cid-msoszkmk>作者: ${p.author}</span>`} </div> <div class="blog-editorial-tags" data-astro-cid-msoszkmk> ${p.tags.slice(0, 2).map((t) => renderTemplate`<a${addAttribute(`/zh/tags/${t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-")}`, "href")} class="v-tag-link" data-astro-cid-msoszkmk>#${t}</a>`)} </div> </div> </div>`)} </div> </div>`}` })}`} </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/blog/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/blog/index.astro";
const $$url = "/zh/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
