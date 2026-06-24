import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { g as getAllTutorialSeries } from './tutorials_CJIlU2hu.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "zh";
  const seriesList = await getAllTutorialSeries("zh");
  const dailyStats = await getDailyStats();
  const toolInfo = {
    claude_code: { label: "CLAUDE CODE" },
    antigravity: { label: "ANTIGRAVITY" },
    openclaw: { label: "OPENCLAW" },
    general: { label: "GENERAL" }
  };
  function cleanDescription(desc) {
    if (!desc) return "";
    return desc.replace(/[#*`]/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim();
  }
  const title = "精品教程 — 掌握 AI 智能体开发与实战";
  const description = "循序渐进的实战指南、系列培训课程。助力掌握 AI 智能体构建、部署与调优。";
  const totalLessons = seriesList.reduce((acc, s) => acc + s.lessons.length, 0);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "data-astro-cid-yrqsfvqx": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-yrqsfvqx> <section class="page-hero" data-astro-cid-yrqsfvqx> <div class="container hero-container" data-astro-cid-yrqsfvqx> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "教程中心" }
  ], "data-astro-cid-yrqsfvqx": true })} <h1 class="display-title" data-astro-cid-yrqsfvqx>精选<span class="accent-text" data-astro-cid-yrqsfvqx>教程</span></h1> <p class="hero-stats" data-astro-cid-yrqsfvqx>共 ${seriesList.length} 个系列 // ${totalLessons} 个课时 // 深度实战指南</p> <div class="today-bar-frame" data-astro-cid-yrqsfvqx> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "tutorials", "lang": lang, "data-astro-cid-yrqsfvqx": true })} </div> </div> </section> <div class="container main-content-container" data-astro-cid-yrqsfvqx> ${seriesList.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-yrqsfvqx>暂无已发布的教程。</div>` : renderTemplate`<div class="series-grid" data-astro-cid-yrqsfvqx> ${seriesList.map((s) => {
    const tool = toolInfo[s.tool] || toolInfo.general;
    const diffText = s.difficulty === "beginner" ? "入门" : s.difficulty === "intermediate" ? "进阶" : "专业";
    const coverUrl = s.coverImage || (s.slug === "claude-mem-tutorial" ? "/covers/claude-mem-tutorial.png" : null);
    const cleanDesc = cleanDescription(s.description);
    const formattedDate = new Date(s.updatedAt).toISOString().split("T")[0];
    return renderTemplate`<div class="series-card" data-astro-cid-yrqsfvqx> <a${addAttribute(`/zh/tutorial/${s.slug}`, "href")} class="series-cover" data-astro-cid-yrqsfvqx> ${coverUrl ? renderTemplate`<img${addAttribute(coverUrl, "src")} alt="" loading="lazy" width="800" height="450" decoding="async" data-astro-cid-yrqsfvqx>` : renderTemplate`<div class="cover-placeholder" data-astro-cid-yrqsfvqx>TUTORIAL // CURRICULUM</div>`} <span class="tool-tag" data-astro-cid-yrqsfvqx>${tool.label}</span> <span${addAttribute(`diff-tag ${s.difficulty}`, "class")} data-astro-cid-yrqsfvqx>${diffText}</span> </a> <div class="series-body" data-astro-cid-yrqsfvqx> <div class="series-meta-row" data-astro-cid-yrqsfvqx> <span class="lesson-count" data-astro-cid-yrqsfvqx>${s.lessons.length} 课时</span> <span class="meta-date" data-astro-cid-yrqsfvqx>更新于：${formattedDate}</span> </div> <h2 class="series-title-heading" data-astro-cid-yrqsfvqx> <a${addAttribute(`/zh/tutorial/${s.slug}`, "href")} data-astro-cid-yrqsfvqx>${s.title}</a> </h2> <p class="series-description-text" data-astro-cid-yrqsfvqx>${cleanDesc}</p> <div class="series-footer-row" data-astro-cid-yrqsfvqx> <div class="tags-row" data-astro-cid-yrqsfvqx> ${s.tags?.slice(0, 2).map((t) => {
      const slugified = t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-");
      return renderTemplate`<a${addAttribute(`/zh/tags/${slugified}`, "href")} class="tag-pill" data-astro-cid-yrqsfvqx>#${t.toUpperCase()}</a>`;
    })} </div> <a${addAttribute(`/zh/tutorial/${s.slug}`, "href")} class="start-learning-label" data-astro-cid-yrqsfvqx>[ 开始学习 → ]</a> </div> </div> </div>`;
  })} </div>`} </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/tutorial/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/tutorial/index.astro";
const $$url = "/zh/tutorial";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
