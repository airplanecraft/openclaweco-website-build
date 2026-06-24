import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './prerender_BfEYESbt.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "Contact Us | AgentUpdate.ai";
  const description = "Get in touch with AgentUpdate.ai. Reach out via email for partnerships, reviews, or general support.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "en", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-uw5kdbxl> <section class="page-hero" data-astro-cid-uw5kdbxl> <div class="container hero-container" data-astro-cid-uw5kdbxl> <h1 class="display-title" data-astro-cid-uw5kdbxl>CONTACT <span class="accent-text" data-astro-cid-uw5kdbxl>US</span></h1> <p class="hero-lead" data-astro-cid-uw5kdbxl>We would love to hear from you. Get in touch with our team.</p> </div> </section> <div class="container main-content-container" style="padding-top: 3rem; padding-bottom: 5rem;" data-astro-cid-uw5kdbxl> <article class="article-content" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>General Inquiries &amp; Support</h2> <p data-astro-cid-uw5kdbxl>
For any suggestions, feedback, content partnership proposals, or general inquiries regarding the website and directory, please reach out to us at:
</p> <div class="contact-card" data-astro-cid-uw5kdbxl> <span class="icon" data-astro-cid-uw5kdbxl>✉️</span> <a href="mailto:contact@agentupdate.ai" class="email-link" data-astro-cid-uw5kdbxl>contact@agentupdate.ai</a> </div> <h2 data-astro-cid-uw5kdbxl>Submit an Agent Product or Skill</h2> <p data-astro-cid-uw5kdbxl>
Are you building an AI agent product, capability skill, or integration plugin? We are always looking to expand our directory with innovative technologies.
</p> <p data-astro-cid-uw5kdbxl>
Please email your submission details (product name, description, repository, website link, and documentation) to the address above. Our review agents will inspect and list approved products within 2-3 business days.
</p> </article> </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/contact.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
