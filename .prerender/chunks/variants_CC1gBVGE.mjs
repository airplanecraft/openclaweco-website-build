import { b as getDb } from './articles_DuypiJQp.mjs';

function mapRow(r) {
  return {
    id: r.id,
    slug: r.slug,
    name: r.name,
    nameEn: r.nameEn,
    company: r.company,
    companyEn: r.companyEn,
    logo: r.logo,
    type: r.type,
    description: r.description,
    descriptionEn: r.descriptionEn,
    platforms: Array.isArray(r.platforms) ? r.platforms : [],
    skillHubUrl: r.skillHubUrl,
    pricing: r.pricing,
    skillCount: r.skillCount,
    features: Array.isArray(r.features) ? r.features : [],
    featuresEn: Array.isArray(r.featuresEn) ? r.featuresEn : null,
    language: r.language,
    status: r.status,
    country: r.country,
    websiteUrl: r.websiteUrl,
    githubUrl: r.githubUrl,
    tags: Array.isArray(r.tags) ? r.tags : [],
    createdAt: r.createdAt
  };
}
let variantsCache = null;
async function getCachedVariants(db) {
  if (!variantsCache) {
    variantsCache = await db.variant.findMany({
      orderBy: { createdAt: "desc" }
    });
  }
  return variantsCache;
}
async function getAllVariants() {
  const db = getDb();
  const all = await getCachedVariants(db);
  const rows = all.filter((r) => r.approvalStatus === "approved");
  return rows.map(mapRow);
}
async function getRelatedVariants(current, limit = 3) {
  const all = await getAllVariants();
  const currentTags = new Set(current.tags.map((t) => t.toLowerCase()));
  const scored = all.filter((p) => p.id !== current.id).map((p) => {
    let score = 0;
    if (p.tags && p.tags.length > 0) {
      const intersection = p.tags.filter((t) => currentTags.has(t.toLowerCase())).length;
      score += intersection * 10;
    }
    if (p.type === current.type) {
      score += 5;
    }
    if (p.language && current.language && p.language.toLowerCase() === current.language.toLowerCase()) {
      score += 3;
    }
    return { product: p, score };
  });
  return scored.sort((a, b) => b.score - a.score || b.product.id - a.product.id).slice(0, limit).map((s) => s.product);
}
async function getVariantBySlug(slug) {
  const db = getDb();
  const all = await getCachedVariants(db);
  const r = all.find((v) => v.slug === slug);
  if (!r) return null;
  return mapRow(r);
}

export { getVariantBySlug as a, getRelatedVariants as b, getAllVariants as g };
