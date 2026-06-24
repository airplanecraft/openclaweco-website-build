import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { g as getApprovedArticles } from './articles_DuypiJQp.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "en";
  const articles = await getApprovedArticles();
  const dailyStats = await getDailyStats();
  function fmt(iso) {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "News — AgentUpdate.ai", "description": "Latest AI agent news, research, and ecosystem updates from AgentUpdate.ai.", "lang": lang, "data-astro-cid-xzrtoo6z": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-xzrtoo6z> <section class="page-hero" data-astro-cid-xzrtoo6z> <div class="container hero-container" data-astro-cid-xzrtoo6z> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "News" }
  ], "data-astro-cid-xzrtoo6z": true })} <h1 class="display-title" data-astro-cid-xzrtoo6z>AI ECOSYSTEM <span class="accent-text" data-astro-cid-xzrtoo6z>NEWS</span></h1> <p class="hero-stats" data-astro-cid-xzrtoo6z>${articles.length} dispatches published // Updated daily</p> <div class="today-bar-frame" data-astro-cid-xzrtoo6z> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "news", "lang": "en", "data-astro-cid-xzrtoo6z": true })} </div> </div> </section> <div class="container main-content-container" data-astro-cid-xzrtoo6z> ${articles.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-xzrtoo6z>
No articles published yet. Check back soon.
</div>` : renderTemplate`<div class="editorial-grid" id="news-list" data-astro-cid-xzrtoo6z> ${articles.map((a) => renderTemplate`<article class="editorial-card" data-testid="news-card" data-astro-cid-xzrtoo6z> <a${addAttribute(`/news/${a.slug}`, "href")}${addAttribute(a.titleEn ?? a.title, "aria-label")} class="card-cover-link" data-astro-cid-xzrtoo6z> ${a.coverImageEn ?? a.coverImage ? renderTemplate`<img class="card-img"${addAttribute(a.coverImageEn ?? a.coverImage, "src")} alt="" loading="lazy" width="800" height="450" decoding="async" data-astro-cid-xzrtoo6z>` : renderTemplate`<div class="card-img-placeholder" data-astro-cid-xzrtoo6z>NEWS // LOG</div>`} </a> <div class="card-body" data-astro-cid-xzrtoo6z> <div class="card-meta-row" data-astro-cid-xzrtoo6z> <span class="card-source-tag" data-astro-cid-xzrtoo6z>${a.source ? `SOURCE // ${a.source.toUpperCase()}` : "SYSTEM // INTEL"}</span> <time class="card-date" data-astro-cid-xzrtoo6z>${fmt(a.publishedAt)}</time> </div> <h2 class="card-title-heading" data-astro-cid-xzrtoo6z> <a${addAttribute(`/news/${a.slug}`, "href")} data-astro-cid-xzrtoo6z>${a.titleEn ?? a.title}</a> </h2> ${(a.summaryEn ?? a.summary) && renderTemplate`<p class="card-description-text" data-astro-cid-xzrtoo6z>${a.summaryEn ?? a.summary}</p>`} ${a.tags && a.tags.length > 0 && renderTemplate`<div class="card-tags-row" data-astro-cid-xzrtoo6z> ${a.tags.slice(0, 2).map((t) => renderTemplate`<a${addAttribute(`/tags/${t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-")}`, "href")} class="tag-pill" data-astro-cid-xzrtoo6z>#${t}</a>`)} </div>`} </div> </article>`)} </div>`} </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/news/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/news/index.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
