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
    beginner: { en: "BEGINNER", class: "beginner", color: "#22c55e" },
    intermediate: { en: "INTERMEDIATE", class: "intermediate", color: "#f59e0b" },
    advanced: { en: "ADVANCED", class: "advanced", color: "#ef4444" }
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Interactive Simulators | AgentUpdate.ai", "description": "Practice AI coding tools hands-on with interactive browser-based terminal simulators. No installation required.", "lang": "en", "data-astro-cid-iwihbyqo": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-main" data-astro-cid-iwihbyqo> <section class="page-hero" data-astro-cid-iwihbyqo> <div class="container hero-container" data-astro-cid-iwihbyqo> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Simulators" }
  ], "data-astro-cid-iwihbyqo": true })} <h1 class="display-title" data-astro-cid-iwihbyqo>INTERACTIVE <span class="accent-text" data-astro-cid-iwihbyqo>SIMULATORS</span></h1> <div class="telemetry-bar-row" data-astro-cid-iwihbyqo> <span class="telemetry-chip" data-astro-cid-iwihbyqo>[ CONSOLE_SESSION // ACTIVE ]</span> <span class="telemetry-chip" data-astro-cid-iwihbyqo>[ NODES_DETECTED // ${simulators.length} ]</span> <span class="telemetry-chip" data-astro-cid-iwihbyqo>[ RUNTIME // WEBASEMBLY_SH ]</span> <span class="telemetry-chip" data-astro-cid-iwihbyqo>[ STATE // STABLE ]</span> </div> <div class="today-bar-frame" data-astro-cid-iwihbyqo> ${renderComponent($$result2, "SectionTodayBar", $$SectionTodayBar, { "stats": dailyStats, "highlight": "simulators", "lang": "en", "data-astro-cid-iwihbyqo": true })} </div> </div> </section> <div class="container main-content-container" data-astro-cid-iwihbyqo> <div class="simulators-layout" data-astro-cid-iwihbyqo> <!-- Main Column: Grid of Simulators --> <div class="main-sim-column" data-astro-cid-iwihbyqo> ${simulators.length > 0 ? renderTemplate`<div class="sim-grid" data-astro-cid-iwihbyqo> ${simulators.map((sim, index) => {
    const diff = diffLabel[sim.difficulty] ?? diffLabel.beginner;
    const readoutLines = getConsoleReadout(sim.slug, sim.product);
    return renderTemplate`<div class="sim-card" data-astro-cid-iwihbyqo> <!-- Terminal Title Bar --> <div class="sim-card-header" data-astro-cid-iwihbyqo> <div class="sim-card-window-controls" data-astro-cid-iwihbyqo> <span class="control-dot red" data-astro-cid-iwihbyqo></span> <span class="control-dot yellow" data-astro-cid-iwihbyqo></span> <span class="control-dot green" data-astro-cid-iwihbyqo></span> </div> <span class="sim-card-window-title" data-astro-cid-iwihbyqo>term // ${sim.product.toLowerCase()}-sh</span> <span class="sim-card-id" data-astro-cid-iwihbyqo>VM_0${index + 1}</span> </div> <!-- Terminal Screen Mockup --> <div class="sim-terminal-screen" data-astro-cid-iwihbyqo> ${readoutLines.map((line) => {
      const isCmd = line.startsWith("claw-");
      return renderTemplate`<div class="terminal-line" data-astro-cid-iwihbyqo> ${isCmd ? renderTemplate`<span class="term-prompt" data-astro-cid-iwihbyqo>$ <span class="term-cmd" data-astro-cid-iwihbyqo>${line}</span></span>` : renderTemplate`<span class="term-log" data-astro-cid-iwihbyqo>${line}</span>`} </div>`;
    })} <div class="terminal-line cursor-line" data-astro-cid-iwihbyqo> <span class="term-prompt" data-astro-cid-iwihbyqo>$ <span class="term-cursor" data-astro-cid-iwihbyqo>▊</span></span> </div> </div> <!-- Sim Details --> <div class="sim-card-body" data-astro-cid-iwihbyqo> <div class="sim-meta-header" data-astro-cid-iwihbyqo> <h2 class="sim-title" data-astro-cid-iwihbyqo>${sim.nameEn || sim.name}</h2> <div class="sim-difficulty-badge" data-astro-cid-iwihbyqo> <span class="difficulty-dot"${addAttribute(`background-color: ${diff.color}`, "style")} data-astro-cid-iwihbyqo></span> <span class="difficulty-text" data-astro-cid-iwihbyqo>${diff.en}</span> </div> </div> <p class="sim-desc" data-astro-cid-iwihbyqo>${sim.descriptionEn || sim.description}</p> <!-- Specs Table --> <div class="sim-specs-table" data-astro-cid-iwihbyqo> <div class="spec-row" data-astro-cid-iwihbyqo> <span class="spec-label" data-astro-cid-iwihbyqo>TARGET PRODUCT</span> <span class="spec-val" data-astro-cid-iwihbyqo>${sim.product.toUpperCase()}</span> </div> <div class="spec-row" data-astro-cid-iwihbyqo> <span class="spec-label" data-astro-cid-iwihbyqo>CURRICULUM</span> <span class="spec-val" data-astro-cid-iwihbyqo>${sim.chapterCount} CHAPTERS</span> </div> ${sim.estimatedTime && renderTemplate`<div class="spec-row" data-astro-cid-iwihbyqo> <span class="spec-label" data-astro-cid-iwihbyqo>EST. DURATION</span> <span class="spec-val" data-astro-cid-iwihbyqo>${sim.estimatedTime.toUpperCase()}</span> </div>`} </div> <!-- Tags row --> ${sim.tags.length > 0 && renderTemplate`<div class="sim-tags-row" data-astro-cid-iwihbyqo> ${sim.tags.map((t) => renderTemplate`<span class="sim-tag" data-astro-cid-iwihbyqo>#${t.toUpperCase()}</span>`)} </div>`} <!-- Launch CTA --> <a${addAttribute(`/simulators/${sim.slug}/index.html`, "href")} target="_blank" class="sim-launch-btn" data-astro-cid-iwihbyqo>
[ LAUNCH SIMULATOR // RUN → ]
</a> </div> </div>`;
  })} </div>` : renderTemplate`<div class="empty-state" data-astro-cid-iwihbyqo>
