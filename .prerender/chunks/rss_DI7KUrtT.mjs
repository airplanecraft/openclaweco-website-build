import rss from '@astrojs/rss';
import { c as getLatestArticles } from './articles_DuypiJQp.mjs';
import { g as getAllTutorialSeries } from './tutorials_CJIlU2hu.mjs';
import { g as getPublishedBlogPosts } from './blog_Bxjvca-5.mjs';

async function GET(context) {
  const [articles, series, blogs] = await Promise.all([
    getLatestArticles(20),
    getAllTutorialSeries("zh"),
    getPublishedBlogPosts()
  ]);
  const newsItems = articles.map((a) => ({
    title: a.title,
    description: a.summary || "",
    link: `/zh/news/${a.slug}`,
    pubDate: new Date(a.publishedAt)
  }));
  const tutorialItems = series.map((s) => ({
    title: `[教程] ${s.title}`,
    description: s.description,
    link: `/zh/tutorial/${s.slug}`,
    pubDate: new Date(s.updatedAt || s.createdAt)
  }));
  const blogItems = blogs.slice(0, 20).map((b) => ({
    title: `[博客] ${b.title}`,
    description: b.summary || "",
    link: `/zh/blog/${b.slug}`,
    pubDate: new Date(b.publishedAt)
  }));
  const items = [...newsItems, ...tutorialItems, ...blogItems].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  return rss({
    title: "AgentUpdate.ai - AI Agent 新闻与教程",
    description: "关于 AI 编程 Agent、自动化工作流的最新资讯、产品动态与深度教程。",
    site: context.site || "https://www.agentupdate.ai",
    items,
    customData: `<language>zh-cn</language>`
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
