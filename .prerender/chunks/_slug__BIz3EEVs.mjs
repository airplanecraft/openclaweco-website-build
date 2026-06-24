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
    return Astro2.redirect("/zh/product");
  }
  const relatedProducts = await getRelatedVariants(variant, 3);
  const typeInfo = {
    big_tech: { label: "大厂产品", icon: "🏢" },
    startup: { label: "创业公司", icon: "🚀" },
    open_source: { label: "开源项目", icon: "🔓" },
    hosting: { label: "托管平台", icon: "☁️" },
    hardware: { label: "硬件适配", icon: "🔧" },
    agent: { label: "智能产品", icon: "🤖" },
    Agent: { label: "智能产品", icon: "🤖" }
  };
  const info = typeInfo[variant.type] ?? { label: variant.type};
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: variant.name || variant.nameEn,
    applicationCategory: "BusinessApplication",
    operatingSystem: variant.platforms.join(", "),
    offers: {
      "@type": "Offer",
      price: variant.pricing === "free" ? "0" : void 0,
      priceCurrency: "USD"
    },
    description: variant.description || variant.descriptionEn,
    url: `https://www.agentupdate.ai/zh/product/${variant.slug}`,
    publisher: {
      "@type": "Organization",
      name: variant.company || variant.companyEn
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${variant.name || variant.nameEn} — Agent 产品`, "description": variant.description || variant.descriptionEn || void 0, "lang": "zh", "structuredData": structuredData, "data-astro-cid-yhidkp52": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="swiss-detail-page" data-astro-cid-yhidkp52> <article class="container product-container" data-astro-cid-yhidkp52> <div class="navigation-row" data-astro-cid-yhidkp52> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "智能产品", url: "/zh/product" },
    { label: variant.name || variant.nameEn }
  ], "data-astro-cid-yhidkp52": true })} </div> <div class="variant-hero" data-astro-cid-yhidkp52> <div class="v-header" data-astro-cid-yhidkp52> ${variant.logo ? renderTemplate`<img${addAttribute(variant.logo, "src")} alt="" class="v-icon-large" data-astro-cid-yhidkp52>` : renderTemplate`<div class="v-icon-large-fallback" data-astro-cid-yhidkp52>${(variant.name || variant.nameEn || "").charAt(0)}</div>`} <div class="v-title-block" data-astro-cid-yhidkp52> <h1 class="v-title" data-astro-cid-yhidkp52>${variant.name || variant.nameEn}</h1> <div class="v-company" data-astro-cid-yhidkp52>由 ${variant.company || variant.companyEn} 研发</div> </div> </div> <div class="v-meta-row" data-astro-cid-yhidkp52> <a${addAttribute(`/zh/tags/${variant.type.toLowerCase().trim().replace(/_/g, "-")}`, "href")} class="v-pill type" data-astro-cid-yhidkp52>${info.label}</a> ${variant.language && renderTemplate`<a${addAttribute(`/zh/tags/${variant.language.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-").replace(/#/g, "%23")}`, "href")} class="v-pill lang" data-astro-cid-yhidkp52>${variant.language}</a>`} <a${addAttribute(`/zh/tags/${variant.country === "cn" ? "china" : "global"}`, "href")} class="v-pill country" data-astro-cid-yhidkp52>${variant.country === "cn" ? "中国" : "全球"}</a> ${variant.pricing && renderTemplate`<a${addAttribute(`/zh/tags/${variant.pricing.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-").replace(/#/g, "%23")}`, "href")} class="v-pill pricing" data-astro-cid-yhidkp52>${variant.pricing}</a>`} ${variant.status === "beta" && renderTemplate`<span class="v-pill beta" data-astro-cid-yhidkp52>测试阶段</span>`}  ${variant.tags && variant.tags.slice(0, 5).map((t) => renderTemplate`<a${addAttribute(`/zh/tags/${t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-").replace(/#/g, "%23")}`, "href")} class="v-pill tag" data-astro-cid-yhidkp52>#${t}</a>`)} </div> </div> <div class="variant-content" data-astro-cid-yhidkp52> <section class="v-section" data-astro-cid-yhidkp52> <span class="section-tag" data-astro-cid-yhidkp52>关于产品</span> <p class="v-desc-large" data-astro-cid-yhidkp52>${variant.description || variant.descriptionEn}</p> </section> ${variant.features.length > 0 && renderTemplate`<section class="v-section" data-astro-cid-yhidkp52> <span class="section-tag" data-astro-cid-yhidkp52>核心能力</span> <ul class="v-features-list" data-astro-cid-yhidkp52> ${variant.features.map((f) => renderTemplate`<li data-astro-cid-yhidkp52><span class="bullet-square" data-astro-cid-yhidkp52></span>${f}</li>`)} </ul> </section>`} ${variant.platforms.length > 0 && renderTemplate`<section class="v-section" data-astro-cid-yhidkp52> <span class="section-tag" data-astro-cid-yhidkp52>支持平台</span> <div class="platforms-wrap" data-astro-cid-yhidkp52> ${variant.platforms.map((p) => renderTemplate`<span class="platform-tag" data-astro-cid-yhidkp52>${p}</span>`)} </div> </section>`} <section class="v-section v-links-section" data-astro-cid-yhidkp52> <span class="section-tag" data-astro-cid-yhidkp52>资源链接</span> <div class="v-links-grid" data-astro-cid-yhidkp52> ${variant.websiteUrl && renderTemplate`<a${addAttribute(variant.websiteUrl, "href")} target="_blank" rel="noopener noreferrer" class="v-button" data-astro-cid-yhidkp52>
访问官网 ↗
</a>`} ${variant.githubUrl && renderTemplate`<a${addAttribute(variant.githubUrl, "href")} target="_blank" rel="noopener noreferrer" class="v-button secondary" data-astro-cid-yhidkp52>
GitHub 仓库 ↗
</a>`} ${variant.skillHubUrl && renderTemplate`<a${addAttribute(variant.skillHubUrl, "href")} target="_blank" rel="noopener noreferrer" class="v-button secondary skills-hub" data-astro-cid-yhidkp52>
技能/插件市场 ↗
</a>`} </div> </section> ${relatedProducts.length > 0 && renderTemplate`<section class="v-section related-products-section" data-astro-cid-yhidkp52> <span class="section-tag" data-astro-cid-yhidkp52>相关生态产品</span> <div class="related-products-grid" data-astro-cid-yhidkp52> ${relatedProducts.map((p) => {
    const pInfo = typeInfo[p.type] ?? { label: p.type};
    const rpName = p.name || p.nameEn;
    const rpCompany = p.company || p.companyEn;
    const rpDesc = p.description || p.descriptionEn;
    return renderTemplate`<div class="rp-card-wrap" data-astro-cid-yhidkp52> <a${addAttribute(`/zh/product/${p.slug}`, "href")} class="rp-card-link"${addAttribute(`查看 ${rpName} 详情`, "aria-label")} data-astro-cid-yhidkp52></a> <div class="rp-card" data-astro-cid-yhidkp52> <div class="rp-card-header" data-astro-cid-yhidkp52> ${p.logo ? renderTemplate`<img${addAttribute(p.logo, "src")} alt="" class="rp-icon" data-astro-cid-yhidkp52>` : renderTemplate`<div class="rp-icon-placeholder" data-astro-cid-yhidkp52>${rpName.charAt(0)}</div>`} <div data-astro-cid-yhidkp52> <div class="rp-name" data-astro-cid-yhidkp52>${rpName}</div> <div class="rp-company" data-astro-cid-yhidkp52>${rpCompany}</div> </div> </div> <p class="rp-desc" data-astro-cid-yhidkp52>${rpDesc.slice(0, 95)}...</p> <div class="rp-tags" data-astro-cid-yhidkp52> <span class="rp-badge type" data-astro-cid-yhidkp52>${pInfo.label}</span> ${p.language && renderTemplate`<span class="rp-badge lang" data-astro-cid-yhidkp52>${p.language}</span>`} </div> </div> </div>`;
  })} </div> </section>`} </div> </article> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/product/[slug].astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/product/[slug].astro";
const $$url = "/zh/product/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