SIMULATORS ARE BEING CONSTRUCTED // CHECK BACK SOON
</div>`} </div> <!-- Sidebar Column: Technical Telemetry & diagnostics --> <aside class="sidebar-telemetry-column" data-astro-cid-iwihbyqo> <div class="telemetry-box" data-astro-cid-iwihbyqo> <div class="telemetry-box-header" data-astro-cid-iwihbyqo> <span class="telemetry-box-title" data-astro-cid-iwihbyqo>SYSTEM CONSOLE // DIAGNOSTICS</span> </div> <div class="telemetry-box-body" data-astro-cid-iwihbyqo> <div class="diag-specs" data-astro-cid-iwihbyqo> <div class="diag-spec-row" data-astro-cid-iwihbyqo> <span class="lbl" data-astro-cid-iwihbyqo>SANDBOX ENGINE</span> <span class="val" data-astro-cid-iwihbyqo>WEBASEMBLY_v1</span> </div> <div class="diag-spec-row" data-astro-cid-iwihbyqo> <span class="lbl" data-astro-cid-iwihbyqo>TERMINAL CLASS</span> <span class="val" data-astro-cid-iwihbyqo>XTERM_VT100</span> </div> <div class="diag-spec-row" data-astro-cid-iwihbyqo> <span class="lbl" data-astro-cid-iwihbyqo>LATENCY STATS</span> <span class="val" data-astro-cid-iwihbyqo>12 MS (STABLE)</span> </div> <div class="diag-spec-row" data-astro-cid-iwihbyqo> <span class="lbl" data-astro-cid-iwihbyqo>CONNECTION</span> <span class="val" data-astro-cid-iwihbyqo>DIRECT_LOCAL</span> </div> </div> <div class="telemetry-divider" data-astro-cid-iwihbyqo></div> <div class="instruction-manual" data-astro-cid-iwihbyqo> <span class="section-tag" data-astro-cid-iwihbyqo>// USER INSTRUCTIONS</span> <ol class="manual-list" data-astro-cid-iwihbyqo> <li data-astro-cid-iwihbyqo>Choose an active sandbox VM from the listing grid.</li> <li data-astro-cid-iwihbyqo>Verify target tools & difficulty parameters match your stack.</li> <li data-astro-cid-iwihbyqo>Click [LAUNCH SIMULATOR] to mount target virtual filesystem.</li> <li data-astro-cid-iwihbyqo>Complete modular chapters in sequence inside the browser terminal.</li> </ol> </div> <div class="telemetry-divider" data-astro-cid-iwihbyqo></div> <div class="diagnostic-logs" data-astro-cid-iwihbyqo> <span class="section-tag" data-astro-cid-iwihbyqo>// LIVE CONSOLE FEED</span> <div class="logs-feed" data-astro-cid-iwihbyqo> <div class="log-line" data-astro-cid-iwihbyqo><span class="log-time" data-astro-cid-iwihbyqo>[20:16:44]</span> SYS: mount node fs... ok</div> <div class="log-line" data-astro-cid-iwihbyqo><span class="log-time" data-astro-cid-iwihbyqo>[20:16:45]</span> NET: sync with agent-registry</div> <div class="log-line" data-astro-cid-iwihbyqo><span class="log-time" data-astro-cid-iwihbyqo>[20:16:45]</span> VM : status stable, memory idle</div> <div class="log-line active" data-astro-cid-iwihbyqo><span class="log-time" data-astro-cid-iwihbyqo>[20:16:46]</span> CONSOLE: ready for user session</div> </div> </div> </div> </div> </aside> </div> </div> </main> ` })}`;
}, "/Users/eric/work/openclaweco.com/website/src/pages/simulators/index.astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/simulators/index.astro";
const $$url = "/simulators";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
