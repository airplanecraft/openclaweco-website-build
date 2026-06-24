import { c as createComponent } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as renderComponent, F as Fragment, r as renderTemplate, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { b as getDb } from './articles_DuypiJQp.mjs';

const $$SectionTodayBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionTodayBar;
  const { stats, highlight, lang } = Astro2.props;
  stats.totalToday > 0;
  const labelsEn = {
    news: "News",
    blog: "Blog",
    products: "Products",
    skills: "Skills",
    plugins: "Plugins",
    tutorials: "Tutorials",
    releases: "Releases",
    simulators: "Simulators"
  };
  const labelsZh = {
    news: "新闻",
    blog: "博客",
    products: "产品",
    skills: "技能",
    plugins: "插件",
    tutorials: "教程",
    releases: "发版",
    simulators: "模拟器"
  };
  const labels = lang === "zh" ? labelsZh : labelsEn;
  const entries = [
    { key: "news", stat: stats.news },
    { key: "blog", stat: stats.blog },
    { key: "products", stat: stats.products },
    { key: "releases", stat: stats.releases },
    { key: "simulators", stat: stats.simulators },
    { key: "skills", stat: stats.skills },
    { key: "plugins", stat: stats.plugins },
    { key: "tutorials", stat: stats.tutorials }
  ];
  const urlsEn = {
    news: "/news",
    blog: "/blog",
    products: "/product",
    skills: "/skills",
    plugins: "/plugins",
    tutorials: "/tutorial",
    releases: "/releases",
    simulators: "/simulators"
  };
  const urlsZh = {
    news: "/zh/news",
    blog: "/zh/blog",
    products: "/zh/product",
    skills: "/zh/skills",
    plugins: "/zh/plugins",
    tutorials: "/zh/tutorial",
    releases: "/zh/releases",
    simulators: "/zh/simulators"
  };
  const urls = lang === "zh" ? urlsZh : urlsEn;
  return renderTemplate`${maybeRenderHead()}<div class="section-today-bar" data-testid="section-today-bar" data-astro-cid-hmv4us2j> <span class="stb-pulse" data-astro-cid-hmv4us2j></span> <div class="stb-content" data-astro-cid-hmv4us2j> ${entries.map((e, idx) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-hmv4us2j": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(urls[e.key], "href")}${addAttribute(["stb-item", e.key === highlight && "stb-highlight"], "class:list")} data-astro-cid-hmv4us2j> <span class="stb-label" data-astro-cid-hmv4us2j>${labels[e.key]}:</span> <span class="stb-value" data-astro-cid-hmv4us2j>${e.stat.total}</span> ${e.stat.today > 0 && renderTemplate`<span class="stb-increment" data-astro-cid-hmv4us2j>(${lang === "zh" ? "+" : "+"}${e.stat.today})</span>`} </a> ${idx < entries.length - 1 && renderTemplate`<span class="stb-sep" data-astro-cid-hmv4us2j>·</span>`}` })}`)} </div> <a${addAttribute(lang === "zh" ? "/zh/tags" : "/tags", "href")} class="stb-total" data-astro-cid-hmv4us2j> ${lang === "zh" ? `全站总计 ${entries.reduce((s, e) => s + e.stat.total, 0)} 项内容` : `${entries.reduce((s, e) => s + e.stat.total, 0)} items in total`} </a> </div>`;
}, "/Users/eric/work/openclaweco.com/website/src/layouts/SectionTodayBar.astro", void 0);

let dailyStatsCache = null;
async function getDailyStats() {
  if (dailyStatsCache) {
    return dailyStatsCache;
  }
  const db = getDb();
  const now = /* @__PURE__ */ new Date();
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  const [newsTotal, newsToday] = await Promise.all([
    db.article.count({ where: { status: { in: ["approved", "published"] } } }),
    db.article.count({
      where: {
        status: { in: ["approved", "published"] },
        reviewedAt: { gte: todayStart }
      }
    })
  ]);
  const [blogTotal, blogToday] = await Promise.all([
    db.blogPost.count({ where: { status: "published" } }),
    db.blogPost.count({
      where: {
        status: "published",
        publishedAt: { gte: todayStart }
      }
    })
  ]);
  const [prodTotal, prodToday] = await Promise.all([
    db.variant.count({ where: { approvalStatus: "approved" } }),
    db.variant.count({ where: { approvalStatus: "approved", updatedAt: { gte: todayStart } } })
  ]);
  const [skillTotal, skillToday] = await Promise.all([
    db.skillMarket.count(),
    db.skillMarket.count({ where: { createdAt: { gte: todayStart } } })
  ]);
  const [pluginTotal, pluginToday] = await Promise.all([
    db.plugin.count({ where: { status: "active" } }),
    db.plugin.count({ where: { status: "active", createdAt: { gte: todayStart } } })
  ]);
  const tutorialStatus = { in: ["published", "published_zh", "published_en", "published_all"] };
  const [lessonTotal, lessonToday] = await Promise.all([
    db.tutorialLesson.count({ where: { status: tutorialStatus } }),
    db.tutorialLesson.count({
      where: {
        status: tutorialStatus,
        updatedAt: { gte: todayStart }
      }
    })
  ]);
  const [releaseTotal, releaseToday] = await Promise.all([
    db.release.count({ where: { status: "published" } }),
    db.release.count({
      where: {
        status: "published",
        reviewedAt: { gte: todayStart }
      }
    })
  ]);
  const [simTotal, simToday] = await Promise.all([
    db.simulator.count({ where: { status: "published" } }),
    db.simulator.count({
      where: {
        status: "published",
        updatedAt: { gte: todayStart }
      }
    })
  ]);
  const news = { today: newsToday, total: newsTotal };
  const blog = { today: blogToday, total: blogTotal };
  const products = { today: prodToday, total: prodTotal };
  const skills = { today: skillToday, total: skillTotal };
  const plugins = { today: pluginToday, total: pluginTotal };
  const tutorials = { today: lessonToday, total: lessonTotal };
  const releases = { today: releaseToday, total: releaseTotal };
  const simulators = { today: simToday, total: simTotal };
  const totalToday = news.today + blog.today + products.today + skills.today + plugins.today + tutorials.today + releases.today + simulators.today;
  dailyStatsCache = {
    date: todayStart.toISOString().slice(0, 10),
    news,
    blog,
    products,
    skills,
    plugins,
    tutorials,
    releases,
    simulators,
    totalToday
  };
  return dailyStatsCache;
}

export { $$SectionTodayBar as $, getDailyStats as g };
