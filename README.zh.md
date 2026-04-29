[🇬🇧 English](./README.md)

<p align="center">
  <strong>🤖 AgentUpdate.ai</strong><br/>
  <em>紧跟 AI Agent 生态前沿</em>
</p>

<p align="center">
  <a href="https://www.agentupdate.ai">🌐 在线访问</a> ·
  <a href="https://www.agentupdate.ai/zh/">🇨🇳 中文站</a> ·
  <a href="https://www.agentupdate.ai/tutorial/">📚 教程</a> ·
  <a href="https://www.agentupdate.ai/news/">📰 资讯</a> ·
  <a href="https://www.agentupdate.ai/releases/">🚀 发版追踪</a> ·
  <a href="https://www.agentupdate.ai/simulators/">🎮 互动模拟器</a>
</p>

---

# AgentUpdate.ai

**AgentUpdate.ai**（原 OpenClawEco）是一个中英双语内容平台，专注于快速发展的 **AI Agent 生态**——涵盖 **Claude Code**、**OpenClaw**、**Antigravity** 等工具的深度报道与教学。

## ✨ 核心功能

| 功能 | 说明 |
|------|------|
| 📰 **资讯聚合** | 精选 AI Agent 前沿资讯，自动抓取 + 人工审核 |
| 📚 **系统教程** | Claude Code、LangChain、LangGraph、Gemma、n8n 等系统化教程系列 |
| 🛒 **产品目录** | 200+ AI Agent 工具，配备中英双语 AI 增强描述，支持 GitHub 搜索一键导入 |
| 🚀 **发版追踪** | 统一时间线追踪全球顶级 AI 产品更新（Claude、Gemini、Mistral、DeepSeek 等） |
| 🎮 **互动模拟器** | 浏览器端终端模拟器——无需安装，直接在线练习 Claude Code、Cursor 等 AI 工具 |
| 🔌 **技能与插件** | 社区驱动的 Agent Skill 注册中心与插件目录 |
| 🌐 **中英双语** | 完整的 i18n 路由支持，所有频道均有中英双版 |
| 🔍 **全文搜索** | 基于 Pagefind 的即时内容搜索 |
| 📊 **今日更新看板** | 各频道页面顶部实时展示全站今日新增数据 |

## 🏗️ 技术栈

- **框架** — [Astro](https://astro.build) v6（静态站点生成）
- **样式** — 原生 CSS + CSS 变量设计系统
- **数据库** — PostgreSQL + [Prisma](https://prisma.io) ORM
- **搜索** — [Pagefind](https://pagefind.app)（构建后索引）
- **Markdown** — [Marked](https://marked.js.org) + DOMPurify
- **部署** — Cloudflare Pages
- **内容流水线** — 爬虫抓取 → 管理后台审核 → AI 增强描述 → 静态构建发布

## 📁 项目结构

```
website/
├── src/
│   ├── pages/              # Astro 基于文件的路由
│   │   ├── index.astro     # 英文首页
│   │   ├── news/           # 英文资讯列表 + 详情
│   │   ├── tutorial/       # 英文教程系列
│   │   ├── product/        # 英文产品目录（200+ 产品）
│   │   ├── releases/       # 英文发版追踪时间线
│   │   ├── simulators/     # 英文互动模拟器
│   │   ├── skills/         # 技能市场目录
│   │   ├── plugins/        # 插件目录
│   │   ├── tags/           # 标签筛选
│   │   └── zh/             # 中文版所有路由镜像
│   ├── layouts/
│   │   ├── BaseLayout.astro       # 共享 HTML 壳 + 导航
│   │   └── SectionTodayBar.astro  # 全站今日更新看板组件
│   ├── lib/                # 数据访问层（Prisma 查询）
│   │   ├── articles.ts
│   │   ├── variants.ts     # 产品
│   │   ├── releases.ts
│   │   ├── simulators.ts
│   │   ├── skills.ts
│   │   ├── plugins.ts
│   │   ├── tutorials.ts
│   │   └── daily-stats.ts  # 全站今日更新统计聚合
│   └── generated/          # Prisma 客户端
├── public/
│   ├── llms.txt            # AI 爬虫站点地图（LLMs.txt 标准）
│   └── robots.txt
├── build-deploy.sh         # 构建 + 推送至 Cloudflare Pages 仓库
├── sync-simulators.sh      # 同步模拟器运行时资源
├── astro.config.mjs        # Astro + i18n + Pagefind 配置
└── package.json
```

## 🚀 快速开始

```bash
# 前提条件：Node.js >= 22，本地 PostgreSQL 运行中

# 安装依赖
npm install

# 启动开发服务器（热更新）
npm run dev
# → http://localhost:4321

# 生产构建
npm run build

# 预览生产构建
npm run preview

# 构建 + 部署至 Cloudflare Pages
bash build-deploy.sh
```

## 🌍 i18n 路由

| 路由 | 语言 | 说明 |
|------|------|------|
| `/` | 英文 | 首页 |
| `/news/` | 英文 | 资讯列表 |
| `/tutorial/` | 英文 | 教程系列 |
| `/product/` | 英文 | 产品目录 |
| `/releases/` | 英文 | 发版追踪时间线 |
| `/simulators/` | 英文 | 互动模拟器 |
| `/skills/` | 英文 | 技能市场 |
| `/plugins/` | 英文 | 插件目录 |
| `/zh/` | 中文 | 中文首页 |
| `/zh/news/` | 中文 | 中文资讯 |
| `/zh/tutorial/` | 中文 | 中文教程 |
| `/zh/product/` | 中文 | 中文产品目录 |
| `/zh/releases/` | 中文 | 中文发版追踪 |
| `/zh/simulators/` | 中文 | 中文互动模拟器 |

## 📊 内容规模

| 内容类型 | 数量 |
|---------|------|
| AI 产品 | 200+（含中英双语 AI 描述） |
| 教程课时 | 100+（Claude Code、LangChain、LangGraph、Gemma、n8n 等） |
| 资讯文章 | 每日持续增长 |
| 版本发布记录 | 覆盖 20+ 个 AI 产品 |
| 互动模拟器 | 多款工具（Claude Code、Cursor 等） |

## 🔗 关联仓库

| 仓库 | 用途 |
|------|------|
| `admin/` | 内容管理后台（Astro SSR，端口 4322） |
| `crawler/` | RSS、文章与发版爬虫流水线 |
| `database/` | 共享 Prisma Schema 与数据库迁移 |

## 📄 许可证

MIT © AgentUpdate.ai
