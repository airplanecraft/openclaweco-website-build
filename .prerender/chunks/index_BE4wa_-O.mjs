import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getAllTags } from './tags_BJSnwKLq.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const tags = await getAllTags();
  const title = "Tags Directory // TAGBOARD — AgentUpdate.ai";
  const description = "Explore all topics, agent tools, and ecosystem tags on AgentUpdate.ai.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "en", "data-astro-cid-os4i7owy": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-os4i7owy> <section class="page-hero" data-astro-cid-os4i7owy> <div class="container hero-container" data-astro-cid-os4i7owy> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Tags" }
  ], "data-astro-cid-os4i7owy": true })} <h1 class="display-title" data-astro-cid-os4i7owy>TAGBOARD <span class="accent-text" data-astro-cid-os4i7owy>// Topic Directory</span></h1> <p class="hero-stats" data-astro-cid-os4i7owy>SYSTEM // ACTIVE // EXPLORE ${tags.length} TOPICS ACROSS ECOSYSTEM</p> </div> </section> <section class="tags-section" data-astro-cid-os4i7owy> <div class="container main-content-container" data-astro-cid-os4i7owy> ${tags.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-os4i7owy>No tags found yet.</div>` : renderTemplate`<div class="tags-grid" data-astro-cid-os4i7owy> ${tags.map((t) => renderTemplate`<a${addAttribute(`/tags/${t.name.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-")}`, "href")} class="tag-board-card" data-astro-cid-os4i7owy> <div class="tag-header" data-astro-cid-os4i7owy> <span class="tag-index" data-astro-cid-os4i7owy>#TAG</span> <span class="tag-count" data-astro-cid-os4i7owy>// ${t.count}</span> </div> <div class="tag-body" data-astro-cid-os4i7owy> <span class="tag-label" data-astro-cid-os4i7owy>${t.name.toUpperCase()}</span> </div> </a>`)} </div>`} </div> </section> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/tags/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
