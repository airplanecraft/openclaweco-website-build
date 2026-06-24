import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { g as getApprovedArticles } from './articles_DuypiJQp.mjs';
import { g as getAllVariants } from './variants_CC1gBVGE.mjs';
import { g as getAllSkillMarkets } from './skills_BD3JmS3O.mjs';
import { g as getAllPlugins } from './plugins_Ct6aVhnc.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "AgentUpdate.ai — AI Agents Ecosystem & Developer Hub";
  const description = "Discover, build, and deploy AI agents. Your hub for AI agent news, tools, skills, training, and ecosystem products.";
  const allArticles = await getApprovedArticles();
  const articles = allArticles.slice(0, 6);
  const totalArticles = allArticles.length;
  const allVariants = await getAllVariants();
  const products = allVariants.slice(0, 6);
  const totalProducts = allVariants.length;
  const allSkills = await getAllSkillMarkets();
  const totalSkills = allSkills.length;
  const allPlugins = await getAllPlugins();
  const plugins = allPlugins.slice(0, 6);
  const totalPlugins = allPlugins.length;
  const dailyStats = await getDailyStats();
  function fmt(iso) {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  const typeLabels = {
    big_tech: "BIG TECH",
    open_source: "OPEN SOURCE",
    startup: "STARTUP",
    hosting: "HOSTING",
    hardware: "HARDWARE"
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AgentUpdate.ai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AgentUpdate.ai is a bilingual (English/Chinese) platform for the AI agent ecosystem. It provides curated news, a product directory of 20+ AI agent tools, reusable skills and plugins, and in-depth tutorials covering tools like Claude Code, Antigravity, OpenClaw, and Dify."
        }
      },
      {
        "@type": "Question",
        "name": "What AI agent tools does AgentUpdate.ai cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AgentUpdate.ai covers products from Big Tech (like NVIDIA, Google), open-source projects (OpenClaw, Multica), startups, hosting platforms, and hardware solutions. The product catalog includes detailed descriptions, features, pricing, and direct links."
        }
      },
      {
        "@type": "Question",
        "name": "Are the tutorials free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all tutorials on AgentUpdate.ai are free and open to everyone. They cover topics from beginner-level introductions to advanced multi-agent coordination patterns, available in both English and Chinese."
        }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "en", "structuredData": faqSchema, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-j7pv25f6> <!-- Hero Billboard Section --> <section class="hero-billboard" data-astro-cid-j7pv25f6> <div class="container hero-container" data-astro-cid-j7pv25f6> <h1 class="display-title" data-astro-cid-j7pv25f6>BUILD THE FUTURE WITH <span class="accent-text" data-astro-cid-j7pv25f6>AI AGENTS</span></h1> <p class="hero-lead" data-astro-cid-j7pv25f6>
