import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { g as getPublishedBlogPosts } from './blog_Bxjvca-5.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "en";
  const posts = await getPublishedBlogPosts();
  const dailyStats = await getDailyStats();
  function fmt(iso) {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog — AgentUpdate.ai", "description": "High-quality AI agent insights, technology updates, and deep architecture blogs from AgentUpdate.ai.", "lang": lang, "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="swiss-blog-page" data-astro-cid-5tznm7mj> <section class="page-hero" data-astro-cid-5tznm7mj> <div class="container hero-container" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Blog" }
  ], "data-astro-cid-5tznm7mj": true })} <h1 class="swiss-title" data-astro-cid-5tznm7mj>Tech <span class="focus-text" data-astro-cid-5tznm7mj>Insights</span></h1> <p class="swiss-lead" data-astro-cid-5tznm7mj>SYSTEM // PUBLISHED: 0${posts.length} // FRONTIER AGENTIC COMPUTING READOUTS</p> <div class="today-bar-wrap" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "news", "lang": "en", "data-astro-cid-5tznm7mj": true })} </div> </div> </section> <div class="container blog-list-container" data-astro-cid-5tznm7mj> ${posts.length === 0 ? renderTemplate`<div class="empty-msg" data-astro-cid-5tznm7mj>No blog posts published yet. Check back soon.</div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-5tznm7mj": true }, { "default": async ($$result3) => renderTemplate`${featuredPost && renderTemplate`<div class="featured-blog-section" data-astro-cid-5tznm7mj> <span class="section-tag" data-astro-cid-5tznm7mj>FEATURED ARTICLE</span> <div class="featured-blog-card" data-testid="blog-card" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${featuredPost.slug}`, "href")}${addAttribute(featuredPost.titleEn || featuredPost.title, "aria-label")} class="featured-card-link" data-astro-cid-5tznm7mj></a> <div class="featured-blog-card-img-wrapper" data-astro-cid-5tznm7mj> ${featuredPost.coverImage ? renderTemplate`<img class="featured-blog-card-img"${addAttribute(featuredPost.coverImage, "src")}${addAttribute(featuredPost.titleEn || featuredPost.title, "alt")} loading="eager" width="800" height="450" decoding="async" data-astro-cid-5tznm7mj>` : renderTemplate`<div class="placeholder-fallback" data-astro-cid-5tznm7mj>⚡</div>`} </div> <div class="featured-blog-card-body" data-astro-cid-5tznm7mj> <div class="agent-sig-badge" data-astro-cid-5tznm7mj>
AGENT-SYS // DEEP-SYNTHESIS
</div> <h2 class="featured-blog-title" data-astro-cid-5tznm7mj> ${featuredPost.titleEn || featuredPost.title} </h2> ${(featuredPost.summaryEn || featuredPost.summary) && renderTemplate`<p class="featured-blog-summary" data-astro-cid-5tznm7mj>${featuredPost.summaryEn || featuredPost.summary}</p>`} <div class="featured-blog-meta" data-astro-cid-5tznm7mj> <span class="meta-item" data-astro-cid-5tznm7mj>${fmt(featuredPost.publishedAt)}</span> ${featuredPost.author && renderTemplate`<span class="meta-item" data-astro-cid-5tznm7mj>By ${featuredPost.author}</span>`} </div> <div class="featured-blog-tags" data-astro-cid-5tznm7mj> ${featuredPost.tags.slice(0, 3).map((t) => renderTemplate`<a${addAttribute(`/tags/${t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-")}`, "href")} class="v-tag-link" data-astro-cid-5tznm7mj>#${t}</a>`)} </div> <span class="featured-read-action" data-astro-cid-5tznm7mj>
Read Full Article <span data-astro-cid-5tznm7mj>→</span> </span> </div> </div> </div>`}${secondaryPosts.length > 0 && renderTemplate`<div class="blog-grid-section" data-astro-cid-5tznm7mj> <span class="section-tag" data-astro-cid-5tznm7mj>EDITORIAL ARCHIVES</span> <div class="blog-editorial-grid" id="blog-list" data-astro-cid-5tznm7mj> ${secondaryPosts.map((p) => renderTemplate`<div class="blog-editorial-card" data-testid="blog-card" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${p.slug}`, "href")}${addAttribute(p.titleEn || p.title, "aria-label")} class="card-overlay-link" data-astro-cid-5tznm7mj></a> <div class="blog-editorial-card-img-wrapper" data-astro-cid-5tznm7mj> ${p.coverImage ? renderTemplate`<img class="blog-editorial-card-img"${addAttribute(p.coverImage, "src")}${addAttribute(p.titleEn || p.title, "alt")} loading="lazy" width="800" height="450" decoding="async" data-astro-cid-5tznm7mj>` : renderTemplate`<div class="placeholder-fallback" data-astro-cid-5tznm7mj>⚡</div>`} </div> <div class="blog-editorial-card-body" data-astro-cid-5tznm7mj> <div class="agent-sig-badge" data-astro-cid-5tznm7mj>
AGENT-SYS // HASH-SYNTH
</div> <h3 class="blog-editorial-card-title" data-astro-cid-5tznm7mj> ${p.titleEn || p.title} </h3> ${(p.summaryEn || p.summary) && renderTemplate`<p class="blog-editorial-card-summary" data-astro-cid-5tznm7mj>${p.summaryEn || p.summary}</p>`} <div class="blog-editorial-card-meta" data-astro-cid-5tznm7mj> <span class="meta-item" data-astro-cid-5tznm7mj>${fmt(p.publishedAt)}</span> ${p.author && renderTemplate`<span class="meta-item" data-astro-cid-5tznm7mj>By ${p.author}</span>`} </div> <div class="blog-editorial-tags" data-astro-cid-5tznm7mj> ${p.tags.slice(0, 2).map((t) => renderTemplate`<a${addAttribute(`/tags/${t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-")}`, "href")} class="v-tag-link" data-astro-cid-5tznm7mj>#${t}</a>`)} </div> </div> </div>`)} </div> </div>`}` })}`} </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/blog/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
