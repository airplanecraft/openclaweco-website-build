import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getAllTutorialSeries, c as getSeriesWithLessons } from './tutorials_CJIlU2hu.mjs';

async function getStaticPaths() {
  const allSeries = await getAllTutorialSeries("zh");
  return allSeries.map((s) => ({
    params: { series: s.slug }
  }));
}
const $$series = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$series;
  const { series: slug } = Astro2.params;
  const lang = "zh";
  const seriesData = await getSeriesWithLessons(slug, lang);
  if (!seriesData) {
    return Astro2.redirect("/zh/tutorial");
  }
  const title = `${seriesData.title} — AgentUpdate.ai 教程`;
  const description = seriesData.description;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "data-astro-cid-wvwi6mai": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-wvwi6mai> <section class="series-header" data-astro-cid-wvwi6mai> <div class="container hero-container" data-astro-cid-wvwi6mai> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "教程中心", url: "/zh/tutorial" },
    { label: seriesData.title }
  ], "data-astro-cid-wvwi6mai": true })} <div class="header-content" data-astro-cid-wvwi6mai> <div class="meta-row" data-astro-cid-wvwi6mai> <span class="category" data-astro-cid-wvwi6mai>${seriesData.tool.toUpperCase()}</span> <span class="meta-separator" data-astro-cid-wvwi6mai>//</span> <span class="difficulty" data-astro-cid-wvwi6mai>${seriesData.difficulty === "beginner" ? "入门" : seriesData.difficulty === "intermediate" ? "进阶" : "专业"}</span> </div> <h1 class="display-title" data-astro-cid-wvwi6mai>${seriesData.title}</h1> <p class="desc" data-astro-cid-wvwi6mai>${description}</p> </div> </div> </section> <section class="curriculum" data-astro-cid-wvwi6mai> <div class="container main-grid-container" data-astro-cid-wvwi6mai> <div class="curriculum-grid" data-astro-cid-wvwi6mai> <div class="lessons-list" data-astro-cid-wvwi6mai> <span class="section-tag" data-astro-cid-wvwi6mai>课时目录 // CURRICULUM</span> <h2 class="lessons-title" data-astro-cid-wvwi6mai>课程内容</h2> <div class="lessons-wrapper" data-astro-cid-wvwi6mai> ${seriesData.lessons.map((lesson, index) => renderTemplate`<a${addAttribute(`/zh/tutorial/${slug}/${lesson.slug}`, "href")} class="lesson-item" data-astro-cid-wvwi6mai> <div class="lesson-num" data-astro-cid-wvwi6mai>${String(index + 1).padStart(2, "0")}</div> <div class="lesson-info" data-astro-cid-wvwi6mai> <h3 class="lesson-title-text" data-astro-cid-wvwi6mai>${lesson.title}</h3> ${lesson.summary && renderTemplate`<p class="lesson-summary-text" data-astro-cid-wvwi6mai>${lesson.summary}</p>`} </div> ${lesson.readingTime && renderTemplate`<div class="lesson-action" data-astro-cid-wvwi6mai> <span class="go" data-astro-cid-wvwi6mai>[${lesson.readingTime} 分钟阅读 // READ →]</span> </div>`} </a>`)} </div> </div> <aside class="series-sidebar" data-astro-cid-wvwi6mai> <div class="sidebar-card" data-astro-cid-wvwi6mai> ${seriesData.coverImage && renderTemplate`<img${addAttribute(seriesData.coverImage, "src")} alt="" class="sidebar-cover" width="400" height="225" decoding="async" data-astro-cid-wvwi6mai>`} <span class="sidebar-section-tag" data-astro-cid-wvwi6mai>课程参数 // TELEMETRY</span> <h3 class="sidebar-title" data-astro-cid-wvwi6mai>课程信息</h3> <div class="info-table" data-astro-cid-wvwi6mai> <div class="info-row" data-astro-cid-wvwi6mai> <span class="label" data-astro-cid-wvwi6mai>课时总数</span> <span class="val" data-astro-cid-wvwi6mai>${seriesData.lessons.length} 课时</span> </div> <div class="info-row" data-astro-cid-wvwi6mai> <span class="label" data-astro-cid-wvwi6mai>作者团队</span> <span class="val" data-astro-cid-wvwi6mai>${seriesData.author ? seriesData.author.toUpperCase() : "生态社区专家"}</span> </div> <div class="info-row" data-astro-cid-wvwi6mai> <span class="label" data-astro-cid-wvwi6mai>难度级别</span> <span class="val" data-astro-cid-wvwi6mai>${seriesData.difficulty === "beginner" ? "入门" : seriesData.difficulty === "intermediate" ? "进阶" : "专业"}</span> </div> </div> ${seriesData.lessons.length > 0 && renderTemplate`<a${addAttribute(`/zh/tutorial/${slug}/${seriesData.lessons[0].slug}`, "href")} class="start-btn" data-astro-cid-wvwi6mai>[ 开始学习 ]</a>`} </div> </aside> </div> </div> </section> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/tutorial/[series].astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/tutorial/[series].astro";
const $$url = "/zh/tutorial/[series]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$series,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
