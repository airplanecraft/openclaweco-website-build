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
    title: r.title,
    titleEn: r.titleEn,
    summary: r.summary,
    summaryEn: r.summaryEn,
    content: r.content,
    contentEn: r.contentEn,
    coverImage: r.coverImage,
    author: r.author,
    tags: parsedTags,
    readingTime: r.readingTime,
    publishedAt: (r.publishedAt ?? r.createdAt ?? /* @__PURE__ */ new Date()).toISOString()
  };
}
let publishedBlogPostsCache = null;
async function getPublishedBlogPosts() {
  if (publishedBlogPostsCache) {
    return publishedBlogPostsCache;
  }
  const db = getDb();
  const rows = await db.blogPost.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" }
  });
  publishedBlogPostsCache = rows.map(mapRow);
  return publishedBlogPostsCache;
}
async function getBlogPostBySlug(slug) {
  const posts = await getPublishedBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export { getBlogPostBySlug as a, getPublishedBlogPosts as g };
