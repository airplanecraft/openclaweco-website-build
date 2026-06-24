import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { g as getAllTutorialSeries, c as getSeriesWithLessons } from './tutorials_CJIlU2hu.mjs';

async function getStaticPaths() {
  const allSeries = await getAllTutorialSeries();
  return allSeries.map((s) => ({
    params: { slug: s.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const series = await getSeriesWithLessons(slug);
  if (!series) {
    return Astro2.redirect("/zh/tutorial");
  }
  const title = `${series.title} — AI 智能体精品教程`;
  const rawDesc = series.description || "";
  const description = rawDesc.replace(/^#+.*$/gm, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\|.*\|/g, "").replace(/[#*`>]/g, "").replace(/\n\s*\n/g, " ").trim().slice(0, 160) + (rawDesc.length > 160 ? "..." : "");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "zh", "data-astro-cid-hjw6x2zy": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-hjw6x2zy> <section class="series-header" data-astro-cid-hjw6x2zy> <div class="container hero-container" data-astro-cid-hjw6x2zy> <a href="/zh/tutorial" class="back-link" data-astro-cid-hjw6x2zy>[ 返回教程中心 ]</a> <div class="header-content" data-astro-cid-hjw6x2zy> <div class="meta-row" data-astro-cid-hjw6x2zy> <span class="category" data-astro-cid-hjw6x2zy>${series.tool.toUpperCase()}</span> <span class="meta-separator" data-astro-cid-hjw6x2zy>//</span> <span class="difficulty" data-astro-cid-hjw6x2zy>${series.difficulty === "beginner" ? "入门" : series.difficulty === "intermediate" ? "进阶" : "专业"}</span> </div> <h1 class="display-title" data-astro-cid-hjw6x2zy>${series.title}</h1> <p class="desc" data-astro-cid-hjw6x2zy>${description}</p> </div> </div> </section> <section class="curriculum" data-astro-cid-hjw6x2zy> <div class="container main-grid-container" data-astro-cid-hjw6x2zy> <div class="curriculum-grid" data-astro-cid-hjw6x2zy> <div class="lessons-list" data-astro-cid-hjw6x2zy> <span class="section-tag" data-astro-cid-hjw6x2zy>课时目录 // CURRICULUM</span> <h2 class="lessons-title" data-astro-cid-hjw6x2zy>课程内容</h2> <div class="lessons-wrapper" data-astro-cid-hjw6x2zy> ${series.lessons.map((lesson, index) => renderTemplate`<a${addAttribute(`/zh/tutorial/${series.slug}/${lesson.slug}`, "href")} class="lesson-item" data-astro-cid-hjw6x2zy> <div class="lesson-num" data-astro-cid-hjw6x2zy>${String(index + 1).padStart(2, "0")}</div> <div class="lesson-info" data-astro-cid-hjw6x2zy> <h3 class="lesson-title-text" data-astro-cid-hjw6x2zy>${lesson.title}</h3> <p class="lesson-summary-text" data-astro-cid-hjw6x2zy>${lesson.summary || "暂无摘要描述。"}</p> </div> <div class="lesson-action" data-astro-cid-hjw6x2zy> <span class="go" data-astro-cid-hjw6x2zy>[ 阅读课时 → ]</span> </div> </a>`)} </div> </div> <aside class="series-sidebar" data-astro-cid-hjw6x2zy> <div class="sidebar-card" data-astro-cid-hjw6x2zy> ${(series.coverImage || (series.slug === "claude-mem-tutorial" ? "/covers/claude-mem-tutorial.png" : null)) && renderTemplate`<img${addAttribute(series.coverImage || "/covers/claude-mem-tutorial.png", "src")} alt="" class="sidebar-cover" width="400" height="225" decoding="async" data-astro-cid-hjw6x2zy>`} <span class="sidebar-section-tag" data-astro-cid-hjw6x2zy>课程参数 // TELEMETRY</span> <h3 class="sidebar-title" data-astro-cid-hjw6x2zy>课程信息</h3> <div class="info-table" data-astro-cid-hjw6x2zy> <div class="info-row" data-astro-cid-hjw6x2zy> <span class="label" data-astro-cid-hjw6x2zy>课时总数</span> <span class="val" data-astro-cid-hjw6x2zy>${series.lessons.length} 课时</span> </div> <div class="info-row" data-astro-cid-hjw6x2zy> <span class="label" data-astro-cid-hjw6x2zy>作者团队</span> <span class="val" data-astro-cid-hjw6x2zy>${series.author ? series.author.toUpperCase() : "生态社区专家"}</span> </div> <div class="info-row" data-astro-cid-hjw6x2zy> <span class="label" data-astro-cid-hjw6x2zy>难度级别</span> <span class="val" data-astro-cid-hjw6x2zy>${series.difficulty === "beginner" ? "入门" : series.difficulty === "intermediate" ? "进阶" : "专业"}</span> </div> </div> ${series.lessons.length > 0 && renderTemplate`<a${addAttribute(`/zh/tutorial/${series.slug}/${series.lessons[0].slug}`, "href")} class="start-btn" data-astro-cid-hjw6x2zy>[ 开始学习 ]</a>`} </div> </aside> </div> </div> </section> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/tutorial/[slug].astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/tutorial/[slug].astro";
const $$url = "/zh/tutorial/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
