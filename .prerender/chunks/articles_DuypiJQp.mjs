import 'dotenv/config';
import { P as PrismaClient } from './client_6pH23VkJ.mjs';

let _prisma;
function getDb() {
  if (!_prisma) {
    _prisma = new PrismaClient({
      datasources: { db: { url: process.env.DATABASE_URL } },
      log: []
    });
  }
  return _prisma;
}
const SELECT_FIELDS = {
  id: true,
  slug: true,
  // Chinese
  title: true,
  summary: true,
  content: true,
  coverImage: true,
  // English
  titleEn: true,
  summaryEn: true,
  contentEn: true,
  coverImageEn: true,
  // Shared
  source: true,
  tags: true,
  sourceUrl: true,
  publishedAt: true,
  reviewedAt: true
};
function mapRow(r) {
  let parsedTags = [];
  if (r.tags) {
    if (typeof r.tags === "string") {
      try {
        parsedTags = JSON.parse(r.tags);
      } catch {
      }
    } else if (Array.isArray(r.tags)) {
      parsedTags = r.tags;
    }
  }
  return {
    id: r.id,
    slug: r.slug,
    // Chinese
    title: r.title ?? r.slug,
    summary: r.summary,
    content: r.content,
    coverImage: r.coverImage,
    // English
    titleEn: r.titleEn,
    summaryEn: r.summaryEn,
    contentEn: r.contentEn,
    coverImageEn: r.coverImageEn,
    // Shared
    source: r.source,
    tags: parsedTags,
    sourceUrl: r.sourceUrl,
    publishedAt: (r.publishedAt ?? r.reviewedAt ?? /* @__PURE__ */ new Date()).toISOString()
  };
}
let approvedArticlesCache = null;
async function getApprovedArticles() {
  if (approvedArticlesCache) {
    return approvedArticlesCache;
  }
  const db = getDb();
  const rows = await db.article.findMany({
    where: { status: { in: ["approved", "published"] }, slug: { not: null } },
    orderBy: { publishedAt: "desc" },
    select: SELECT_FIELDS
  });
  approvedArticlesCache = rows.map(mapRow);
  return approvedArticlesCache;
}
async function getArticleBySlug(slug) {
  const articles = await getApprovedArticles();
  return articles.find((a) => a.slug === slug) || null;
}
async function getAdjacentArticles(currentId, limit = 3) {
  const articles = await getApprovedArticles();
  const prev = articles.filter((a) => a.id < currentId).sort((a, b) => b.id - a.id).slice(0, limit);
  const next = articles.filter((a) => a.id > currentId).sort((a, b) => a.id - b.id).slice(0, limit);
  const combined = [...next, ...prev].slice(0, limit);
  return combined;
}
async function getLatestArticles(limit = 3) {
  const articles = await getApprovedArticles();
  return articles.slice(0, limit);
}
async function getRelatedArticles(productTags, limit = 3) {
  const all = await getApprovedArticles();
  if (!productTags || productTags.length === 0) {
    return all.slice(0, limit);
  }
  const searchTags = new Set(productTags.map((t) => t.toLowerCase()));
  const scored = all.map((article) => {
    let score = 0;
    if (article.tags && article.tags.length > 0) {
      const intersection = article.tags.filter((t) => searchTags.has(t.toLowerCase())).length;
      score += intersection * 10;
    }
    return { article, score };
  });
  return scored.sort((a, b) => b.score - a.score || b.article.id - a.article.id).slice(0, limit).map((s) => s.article);
}

export { getArticleBySlug as a, getDb as b, getLatestArticles as c, getRelatedArticles as d, getAdjacentArticles as e, getApprovedArticles as g };
