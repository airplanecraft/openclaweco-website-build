import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getAllTutorialSeries, c as getSeriesWithLessons } from './tutorials_CJIlU2hu.mjs';

async function getStaticPaths() {
  const allSeries = await getAllTutorialSeries("en");
  return allSeries.map((s) => ({
    params: { series: s.slug }
  }));
}
const $$series = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$series;
  const { series: slug } = Astro2.params;
  const lang = "en";
  const seriesData = await getSeriesWithLessons(slug, lang);
  if (!seriesData) {
    return Astro2.redirect("/tutorial");
  }
  const title = `${seriesData.title} — AgentUpdate.ai Tutorials`;
  const description = seriesData.description;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "data-astro-cid-zucp2dlq": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-zucp2dlq> <section class="series-header" data-astro-cid-zucp2dlq> <div class="container hero-container" data-astro-cid-zucp2dlq> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Tutorials", url: "/tutorial" },
    { label: seriesData.title }
  ], "data-astro-cid-zucp2dlq": true })} <div class="header-content" data-astro-cid-zucp2dlq> <div class="meta-row" data-astro-cid-zucp2dlq> <span class="category" data-astro-cid-zucp2dlq>${seriesData.tool.toUpperCase()}</span> <span class="meta-separator" data-astro-cid-zucp2dlq>//</span> <span class="difficulty" data-astro-cid-zucp2dlq>${seriesData.difficulty.toUpperCase()}</span> </div> <h1 class="display-title" data-astro-cid-zucp2dlq>${seriesData.title}</h1> <p class="desc" data-astro-cid-zucp2dlq>${description}</p> </div> </div> </section> <section class="curriculum" data-astro-cid-zucp2dlq> <div class="container main-grid-container" data-astro-cid-zucp2dlq> <div class="curriculum-grid" data-astro-cid-zucp2dlq> <div class="lessons-list" data-astro-cid-zucp2dlq> <span class="section-tag" data-astro-cid-zucp2dlq>CURRICULUM MODULES</span> <h2 class="lessons-title" data-astro-cid-zucp2dlq>COURSE CONTENT</h2> <div class="lessons-wrapper" data-astro-cid-zucp2dlq> ${seriesData.lessons.map((lesson, index) => renderTemplate`<a${addAttribute(`/tutorial/${slug}/${lesson.slug}`, "href")} class="lesson-item" data-astro-cid-zucp2dlq> <div class="lesson-num" data-astro-cid-zucp2dlq>${String(index + 1).padStart(2, "0")}</div> <div class="lesson-info" data-astro-cid-zucp2dlq> <h3 class="lesson-title-text" data-astro-cid-zucp2dlq>${lesson.title}</h3> ${lesson.summary && renderTemplate`<p class="lesson-summary-text" data-astro-cid-zucp2dlq>${lesson.summary}</p>`} </div> ${lesson.readingTime && renderTemplate`<div class="lesson-action" data-astro-cid-zucp2dlq> <span class="go" data-astro-cid-zucp2dlq>[${lesson.readingTime} MINS // READ →]</span> </div>`} </a>`)} </div> </div> <aside class="series-sidebar" data-astro-cid-zucp2dlq> <div class="sidebar-card" data-astro-cid-zucp2dlq> ${seriesData.coverImage && renderTemplate`<img${addAttribute(seriesData.coverImage, "src")} alt="" class="sidebar-cover" width="400" height="225" decoding="async" data-astro-cid-zucp2dlq>`} <span class="sidebar-section-tag" data-astro-cid-zucp2dlq>TELEMETRY</span> <h3 class="sidebar-title" data-astro-cid-zucp2dlq>COURSE INFO</h3> <div class="info-table" data-astro-cid-zucp2dlq> <div class="info-row" data-astro-cid-zucp2dlq> <span class="label" data-astro-cid-zucp2dlq>TOTAL LESSONS</span> <span class="val" data-astro-cid-zucp2dlq>${seriesData.lessons.length}</span> </div> <div class="info-row" data-astro-cid-zucp2dlq> <span class="label" data-astro-cid-zucp2dlq>AUTHOR</span> <span class="val" data-astro-cid-zucp2dlq>${seriesData.author ? seriesData.author.toUpperCase() : "ECOSYSTEM EXPERT"}</span> </div> <div class="info-row" data-astro-cid-zucp2dlq> <span class="label" data-astro-cid-zucp2dlq>DIFFICULTY LEVEL</span> <span class="val" data-astro-cid-zucp2dlq>${seriesData.difficulty.toUpperCase()}</span> </div> </div> ${seriesData.lessons.length > 0 && renderTemplate`<a${addAttribute(`/tutorial/${slug}/${seriesData.lessons[0].slug}`, "href")} class="start-btn" data-astro-cid-zucp2dlq>[ START LEARNING ]</a>`} </div> </aside> </div> </div> </section> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/tutorial/[series].astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/tutorial/[series].astro";
const $$url = "/tutorial/[series]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$series,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
