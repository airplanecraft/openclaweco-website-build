[🇨🇳 中文版](./README.zh.md)

<p align="center">
  <strong>🤖 AgentUpdate.ai</strong><br/>
  <em>Stay ahead in the AI Agent ecosystem</em>
</p>

<p align="center">
  <a href="https://www.agentupdate.ai">🌐 Live Site</a> ·
  <a href="https://www.agentupdate.ai/zh/">🇨🇳 中文站</a> ·
  <a href="https://www.agentupdate.ai/tutorial/">📚 Tutorials</a> ·
  <a href="https://www.agentupdate.ai/news/">📰 News</a> ·
  <a href="https://www.agentupdate.ai/releases/">🚀 Releases</a> ·
  <a href="https://www.agentupdate.ai/simulators/">🎮 Simulators</a>
</p>

---

# AgentUpdate.ai

**AgentUpdate.ai** (formerly OpenClawEco) is a bilingual (English / 中文) content hub dedicated to the rapidly evolving **AI Agent** ecosystem — covering tools like **Claude Code**, **OpenClaw**, **Antigravity**, and beyond.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📰 **News Aggregation** | Curated AI Agent news, auto-crawled and human-reviewed |
| 📚 **Tutorial Series** | Structured lessons for Claude Code, LangChain, LangGraph, Gemma, and more |
| 🛒 **Product Catalog** | 200+ AI agent tools with bilingual (EN/ZH) AI-enriched descriptions, GitHub search & one-click import |
| 🚀 **Release Tracker** | Unified timeline tracking version updates across top AI products (Claude, Gemini, Mistral, DeepSeek…) |
| 🎮 **Interactive Simulators** | Browser-based terminal simulators — practice Claude Code, Cursor and other AI tools with no installation |
| 🔌 **Skills & Plugins** | Community-driven agent skill registry and plugin directory |
| 🌐 **Bilingual (EN/ZH)** | Full dual-language support with i18n routing |
| 🔍 **Full-Text Search** | Instant content search powered by Pagefind |
| 📊 **Daily Stats Bar** | Live "Today's Updates" banner on every section page showing cross-site activity |

## 🏗️ Tech Stack

- **Framework** — [Astro](https://astro.build) v6 (Static Site Generation)
- **Styling** — Vanilla CSS + CSS Variables design system
- **Database** — PostgreSQL via [Prisma](https://prisma.io) ORM
- **Search** — [Pagefind](https://pagefind.app) (post-build indexing)
- **Markdown** — [Marked](https://marked.js.org) + DOMPurify
- **Deployment** — Cloudflare Pages
- **Content Pipeline** — Custom crawler → Admin review → AI enrichment → Static build

## 📁 Project Structure

```
website/
├── src/
│   ├── pages/              # Astro file-based routing
│   │   ├── index.astro     # English homepage
│   │   ├── news/           # EN news list + detail
│   │   ├── tutorial/       # EN tutorial series
│   │   ├── product/        # EN product catalog (200+ items)
│   │   ├── releases/       # EN release timeline hub
│   │   ├── simulators/     # EN interactive simulators
│   │   ├── skills/         # Skills marketplace directory
│   │   ├── plugins/        # Plugin directory
│   │   ├── tags/           # Tag-based filtering
│   │   └── zh/             # Chinese mirror of all routes
│   ├── layouts/
│   │   ├── BaseLayout.astro       # Shared HTML shell + nav
│   │   └── SectionTodayBar.astro  # Cross-site daily stats component
│   ├── lib/                # Data access layer (Prisma queries)
│   │   ├── articles.ts
│   │   ├── variants.ts     # Products
│   │   ├── releases.ts
│   │   ├── simulators.ts
│   │   ├── skills.ts
│   │   ├── plugins.ts
│   │   ├── tutorials.ts
│   │   └── daily-stats.ts  # Aggregated daily update counts
│   └── generated/          # Prisma client
├── public/
│   ├── llms.txt            # AI crawler sitemap (LLMs.txt standard)
│   └── robots.txt
├── build-deploy.sh         # Build + push to Cloudflare Pages repo
├── sync-simulators.sh      # Sync simulator runtime assets
├── astro.config.mjs        # Astro + i18n + Pagefind config
└── package.json
```

## 🚀 Quick Start

```bash
# Prerequisites: Node.js >= 22, PostgreSQL running locally

# Install dependencies
npm install

# Start dev server (hot-reload)
npm run dev
# → http://localhost:4321

# Production build
npm run build

# Preview production build
npm run preview

# Build + deploy to Cloudflare Pages
bash build-deploy.sh
```

## 🌍 i18n Routing

| Route | Language | Description |
|-------|----------|-------------|
| `/` | English | Homepage |
| `/news/` | English | News feed |
| `/tutorial/` | English | Tutorial series |
| `/product/` | English | Product catalog |
| `/releases/` | English | Release tracker |
| `/simulators/` | English | Interactive simulators |
| `/skills/` | English | Skills marketplace |
| `/plugins/` | English | Plugin directory |
| `/zh/` | 中文 | Chinese homepage |
| `/zh/news/` | 中文 | 中文资讯 |
| `/zh/tutorial/` | 中文 | 中文教程 |
| `/zh/product/` | 中文 | 中文产品目录 |
| `/zh/releases/` | 中文 | 中文发版追踪 |
| `/zh/simulators/` | 中文 | 中文互动模拟器 |

## 📊 Content Scale

| Content Type | Count |
|-------------|-------|
| AI Products | 200+ (with bilingual AI descriptions) |
| Tutorial Lessons | 100+ (Claude Code, LangChain, LangGraph, Gemma, n8n…) |
| News Articles | Growing daily |
| Release Records | Tracked across 20+ AI products |
| Interactive Simulators | Multiple tools (Claude Code, Cursor…) |

## 🔗 Related Repositories

| Repo | Purpose |
|------|---------|
| `admin/` | Content management dashboard (Astro SSR, port 4322) |
| `crawler/` | RSS, article & release scraper pipeline |
| `database/` | Shared Prisma schema & migrations |

## 📄 License

MIT © AgentUpdate.ai
