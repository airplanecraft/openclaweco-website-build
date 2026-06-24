import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './prerender_BfEYESbt.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const title = "服务条款 | AgentUpdate.ai";
  const description = "阅读 AgentUpdate.ai 的服务条款。了解使用限制、内容免责声明及知识产权保护条目。";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "zh", "data-astro-cid-gx5znocm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-gx5znocm> <section class="page-hero" data-astro-cid-gx5znocm> <div class="container hero-container" data-astro-cid-gx5znocm> <h1 class="display-title" data-astro-cid-gx5znocm>服务<span class="accent-text" data-astro-cid-gx5znocm>条款</span></h1> <p class="hero-lead" data-astro-cid-gx5znocm>本协议规范您对 AgentUpdate.ai 平台目录、代码范例及其他开发资源的使用。</p> </div> </section> <div class="container main-content-container" style="padding-top: 3rem; padding-bottom: 5rem;" data-astro-cid-gx5znocm> <article class="article-content" data-astro-cid-gx5znocm> <h2 data-astro-cid-gx5znocm>合理使用规范</h2> <p data-astro-cid-gx5znocm>
AgentUpdate.ai 是致力于梳理和评测 AI 智能体生态的学术和开发者索引平台。当您访问并使用本站时，您同意不执行以下行为：
</p> <ul data-astro-cid-gx5znocm> <li data-astro-cid-gx5znocm>未经我们明确的书面授权，使用自动化脚本或爬虫批量抓取本站的产品库目录、新闻条目及教程内容。</li> <li data-astro-cid-gx5znocm>恶意破坏网站服务的可用性，注入恶意代码，或干扰任何评分机制的公平运行。</li> </ul> <h2 data-astro-cid-gx5znocm>AI 内容免责与责任局限声明</h2> <p data-astro-cid-gx5znocm>
我们所收录的产品详情、功能评测以及部署教程涉及复杂的 AI 智能体开发、大语言模型推理及代码工程。
</p> <p data-astro-cid-gx5znocm> <strong data-astro-cid-gx5znocm>本站的所有内容、模拟终端和引导材料均“按原样”提供，不带有任何形式的保证。</strong> AgentUpdate.ai 无法保证所收录项目的绝对安全性、可用性或与您现有生产环境的兼容性。我们不对因阅读本站教程、部署相关智能体工具或运行示例代码所导致的任何系统崩溃、Token 计费超支或资产泄露承担任何赔偿责任。
</p> <h2 data-astro-cid-gx5znocm>知识产权</h2> <p data-astro-cid-gx5znocm>
本站的原创教程、分类标签设计、以及自定义模拟器逻辑等版权均属于 AgentUpdate.ai 所有。本站所引用的第三方项目名称、标识、代码片段及商标版权归其各自所有者拥有，本站仅处于描述、评测和说明之目的进行合理使用。
</p> <h2 data-astro-cid-gx5znocm>管辖权与法律适用</h2> <p data-astro-cid-gx5znocm>
本条款的解释、效力及争议解决，均适用相关通用标准法律框架，并不考虑冲突法规则。
</p> </article> </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/terms.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/terms.astro";
const $$url = "/zh/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
