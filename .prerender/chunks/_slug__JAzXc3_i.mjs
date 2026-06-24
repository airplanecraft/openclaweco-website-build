import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { r as renderTemplate, b as renderComponent, m as maybeRenderHead, c as addAttribute, u as unescapeHTML } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getApprovedArticles, a as getArticleBySlug } from './articles_DuypiJQp.mjs';
import { $ as $$RelatedItems } from './RelatedItems_CD73_a-4.mjs';
import { a as autolinkTags, g as generateFaqSchema, $ as $$RelatedNews } from './seo_CSHTrWRV.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
async function getStaticPaths() {
  const articles = await getApprovedArticles();
  return articles.map((a) => ({ params: { slug: a.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const article = await getArticleBySlug(slug);
  if (!article) {
    return Astro2.redirect("/zh/news");
  }
  const publishedDate = new Date(article.publishedAt);
  const fmt = (d) => d.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Shanghai"
  });
  let processedContent = article.content || "";
  if (processedContent) {
    const deepDiveRegex = /<p>\s*(<strong>|<b>)?\s*(【AgentUpdate\s*深度解析】|\[AgentUpdate\s*Deep\s*Dive\])\s*(<\/strong>|<\/b>)?([\s\S]*?)<\/p>/gi;
    processedContent = processedContent.replace(deepDiveRegex, (match, strongOpen, marker, strongClose, bodyText) => {
      const cleanMarker = marker.replace(/[【】\[\]]/g, "").trim();
      return `<div class="deep-dive-callout">
      <div class="deep-dive-badge">
        <svg class="deep-dive-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
        ${cleanMarker}
      </div>
      <p>${bodyText.trim()}</p>
    </div>`;
    });
    processedContent = autolinkTags(processedContent, article.tags, "zh");
  }
  let articleSummary = article.summary;
  if (!articleSummary && processedContent) {
    const plainText = processedContent.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    articleSummary = plainText.substring(0, 150);
  }
  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: articleSummary,
    image: article.coverImage ?? article.coverImageEn ?? void 0,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: "zh-CN",
    author: {
      "@type": "Organization",
      name: "AgentUpdate.ai",
      url: "https://www.agentupdate.ai"
    },
    publisher: {
      "@type": "Organization",
      name: "AgentUpdate.ai",
      url: "https://www.agentupdate.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://www.agentupdate.ai/favicon.svg"
      }
    },
    url: `https://www.agentupdate.ai/zh/news/${article.slug}`
  };
  const schemas = [newsArticleSchema];
  const faqSchema = generateFaqSchema(processedContent);
  if (faqSchema) {
    schemas.push(faqSchema);
  }
  return renderTemplate(_a || (_a = __template(["", " <script>\n  document.addEventListener('DOMContentLoaded', function() {\n    // Sync scroll reading progress bar\n    const progressBar = document.getElementById('reading-progress-bar');\n    if (progressBar) {\n      const updateProgress = () => {\n        const scrollTop = window.scrollY || document.documentElement.scrollTop;\n        const docHeight = document.documentElement.scrollHeight - window.innerHeight;\n        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;\n        progressBar.style.width = scrollPercent + '%';\n      };\n      window.addEventListener('scroll', updateProgress, { passive: true });\n      updateProgress();\n    }\n  });\n<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${article.title} — AgentUpdate.ai`, "description": articleSummary ?? "在 AgentUpdate.ai 阅读这篇文章", "keywords": [article.title, article.source, ...article.tags ?? [], "AI智能体", "AgentUpdate"].filter(Boolean), "ogImage": article.coverImage ?? article.coverImageEn ?? void 0, "ogType": "article", "lang": "zh", "structuredData": schemas, "showProgressBar": true, "data-astro-cid-zz6epukd": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="swiss-detail-page" data-astro-cid-zz6epukd> <!-- Full-width premium article hero header --> <div class="article-hero" data-astro-cid-zz6epukd> <div class="container hero-container" data-astro-cid-zz6epukd> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "新闻资讯", url: "/zh/news" },
    { label: article.title }
  ], "data-astro-cid-zz6epukd": true })} <div class="article-hero-content" data-astro-cid-zz6epukd> <span class="source-badge" data-astro-cid-zz6epukd> ${article.source ? `SOURCE // ${article.source.toUpperCase()}` : "SYSTEM // INTEL"} </span> <h1 class="article-title" data-testid="article-title-zh" data-astro-cid-zz6epukd>${article.title}</h1> <div class="article-meta" data-astro-cid-zz6epukd> <span class="meta-item" data-astro-cid-zz6epukd>${fmt(publishedDate)}</span> <span class="meta-item-separator" data-astro-cid-zz6epukd>|</span> <span class="meta-item" data-astro-cid-zz6epukd>3 分钟阅读</span> </div> ${article.tags.length > 0 && renderTemplate`<div class="article-tags" data-astro-cid-zz6epukd> ${article.tags.map((t) => {
    const slugified = t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-");
    return renderTemplate`<a${addAttribute(`/zh/tags/${slugified}`, "href")} class="tag" data-astro-cid-zz6epukd>#${t}</a>`;
  })} </div>`} </div> </div> </div> <!-- Reading layout centered and optimized --> <article class="container reading-container" data-astro-cid-zz6epukd> ${(article.coverImage ?? article.coverImageEn) && renderTemplate`<img class="article-cover"${addAttribute(article.coverImage ?? article.coverImageEn, "src")}${addAttribute(article.title, "alt")} data-astro-cid-zz6epukd>`} ${processedContent ? renderTemplate`<div class="article-content" data-astro-cid-zz6epukd>${unescapeHTML(processedContent)}</div>` : renderTemplate`<p class="article-content" style="color:var(--muted)" data-astro-cid-zz6epukd>暂无中文正文，请前往原文阅读。</p>`} <div class="source-link-row" data-astro-cid-zz6epukd> <a${addAttribute(article.sourceUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn-source-action" data-astro-cid-zz6epukd>
阅读原文 <span class="arrow" data-astro-cid-zz6epukd>→</span> </a> </div> <div class="related-block-divider" data-astro-cid-zz6epukd></div> ${renderComponent($$result2, "RelatedNews", $$RelatedNews, { "currentId": article.id, "lang": "zh", "title": "推荐阅读", "mode": "adjacent", "data-astro-cid-zz6epukd": true })} ${renderComponent($$result2, "RelatedItems", $$RelatedItems, { "tags": Array.isArray(article.tags) ? article.tags : JSON.parse(article.tags || "[]"), "currentSlug": article.slug, "lang": "zh", "data-astro-cid-zz6epukd": true })} </article> </main> ` }));
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/news/[slug].astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/news/[slug].astro";
const $$url = "/zh/news/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
