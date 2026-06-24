import { b as getDb } from './articles_DuypiJQp.mjs';

let simulatorsCache = null;
async function getPublishedSimulators() {
  if (simulatorsCache) {
    return simulatorsCache;
  }
  const db = getDb();
  const records = await db.simulator.findMany({
    where: { status: "published" },
    orderBy: { sortOrder: "asc" }
  });
  simulatorsCache = records.map((r) => ({
    id: r.id,
    slug: r.slug,
    name: r.name,
    nameEn: r.nameEn ?? void 0,
    description: r.description,
    descriptionEn: r.descriptionEn ?? void 0,
    product: r.product,
    coverImage: r.coverImage ?? void 0,
    chapterCount: r.chapterCount,
    estimatedTime: r.estimatedTime ?? void 0,
    difficulty: r.difficulty,
    tags: Array.isArray(r.tags) ? r.tags : [],
    sortOrder: r.sortOrder
  }));
  return simulatorsCache;
}

export { getPublishedSimulators as g };
