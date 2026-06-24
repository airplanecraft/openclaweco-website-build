import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getDailyStats, $ as $$SectionTodayBar } from './daily-stats_CIoR2Twa.mjs';
import { g as getPublishedSimulators } from './simulators_CYd_wqDg.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const simulators = await getPublishedSimulators();
  const dailyStats = await getDailyStats();
  const diffLabel = {
    beginner: { zh: "入门", class: "beginner", color: "#22c55e" },
    intermediate: { zh: "进阶", class: "intermediate", color: "#f59e0b" },
    advanced: { zh: "高级", class: "advanced", color: "#ef4444" }
  };
  function getConsoleReadout(slug, product) {
    const normSlug = slug.toLowerCase();
    if (normSlug.includes("claw-cli") || normSlug.includes("cli")) {
      return [
        "claw-cli init my-agent --template autonomous",
        "[SYSTEM] scaffolded new workspace in 24ms",
        "[SYSTEM] npm install --prefer-offline",
        "claw-cli run --env=production"
      ];
    } else if (normSlug.includes("crawl") || normSlug.includes("spider")) {
      return [
        'claw-crawl "https://openclaweco.com" --depth=2',
        "[EXTRACT] discovered 42 DOM nodes",
        "[SYSTEM] writing records to local SQLite...",
        "claw-crawl status --job=0x7FA"
      ];
    } else if (normSlug.includes("agent") || normSlug.includes("reason")) {
      return [
        'claw-agent run "analyze repository dependencies"',
        "[REASON] path: package.json -> parse imports",
        "[ACTION] executing command: npm run build",
        "claw-agent status --session=8c9"
      ];
    } else {
      return [
        `claw-${product.toLowerCase()} --version`,
        `[SYSTEM] loading claw-${product.toLowerCase()} modules`,
        `[SUCCESS] listening on localhost:8080`,
        `claw-${product.toLowerCase()} start`
      ];
    }
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "互动模拟器 | AgentUpdate.ai", "description": "在浏览器中动手实践 AI 编程工具，无需安装。通过交互式终端模拟器，手把手学习各种 AI 开发工具。", "lang": "zh", "data-astro-cid-3m26qnfe": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-3m26qnfe> <section class="page-hero" data-astro-cid-3m26qnfe> <div class="container hero-container" data-astro-cid-3m26qnfe> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "交互模拟器" }
  ], "data-astro-cid-3m26qnfe": true })} <h1 class="display-title" data-astro-cid-3m26qnfe>互动<span class="accent-text" data-astro-cid-3m26qnfe>模拟器</span></h1> <div class="telemetry-bar-row" data-astro-cid-3m26qnfe> <span class="telemetry-chip" data-astro-cid-3m26qnfe>[ 控制台会话 // 活跃 ]</span> <span class="telemetry-chip" data-astro-cid-3m26qnfe>[ 检测到节点 // ${simulators.length} ]</span> <span class="telemetry-chip" data-astro-cid-3m26qnfe>[ 运行时环境 // WEBASEMBLY_SH ]</span> <span class="telemetry-chip" data-astro-cid-3m26qnfe>[ 运行状态 // 稳定 ]</span> </div> <div class="today-bar-frame" data-astro-cid-3m26qnfe> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "simulators", "lang": "zh", "data-astro-cid-3m26qnfe": true })} </div> </div> </section> <div class="container main-content-container" data-astro-cid-3m26qnfe> <div class="simulators-layout" data-astro-cid-3m26qnfe> <!-- Main Column: Grid of Simulators --> <div class="main-sim-column" data-astro-cid-3m26qnfe> ${simulators.length > 0 ? renderTemplate`<div class="sim-grid" data-astro-cid-3m26qnfe> ${simulators.map((sim, index) => {
    const diff = diffLabel[sim.difficulty] ?? diffLabel.beginner;
    const readoutLines = getConsoleReadout(sim.slug, sim.product);
    return renderTemplate`<div class="sim-card" data-astro-cid-3m26qnfe> <!-- Terminal Title Bar --> <div class="sim-card-header" data-astro-cid-3m26qnfe> <div class="sim-card-window-controls" data-astro-cid-3m26qnfe> <span class="control-dot red" data-astro-cid-3m26qnfe></span> <span class="control-dot yellow" data-astro-cid-3m26qnfe></span> <span class="control-dot green" data-astro-cid-3m26qnfe></span> </div> <span class="sim-card-window-title" data-astro-cid-3m26qnfe>term // ${sim.product.toLowerCase()}-sh</span> <span class="sim-card-id" data-astro-cid-3m26qnfe>VM_0${index + 1}</span> </div> <!-- Terminal Screen Mockup --> <div class="sim-terminal-screen" data-astro-cid-3m26qnfe> ${readoutLines.map((line) => {
      const isCmd = line.startsWith("claw-");
      return renderTemplate`<div class="terminal-line" data-astro-cid-3m26qnfe> ${isCmd ? renderTemplate`<span class="term-prompt" data-astro-cid-3m26qnfe>$ <span class="term-cmd" data-astro-cid-3m26qnfe>${line}</span></span>` : renderTemplate`<span class="term-log" data-astro-cid-3m26qnfe>${line}</span>`} </div>`;
    })} <div class="terminal-line cursor-line" data-astro-cid-3m26qnfe> <span class="term-prompt" data-astro-cid-3m26qnfe>$ <span class="term-cursor" data-astro-cid-3m26qnfe>▊</span></span> </div> </div> <!-- Sim Details --> <div class="sim-card-body" data-astro-cid-3m26qnfe> <div class="sim-meta-header" data-astro-cid-3m26qnfe> <h2 class="sim-title" data-astro-cid-3m26qnfe>${sim.name}</h2> <div class="sim-difficulty-badge" data-astro-cid-3m26qnfe> <span class="difficulty-dot"${addAttribute(`background-color: ${diff.color}`, "style")} data-astro-cid-3m26qnfe></span> <span class="difficulty-text" data-astro-cid-3m26qnfe>${diff.zh}</span> </div> </div> <p class="sim-desc" data-astro-cid-3m26qnfe>${sim.description}</p> <!-- Specs Table --> <div class="sim-specs-table" data-astro-cid-3m26qnfe> <div class="spec-row" data-astro-cid-3m26qnfe> <span class="spec-label" data-astro-cid-3m26qnfe>目标产品</span> <span class="spec-val" data-astro-cid-3m26qnfe>${sim.product.toUpperCase()}</span> </div> <div class="spec-row" data-astro-cid-3m26qnfe> <span class="spec-label" data-astro-cid-3m26qnfe>章节结构</span> <span class="spec-val" data-astro-cid-3m26qnfe>${sim.chapterCount} 章节</span> </div> ${sim.estimatedTime && renderTemplate`<div class="spec-row" data-astro-cid-3m26qnfe> <span class="spec-label" data-astro-cid-3m26qnfe>预计时长</span> <span class="spec-val" data-astro-cid-3m26qnfe>${sim.estimatedTime.toUpperCase()}</span> </div>`} </div> <!-- Tags row --> ${sim.tags.length > 0 && renderTemplate`<div class="sim-tags-row" data-astro-cid-3m26qnfe> ${sim.tags.map((t) => renderTemplate`<span class="sim-tag" data-astro-cid-3m26qnfe>#${t.toUpperCase()}</span>`)} </div>`} <!-- Launch CTA --> <a${addAttribute(`/simulators/${sim.slug}/index.html`, "href")} target="_blank" class="sim-launch-btn" data-astro-cid-3m26qnfe>
[ 启动模拟器 // 开始体验 → ]
</a> </div> </div>`;
  })} </div>` : renderTemplate`<div class="empty-state" data-astro-cid-3m26qnfe>
