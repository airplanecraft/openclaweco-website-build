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
    return Astro2.redirect("/tutorial");
  }
  const title = `${series.title} — AI Tutorials`;
  const rawDesc = series.description || "";
  const description = rawDesc.replace(/^#+.*$/gm, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\|.*\|/g, "").replace(/[#*`>]/g, "").replace(/\n\s*\n/g, " ").trim().slice(0, 160) + (rawDesc.length > 160 ? "..." : "");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "en", "data-astro-cid-du4lkujh": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-du4lkujh> <section class="series-header" data-astro-cid-du4lkujh> <div class="container hero-container" data-astro-cid-du4lkujh> <a href="/tutorial" class="back-link" data-astro-cid-du4lkujh>[ BACK TO TUTORIALS ]</a> <div class="header-content" data-astro-cid-du4lkujh> <div class="meta-row" data-astro-cid-du4lkujh> <span class="category" data-astro-cid-du4lkujh>${series.tool.toUpperCase()}</span> <span class="meta-separator" data-astro-cid-du4lkujh>//</span> <span class="difficulty" data-astro-cid-du4lkujh>${series.difficulty.toUpperCase()}</span> </div> <h1 class="display-title" data-astro-cid-du4lkujh>${series.title}</h1> <p class="desc" data-astro-cid-du4lkujh>${description}</p> </div> </div> </section> <section class="curriculum" data-astro-cid-du4lkujh> <div class="container main-grid-container" data-astro-cid-du4lkujh> <div class="curriculum-grid" data-astro-cid-du4lkujh> <div class="lessons-list" data-astro-cid-du4lkujh> <span class="section-tag" data-astro-cid-du4lkujh>CURRICULUM MODULES</span> <h2 class="lessons-title" data-astro-cid-du4lkujh>COURSE CONTENT</h2> <div class="lessons-wrapper" data-astro-cid-du4lkujh> ${series.lessons.map((lesson, index) => renderTemplate`<a${addAttribute(`/tutorial/${series.slug}/${lesson.slug}`, "href")} class="lesson-item" data-astro-cid-du4lkujh> <div class="lesson-num" data-astro-cid-du4lkujh>${String(index + 1).padStart(2, "0")}</div> <div class="lesson-info" data-astro-cid-du4lkujh> <h3 class="lesson-title-text" data-astro-cid-du4lkujh>${lesson.title}</h3> <p class="lesson-summary-text" data-astro-cid-du4lkujh>${lesson.summary}</p> </div> <div class="lesson-action" data-astro-cid-du4lkujh> <span class="go" data-astro-cid-du4lkujh>[ READ LESSON → ]</span> </div> </a>`)} </div> </div> <aside class="series-sidebar" data-astro-cid-du4lkujh> <div class="sidebar-card" data-astro-cid-du4lkujh> ${(series.coverImage || (series.slug === "claude-mem-tutorial" ? "/covers/claude-mem-tutorial.png" : null)) && renderTemplate`<img${addAttribute(series.coverImage || "/covers/claude-mem-tutorial.png", "src")} alt="" class="sidebar-cover" width="400" height="225" decoding="async" data-astro-cid-du4lkujh>`} <span class="sidebar-section-tag" data-astro-cid-du4lkujh>TELEMETRY</span> <h3 class="sidebar-title" data-astro-cid-du4lkujh>COURSE INFO</h3> <div class="info-table" data-astro-cid-du4lkujh> <div class="info-row" data-astro-cid-du4lkujh> <span class="label" data-astro-cid-du4lkujh>TOTAL LESSONS</span> <span class="val" data-astro-cid-du4lkujh>${series.lessons.length}</span> </div> <div class="info-row" data-astro-cid-du4lkujh> <span class="label" data-astro-cid-du4lkujh>AUTHOR</span> <span class="val" data-astro-cid-du4lkujh>${series.author ? series.author.toUpperCase() : "ECOSYSTEM EXPERT"}</span> </div> <div class="info-row" data-astro-cid-du4lkujh> <span class="label" data-astro-cid-du4lkujh>DIFFICULTY LEVEL</span> <span class="val" data-astro-cid-du4lkujh>${series.difficulty.toUpperCase()}</span> </div> </div> ${series.lessons.length > 0 && renderTemplate`<a${addAttribute(`/tutorial/${series.slug}/${series.lessons[0].slug}`, "href")} class="start-btn" data-astro-cid-du4lkujh>[ START LEARNING ]</a>`} </div> </aside> </div> </div> </section> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/tutorial/[slug].astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/tutorial/[slug].astro";
const $$url = "/tutorial/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
