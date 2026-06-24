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
let articlesCache = null;
let variantsCache = null;
let skillsCache = null;
let pluginsCache = null;
async function getCachedArticles(db) {
  if (!articlesCache) {
    articlesCache = await db.article.findMany({ where: { status: { in: ["approved", "published"] } } });
  }
  return articlesCache;
}
async function getCachedVariants(db) {
  if (!variantsCache) {
    variantsCache = await db.variant.findMany({ where: { approvalStatus: "approved" } });
  }
  return variantsCache;
}
async function getCachedSkills(db) {
  if (!skillsCache) {
    skillsCache = await db.skillMarket.findMany();
  }
  return skillsCache;
}
async function getCachedPlugins(db) {
  if (!pluginsCache) {
    pluginsCache = await db.plugin.findMany({ where: { status: "active" } });
  }
  return pluginsCache;
}
let blogPostsCache = null;
async function getCachedBlogPosts(db) {
  if (!blogPostsCache) {
    blogPostsCache = await db.blogPost.findMany({ where: { status: "published" } });
  }
  return blogPostsCache;
}
async function getAllTags() {
  const db = getDb();
  const articles = await getCachedArticles(db);
  const variants = await getCachedVariants(db);
  const skills = await getCachedSkills(db);
  const plugins = await getCachedPlugins(db);
  const blogPosts = await getCachedBlogPosts(db);
  const tagCounts = {};
  const processTags = (items) => {
    for (const item of items) {
      if (Array.isArray(item.tags)) {
        for (const t of item.tags) {
          const tag = String(t).trim().toLowerCase();
          if (tag) tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        }
      } else if (typeof item.tags === "string") {
        try {
          const parsed = JSON.parse(item.tags);
          if (Array.isArray(parsed)) {
            for (const t of parsed) {
              const tag = String(t).trim().toLowerCase();
              if (tag) tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            }
          }
        } catch {
        }
      }
    }
  };
  processTags(articles);
  processTags(variants);
  processTags(skills);
  processTags(plugins);
  processTags(blogPosts);
  for (const v of variants) {
    if (v.type) {
      const typeTag = String(v.type).trim().toLowerCase().replace(/_/g, "-");
      if (typeTag) tagCounts[typeTag] = (tagCounts[typeTag] || 0) + 1;
    }
    if (v.language) {
      const langTag = String(v.language).trim().toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-");
      if (langTag) tagCounts[langTag] = (tagCounts[langTag] || 0) + 1;
    }
    if (v.country) {
      const countryTag = v.country === "cn" ? "china" : "global";
      tagCounts[countryTag] = (tagCounts[countryTag] || 0) + 1;
    }
    if (v.pricing) {
      const pricingTag = String(v.pricing).trim().toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-");
      if (pricingTag) tagCounts[pricingTag] = (tagCounts[pricingTag] || 0) + 1;
    }
  }
  return Object.entries(tagCounts).filter(([name, count]) => count >= 5).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([name, count]) => ({ name, count }));
}
async function getItemsForTag(tag) {
  const db = getDb();
  const articles = await getCachedArticles(db);
  const variants = await getCachedVariants(db);
  const skills = await getCachedSkills(db);
  const plugins = await getCachedPlugins(db);
  const blogPosts = await getCachedBlogPosts(db);
  const hasTag = (itemTags) => {
    const normalize = (val) => val.trim().toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-");
    if (Array.isArray(itemTags)) {
      return itemTags.some((t) => normalize(String(t)) === tag);
    } else if (typeof itemTags === "string") {
      try {
        const parsed = JSON.parse(itemTags);
        if (Array.isArray(parsed)) {
          return parsed.some((t) => normalize(String(t)) === tag);
        }
      } catch {
      }
    }
    return false;
  };
  const matchesVariantAttribute = (v) => {
    const normalize = (val) => val.trim().toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-").replace(/_/g, "-");
    if (v.type && normalize(v.type) === tag) return true;
    if (v.language && normalize(v.language) === tag) return true;
    if (v.pricing && normalize(v.pricing) === tag) return true;
    if (v.country) {
      const c = v.country === "cn" ? "china" : "global";
      if (c === tag) return true;
    }
    return false;
  };
  return {
    articles: articles.filter((a) => hasTag(a.tags)),
    variants: variants.filter((v) => hasTag(v.tags) || matchesVariantAttribute(v)),
    skills: skills.filter((s) => hasTag(s.tags)),
    plugins: plugins.filter((p) => hasTag(p.tags)),
    blogPosts: blogPosts.filter((b) => hasTag(b.tags))
  };
}
async function getRelatedContent(tags, currentSlug, limit = 4) {
  if (!tags || tags.length === 0) return { skills: [], plugins: [], variants: [] };
  const db = getDb();
  const normalizedTags = tags.map((t) => t.trim().toLowerCase());
  const hasOverlap = (itemTags) => {
    let parsed = [];
    if (Array.isArray(itemTags)) {
      parsed = itemTags.map((t) => String(t).trim().toLowerCase());
    } else if (typeof itemTags === "string") {
      try {
        const p = JSON.parse(itemTags);
        if (Array.isArray(p)) parsed = p.map((t) => String(t).trim().toLowerCase());
      } catch {
      }
    }
    return parsed.filter((t) => normalizedTags.includes(t)).length;
  };
  const skills = await getCachedSkills(db);
  const plugins = await getCachedPlugins(db);
  const variants = await getCachedVariants(db);
  const rankedSkills = skills.map((s) => ({ ...s, score: hasOverlap(s.tags) })).filter((s) => s.score > 0 && s.slug !== currentSlug).sort((a, b) => b.score - a.score).slice(0, limit);
  const rankedPlugins = plugins.map((p) => ({ ...p, score: hasOverlap(p.tags) })).filter((p) => p.score > 0 && p.slug !== currentSlug).sort((a, b) => b.score - a.score).slice(0, limit);
  const rankedVariants = variants.map((v) => ({ ...v, score: hasOverlap(v.tags) })).filter((v) => v.score > 0 && v.slug !== currentSlug).sort((a, b) => b.score - a.score).slice(0, limit);
  return {
    skills: rankedSkills,
    plugins: rankedPlugins,
    variants: rankedVariants
  };
}

export { getItemsForTag as a, getRelatedContent as b, getAllTags as g };
