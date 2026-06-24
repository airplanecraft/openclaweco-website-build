import { c as createComponent } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, r as renderTemplate } from './prerender_BfEYESbt.mjs';
import 'clsx';
import { d as getRelatedArticles, e as getAdjacentArticles, c as getLatestArticles } from './articles_DuypiJQp.mjs';

const $$RelatedNews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$RelatedNews;
  const { currentId, lang = "en", title, mode = "adjacent", tags = [] } = Astro2.props;
  let articles = [];
  if (mode === "related" && tags && tags.length > 0) {
    articles = await getRelatedArticles(tags, 3);
  } else if (mode === "adjacent" && currentId) {
    articles = await getAdjacentArticles(currentId, 3);
  } else {
    articles = await getLatestArticles(3);
  }
  if (articles.length === 0) return null;
  const labels = {
    en: {
      title: title || "Latest AI News",
      readMore: "Read Full Story"
    },
    zh: {
      title: title || "最新 AI 资讯",
      readMore: "阅读全文"
    }
  }[lang];
  const fmt = (d) => new Date(d).toLocaleDateString(lang === "zh" ? "zh-CN" : "en-US", {
    month: "short",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<section class="related-news-mesh" data-astro-cid-nscm2htv> <div class="mesh-header" data-astro-cid-nscm2htv> <h2 data-astro-cid-nscm2htv>${labels.title}</h2> <div class="mesh-line" data-astro-cid-nscm2htv></div> </div> <div class="news-grid" data-astro-cid-nscm2htv> ${articles.map((article) => renderTemplate`<a${addAttribute(`/${lang === "zh" ? "zh/" : ""}news/${article.slug}/`, "href")} class="news-card" data-astro-cid-nscm2htv> <div class="card-image" data-astro-cid-nscm2htv> ${article.coverImageEn || article.coverImage ? renderTemplate`<img${addAttribute(article.coverImageEn || article.coverImage, "src")}${addAttribute(lang === "zh" ? article.title || article.titleEn : article.titleEn || article.title, "alt")} loading="lazy" data-astro-cid-nscm2htv>` : renderTemplate`<div class="image-placeholder" data-astro-cid-nscm2htv>AI</div>`} </div> <div class="card-content" data-astro-cid-nscm2htv> <div class="card-meta" data-astro-cid-nscm2htv> <span class="date" data-astro-cid-nscm2htv>${fmt(article.publishedAt)}</span> ${article.source && renderTemplate`<span class="source" data-astro-cid-nscm2htv>${article.source}</span>`} </div> <h3 data-astro-cid-nscm2htv>${lang === "zh" ? article.title || article.titleEn : article.titleEn || article.title}</h3> <p data-astro-cid-nscm2htv>${lang === "zh" ? article.summary || article.summaryEn : article.summaryEn || article.summary}</p> <span class="read-link" data-astro-cid-nscm2htv>${labels.readMore} →</span> </div> </a>`)} </div> </section>`;
}, "/Users/eric/work/openclaweco.com/website/src/components/RelatedNews.astro", void 0);

function autolinkTags(content, tags, lang) {
  if (!content || !tags || tags.length === 0) return content;
  const placeholders = [];
  let tokenizedContent = content.replace(
    /(<a\b[^>]*>([\s\S]*?)<\/a>|<code\b[^>]*>([\s\S]*?)<\/code>|<pre\b[^>]*>([\s\S]*?)<\/pre>|<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>|<[^>]+>)/gi,
    (match) => {
      placeholders.push(match);
      return `__HTML_PLACEHOLDER_${placeholders.length - 1}__`;
    }
  );
  const sortedTags = Array.from(new Set(tags)).map((t) => t.trim()).filter((t) => t.length >= 2).sort((a, b) => b.length - a.length);
  let linkedCount = 0;
  for (const tag of sortedTags) {
    if (linkedCount >= 3) break;
    const escapedTag = tag.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const isAscii = /^[a-z0-9\s\-_.+]+$/i.test(tag);
    const regexPattern = isAscii ? new RegExp(`\\b${escapedTag}\\b`, "i") : new RegExp(escapedTag, "g");
    const slugified = tag.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-");
    const tagUrl = lang === "zh" ? `/zh/tags/${slugified}` : `/tags/${slugified}`;
    let matched = false;
    tokenizedContent = tokenizedContent.replace(regexPattern, (match) => {
      if (matched) return match;
      matched = true;
      linkedCount++;
      placeholders.push(`<a href="${tagUrl}" class="seo-autolink">#${match}</a>`);
      return `__HTML_PLACEHOLDER_${placeholders.length - 1}__`;
    });
  }
  return tokenizedContent.replace(/__HTML_PLACEHOLDER_(\d+)__/g, (_, idx) => {
    return placeholders[parseInt(idx, 10)];
  });
}
function generateFaqSchema(htmlContent) {
  if (!htmlContent) return null;
  const faqRegex = /<(h[23])>([^<]*\?[^<]*)<\/h[23]>/gi;
  const matches = [...htmlContent.matchAll(faqRegex)];
  if (matches.length >= 2) {
    const questions = matches.map((m) => m[2].trim());
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": questions.map((q) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Find detailed guides, tutorials, and expert answers about "${q}" inside this article on AgentUpdate.ai.`
        }
      }))
    };
  }
  return null;
}

export { $$RelatedNews as $, autolinkTags as a, generateFaqSchema as g };