🚧 模拟器正在建设中，敬请期待！
</div>`} </div> <!-- Sidebar Column: Technical Telemetry & diagnostics --> <aside class="sidebar-telemetry-column" data-astro-cid-3m26qnfe> <div class="telemetry-box" data-astro-cid-3m26qnfe> <div class="telemetry-box-header" data-astro-cid-3m26qnfe> <span class="telemetry-box-title" data-astro-cid-3m26qnfe>系统控制台 // 诊断与状态监控</span> </div> <div class="telemetry-box-body" data-astro-cid-3m26qnfe> <div class="diag-specs" data-astro-cid-3m26qnfe> <div class="diag-spec-row" data-astro-cid-3m26qnfe> <span class="lbl" data-astro-cid-3m26qnfe>沙箱引擎</span> <span class="val" data-astro-cid-3m26qnfe>WEBASEMBLY_v1</span> </div> <div class="diag-spec-row" data-astro-cid-3m26qnfe> <span class="lbl" data-astro-cid-3m26qnfe>终端类型</span> <span class="val" data-astro-cid-3m26qnfe>XTERM_VT100</span> </div> <div class="diag-spec-row" data-astro-cid-3m26qnfe> <span class="lbl" data-astro-cid-3m26qnfe>延迟统计</span> <span class="val" data-astro-cid-3m26qnfe>12 MS (稳定)</span> </div> <div class="diag-spec-row" data-astro-cid-3m26qnfe> <span class="lbl" data-astro-cid-3m26qnfe>连接状态</span> <span class="val" data-astro-cid-3m26qnfe>DIRECT_LOCAL</span> </div> </div> <div class="telemetry-divider" data-astro-cid-3m26qnfe></div> <div class="instruction-manual" data-astro-cid-3m26qnfe> <span class="section-tag" data-astro-cid-3m26qnfe>// 使用说明</span> <ol class="manual-list" data-astro-cid-3m26qnfe> <li data-astro-cid-3m26qnfe>从列表中选择一个当前活跃的沙箱虚拟机。</li> <li data-astro-cid-3m26qnfe>确认其支持的工具和难度参数是否符合您的技术栈。</li> <li data-astro-cid-3m26qnfe>点击 [启动模拟器] 即可在浏览器中挂载虚拟文件系统。</li> <li data-astro-cid-3m26qnfe>在嵌入式网页终端内逐步完成模块化的课程与动手练习。</li> </ol> </div> <div class="telemetry-divider" data-astro-cid-3m26qnfe></div> <div class="diagnostic-logs" data-astro-cid-3m26qnfe> <span class="section-tag" data-astro-cid-3m26qnfe>// 实时控制台输出</span> <div class="logs-feed" data-astro-cid-3m26qnfe> <div class="log-line" data-astro-cid-3m26qnfe><span class="log-time" data-astro-cid-3m26qnfe>[20:16:44]</span> SYS: 挂载节点文件系统... 成功</div> <div class="log-line" data-astro-cid-3m26qnfe><span class="log-time" data-astro-cid-3m26qnfe>[20:16:45]</span> NET: 成功与 agent-registry 建立同步</div> <div class="log-line" data-astro-cid-3m26qnfe><span class="log-time" data-astro-cid-3m26qnfe>[20:16:45]</span> VM : 状态稳定，内存占用正常</div> <div class="log-line active" data-astro-cid-3m26qnfe><span class="log-time" data-astro-cid-3m26qnfe>[20:16:46]</span> CONSOLE: 用户会话就绪，等待输入</div> </div> </div> </div> </div> </aside> </div> </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/simulators/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/simulators/index.astro";
const $$url = "/zh/simulators";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