AgentUpdate.ai is the unified directory and information chronicle for discovering AI agent tools, sharing reusable capabilities, and studying deployment architectures.
</p> <!-- Unified Stats & Updates Bar --> <div class="today-bar-frame" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "news", "lang": "en", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> <!-- Latest News Section --> ${articles.length > 0 && renderTemplate`<section class="home-section border-top" id="news" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <div class="header-info" data-astro-cid-j7pv25f6> <span class="section-tag" data-astro-cid-j7pv25f6>CHRONICLE // DISPATCHES</span> <h2 class="section-title" data-astro-cid-j7pv25f6>LATEST NEWS</h2> </div> <a href="/news" class="btn-action-link" data-astro-cid-j7pv25f6>[ VIEW ALL NEWS → ]</a> </div> <div class="editorial-grid" data-astro-cid-j7pv25f6> ${articles.map((a) => renderTemplate`<div class="editorial-card" data-testid="home-card" data-astro-cid-j7pv25f6> <a${addAttribute(`/news/${a.slug}`, "href")}${addAttribute(a.titleEn ?? a.title, "aria-label")} class="card-cover-link" data-astro-cid-j7pv25f6> ${a.coverImageEn ?? a.coverImage ? renderTemplate`<img class="card-img"${addAttribute(a.coverImageEn ?? a.coverImage, "src")} alt="" loading="lazy" width="800" height="450" decoding="async" data-astro-cid-j7pv25f6>` : renderTemplate`<div class="card-img-placeholder" data-astro-cid-j7pv25f6>NEWS // LOG</div>`} </a> <div class="card-body" data-astro-cid-j7pv25f6> <div class="card-meta-row" data-astro-cid-j7pv25f6> <span class="card-source-tag" data-astro-cid-j7pv25f6>${a.source ? `SOURCE // ${a.source.toUpperCase()}` : "SYSTEM // INTEL"}</span> <time class="card-date" data-astro-cid-j7pv25f6>${fmt(a.publishedAt)}</time> </div> <h3 class="card-title-heading" data-astro-cid-j7pv25f6> <a${addAttribute(`/news/${a.slug}`, "href")} data-astro-cid-j7pv25f6>${a.titleEn ?? a.title}</a> </h3> ${(a.summaryEn || a.summary) && renderTemplate`<p class="card-description-text" data-astro-cid-j7pv25f6>${a.summaryEn ?? a.summary}</p>`} ${a.tags && a.tags.length > 0 && renderTemplate`<div class="card-tags-row" data-astro-cid-j7pv25f6> ${a.tags.slice(0, 2).map((t) => renderTemplate`<a${addAttribute(`/tags/${t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-")}`, "href")} class="tag-pill" data-astro-cid-j7pv25f6>#${t}</a>`)} </div>`} </div> </div>`)} </div> ${totalArticles > 6 && renderTemplate`<div class="section-footer-row" data-astro-cid-j7pv25f6> <a href="/news" class="btn-action-link" data-astro-cid-j7pv25f6>[ VIEW ALL ${totalArticles} DISPATCHES → ]</a> </div>`} </div> </section>`} <!-- Product Showcase Section --> ${products.length > 0 && renderTemplate`<section class="home-section border-top" id="products" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <div class="header-info" data-astro-cid-j7pv25f6> <span class="section-tag" data-astro-cid-j7pv25f6>DIRECTORY // PLATFORMS</span> <h2 class="section-title" data-astro-cid-j7pv25f6>AGENT PRODUCTS</h2> </div> <a href="/product" class="btn-action-link" data-astro-cid-j7pv25f6>[ VIEW ALL ${totalProducts} PRODUCTS → ]</a> </div> <div class="products-grid" data-astro-cid-j7pv25f6> ${products.map((p) => renderTemplate`<a${addAttribute(`/product/${p.slug}`, "href")} class="product-card" data-astro-cid-j7pv25f6> <div class="product-header-row" data-astro-cid-j7pv25f6> <div class="product-identity" data-astro-cid-j7pv25f6> ${p.logo ? renderTemplate`<img${addAttribute(p.logo, "src")} alt="" class="product-logo" width="32" height="32" decoding="async" data-astro-cid-j7pv25f6>` : renderTemplate`<div class="product-logo-fallback" data-astro-cid-j7pv25f6>⚡</div>`} <div class="product-meta" data-astro-cid-j7pv25f6> <span class="product-company" data-astro-cid-j7pv25f6>${p.companyEn ?? p.company}</span> </div> </div> <span class="product-badge" data-astro-cid-j7pv25f6>${typeLabels[p.type] ?? p.type}</span> </div> <h3 class="product-name-heading" data-astro-cid-j7pv25f6>${p.nameEn ?? p.name}</h3> <p class="product-excerpt" data-astro-cid-j7pv25f6> ${(p.descriptionEn ?? p.description).slice(0, 110)}${(p.descriptionEn ?? p.description).length > 110 ? "…" : ""} </p> ${p.platforms.length > 0 && renderTemplate`<div class="product-platforms-row" data-astro-cid-j7pv25f6> ${p.platforms.slice(0, 3).map((pl) => renderTemplate`<span class="platform-tag" data-astro-cid-j7pv25f6>${pl.toUpperCase()}</span>`)} </div>`} </a>`)} </div> </div> </section>`} <!-- Skill Markets Section --> ${allSkills.length > 0 && renderTemplate`<section class="home-section border-top" id="skills" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <div class="header-info" data-astro-cid-j7pv25f6> <span class="section-tag" data-astro-cid-j7pv25f6>REUSABILITY // CAPABILITIES</span> <h2 class="section-title" data-astro-cid-j7pv25f6>SKILL MARKETS</h2> </div> <a href="/skills" class="btn-action-link" data-astro-cid-j7pv25f6>[ VIEW ALL SKILLS → ]</a> </div> <div class="skills-grid" data-astro-cid-j7pv25f6> ${allSkills.slice(0, 6).map((s) => renderTemplate`<a${addAttribute(s.url, "href")} target="_blank" rel="noopener noreferrer" class="skill-card" data-astro-cid-j7pv25f6> <div class="skill-header-row" data-astro-cid-j7pv25f6> <div class="skill-identity" data-astro-cid-j7pv25f6> ${s.logoUrl ? renderTemplate`<img${addAttribute(s.logoUrl, "src")} alt="" class="skill-logo" width="32" height="32" decoding="async" data-astro-cid-j7pv25f6>` : renderTemplate`<div class="skill-logo-fallback" data-astro-cid-j7pv25f6>🎯</div>`} <span class="skill-type-tag" data-astro-cid-j7pv25f6>${s.type.toUpperCase()}</span> </div> <span class="skill-country-tag" data-astro-cid-j7pv25f6>${s.country === "cn" ? "CN // 🇨🇳" : "GLOBAL // 🌐"}</span> </div> <h3 class="skill-name-heading" data-astro-cid-j7pv25f6>${s.nameEn ?? s.name}</h3> <p class="skill-excerpt" data-astro-cid-j7pv25f6> ${(s.descriptionEn ?? s.description).slice(0, 100)}${(s.descriptionEn ?? s.description).length > 100 ? "…" : ""} </p> ${s.features.length > 0 && renderTemplate`<div class="skill-features-row" data-astro-cid-j7pv25f6> ${(s.featuresEn.length > 0 ? s.featuresEn : s.features).slice(0, 2).map((f) => renderTemplate`<span class="feature-tag" data-astro-cid-j7pv25f6>${f.toUpperCase()}</span>`)} </div>`} <div class="skill-footer-row" data-astro-cid-j7pv25f6> <span class="pricing-label" data-astro-cid-j7pv25f6>${s.pricing ? s.pricing.toUpperCase() : "FREE"}</span> </div> </a>`)} </div> ${totalSkills > 6 && renderTemplate`<div class="section-footer-row" data-astro-cid-j7pv25f6> <a href="/skills" class="btn-action-link" data-astro-cid-j7pv25f6>[ VIEW ALL ${totalSkills} SKILLS → ]</a> </div>`} </div> </section>`} <!-- Plugins Section --> ${plugins.length > 0 && renderTemplate`<section class="home-section border-top border-bottom" id="plugins" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <div class="header-info" data-astro-cid-j7pv25f6> <span class="section-tag" data-astro-cid-j7pv25f6>EXTENSIONS // INTEGRATIONS</span> <h2 class="section-title" data-astro-cid-j7pv25f6>FEATURED PLUGINS</h2> </div> <a href="/plugins" class="btn-action-link" data-astro-cid-j7pv25f6>[ VIEW ALL ${totalPlugins} PLUGINS → ]</a> </div> <div class="plugins-grid" data-astro-cid-j7pv25f6> ${plugins.map((p) => renderTemplate`<a${addAttribute(p.repoUrl ?? "#", "href")} target="_blank" rel="noopener noreferrer" class="plugin-card" data-astro-cid-j7pv25f6> <div class="plugin-header-row" data-astro-cid-j7pv25f6> <span class="plugin-category-badge" data-astro-cid-j7pv25f6>${p.category.toUpperCase()}</span> <span class="plugin-author-label" data-astro-cid-j7pv25f6>BY ${p.author.toUpperCase()}</span> </div> <h3 class="plugin-name-heading" data-astro-cid-j7pv25f6>${p.nameEn ?? p.name}</h3> <p class="plugin-excerpt" data-astro-cid-j7pv25f6> ${(p.descriptionEn ?? p.description).slice(0, 100)}${(p.descriptionEn ?? p.description).length > 100 ? "…" : ""} </p> <div class="plugin-footer-row" data-astro-cid-j7pv25f6> ${p.tags.slice(0, 2).map((t) => renderTemplate`<span class="plugin-tag-badge" data-astro-cid-j7pv25f6>#${t.toUpperCase()}</span>`)} </div> </a>`)} </div> </div> </section>`} </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
