import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment, c as addAttribute, u as unescapeHTML } from './prerender_BfEYESbt.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_JczQhnLp.mjs';
import { g as getPublishedBlogPosts, a as getBlogPostBySlug } from './blog_Bxjvca-5.mjs';
import { marked } from 'marked';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
async function getStaticPaths() {
  const posts = await getPublishedBlogPosts();
  return posts.map((p) => ({ params: { slug: p.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return Astro2.redirect("/zh/blog");
  }
  const publishedDate = new Date(post.publishedAt);
  const fmt = (d) => d.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Shanghai"
  });
  const contentMarkdown = post.content || "";
  let cleanedMarkdown = contentMarkdown.replace(/^#\s+.*?\n+/, "");
  const closeUnfinishedMermaidBlocks = (markdown) => {
    const parts = markdown.split(/```mermaid/i);
    if (parts.length <= 1) return markdown;
    let result = parts[0];
    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];
      const headingIndex = part.search(/\n(##+|#)\s+/);
      const closingIndex = part.indexOf("```");
      if (closingIndex === -1 || headingIndex !== -1 && closingIndex > headingIndex) {
        if (headingIndex !== -1) {
          result += "```mermaid" + part.substring(0, headingIndex) + "\n```\n" + part.substring(headingIndex);
        } else {
          result += "```mermaid" + part + "\n```\n";
        }
      } else {
        result += "```mermaid" + part;
      }
    }
    return result;
  };
  cleanedMarkdown = closeUnfinishedMermaidBlocks(cleanedMarkdown);
  const slugify = (text) => {
    return text.toLowerCase().replace(/[^\w\u4e00-\u9fa5\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  };
  const toc = [];
  const headerRegex = /^(##|###)\s+(.+)$/gm;
  let match;
  headerRegex.lastIndex = 0;
  while ((match = headerRegex.exec(cleanedMarkdown)) !== null) {
    const depth = match[1].length;
    const rawText = match[2].trim();
    const text = rawText.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1").replace(/[*_`]/g, "");
    const headingSlug = slugify(text);
    toc.push({ depth, text, slug: headingSlug });
  }
  const posts = await getPublishedBlogPosts();
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  let recommendedPosts = [];
  if (posts.length > 1) {
    const p1 = posts[currentIndex + 1];
    const p2 = posts[currentIndex + 2];
    if (p1) recommendedPosts.push(p1);
    if (p2) recommendedPosts.push(p2);
    if (recommendedPosts.length < 2) {
      for (const p of posts) {
        if (p.slug !== post.slug && !recommendedPosts.some((rp) => rp.slug === p.slug)) {
          recommendedPosts.push(p);
          if (recommendedPosts.length === 2) break;
        }
      }
    }
  }
  const renderer = new marked.Renderer();
  const originalCodeRenderer = renderer.code;
  let mermaidCounter = 0;
  renderer.code = function(arg1, arg2, arg3) {
    let text = "";
    let lang = "";
    if (typeof arg1 === "object" && arg1 !== null) {
      text = arg1.text || "";
      lang = arg1.lang || "";
    } else {
      text = arg1 || "";
      lang = arg2 || "";
    }
    if (lang.trim().toLowerCase() === "mermaid") {
      const id = "mermaid-" + mermaidCounter++;
      return `<div class="mermaid-block"><pre class="mermaid" id="${id}">${text}</pre></div>`;
    }
    const originalHtml = originalCodeRenderer.call(this, arg1, arg2, arg3);
    return `<div class="code-wrapper">${originalHtml}</div>`;
  };
  renderer.heading = function(arg1, arg2) {
    let text = "";
    let depth = 1;
    if (typeof arg1 === "object" && arg1 !== null) {
      text = arg1.text || "";
      depth = arg1.depth || 1;
    } else {
      text = arg1 || "";
      depth = arg2 || 1;
    }
    const cleanText = text.replace(/<[^>]*>/g, "").trim();
    const headingSlug = slugify(cleanText);
    return `<h${depth} id="${headingSlug}">${text}</h${depth}>`;
  };
  marked.setOptions({ renderer });
  const contentHtml = await marked(cleanedMarkdown);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    image: post.coverImage ?? void 0,
    datePublished: post.publishedAt,
    inLanguage: "zh-CN",
    author: {
      "@type": "Person",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: "AgentUpdate.ai",
      url: "https://www.agentupdate.ai"
    },
    url: `https://www.agentupdate.ai/zh/blog/${post.slug}`
  };
  return renderTemplate(_b || (_b = __template(["", ` <!-- Client scripts for syntax highlighting, copy button, reading progress, and TOC synchronization --> <script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"><\/script> <script>
  document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize Highlight.js code highlighting
    if (typeof hljs !== 'undefined') {
      document.querySelectorAll('.code-wrapper pre code').forEach((block) => {
        hljs.highlightElement(block);
      });
    }

    // 2. Generate Copy Code buttons inside .code-wrapper containers
    document.querySelectorAll('.code-wrapper').forEach((wrapper) => {
      const btn = document.createElement('button');
      btn.className = 'copy-code-btn';
      btn.textContent = '复制';
      btn.setAttribute('aria-label', '复制到剪贴板');
      
      const codeEl = wrapper.querySelector('pre code');
      if (!codeEl) return;
      
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(codeEl.textContent || '').then(() => {
          btn.textContent = '✅ 已复制!';
          btn.style.borderColor = 'var(--success)';
          btn.style.color = 'var(--success)';
          setTimeout(() => {
            btn.textContent = '复制';
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      });
      
      wrapper.appendChild(btn);
    });

    // 3. Sync scroll reading progress bar
    const progressBar = document.getElementById('reading-progress-bar');
    if (progressBar) {
      const updateProgress = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = scrollPercent + '%';
      };
      window.addEventListener('scroll', updateProgress, { passive: true });
      updateProgress(); // Initial execution
    }

    // 4. Table of Contents active-link tracking using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (!id) return;
          
          document.querySelectorAll('.toc-sidebar .toc-item').forEach((item) => {
            item.classList.remove('active');
          });
          
          const activeItem = document.querySelector(\`.toc-sidebar .toc-item[data-slug="\${id}"]\`);
          if (activeItem) {
            activeItem.classList.add('active');
          }
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.article-content h2, .article-content h3').forEach((header) => {
      observer.observe(header);
    });

    // 5. Robust client-side Mermaid preprocessing & initialization
    if (typeof mermaid !== 'undefined' && document.querySelector('.mermaid')) {
      document.querySelectorAll('.mermaid').forEach(el => {
        let code = el.textContent.trim();
        
        // Force standard mermaid keywords to be case-correct
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

        // Self-heal: Convert "A -- Label --> B" to standard "A -->|Label| B"
        code = code.replace(/(\\w+)\\s+--\\s+([^-\\n]+)\\s+-->\\s+(\\w+)/g, '$1 -->|$2| $3');

        // Sanitize labels to wrap them in double quotes
        code = code.replace(/(\\w+)(\\[)([^\\]\\n]+)(\\])/g, (m, id, open, text, close) => {
          if (text.trim().startsWith('"') && text.trim().endsWith('"')) return m;
          return \`\${id}\${open}"\${text.replace(/"/g, "'")}"\${close}\`;
        });
        code = code.replace(/(\\w+)(\\(|（)([^)）\\n]+)(\\)|）)/g, (m, id, open, text, close) => {
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
<\/script>`], ["", ` <!-- Client scripts for syntax highlighting, copy button, reading progress, and TOC synchronization --> <script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"><\/script> <script>
  document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize Highlight.js code highlighting
    if (typeof hljs !== 'undefined') {
      document.querySelectorAll('.code-wrapper pre code').forEach((block) => {
        hljs.highlightElement(block);
      });
    }

    // 2. Generate Copy Code buttons inside .code-wrapper containers
    document.querySelectorAll('.code-wrapper').forEach((wrapper) => {
      const btn = document.createElement('button');
      btn.className = 'copy-code-btn';
      btn.textContent = '复制';
      btn.setAttribute('aria-label', '复制到剪贴板');
      
      const codeEl = wrapper.querySelector('pre code');
      if (!codeEl) return;
      
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(codeEl.textContent || '').then(() => {
          btn.textContent = '✅ 已复制!';
          btn.style.borderColor = 'var(--success)';
          btn.style.color = 'var(--success)';
          setTimeout(() => {
            btn.textContent = '复制';
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      });
      
      wrapper.appendChild(btn);
    });

    // 3. Sync scroll reading progress bar
    const progressBar = document.getElementById('reading-progress-bar');
    if (progressBar) {
      const updateProgress = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = scrollPercent + '%';
      };
      window.addEventListener('scroll', updateProgress, { passive: true });
      updateProgress(); // Initial execution
    }

    // 4. Table of Contents active-link tracking using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (!id) return;
          
          document.querySelectorAll('.toc-sidebar .toc-item').forEach((item) => {
            item.classList.remove('active');
          });
          
          const activeItem = document.querySelector(\\\`.toc-sidebar .toc-item[data-slug="\\\${id}"]\\\`);
          if (activeItem) {
            activeItem.classList.add('active');
          }
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.article-content h2, .article-content h3').forEach((header) => {
      observer.observe(header);
    });

    // 5. Robust client-side Mermaid preprocessing & initialization
    if (typeof mermaid !== 'undefined' && document.querySelector('.mermaid')) {
      document.querySelectorAll('.mermaid').forEach(el => {
        let code = el.textContent.trim();
        
        // Force standard mermaid keywords to be case-correct
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

        // Self-heal: Convert "A -- Label --> B" to standard "A -->|Label| B"
        code = code.replace(/(\\\\w+)\\\\s+--\\\\s+([^-\\\\n]+)\\\\s+-->\\\\s+(\\\\w+)/g, '$1 -->|$2| $3');

        // Sanitize labels to wrap them in double quotes
        code = code.replace(/(\\\\w+)(\\\\[)([^\\\\]\\\\n]+)(\\\\])/g, (m, id, open, text, close) => {
          if (text.trim().startsWith('"') && text.trim().endsWith('"')) return m;
          return \\\`\\\${id}\\\${open}"\\\${text.replace(/"/g, "'")}"\\\${close}\\\`;
        });
        code = code.replace(/(\\\\w+)(\\\\(|（)([^)）\\\\n]+)(\\\\)|）)/g, (m, id, open, text, close) => {
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
<\/script>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${post.title} — AgentUpdate.ai`, "description": post.summary ?? "在 AgentUpdate.ai 阅读这篇文章", "keywords": [post.title, post.titleEn, ...post.tags ?? []].filter(Boolean), "ogImage": post.coverImage ?? void 0, "ogType": "article", "lang": "zh", "structuredData": structuredData, "showProgressBar": true, "data-astro-cid-w5q62dq7": true }, { "default": async ($$result2) => renderTemplate`   ${maybeRenderHead()}<main class="swiss-detail-page" data-astro-cid-w5q62dq7> <!-- Full-width premium article hero header --> <div class="article-hero" data-astro-cid-w5q62dq7> <div class="container hero-container" data-astro-cid-w5q62dq7> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "首页", url: "/zh" },
    { label: "技术博客", url: "/zh/blog" },
    { label: post.title }
  ], "data-astro-cid-w5q62dq7": true })} <div class="article-hero-content" data-astro-cid-w5q62dq7> <span class="source-badge" data-astro-cid-w5q62dq7>AGENTUPDATE 技术博客</span> <h1 class="article-title" data-testid="blog-title-zh" data-astro-cid-w5q62dq7>${post.title}</h1> <div class="article-meta" data-astro-cid-w5q62dq7> <span class="meta-item" data-astro-cid-w5q62dq7>${fmt(publishedDate)}</span> <span class="meta-item-separator" data-astro-cid-w5q62dq7>|</span> <span class="meta-item" data-astro-cid-w5q62dq7>作者: ${post.author}</span> ${post.readingTime && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-w5q62dq7": true }, { "default": async ($$result3) => renderTemplate` <span class="meta-item-separator" data-astro-cid-w5q62dq7>|</span> <span class="meta-item" data-astro-cid-w5q62dq7>${post.readingTime} 分钟阅读</span> ` })}`} </div> ${post.tags.length > 0 && renderTemplate`<div class="article-tags" data-astro-cid-w5q62dq7> ${post.tags.map((t) => {
    const slugified = t.toLowerCase().trim().replace(/\s+/g, "-").replace(/\//g, "-");
    return renderTemplate`<a${addAttribute(`/zh/tags/${slugified}`, "href")} class="tag" data-astro-cid-w5q62dq7>#${t}</a>`;
  })} </div>`} </div> </div> </div> <!-- Reading layout centered and optimized --> <article class="container reading-container" data-astro-cid-w5q62dq7> <div class="reading-layout-grid" data-astro-cid-w5q62dq7> <!-- Main Column --> <div class="reading-main-column" data-astro-cid-w5q62dq7> ${post.coverImage && renderTemplate`<img class="article-cover"${addAttribute(post.coverImage, "src")}${addAttribute(post.title, "alt")} data-astro-cid-w5q62dq7>`}  ${toc.length > 0 && renderTemplate`<details class="mobile-toc" data-astro-cid-w5q62dq7> <summary class="mobile-toc-summary" data-astro-cid-w5q62dq7>目录</summary> <ul class="mobile-toc-list" data-astro-cid-w5q62dq7> ${toc.map((item) => renderTemplate`<li${addAttribute(`toc-item ${item.depth === 3 ? "h3-nav" : ""}`, "class")} data-astro-cid-w5q62dq7> <a${addAttribute(`#${item.slug}`, "href")} data-astro-cid-w5q62dq7>${item.text}</a> </li>`)} </ul> </details>`} ${contentHtml ? renderTemplate`<div class="article-content" data-astro-cid-w5q62dq7>${unescapeHTML(contentHtml)}</div>` : renderTemplate`<p class="article-content" style="color:var(--muted)" data-astro-cid-w5q62dq7>暂无内容。</p>`} </div> <!-- Sticky TOC Sidebar for Desktop Viewports --> <aside class="toc-sidebar" data-astro-cid-w5q62dq7> <span class="section-tag" data-astro-cid-w5q62dq7>目录</span> ${toc.length > 0 ? renderTemplate`<ul class="toc-list" data-astro-cid-w5q62dq7> ${toc.map((item) => renderTemplate`<li${addAttribute(`toc-item ${item.depth === 3 ? "h3-nav" : ""}`, "class")}${addAttribute(item.slug, "data-slug")} data-astro-cid-w5q62dq7> <a${addAttribute(`#${item.slug}`, "href")} data-astro-cid-w5q62dq7>${item.text}</a> </li>`)} </ul>` : renderTemplate`<p style="font-size:0.85rem;color:var(--muted)" data-astro-cid-w5q62dq7>未找到目录项。</p>`} </aside> </div> <!-- Premium "Keep Reading" Visual Cards --> ${recommendedPosts.length > 0 && renderTemplate`<section class="keep-reading-section" data-astro-cid-w5q62dq7> <span class="section-tag" data-astro-cid-w5q62dq7>深入阅读推荐</span> <div class="keep-reading-grid" data-astro-cid-w5q62dq7> ${recommendedPosts.map((p) => renderTemplate`<article class="keep-reading-card" data-astro-cid-w5q62dq7> <a${addAttribute(`/zh/blog/${p.slug}`, "href")} class="keep-reading-img-link" data-astro-cid-w5q62dq7> ${p.coverImage ? renderTemplate`<img class="keep-reading-img"${addAttribute(p.coverImage, "src")}${addAttribute(p.title, "alt")} loading="lazy" data-astro-cid-w5q62dq7>` : renderTemplate`<div class="placeholder-fallback" data-astro-cid-w5q62dq7>⚡</div>`} </a> <div class="keep-reading-body" data-astro-cid-w5q62dq7> <div class="agent-sig-badge" data-astro-cid-w5q62dq7>
AGENT-SYS // SYNTH
</div> <h3 class="keep-reading-card-title" data-astro-cid-w5q62dq7> <a${addAttribute(`/zh/blog/${p.slug}`, "href")} data-astro-cid-w5q62dq7>${p.title}</a> </h3> <p class="keep-reading-card-summary" data-astro-cid-w5q62dq7>${p.summary || ""}</p> <div class="keep-reading-meta" data-astro-cid-w5q62dq7> <span data-astro-cid-w5q62dq7>${fmt(new Date(p.publishedAt))}</span> <span data-astro-cid-w5q62dq7>作者: ${p.author}</span> </div> </div> </article>`)} </div> </section>`} </article> </main> `, "head": async ($$result2) => renderTemplate(_a || (_a = __template(['<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"><script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"><\/script>']))) }));
}, "/Users/eric/work/openclaweco.com/website/src/pages/zh/blog/[slug].astro", void 0);

const $$file = "/Users/eric/work/openclaweco.com/website/src/pages/zh/blog/[slug].astro";
const $$url = "/zh/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
