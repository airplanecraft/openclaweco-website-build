import { b as getDb } from './articles_DuypiJQp.mjs';

let pluginsCache = null;
async function getAllPlugins() {
  if (pluginsCache) {
    return pluginsCache;
  }
  const db = getDb();
  const rows = await db.plugin.findMany({
    where: { status: "active" },
    orderBy: [{ installCount: "desc" }, { name: "asc" }]
  });
  pluginsCache = rows.map((r) => ({
    id: r.id,
    slug: r.slug,
    name: r.name,
    nameEn: r.nameEn,
    description: r.description,
    descriptionEn: r.descriptionEn,
    category: r.category,
    author: r.author,
    authorUrl: r.authorUrl,
    repoUrl: r.repoUrl,
    icon: r.icon,
    installCount: r.installCount,
    stars: r.stars,
    version: r.version,
    license: r.license,
    tags: Array.isArray(r.tags) ? r.tags : [],
    pricing: r.pricing,
    status: r.status
  }));
  return pluginsCache;
}

export { getAllPlugins as g };
