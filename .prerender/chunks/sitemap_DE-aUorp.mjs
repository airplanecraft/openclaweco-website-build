import { g as getApprovedArticles } from './articles_DuypiJQp.mjs';
import { a as getAllLessonPaths } from './tutorials_CJIlU2hu.mjs';
import { g as getAllVariants } from './variants_CC1gBVGE.mjs';
import { g as getAllTags } from './tags_BJSnwKLq.mjs';
import { g as getPublishedBlogPosts } from './blog_Bxjvca-5.mjs';
import { e as getAllReleaseProducts } from './releases_By2gwyzE.mjs';

const GET = async () => {
  const site = "https://www.agentupdate.ai";
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const staticPages = [
    { url: "/", lastmod: today, priority: "1.0", changefreq: "daily" },
    { url: "/news", lastmod: today, priority: "0.9", changefreq: "hourly" },
    { url: "/product", lastmod: today, priority: "0.8", changefreq: "daily" },
    { url: "/skills", lastmod: today, priority: "0.8", changefreq: "daily" },
    { url: "/plugins", lastmod: today, priority: "0.8", changefreq: "daily" },
    { url: "/releases", lastmod: today, priority: "0.8", changefreq: "daily" },
    { url: "/tags", lastmod: today, priority: "0.7", changefreq: "weekly" },
    { url: "/tutorial", lastmod: today, priority: "0.8", changefreq: "weekly" },
    { url: "/blog", lastmod: today, priority: "0.8", changefreq: "daily" },
    { url: "/zh", lastmod: today, priority: "0.9", changefreq: "daily" },
    { url: "/zh/news", lastmod: today, priority: "0.8", changefreq: "hourly" },
    { url: "/zh/product", lastmod: today, priority: "0.8", changefreq: "daily" },
    { url: "/zh/skills", lastmod: today, priority: "0.8", changefreq: "daily" },
    { url: "/zh/plugins", lastmod: today, priority: "0.8", changefreq: "daily" },
    { url: "/zh/releases", lastmod: today, priority: "0.8", changefreq: "daily" },
    { url: "/zh/tags", lastmod: today, priority: "0.7", changefreq: "weekly" },
    { url: "/zh/tutorial", lastmod: today, priority: "0.8", changefreq: "weekly" },
    { url: "/zh/blog", lastmod: today, priority: "0.8", changefreq: "daily" }
  ];
  const [articles, tutorials, variants, tags, blogs, releaseProducts] = await Promise.all([
    getApprovedArticles(),
    getAllLessonPaths(),
    getAllVariants(),
    getAllTags(),
    getPublishedBlogPosts(),
    getAllReleaseProducts()
  ]);
  const articlePages = articles.flatMap((a) => [
    { url: `/news/${a.slug}`, lastmod: a.publishedAt.split("T")[0], priority: "0.7", changefreq: "weekly" },
    { url: `/zh/news/${a.slug}`, lastmod: a.publishedAt.split("T")[0], priority: "0.7", changefreq: "weekly" }
  ]);
  const tutorialPages = tutorials.flatMap((t) => [
    { url: `/tutorial/${t.series}/${t.lesson}`, lastmod: today, priority: "0.7", changefreq: "monthly" },
    { url: `/zh/tutorial/${t.series}/${t.lesson}`, lastmod: today, priority: "0.7", changefreq: "monthly" }
  ]);
  const variantPages = variants.flatMap((v) => [
    { url: `/product/${v.slug}`, lastmod: today, priority: "0.6", changefreq: "monthly" },
    { url: `/zh/product/${v.slug}`, lastmod: today, priority: "0.6", changefreq: "monthly" }
  ]);
  const formatTag = (name) => name.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-");
  const tagPages = tags.flatMap((t) => [
    { url: `/tags/${formatTag(t.name)}`, lastmod: today, priority: "0.4", changefreq: "weekly" },
    { url: `/zh/tags/${formatTag(t.name)}`, lastmod: today, priority: "0.4", changefreq: "weekly" }
  ]);
  const blogPages = blogs.flatMap((b) => [
    { url: `/blog/${b.slug}`, lastmod: b.publishedAt.split("T")[0], priority: "0.7", changefreq: "weekly" },
    { url: `/zh/blog/${b.slug}`, lastmod: b.publishedAt.split("T")[0], priority: "0.7", changefreq: "weekly" }
  ]);
  const releasePages = releaseProducts.flatMap((p) => [
    { url: `/releases/${p.slug}`, lastmod: today, priority: "0.6", changefreq: "monthly" },
    { url: `/zh/releases/${p.slug}`, lastmod: today, priority: "0.6", changefreq: "monthly" }
  ]);
  const all = [...staticPages, ...articlePages, ...tutorialPages, ...variantPages, ...tagPages, ...blogPages, ...releasePages];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map((p) => `  <url>
    <loc>${site}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
