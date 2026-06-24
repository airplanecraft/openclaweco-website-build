import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { g as getApprovedArticles } from './articles_DuypiJQp.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "zh";
  const articles = await getApprovedArticles();
  const dailyStats = await getDailyStats();
  function fmt(iso) {
    return new Date(iso).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Shanghai"
    });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "新闻 — AgentUpdate.ai", "description": "AgentUpdate.ai 为您聚合最新 AI Agent 新闻、工具与生态动态。", "lang": lang, "keywords": ["AI智能体", "AI工具", "自主智能体", "人工智能", "LLM插件", "AgentUpdate"], "data-astro-cid-lyhn2ezm": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-lyhn2ezm> <section class="page-hero" data-astro-cid-lyhn2ezm> <div class="container hero-container" data-astro-cid-lyhn2ezm> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "新闻资讯" }
  ], "data-astro-cid-lyhn2ezm": true })} <h1 class="display-title" data-astro-cid-lyhn2ezm>AI 生态<span class="accent-text" data-astro-cid-lyhn2ezm>新闻资讯</span></h1> <p class="hero-stats" data-astro-cid-lyhn2ezm>共 ${articles.length} 篇已发布资讯 // 每日更新</p> <div class="today-bar-frame" data-astro-cid-lyhn2ezm> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "news", "lang": "zh", "data-astro-cid-lyhn2ezm": true })} </div> </div> </section> <div class="container main-content-container" data-astro-cid-lyhn2ezm> ${articles.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-lyhn2ezm>
暂无已发布资讯，请稍后再来。
</div>` : renderTemplate`<div class="editorial-grid" id="news-list-zh" data-astro-cid-lyhn2ezm> ${articles.map((a) => renderTemplate`<article class="editorial-card" data-testid="news-card-zh" data-astro-cid-lyhn2ezm> <a${addAttribute(`/zh/news/${a.slug}`, "href")}${addAttribute(a.title, "aria-label")} class="card-cover-link" data-astro-cid-lyhn2ezm> ${a.coverImage ? renderTemplate`<img class="card-img"${addAttribute(a.coverImage, "src")} alt="" loading="lazy" width="800" height="450" decoding="async" data-astro-cid-lyhn2ezm>` : renderTemplate`<div class="card-img-placeholder" data-astro-cid-lyhn2ezm>NEWS // LOG</div>`} </a> <div class="card-body" data-astro-cid-lyhn2ezm> <div class="card-meta-row" data-astro-cid-lyhn2ezm> <span class="card-source-tag" data-astro-cid-lyhn2ezm>${a.source ? `SOURCE // ${a.source.toUpperCase()}` : "SYSTEM // INTEL"}</span> <time class="card-date" data-astro-cid-lyhn2ezm>${fmt(a.publishedAt)}</time> </div> <h2 class="card-title-heading" data-astro-cid-lyhn2ezm> <a${addAttribute(`/zh/news/${a.slug}`, "href")} data-astro-cid-lyhn2ezm>${a.title}</a> </h2> ${a.summary && renderTemplate`<p class="card-description-text" data-astro-cid-lyhn2ezm>${a.summary}</p>`} ${a.tags && a.tags.length > 0 && renderTemplate`<div class="card-tags-row" data-astro-cid-lyhn2ezm> ${a.tags.slice(0, 2).map((t) => renderTemplate`<a${addAttribute(`/zh/tags/${t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-")}`, "href")} class="tag-pill" data-astro-cid-lyhn2ezm>#${t}</a>`)} </div>`} </div> </article>`)} </div>`} </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/news/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/news/index.astro";
const $$url = "/zh/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
