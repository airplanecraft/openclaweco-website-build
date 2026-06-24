import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './prerender_BfEYESbt.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const title = "About Us | AgentUpdate.ai";
  const description = "Learn more about AgentUpdate.ai, the bilingual curation directory and news chronicle for the AI agent ecosystem.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "en", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-kh7btl4r> <section class="page-hero" data-astro-cid-kh7btl4r> <div class="container hero-container" data-astro-cid-kh7btl4r> <h1 class="display-title" data-astro-cid-kh7btl4r>ABOUT <span class="accent-text" data-astro-cid-kh7btl4r>US</span></h1> <p class="hero-lead" data-astro-cid-kh7btl4r>Discover our mission to map, chronicle, and empower the AI agent ecosystem.</p> </div> </section> <div class="container main-content-container" style="padding-top: 3rem; padding-bottom: 5rem;" data-astro-cid-kh7btl4r> <article class="article-content" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Who We Are</h2> <p data-astro-cid-kh7btl4r>
AgentUpdate.ai is a premier, bilingual (English/Chinese) platform dedicated to cataloging the rapid evolution of autonomous AI agents, framework infrastructures, reusable capability markets, and integration plugins.
</p> <p data-astro-cid-kh7btl4r>
Our mission is to serve as the single source of truth for developers, product builders, researchers, and enterprises seeking to navigate, adopt, and integrate AI agent technologies into modern architectures.
</p> <h2 data-astro-cid-kh7btl4r>Our Core Offerings</h2> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Chronicle &amp; Dispatch:</strong> Daily curated industry news, developer updates, and release chronicles detailing the latest agentic capabilities.</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Product Directory:</strong> A comprehensive, vetted directory of AI agent products, hosting environments, startup platforms, and hardware architectures.</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Capability &amp; Plugin Markets:</strong> Curated libraries of reusable skill configurations and developer integration plugins to speed up developer workflows.</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Interactive Tutorials:</strong> Visual, step-by-step guides and interactive sandbox simulators designed to teach state-of-the-art agent programming models.</li> </ul> <h2 data-astro-cid-kh7btl4r>Fostering Open Architectures</h2> <p data-astro-cid-kh7btl4r>
We believe the future of software lies in autonomous, modular architectures. By providing a clean interface to discover agent products and capability directories, we aim to build the foundational knowledge layer for the next decade of agent engineering.
</p> <h2 data-astro-cid-kh7btl4r>Editorial Policy & Testing Guidelines</h2> <p data-astro-cid-kh7btl4r>
At AgentUpdate.ai, we prioritize <strong data-astro-cid-kh7btl4r>Trust (E-E-A-T)</strong> and <strong data-astro-cid-kh7btl4r>Factual Accuracy</strong>. Every tutorial, tool review, and integration guide published on our platform follows strict guidelines:
</p> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Direct Sandbox Testing:</strong> We do not rely on marketing fluff or secondary syntheses. All code tutorials and open-source skills are verified and compiled by our technical team in dedicated sandbox or physical testing environments.</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Version Anchoring:</strong> Technology moves fast. We clearly mark and lock our tutorials to specific framework and library versions to prevent build errors and ensure reproducibility.</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Independence & Disclosure:</strong> We maintain strict independence. Any sponsored products, affiliate associations, or third-party funding will always be transparently disclosed at the top of the relevant page.</li> </ul> </article> </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/about.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
