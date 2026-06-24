import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { g as getAllTutorialSeries } from './tutorials_CJIlU2hu.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "en";
  const seriesList = await getAllTutorialSeries("en");
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
  const title = "Tutorials — Master AI Agent Development";
  const description = "Step-by-step guides and series to help you master building, deploying, and optimizing AI Agents.";
  const totalLessons = seriesList.reduce((acc, s) => acc + s.lessons.length, 0);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "data-astro-cid-tb27ngtn": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-tb27ngtn> <section class="page-hero" data-astro-cid-tb27ngtn> <div class="container hero-container" data-astro-cid-tb27ngtn> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Tutorials" }
  ], "data-astro-cid-tb27ngtn": true })} <h1 class="display-title" data-astro-cid-tb27ngtn>TUTORIALS <span class="accent-text" data-astro-cid-tb27ngtn>// Learn AI Agents</span></h1> <p class="hero-stats" data-astro-cid-tb27ngtn>SYSTEM // CURRICULUM: 0${seriesList.length} // TOTAL: ${totalLessons} LESSONS</p> <div class="today-bar-frame" data-astro-cid-tb27ngtn> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "tutorials", "lang": lang, "data-astro-cid-tb27ngtn": true })} </div> </div> </section> <div class="container main-content-container" data-astro-cid-tb27ngtn> ${seriesList.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-tb27ngtn>No tutorials published yet. Check back soon!</div>` : renderTemplate`<div class="series-grid" data-astro-cid-tb27ngtn> ${seriesList.map((s) => {
    const tool = toolInfo[s.tool] || toolInfo.general;
    const diffText = s.difficulty.toUpperCase();
    const coverUrl = s.coverImage || (s.slug === "claude-mem-tutorial" ? "/covers/claude-mem-tutorial.png" : null);
    const cleanDesc = cleanDescription(s.description);
    const formattedDate = new Date(s.updatedAt).toISOString().split("T")[0];
    return renderTemplate`<div class="series-card" data-astro-cid-tb27ngtn> <a${addAttribute(`/tutorial/${s.slug}`, "href")} class="series-cover" data-astro-cid-tb27ngtn> ${coverUrl ? renderTemplate`<img${addAttribute(coverUrl, "src")} alt="" loading="lazy" width="800" height="450" decoding="async" data-astro-cid-tb27ngtn>` : renderTemplate`<div class="cover-placeholder" data-astro-cid-tb27ngtn>TUTORIAL // CURRICULUM</div>`} <span class="tool-tag" data-astro-cid-tb27ngtn>${tool.label}</span> <span${addAttribute(`diff-tag ${s.difficulty}`, "class")} data-astro-cid-tb27ngtn>${diffText}</span> </a> <div class="series-body" data-astro-cid-tb27ngtn> <div class="series-meta-row" data-astro-cid-tb27ngtn> <span class="lesson-count" data-astro-cid-tb27ngtn>${s.lessons.length} LESSONS</span> <span class="meta-date" data-astro-cid-tb27ngtn>UPDATED: ${formattedDate}</span> </div> <h2 class="series-title-heading" data-astro-cid-tb27ngtn> <a${addAttribute(`/tutorial/${s.slug}`, "href")} data-astro-cid-tb27ngtn>${s.title}</a> </h2> <p class="series-description-text" data-astro-cid-tb27ngtn>${cleanDesc}</p> <div class="series-footer-row" data-astro-cid-tb27ngtn> <div class="tags-row" data-astro-cid-tb27ngtn> ${s.tags?.slice(0, 2).map((t) => {
      const slugified = t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-");
      return renderTemplate`<a${addAttribute(`/tags/${slugified}`, "href")} class="tag-pill" data-astro-cid-tb27ngtn>#${t.toUpperCase()}</a>`;
    })} </div> <a${addAttribute(`/tutorial/${s.slug}`, "href")} class="start-learning-label" data-astro-cid-tb27ngtn>[ START STUDYING → ]</a> </div> </div> </div>`;
  })} </div>`} </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/tutorial/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/tutorial/index.astro";
const $$url = "/tutorial";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
