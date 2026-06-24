import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './prerender_BfEYESbt.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "联系我们 | AgentUpdate.ai";
  const description = "联系 AgentUpdate.ai。通过邮箱与我们沟通，进行合作沟通、产品入驻申请或寻求技术支持。";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": "zh", "data-astro-cid-v2bdx322": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-v2bdx322> <section class="page-hero" data-astro-cid-v2bdx322> <div class="container hero-container" data-astro-cid-v2bdx322> <h1 class="display-title" data-astro-cid-v2bdx322>联系<span class="accent-text" data-astro-cid-v2bdx322>我们</span></h1> <p class="hero-lead" data-astro-cid-v2bdx322>我们非常期待听到您的反馈与建议。随时与我们的团队取得联系。</p> </div> </section> <div class="container main-content-container" style="padding-top: 3rem; padding-bottom: 5rem;" data-astro-cid-v2bdx322> <article class="article-content" data-astro-cid-v2bdx322> <h2 data-astro-cid-v2bdx322>常规咨询与支持</h2> <p data-astro-cid-v2bdx322>
如果您有任何关于本站的建言、产品报道、内容合作方案或常规技术支持需求，请通过以下官方邮箱联系我们：
</p> <div class="contact-card" data-astro-cid-v2bdx322> <span class="icon" data-astro-cid-v2bdx322>✉️</span> <a href="mailto:contact@agentupdate.ai" class="email-link" data-astro-cid-v2bdx322>contact@agentupdate.ai</a> </div> <h2 data-astro-cid-v2bdx322>入驻申请与提交</h2> <p data-astro-cid-v2bdx322>
您是否正在开发 AI 智能体产品、可复用技能组件或系统整合插件？我们诚挚邀请优秀的智能体工具与生态项目入驻本站。
</p> <p data-astro-cid-v2bdx322>
请将您的项目详情（产品名称、简介、开源仓库或主页链接、文档材料）发送至上述邮箱。我们的审核团队将在 2-3 个工作日内完成审核并在对应板块上线。
</p> </article> </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/contact.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/contact.astro";
const $$url = "/zh/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
