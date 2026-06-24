import { c as createComponent } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { r as renderTemplate, u as unescapeHTML, c as addAttribute, m as maybeRenderHead } from './prerender_BfEYESbt.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items } = Astro2.props;
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => {
      const element = {
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label
      };
      if (item.url) {
        const baseUrl = Astro2.site?.href || "https://www.agentupdate.ai";
        element.item = item.url.startsWith("http") ? item.url : `${baseUrl.replace(/\/$/, "")}${item.url.startsWith("/") ? item.url : "/" + item.url}`;
      }
      return element;
    })
  };
  return renderTemplate(_a || (_a = __template(["", '<nav class="breadcrumbs" aria-label="Breadcrumb" data-astro-cid-ilhxcym7> <ol data-astro-cid-ilhxcym7> ', ' </ol> </nav> <script type="application/ld+json">', "<\/script>"])), maybeRenderHead(), items.map((item, index) => {
    const isLast = index === items.length - 1;
    return renderTemplate`<li data-astro-cid-ilhxcym7> ${!isLast && item.url ? renderTemplate`<a${addAttribute(item.url, "href")} data-astro-cid-ilhxcym7>${item.label}</a>` : renderTemplate`<span${addAttribute(isLast ? "page" : void 0, "aria-current")} data-astro-cid-ilhxcym7>${item.label}</span>`} ${!isLast && renderTemplate`<span class="separator" data-astro-cid-ilhxcym7>/</span>`} </li>`;
  }), unescapeHTML(JSON.stringify(schemaData)));
}, "/Users/eric/work/openclaweco.com/website/src/components/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
