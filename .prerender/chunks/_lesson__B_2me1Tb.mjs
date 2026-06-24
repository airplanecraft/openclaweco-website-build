import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { r as renderTemplate, b as renderComponent, m as maybeRenderHead, c as addAttribute, F as Fragment, u as unescapeHTML } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { a as getAllLessonPaths, b as getLessonWithNav } from './tutorials_CJIlU2hu.mjs';
import { $ as $$RelatedItems } from './RelatedItems_CD73_a-4.mjs';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
async function getStaticPaths() {
  const paths = await getAllLessonPaths();
  return paths.map((p) => ({
    params: { series: p.series, lesson: p.lesson }
  }));
}
const $$lesson = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$lesson;
  const { series: seriesSlug, lesson: lessonSlug } = Astro2.params;
  const lang = "en";
  const data = await getLessonWithNav(seriesSlug, lessonSlug, lang);
  if (!data) {
    return Astro2.redirect("/tutorial");
  }
  const renderer = new marked.Renderer();
  const originalCodeRenderer = renderer.code;
  let mermaidCounter = 0;
  renderer.code = function(arg1, arg2, arg3) {
    let text = "";
    let lang2 = "";
    if (typeof arg1 === "object" && arg1 !== null) {
      text = arg1.text || "";
      lang2 = arg1.lang || "";
    } else {
      text = arg1 || "";
      lang2 = arg2 || "";
    }
    if (lang2.trim().toLowerCase() === "mermaid") {
      const id = "mermaid-" + mermaidCounter++;
      return `<div class="mermaid-block"><pre class="mermaid" id="${id}">${text}</pre></div>`;
    }
    return originalCodeRenderer.call(this, arg1, arg2, arg3);
  };
  marked.setOptions({ renderer });
  const rawHTML = await marked(data.lesson.content || "");
  const strippedHTML = rawHTML.replace(/<h1[^>]*>.*?<\/h1>\s*/, "");
  const safeHTML = DOMPurify.sanitize(strippedHTML, {
    ADD_TAGS: ["pre"],
    ADD_ATTR: ["class", "id"]
  });
  return renderTemplate(_a || (_a = __template(["", ` <!-- Mermaid.js for diagram rendering --> <script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"><\/script> <script>
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof mermaid !== 'undefined' && document.querySelector('.mermaid')) {
      document.querySelectorAll('.mermaid').forEach(el => {
        let code = el.textContent.trim();
        
        const keywords = [
          { key: 'graph', standard: 'graph' },
          { key: 'flowchart', standard: 'flowchart' },
          { key: 'sequencediagram', standard: 'sequenceDiagram' },
          { key: 'gantt', standard: 'gantt' },
          { key: 'classdiagram', standard: 'classDiagram' },
          { key: 'statediagram', standard: 'stateDiagram' },
          { key: 'pie', standard: 'pie' },
          { key: 'erdiagram', standard: 'erDiagram' },
          { key: 'journey', standard: 'journey' },
          { key: 'gitgraph', standard: 'gitGraph' },
          { key: 'c4context', standard: 'C4Context' }
        ];
        for (const item of keywords) {
          const regex = new RegExp(\`^\${item.key}\\\\b\`, 'i');
          if (regex.test(code)) {
            code = code.replace(regex, item.standard);
            break;
          }
        }

        code = code.replace(/(\\w+)\\s+--\\s+([^-\\n]+)\\s+-->\\s+(\\w+)/g, '$1 -->|$2| $3');

        code = code.replace(/(\\w+)(\\[)([^\\]\\n]+)(\\])/g, (m, id, open, text, close) => {
          if (text.trim().startsWith('"') && text.trim().endsWith('"')) return m;
          return \`\${id}\${open}"\${text.replace(/"/g, "'")}"\${close}\`;
        });
        code = code.replace(/(\\w+)(\\()([^\\)\\n]+)(\\))/g, (m, id, open, text, close) => {
          if (text.trim().startsWith('"') && text.trim().endsWith('"')) return m;
          return \`\${id}\${open}"\${text.replace(/"/g, "'")}"\${close}\`;
        });
        code = code.replace(/(\\w+)(\\{)([^\\}\\n]+)(\\})/g, (m, id, open, text, close) => {
          if (text.trim().startsWith('"') && text.trim().endsWith('"')) return m;
          return \`\${id}\${open}"\${text.replace(/"/g, "'")}"\${close}\`;
        });

        el.textContent = code;
      });

      mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose', fontFamily: 'Inter, system-ui, sans-serif' });
      mermaid.run({ querySelector: '.mermaid' });
    }
  });
<\/script>  <script>
  // Mobile curriculum toggle trigger
  document.addEventListener('DOMContentLoaded', function() {
    const catalog = document.querySelector('.sidebar-nav-catalog');
    if (!catalog || window.innerWidth >= 1024) return;
    
    const titleLink = catalog.querySelector('.series-title-link');
    if (!titleLink) return;
    
    titleLink.addEventListener('click', function(e) {
      e.preventDefault();
      catalog.classList.toggle('expanded');
    });
  });
<\/script>`], ["", ` <!-- Mermaid.js for diagram rendering --> <script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"><\/script> <script>
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof mermaid !== 'undefined' && document.querySelector('.mermaid')) {
      document.querySelectorAll('.mermaid').forEach(el => {
        let code = el.textContent.trim();
        
        const keywords = [
          { key: 'graph', standard: 'graph' },
          { key: 'flowchart', standard: 'flowchart' },
          { key: 'sequencediagram', standard: 'sequenceDiagram' },
          { key: 'gantt', standard: 'gantt' },
          { key: 'classdiagram', standard: 'classDiagram' },
          { key: 'statediagram', standard: 'stateDiagram' },
          { key: 'pie', standard: 'pie' },
          { key: 'erdiagram', standard: 'erDiagram' },
          { key: 'journey', standard: 'journey' },
          { key: 'gitgraph', standard: 'gitGraph' },
          { key: 'c4context', standard: 'C4Context' }
        ];
        for (const item of keywords) {
          const regex = new RegExp(\\\`^\\\${item.key}\\\\\\\\b\\\`, 'i');
          if (regex.test(code)) {
            code = code.replace(regex, item.standard);
            break;
          }
        }

        code = code.replace(/(\\\\w+)\\\\s+--\\\\s+([^-\\\\n]+)\\\\s+-->\\\\s+(\\\\w+)/g, '$1 -->|$2| $3');

        code = code.replace(/(\\\\w+)(\\\\[)([^\\\\]\\\\n]+)(\\\\])/g, (m, id, open, text, close) => {
          if (text.trim().startsWith('"') && text.trim().endsWith('"')) return m;
          return \\\`\\\${id}\\\${open}"\\\${text.replace(/"/g, "'")}"\\\${close}\\\`;
        });
        code = code.replace(/(\\\\w+)(\\\\()([^\\\\)\\\\n]+)(\\\\))/g, (m, id, open, text, close) => {
          if (text.trim().startsWith('"') && text.trim().endsWith('"')) return m;
          return \\\`\\\${id}\\\${open}"\\\${text.replace(/"/g, "'")}"\\\${close}\\\`;
        });
        code = code.replace(/(\\\\w+)(\\\\{)([^\\\\}\\\\n]+)(\\\\})/g, (m, id, open, text, close) => {
          if (text.trim().startsWith('"') && text.trim().endsWith('"')) return m;
          return \\\`\\\${id}\\\${open}"\\\${text.replace(/"/g, "'")}"\\\${close}\\\`;
        });

        el.textContent = code;
      });

      mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose', fontFamily: 'Inter, system-ui, sans-serif' });
      mermaid.run({ querySelector: '.mermaid' });
    }
  });
<\/script>  <script>
  // Mobile curriculum toggle trigger
  document.addEventListener('DOMContentLoaded', function() {
    const catalog = document.querySelector('.sidebar-nav-catalog');
    if (!catalog || window.innerWidth >= 1024) return;
    
    const titleLink = catalog.querySelector('.series-title-link');
    if (!titleLink) return;
    
    titleLink.addEventListener('click', function(e) {
      e.preventDefault();
      catalog.classList.toggle('expanded');
    });
  });
<\/script>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${data.lesson.title} — ${data.series.title} — AgentUpdate.ai`, "description": data.lesson.summary || data.lesson.title, "lang": lang, "data-astro-cid-vma7orrt": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="lesson-page-wrapper" data-astro-cid-vma7orrt> <div class="container dual-layout-container" data-astro-cid-vma7orrt> <!-- Sidebar Navigation Curriculum --> <aside class="sidebar-nav-catalog" data-astro-cid-vma7orrt> <div class="sidebar-box" data-astro-cid-vma7orrt> <span class="catalog-header-tag" data-astro-cid-vma7orrt>SERIES CURRICULUM</span> <a${addAttribute(`/tutorial/${seriesSlug}`, "href")} class="series-title-link" data-astro-cid-vma7orrt> ${data.series.title.toUpperCase()} </a> <ul class="nav-lesson-list" data-astro-cid-vma7orrt> ${data.allLessons.map((l) => renderTemplate`<li data-astro-cid-vma7orrt> <a${addAttribute(`/tutorial/${seriesSlug}/${l.slug}`, "href")}${addAttribute(`lesson-nav-link ${l.isActive ? "active" : ""}`, "class")} data-astro-cid-vma7orrt> <span class="lesson-index-num" data-astro-cid-vma7orrt>${String(l.index).padStart(2, "0")} //</span> <span class="lesson-title-text" data-astro-cid-vma7orrt>${l.title}</span> </a> </li>`)} </ul> </div> </aside> <!-- Main Lesson Content --> <article class="main-lesson-article" data-astro-cid-vma7orrt> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", url: "/" },
    { label: "Tutorials", url: "/tutorial" },
    { label: data.series.title, url: `/tutorial/${seriesSlug}` },
    { label: data.lesson.title }
  ], "data-astro-cid-vma7orrt": true })} <header class="lesson-details-header" data-astro-cid-vma7orrt> <h1 class="lesson-display-title" data-astro-cid-vma7orrt>${data.lesson.title}</h1> <div class="lesson-meta-row" data-astro-cid-vma7orrt> ${data.lesson.readingTime && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-vma7orrt": true }, { "default": async ($$result3) => renderTemplate` <span class="meta-item" data-astro-cid-vma7orrt>${data.lesson.readingTime} MIN READ</span> <span class="meta-separator" data-astro-cid-vma7orrt>|</span> ` })}`} <span class="meta-item" data-astro-cid-vma7orrt>UPDATED: ${new Date(data.lesson.updatedAt).toISOString().split("T")[0]}</span> </div> </header> <!-- Direct Summary Box (GEO Citation Optimizer) --> ${data.lesson.summary && renderTemplate`<div class="direct-summary-box" data-astro-cid-vma7orrt> <div class="summary-box-title" data-astro-cid-vma7orrt>DIRECT SUMMARY // KEY TAKEAWAY</div> <p class="summary-box-text" data-astro-cid-vma7orrt>${data.lesson.summary}</p> </div>`} <!-- Markdown Body --> <div class="markdown-article-body" data-astro-cid-vma7orrt>${unescapeHTML(safeHTML)}</div> <!-- Bottom Lesson Navigation --> <div class="bottom-pagination-row" data-astro-cid-vma7orrt> <div class="pag-item prev" data-astro-cid-vma7orrt> ${data.nav.prev && renderTemplate`<a${addAttribute(`/tutorial/${seriesSlug}/${data.nav.prev.slug}`, "href")} class="pag-btn" data-astro-cid-vma7orrt> <span class="pag-label" data-astro-cid-vma7orrt>← PREVIOUS LESSON</span> <span class="pag-title" data-astro-cid-vma7orrt>${data.nav.prev.title}</span> </a>`} </div> <div class="pag-item next" data-astro-cid-vma7orrt> ${data.nav.next && renderTemplate`<a${addAttribute(`/tutorial/${seriesSlug}/${data.nav.next.slug}`, "href")} class="pag-btn" data-astro-cid-vma7orrt> <span class="pag-label" data-astro-cid-vma7orrt>NEXT LESSON →</span> <span class="pag-title" data-astro-cid-vma7orrt>${data.nav.next.title}</span> </a>`} </div> </div> <div class="related-block-divider" data-astro-cid-vma7orrt></div> ${renderComponent($$result2, "RelatedItems", $$RelatedItems, { "tags": Array.isArray(data.series.tags) ? data.series.tags : JSON.parse(data.series.tags || "[]"), "currentSlug": seriesSlug, "lang": "en", "data-astro-cid-vma7orrt": true })} </article> </div> </main> ` }));
}, "/Users/eric/work/openclaweco.com/website/src/pages/tutorial/[series]/[lesson].astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/tutorial/[series]/[lesson].astro";
const $$url = "/tutorial/[series]/[lesson]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$lesson,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
