import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getAllTags } from './tags_BJSnwKLq.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const tags = await getAllTags();
  const title = "标签索引 // TAGBOARD — AgentUpdate.ai";
  const description = "探索 AgentUpdate.ai 上关于 AI Agent、工具生态和前沿开发的所有标签内容。";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "zh", "data-astro-cid-qplacs6n": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-qplacs6n> <section class="page-hero" data-astro-cid-qplacs6n> <div class="container hero-container" data-astro-cid-qplacs6n> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "标签" }
  ], "data-astro-cid-qplacs6n": true })} <h1 class="display-title" data-astro-cid-qplacs6n>TAGBOARD <span class="accent-text" data-astro-cid-qplacs6n>// 标签面板</span></h1> <p class="hero-stats" data-astro-cid-qplacs6n>SYSTEM // ACTIVE // EXPLORE ${tags.length} TOPICS ACROSS ECOSYSTEM</p> </div> </section> <section class="tags-section" data-astro-cid-qplacs6n> <div class="container main-content-container" data-astro-cid-qplacs6n> ${tags.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-qplacs6n>暂无发现任何标签</div>` : renderTemplate`<div class="tags-grid" data-astro-cid-qplacs6n> ${tags.map((t) => renderTemplate`<a${addAttribute(`/zh/tags/${t.name.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-")}`, "href")} class="tag-board-card" data-astro-cid-qplacs6n> <div class="tag-header" data-astro-cid-qplacs6n> <span class="tag-index" data-astro-cid-qplacs6n>#TAG</span> <span class="tag-count" data-astro-cid-qplacs6n>// ${t.count}</span> </div> <div class="tag-body" data-astro-cid-qplacs6n> <span class="tag-label" data-astro-cid-qplacs6n>${t.name.toUpperCase()}</span> </div> </a>`)} </div>`} </div> </section> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/tags/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/tags/index.astro";
const $$url = "/zh/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
