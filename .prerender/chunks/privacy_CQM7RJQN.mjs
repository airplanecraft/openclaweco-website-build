import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './prerender_BfEYESbt.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const title = "Privacy Policy | AgentUpdate.ai";
  const description = "Read the Privacy Policy of AgentUpdate.ai. Learn how we handle cookies, analytics, and why we do not collect private credentials.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "en", "data-astro-cid-fb3qbcs3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-fb3qbcs3> <section class="page-hero" data-astro-cid-fb3qbcs3> <div class="container hero-container" data-astro-cid-fb3qbcs3> <h1 class="display-title" data-astro-cid-fb3qbcs3>PRIVACY <span class="accent-text" data-astro-cid-fb3qbcs3>POLICY</span></h1> <p class="hero-lead" data-astro-cid-fb3qbcs3>We respect your privacy and are committed to protecting any data we process.</p> </div> </section> <div class="container main-content-container" style="padding-top: 3rem; padding-bottom: 5rem;" data-astro-cid-fb3qbcs3> <article class="article-content" data-astro-cid-fb3qbcs3> <h2 data-astro-cid-fb3qbcs3>Data We Collect</h2> <p data-astro-cid-fb3qbcs3>
AgentUpdate.ai is a directory and information platform. We do not require user registration or logins to browse our directories, news feeds, or tutorials. We only collect standard anonymous traffic metrics:
</p> <ul data-astro-cid-fb3qbcs3> <li data-astro-cid-fb3qbcs3><strong data-astro-cid-fb3qbcs3>Analytics Data:</strong> We use Google Analytics to monitor aggregated traffic patterns, popular pages, referral paths, and device parameters to improve the performance and readability of our content.</li> <li data-astro-cid-fb3qbcs3><strong data-astro-cid-fb3qbcs3>Cookies:</strong> We use minimal cookies to store interface language states or to remember analytics preferences. You can disable cookies in your browser settings at any time.</li> </ul> <h2 data-astro-cid-fb3qbcs3>Zero Sensitive Data / Private Keys Collection</h2> <p data-astro-cid-fb3qbcs3>
We are committed to developer safety. <strong data-astro-cid-fb3qbcs3>AgentUpdate.ai does not request, store, or process any private keys, API credentials, or private repository permissions.</strong> </p> <p data-astro-cid-fb3qbcs3>
Our interactive terminal simulators run entirely client-side in your local browser sandbox utilizing WebAssembly. Any mock credentials or simulated environment variables used inside the sandbox do not leave your local browser state.
</p> <h2 data-astro-cid-fb3qbcs3>Third-Party Links</h2> <p data-astro-cid-fb3qbcs3>
Our platform includes links to third-party repositories, tools, external documentation, and startup services. We are not responsible for the privacy practices or contents of those external websites. We encourage you to review the privacy policies of any third-party links you visit.
</p><h2 data-astro-cid-fb3qbcs3>Policy Changes</h2> <p data-astro-cid-fb3qbcs3>
We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date at the top. Your continued use of the platform constitutes agreement to the updated policy.
</p> </article> </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/privacy.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
