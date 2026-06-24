import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute, u as unescapeHTML } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getProductBySlug, a as getProductReleases, b as applyTimelineHighlights } from './releases_By2gwyzE.mjs';
import { b as getDb } from './articles_DuypiJQp.mjs';

async function getStaticPaths() {
  const db = getDb();
  const products = await db.releaseProduct.findMany({ select: { slug: true } });
  return products.map((p) => ({ params: { slug: p.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const product = await getProductBySlug(slug);
  if (!product) return Astro2.redirect("/404");
  const releases = await getProductReleases(slug, 50);
  function fmtDate(d) {
    if (!d) return "";
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(d);
  }
  function truncateContent(html, max = 500) {
    if (!html) return "";
    const pureText = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    return pureText.length > max ? pureText.substring(0, max) + "..." : pureText;
  }
  const getBrandColorVar = (slug2) => {
    if (slug2.includes("claude")) return "var(--accent)";
    if (slug2.includes("gemini")) return "#3b82f6";
    if (slug2.includes("mistral")) return "#ea580c";
    if (slug2.includes("openai") || slug2.includes("gpt") || slug2.includes("deepseek")) return "#10b981";
    return "var(--muted)";
  };
  const getBrandColorRgb = (slug2) => {
    if (slug2.includes("claude")) return "0, 242, 254";
    if (slug2.includes("gemini")) return "59, 130, 246";
    if (slug2.includes("mistral")) return "234, 88, 12";
    if (slug2.includes("openai") || slug2.includes("gpt") || slug2.includes("deepseek")) return "16, 185, 129";
    return "100, 116, 139";
  };
  const brandColor = getBrandColorVar(product.slug);
  const brandColorRgb = getBrandColorRgb(product.slug);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${product.name} Releases & Changelog | AgentUpdate.ai`, "description": `Track the latest updates, features, and releases for ${product.name}.`, "lang": "en", "data-astro-cid-pee4xx76": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main"${addAttribute(`--brand-color: ${brandColor}; --brand-color-rgb: ${brandColorRgb};`, "style")} data-astro-cid-pee4xx76> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Releases", url: "/releases" },
    { label: product.name }
  ], "data-astro-cid-pee4xx76": true })} <header class="detail-header" data-astro-cid-pee4xx76> <div class="product-identity-row" data-astro-cid-pee4xx76> <div class="logo-frame" data-astro-cid-pee4xx76> ${product.logoUrl ? renderTemplate`<img${addAttribute(product.logoUrl, "src")} alt="" class="product-logo" width="48" height="48" decoding="async" data-astro-cid-pee4xx76>` : renderTemplate`<span class="fallback-logo" data-astro-cid-pee4xx76>⚡</span>`} </div> <div class="identity-info" data-astro-cid-pee4xx76> <h1 class="display-title" data-astro-cid-pee4xx76>${product.name}</h1> <div class="metadata-row" data-astro-cid-pee4xx76> <span class="meta-tag" data-astro-cid-pee4xx76>${product.category.toUpperCase()}</span> <span class="meta-separator" data-astro-cid-pee4xx76>//</span> <span class="meta-label" data-astro-cid-pee4xx76>CHANGELOG ENGINE</span> </div> </div> </div> <p class="product-tagline" data-astro-cid-pee4xx76>
Tracking major feature releases, model weight updates, structural APIs, and developer roadmaps.
</p> </header> ${releases.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-pee4xx76>
No releases tracked yet.
</div>` : renderTemplate`<div class="vertical-timeline" data-astro-cid-pee4xx76> ${releases.map((release) => renderTemplate`<article${addAttribute(`timeline-item ${release.isMajor ? "major" : "minor"}`, "class")} data-astro-cid-pee4xx76> <div class="timeline-track-dot" data-astro-cid-pee4xx76></div> <div class="timeline-content-card" data-astro-cid-pee4xx76> <div class="card-meta-row" data-astro-cid-pee4xx76> <time class="release-time" data-astro-cid-pee4xx76>${fmtDate(release.publishedAt ?? release.createdAt)}</time> <div style="display: flex; gap: 8px; align-items: center;" data-astro-cid-pee4xx76> ${release.isMajor && renderTemplate`<span class="major-indicator" data-astro-cid-pee4xx76>[ MAJOR ADVANCEMENT ]</span>`} ${release.version && renderTemplate`<span class="version-label" data-astro-cid-pee4xx76>${release.version}</span>`} </div> </div> <h2 class="release-title-heading" data-astro-cid-pee4xx76> ${release.title} </h2> ${release.content && renderTemplate`<div class="release-body-content" data-astro-cid-pee4xx76> <p data-astro-cid-pee4xx76>${unescapeHTML(applyTimelineHighlights(truncateContent(release.content, 600), release.highlights))}</p> </div>`} <div class="card-footer-action" data-astro-cid-pee4xx76> <a${addAttribute(release.sourceUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn-source-link" data-astro-cid-pee4xx76>
[ ORIGINAL SOURCE → ]
</a> </div> </div> </article>`)} </div>`} </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/releases/[slug].astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/releases/[slug].astro";
const $$url = "/releases/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
