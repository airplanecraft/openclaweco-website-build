import { b as getDb } from './articles_DuypiJQp.mjs';

function applyTimelineHighlights(content, highlights) {
  if (!content) return "";
  let hWords = [];
  if (Array.isArray(highlights)) {
    hWords = highlights;
  } else if (highlights && typeof highlights === "object") {
    hWords = Array.from(highlights);
  } else if (typeof highlights === "string") {
    try {
      hWords = JSON.parse(highlights);
    } catch {
      hWords = highlights.split(/[，,]/).map((s) => s.trim()).filter(Boolean);
    }
  }
  if (hWords.length === 0) return content;
  let result = content;
  const sortedHighlights = [...hWords].sort((a, b) => b.length - a.length);
  for (const word of sortedHighlights) {
    const trimmed = word.trim();
    if (!trimmed) continue;
    const escaped = trimmed.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(`\\b(${escaped})\\b`, "gi");
    result = result.replace(regex, '<span class="release-highlight-capsule">$1</span>');
  }
  return result;
}
let releaseProductsCache = null;
let releasesCache = null;
async function getCachedReleaseProducts(db) {
  if (!releaseProductsCache) {
    releaseProductsCache = await db.releaseProduct.findMany();
  }
  return releaseProductsCache;
}
async function getCachedReleases(db) {
  if (!releasesCache) {
    releasesCache = await db.release.findMany({
      include: {
        product: {
          select: {
            id: true,
            slug: true,
            name: true,
            nameCn: true,
            category: true,
            logoUrl: true,
            websiteUrl: true
          }
        }
      }
    });
  }
  return releasesCache;
}
async function getLatestReleases(limit = 50, skip = 0) {
  const db = getDb();
  const allReleases = await getCachedReleases(db);
  const filtered = allReleases.filter((r) => r.status === "published").sort((a, b) => {
    const aDate = a.publishedAt ?? a.createdAt;
    const bDate = b.publishedAt ?? b.createdAt;
    const tA = aDate ? new Date(aDate).getTime() : 0;
    const tB = bDate ? new Date(bDate).getTime() : 0;
    if (tA !== tB) return tB - tA;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  return filtered.slice(skip, skip + limit);
}
async function getProductReleases(productSlug, limit = 20) {
  const db = getDb();
  const allReleases = await getCachedReleases(db);
  const filtered = allReleases.filter((r) => r.status === "published" && r.product.slug === productSlug).sort((a, b) => {
    const aDate = a.publishedAt ?? a.createdAt;
    const bDate = b.publishedAt ?? b.createdAt;
    const tA = aDate ? new Date(aDate).getTime() : 0;
    const tB = bDate ? new Date(bDate).getTime() : 0;
    if (tA !== tB) return tB - tA;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  return filtered.slice(0, limit);
}
async function getProductsWithLatestReleases(limitPerProduct = 5) {
  const db = getDb();
  const products = await getCachedReleaseProducts(db);
  const allReleases = await getCachedReleases(db);
  const enabledProducts = products.filter((p) => p.enabled);
  const result = enabledProducts.map((p) => {
    const productReleases = allReleases.filter((r) => r.productId === p.id && r.status === "published").sort((a, b) => {
      const aDate = a.publishedAt ?? a.createdAt;
      const bDate = b.publishedAt ?? b.createdAt;
      const tA = aDate ? new Date(aDate).getTime() : 0;
      const tB = bDate ? new Date(bDate).getTime() : 0;
      if (tA !== tB) return tB - tA;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }).slice(0, limitPerProduct);
    return {
      ...p,
      releases: productReleases
    };
  });
  result.sort((a, b) => {
    const aDate = a.releases[0]?.publishedAt ?? a.releases[0]?.createdAt ?? /* @__PURE__ */ new Date(0);
    const bDate = b.releases[0]?.publishedAt ?? b.releases[0]?.createdAt ?? /* @__PURE__ */ new Date(0);
    return new Date(bDate).getTime() - new Date(aDate).getTime();
  });
  return result;
}
async function getProductBySlug(slug) {
  const db = getDb();
  const products = await getCachedReleaseProducts(db);
  const p = products.find((p2) => p2.slug === slug);
  if (!p) return null;
  return p;
}
async function getAllReleaseProducts() {
  const db = getDb();
  const products = await getCachedReleaseProducts(db);
  return products.filter((p) => p.enabled);
}

export { getProductReleases as a, applyTimelineHighlights as b, getLatestReleases as c, getProductsWithLatestReleases as d, getAllReleaseProducts as e, getProductBySlug as g };
