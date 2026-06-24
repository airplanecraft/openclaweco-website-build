import { b as getDb } from './articles_DuypiJQp.mjs';

let skillMarketsCache = null;
async function getAllSkillMarkets() {
  if (skillMarketsCache) {
    return skillMarketsCache;
  }
  const db = getDb();
  const rows = await db.skillMarket.findMany({
    orderBy: [{ type: "asc" }, { name: "asc" }]
  });
  skillMarketsCache = rows.map((r) => ({
    id: r.id,
    slug: r.slug,
    name: r.name,
    nameEn: r.nameEn,
    description: r.description,
    descriptionEn: r.descriptionEn,
    type: r.type,
    url: r.url,
    logoUrl: r.logoUrl,
    platforms: Array.isArray(r.platforms) ? r.platforms : [],
    features: Array.isArray(r.features) ? r.features : [],
    featuresEn: Array.isArray(r.featuresEn) ? r.featuresEn : [],
    pricing: r.pricing,
    country: r.country,
    tags: Array.isArray(r.tags) ? r.tags : []
  }));
  return skillMarketsCache;
}

export { getAllSkillMarkets as g };
