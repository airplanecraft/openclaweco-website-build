import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './prerender_BfEYESbt.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const title = "关于我们 | AgentUpdate.ai";
  const description = "了解 AgentUpdate.ai，领先的双语（中英）AI 智能体生态聚合与新闻发布平台。";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "zh", "data-astro-cid-vdfswtcn": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-vdfswtcn> <section class="page-hero" data-astro-cid-vdfswtcn> <div class="container hero-container" data-astro-cid-vdfswtcn> <h1 class="display-title" data-astro-cid-vdfswtcn>关于<span class="accent-text" data-astro-cid-vdfswtcn>我们</span></h1> <p class="hero-lead" data-astro-cid-vdfswtcn>探索我们的愿景：绘制、记录并赋能 AI 智能体（Agent）生态系统。</p> </div> </section> <div class="container main-content-container" style="padding-top: 3rem; padding-bottom: 5rem;" data-astro-cid-vdfswtcn> <article class="article-content" data-astro-cid-vdfswtcn> <h2 data-astro-cid-vdfswtcn>我们是谁</h2> <p data-astro-cid-vdfswtcn>
AgentUpdate.ai 是一个专注于记录和梳理 AI 智能体（Autonomous Agents）、底座框架基础设施、可复用能力市场以及集成插件生态快速演进的双语平台。
</p> <p data-astro-cid-vdfswtcn>
我们的使命是为开发者、产品构建者、研究人员和企业提供一个权威、清晰的信息聚合中心，助力其发现、适配并集成最前沿的 AI 智能体技术。
</p> <h2 data-astro-cid-vdfswtcn>我们的核心模块</h2> <ul data-astro-cid-vdfswtcn> <li data-astro-cid-vdfswtcn><strong data-astro-cid-vdfswtcn>发布纪事与动态追踪：</strong> 每日更新精选行业新闻、开发者快讯以及发版公告，实时追踪智能体能力的更迭。</li> <li data-astro-cid-vdfswtcn><strong data-astro-cid-vdfswtcn>智能体矩阵目录：</strong> 收录并深度剖析各大厂商（如 Google、NVIDIA）、开源项目、初创公司以及硬件边缘侧的智能体工具。</li> <li data-astro-cid-vdfswtcn><strong data-astro-cid-vdfswtcn>技能组件与插件市场：</strong> 梳理可复用的智能体技能配置项与系统接口插件，帮助开发者缩短工作流构建周期。</li> <li data-astro-cid-vdfswtcn><strong data-astro-cid-vdfswtcn>交互式开发教程：</strong> 提供生动的、循序渐进的系统指南以及在线交互式沙箱终端模拟器，降低学习与集成门槛。</li> </ul> <h2 data-astro-cid-vdfswtcn>促进开放架构</h2> <p data-astro-cid-vdfswtcn>
我们坚信，未来的软件形态将由自治、模块化的智能体架构来驱动。通过提供透明、高质量的产品与技术索引，我们致力于打造智能体工程技术代际的基石型知识网络。
</p> <h2 data-astro-cid-vdfswtcn>编辑方针与测试指南 (Editorial Policy)</h2> <p data-astro-cid-vdfswtcn>
在 AgentUpdate.ai，我们高度重视**内容信誉度 (E-E-A-T)** 与**技术事实准确性**。平台上的每一篇教程、工具评测和集成指南均遵循以下规范：
</p> <ul data-astro-cid-vdfswtcn> <li data-astro-cid-vdfswtcn><strong data-astro-cid-vdfswtcn>物理沙箱测试验证：</strong> 我们拒绝空泛的宣发词藻。所有发布的技术教程、开源技能和接口插件，均由我们的编辑团队在专用的物理或沙箱开发环境中实际部署并验证通过。</li> <li data-astro-cid-vdfswtcn><strong data-astro-cid-vdfswtcn>版本与时效锚定：</strong> 技术迭代迅速，我们会在教程首段明确标注所使用的软件及库的特定版本（例如 Claude Code, Antigravity 版本号），确保开发者集成时的可复现性。</li> <li data-astro-cid-vdfswtcn><strong data-astro-cid-vdfswtcn>独立性与透明公开：</strong> 我们保持严格的编辑独立性。若涉及赞助产品或任何商业合作，我们会在页面顶部进行清晰、显著的披露声明，绝不误导读者。</li> </ul> </article> </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/about.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/about.astro";
const $$url = "/zh/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
