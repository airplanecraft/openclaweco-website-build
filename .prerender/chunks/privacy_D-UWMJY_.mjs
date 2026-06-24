import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './prerender_BfEYESbt.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const title = "隐私政策 | AgentUpdate.ai";
  const description = "阅读 AgentUpdate.ai 的隐私政策。了解我们如何处理 Cookie 和流量分析，以及为什么我们从不收集用户的敏感凭证。";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "zh", "data-astro-cid-uxxxadza": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-uxxxadza> <section class="page-hero" data-astro-cid-uxxxadza> <div class="container hero-container" data-astro-cid-uxxxadza> <h1 class="display-title" data-astro-cid-uxxxadza>隐私<span class="accent-text" data-astro-cid-uxxxadza>政策</span></h1> <p class="hero-lead" data-astro-cid-uxxxadza>我们高度尊重您的隐私，并竭诚保护在平台运行期间涉及的任何非敏感流量数据。</p> </div> </section> <div class="container main-content-container" style="padding-top: 3rem; padding-bottom: 5rem;" data-astro-cid-uxxxadza> <article class="article-content" data-astro-cid-uxxxadza> <h2 data-astro-cid-uxxxadza>数据收集声明</h2> <p data-astro-cid-uxxxadza>
AgentUpdate.ai 是一个资讯与生态索引平台。用户无需注册账号或进行登录操作即可访问我们的全部产品目录、资讯纪事和教程。我们仅收集标准的、脱敏的统计数据：
</p> <ul data-astro-cid-uxxxadza> <li data-astro-cid-uxxxadza><strong data-astro-cid-uxxxadza>流量分析数据：</strong> 我们使用 Google Analytics 来统计聚合的访问量、高频浏览页面、来源路径以及设备基础参数，用于改进内容的可读性与响应速度。</li> <li data-astro-cid-uxxxadza><strong data-astro-cid-uxxxadza>Cookie：</strong> 我们使用极少量的 Cookie 用于记录您的界面语言状态以及保存必要的分析偏好。您随时可以在浏览器设置中禁用 Cookie。</li> </ul> <h2 data-astro-cid-uxxxadza>免敏感数据 / 免私钥收集声明</h2> <p data-astro-cid-uxxxadza>
我们深知开发者资产安全的重要性。<strong data-astro-cid-uxxxadza>AgentUpdate.ai 绝不会请求、收集、存储或传输您的任何 API 私钥、平台凭证或私有仓库权限。</strong> </p> <p data-astro-cid-uxxxadza>
本站所包含的交互式终端模拟器完全基于 WebAssembly 并在您的本地浏览器沙箱中运行。模拟器内所填写的任何临时模拟 API Key 或环境变量均保留在您的本地状态中，绝不会上传至外部网络。
</p> <h2 data-astro-cid-uxxxadza>第三方链接说明</h2> <p data-astro-cid-uxxxadza>
我们的页面中包含指向第三方项目仓库、智能体平台官网、外部文档或初创企业服务的链接。我们无法对这些外部网站的隐私策略或实际内容承担责任，建议您在访问对应外部链接时阅读其隐私条款。
</p> <h2 data-astro-cid-uxxxadza>条款更新</h2> <p data-astro-cid-uxxxadza>
随着平台功能的演进，我们可能会适时更新本隐私政策。任何更新都将即时呈现在本页面。您对平台的持续访问与使用即视为您同意更新后的隐私政策。
</p> </article> </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/privacy.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/privacy.astro";
const $$url = "/zh/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
