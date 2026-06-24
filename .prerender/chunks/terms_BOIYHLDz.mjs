import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './prerender_BfEYESbt.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const title = "Terms of Service | AgentUpdate.ai";
  const description = "Review the Terms of Service for AgentUpdate.ai. Understand guidelines for directory usage, code examples, and AI disclaimer.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "en", "data-astro-cid-y5py4vqc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-y5py4vqc> <section class="page-hero" data-astro-cid-y5py4vqc> <div class="container hero-container" data-astro-cid-y5py4vqc> <h1 class="display-title" data-astro-cid-y5py4vqc>TERMS OF <span class="accent-text" data-astro-cid-y5py4vqc>SERVICE</span></h1> <p class="hero-lead" data-astro-cid-y5py4vqc>These terms govern your use of the directories, code bases, and resources at AgentUpdate.ai.</p> </div> </section> <div class="container main-content-container" style="padding-top: 3rem; padding-bottom: 5rem;" data-astro-cid-y5py4vqc> <article class="article-content" data-astro-cid-y5py4vqc> <h2 data-astro-cid-y5py4vqc>Acceptable Use</h2> <p data-astro-cid-y5py4vqc>
AgentUpdate.ai is a directory mapping the AI agent landscape. By accessing this platform, you agree to use its features and listings for legitimate, educational, or professional purposes. You agree not to:
</p> <ul data-astro-cid-y5py4vqc> <li data-astro-cid-y5py4vqc>Scrape or extract product databases, content directories, or articles in bulk using automated crawlers without written consent.</li> <li data-astro-cid-y5py4vqc>Attempt to disrupt site availability, inject malicious code, or manipulate rating indicators.</li> </ul> <h2 data-astro-cid-y5py4vqc>AI Content &amp; Liability Disclaimer</h2> <p data-astro-cid-y5py4vqc>
We curate descriptions, features, and tutorials covering complex AI tools, autonomous framework structures, and language model behaviors.
</p> <p data-astro-cid-y5py4vqc> <strong data-astro-cid-y5py4vqc>All content, terminal simulators, and guide materials are provided "as is" without warranty of any kind.</strong> AgentUpdate.ai does not guarantee that the listed products are safe, operational, or compatible with your specific system. We are not liable for any code execution errors, token costs, or security incidents resulting from deploying or running tools listed in our directories.
</p> <h2 data-astro-cid-y5py4vqc>Intellectual Property</h2> <p data-astro-cid-y5py4vqc>
The original guides, taxonomy tags, and custom simulator configurations are the property of AgentUpdate.ai. The third-party project names, logos, code snippets, and trademark materials mentioned in our directory are the property of their respective owners, used here under fair nominative use to describe and review the tools.
</p> <h2 data-astro-cid-y5py4vqc>Governing Law</h2> <p data-astro-cid-y5py4vqc>
These Terms of Service are governed by and construed in accordance with applicable standard legal frameworks, without regard to conflict of law principles.
</p> </article> </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/terms.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
