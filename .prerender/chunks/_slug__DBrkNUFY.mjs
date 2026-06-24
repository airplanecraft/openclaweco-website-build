import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getAllVariants, a as getVariantBySlug, b as getRelatedVariants } from './variants_CC1gBVGE.mjs';

async function getStaticPaths() {
  const variants = await getAllVariants();
  return variants.map((v) => ({ params: { slug: v.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const variant = await getVariantBySlug(slug);
  if (!variant) {
    return Astro2.redirect("/product");
  }
  const relatedProducts = await getRelatedVariants(variant, 3);
  const typeInfo = {
    big_tech: { label: "Big Tech", icon: "🏢" },
    startup: { label: "Startup", icon: "🚀" },
    open_source: { label: "Open Source", icon: "🔓" },
    hosting: { label: "Hosting", icon: "☁️" },
    hardware: { label: "Hardware", icon: "🔧" },
    agent: { label: "Agent", icon: "🤖" },
    Agent: { label: "Agent", icon: "🤖" }
  };
  const info = typeInfo[variant.type] ?? { label: variant.type};
  const cleanDesc = (variant.descriptionEn || variant.description || "").replace(/[\r\n]+/g, " ").trim();
  const sentenceEndIdx = cleanDesc.indexOf(".");
  const shortDesc = sentenceEndIdx !== -1 && sentenceEndIdx < 80 ? cleanDesc.slice(0, sentenceEndIdx) : cleanDesc.slice(0, 70);
  const seoTitle = `${variant.nameEn || variant.name}: ${shortDesc} | AgentUpdate`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: variant.nameEn || variant.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: variant.platforms.join(", "),
    offers: {
      "@type": "Offer",
      price: variant.pricing === "free" ? "0" : void 0,
      priceCurrency: "USD"
    },
    description: variant.descriptionEn || variant.description,
    url: `https://www.agentupdate.ai/product/${variant.slug}`,
    publisher: {
      "@type": "Organization",
      name: variant.companyEn || variant.company
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seoTitle, "description": variant.descriptionEn || variant.description || void 0, "keywords": [variant.name, variant.nameEn, variant.company, variant.companyEn, variant.type, variant.language, ...variant.tags ?? []].filter(Boolean), "lang": "en", "structuredData": structuredData, "data-astro-cid-hyvzkcdj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="swiss-detail-page" data-astro-cid-hyvzkcdj> <article class="container product-container" data-astro-cid-hyvzkcdj> <div class="navigation-row" data-astro-cid-hyvzkcdj> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Products", url: "/product" },
    { label: variant.nameEn || variant.name }
  ], "data-astro-cid-hyvzkcdj": true })} </div> <div class="variant-hero" data-astro-cid-hyvzkcdj> <div class="v-header" data-astro-cid-hyvzkcdj> ${variant.logo ? renderTemplate`<img${addAttribute(variant.logo, "src")} alt="" class="v-icon-large" data-astro-cid-hyvzkcdj>` : renderTemplate`<div class="v-icon-large-fallback" data-astro-cid-hyvzkcdj>${(variant.nameEn || variant.name).charAt(0)}</div>`} <div class="v-title-block" data-astro-cid-hyvzkcdj> <h1 class="v-title" data-astro-cid-hyvzkcdj>${variant.nameEn || variant.name}</h1> <div class="v-company" data-astro-cid-hyvzkcdj>Developed by ${variant.companyEn || variant.company}</div> </div> </div> <div class="v-meta-row" data-astro-cid-hyvzkcdj> <a${addAttribute(`/tags/${variant.type.toLowerCase().trim().replace(/_/g, "-")}`, "href")} class="v-pill type" data-astro-cid-hyvzkcdj>${info.label}</a> ${variant.language && renderTemplate`<a${addAttribute(`/tags/${variant.language.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-").replace(/#/g, "%23")}`, "href")} class="v-pill lang" data-astro-cid-hyvzkcdj>${variant.language}</a>`} <a${addAttribute(`/tags/${variant.country === "cn" ? "china" : "global"}`, "href")} class="v-pill country" data-astro-cid-hyvzkcdj>${variant.country === "cn" ? "China" : "Global"}</a> ${variant.pricing && renderTemplate`<a${addAttribute(`/tags/${variant.pricing.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-").replace(/#/g, "%23")}`, "href")} class="v-pill pricing" data-astro-cid-hyvzkcdj>${variant.pricing}</a>`} ${variant.status === "beta" && renderTemplate`<span class="v-pill beta" data-astro-cid-hyvzkcdj>Beta</span>`}  ${variant.tags && variant.tags.slice(0, 5).map((t) => renderTemplate`<a${addAttribute(`/tags/${t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-").replace(/#/g, "%23")}`, "href")} class="v-pill tag" data-astro-cid-hyvzkcdj>#${t}</a>`)} </div> </div> <div class="variant-content" data-astro-cid-hyvzkcdj> <section class="v-section" data-astro-cid-hyvzkcdj> <span class="section-tag" data-astro-cid-hyvzkcdj>ABOUT</span> <p class="v-desc-large" data-astro-cid-hyvzkcdj>${variant.descriptionEn || variant.description}</p> </section> ${(variant.featuresEn && variant.featuresEn.length > 0 ? variant.featuresEn : variant.features).length > 0 && renderTemplate`<section class="v-section" data-astro-cid-hyvzkcdj> <span class="section-tag" data-astro-cid-hyvzkcdj>CAPABILITIES</span> <ul class="v-features-list" data-astro-cid-hyvzkcdj> ${(variant.featuresEn && variant.featuresEn.length > 0 ? variant.featuresEn : variant.features).map((f) => renderTemplate`<li data-astro-cid-hyvzkcdj><span class="bullet-square" data-astro-cid-hyvzkcdj></span>${f}</li>`)} </ul> </section>`} ${variant.platforms.length > 0 && renderTemplate`<section class="v-section" data-astro-cid-hyvzkcdj> <span class="section-tag" data-astro-cid-hyvzkcdj>SUPPORTED PLATFORMS</span> <div class="platforms-wrap" data-astro-cid-hyvzkcdj> ${variant.platforms.map((p) => renderTemplate`<span class="platform-tag" data-astro-cid-hyvzkcdj>${p}</span>`)} </div> </section>`} <section class="v-section v-links-section" data-astro-cid-hyvzkcdj> <span class="section-tag" data-astro-cid-hyvzkcdj>EXTERNAL RESOURCES</span> <div class="v-links-grid" data-astro-cid-hyvzkcdj> ${variant.websiteUrl && renderTemplate`<a${addAttribute(variant.websiteUrl, "href")} target="_blank" rel="noopener noreferrer" class="v-button" data-astro-cid-hyvzkcdj>
Visit Website ↗
</a>`} ${variant.githubUrl && renderTemplate`<a${addAttribute(variant.githubUrl, "href")} target="_blank" rel="noopener noreferrer" class="v-button secondary" data-astro-cid-hyvzkcdj>
GitHub Repository ↗
</a>`} ${variant.skillHubUrl && renderTemplate`<a${addAttribute(variant.skillHubUrl, "href")} target="_blank" rel="noopener noreferrer" class="v-button secondary skills-hub" data-astro-cid-hyvzkcdj>
Skills Market ↗
</a>`} </div> </section> ${relatedProducts.length > 0 && renderTemplate`<section class="v-section related-products-section" data-astro-cid-hyvzkcdj> <span class="section-tag" data-astro-cid-hyvzkcdj>RELATED ECOSYSTEM PRODUCTS</span> <div class="related-products-grid" data-astro-cid-hyvzkcdj> ${relatedProducts.map((p) => {
    const pInfo = typeInfo[p.type] ?? { label: p.type};
    const rpName = p.nameEn || p.name;
    const rpCompany = p.companyEn || p.company;
    const rpDesc = p.descriptionEn || p.description;
    return renderTemplate`<div class="rp-card-wrap" data-astro-cid-hyvzkcdj> <a${addAttribute(`/product/${p.slug}`, "href")} class="rp-card-link"${addAttribute(`View details of ${rpName}`, "aria-label")} data-astro-cid-hyvzkcdj></a> <div class="rp-card" data-astro-cid-hyvzkcdj> <div class="rp-card-header" data-astro-cid-hyvzkcdj> ${p.logo ? renderTemplate`<img${addAttribute(p.logo, "src")} alt="" class="rp-icon" data-astro-cid-hyvzkcdj>` : renderTemplate`<div class="rp-icon-placeholder" data-astro-cid-hyvzkcdj>${rpName.charAt(0)}</div>`} <div data-astro-cid-hyvzkcdj> <div class="rp-name" data-astro-cid-hyvzkcdj>${rpName}</div> <div class="rp-company" data-astro-cid-hyvzkcdj>${rpCompany}</div> </div> </div> <p class="rp-desc" data-astro-cid-hyvzkcdj>${rpDesc.slice(0, 95)}...</p> <div class="rp-tags" data-astro-cid-hyvzkcdj> <span class="rp-badge type" data-astro-cid-hyvzkcdj>${pInfo.label}</span> ${p.language && renderTemplate`<span class="rp-badge lang" data-astro-cid-hyvzkcdj>${p.language}</span>`} </div> </div> </div>`;
  })} </div> </section>`} </div> </article> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/product/[slug].astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/product/[slug].astro";
const $$url = "/product/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
