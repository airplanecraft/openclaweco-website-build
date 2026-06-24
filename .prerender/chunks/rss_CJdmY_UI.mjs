import rss from '@astrojs/rss';
import { c as getLatestArticles } from './articles_DuypiJQp.mjs';
import { g as getAllTutorialSeries } from './tutorials_CJIlU2hu.mjs';
import { g as getPublishedBlogPosts } from './blog_Bxjvca-5.mjs';

async function GET(context) {
  const [articles, series, blogs] = await Promise.all([
    getLatestArticles(20),
    getAllTutorialSeries("en"),
    getPublishedBlogPosts()
  ]);
  const newsItems = articles.map((a) => ({
    title: a.titleEn || a.title,
    description: a.summaryEn || a.summary || "",
    link: `/news/${a.slug}`,
    pubDate: new Date(a.publishedAt)
  }));
  const tutorialItems = series.map((s) => ({
    title: `[Tutorial] ${s.title}`,
    description: s.description,
    link: `/tutorial/${s.slug}`,
    pubDate: new Date(s.updatedAt || s.createdAt)
  }));
  const blogItems = blogs.slice(0, 20).map((b) => ({
    title: `[Blog] ${b.titleEn || b.title}`,
    description: b.summaryEn || b.summary || "",
    link: `/blog/${b.slug}`,
    pubDate: new Date(b.publishedAt)
  }));
  const items = [...newsItems, ...tutorialItems, ...blogItems].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  return rss({
    title: "AgentUpdate.ai - AI Agent News & Tutorials",
    description: "The latest news, product updates, and in-depth tutorials on AI coding agents and autonomous workflows.",
    site: context.site || "https://www.agentupdate.ai",
    items,
    customData: `<language>en-us</language>`
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
