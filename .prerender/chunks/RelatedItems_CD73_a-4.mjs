import { c as createComponent } from './BaseLayout_CSXAPswo.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, r as renderTemplate } from './prerender_BfEYESbt.mjs';
import 'clsx';
import { b as getRelatedContent } from './tags_BJSnwKLq.mjs';

const $$RelatedItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$RelatedItems;
  const { tags, currentSlug, lang = "en" } = Astro2.props;
  const { skills, plugins } = await getRelatedContent(tags, currentSlug, 3);
  const hasAny = skills.length > 0 || plugins.length > 0;
  if (!hasAny) return null;
  const labels = {
    en: {
      title: "Related Tools & Resources",
      skills: "Skill Marketplaces",
      plugins: "Recommended Plugins",
      visit: "Visit"
    },
    zh: {
      title: "相关工具与资源推荐",
      skills: "相关技能市场",
      plugins: "推荐插件",
      visit: "访问"
    }
  }[lang];
  return renderTemplate`${maybeRenderHead()}<section class="related-mesh" data-astro-cid-6wyomtiy> <div class="mesh-header" data-astro-cid-6wyomtiy> <h2 data-astro-cid-6wyomtiy>${labels.title}</h2> <div class="mesh-line" data-astro-cid-6wyomtiy></div> </div> <div class="mesh-grid" data-astro-cid-6wyomtiy> ${skills.length > 0 && renderTemplate`<div class="mesh-column" data-astro-cid-6wyomtiy> <h3 data-astro-cid-6wyomtiy>${labels.skills}</h3> ${skills.map((s) => renderTemplate`<a${addAttribute(s.url, "href")} target="_blank" rel="noopener noreferrer" class="mesh-item" data-astro-cid-6wyomtiy> <div class="item-icon" data-astro-cid-6wyomtiy>${s.nameEn?.charAt(0) || s.name.charAt(0)}</div> <div class="item-info" data-astro-cid-6wyomtiy> <h4 data-astro-cid-6wyomtiy>${lang === "zh" ? s.nameEn || s.name : s.nameEn || s.name}</h4> <p data-astro-cid-6wyomtiy>${lang === "zh" ? s.description || s.descriptionEn : s.descriptionEn || s.description}</p> </div> </a>`)} </div>`} ${plugins.length > 0 && renderTemplate`<div class="mesh-column" data-astro-cid-6wyomtiy> <h3 data-astro-cid-6wyomtiy>${labels.plugins}</h3> ${plugins.map((p) => renderTemplate`<a${addAttribute(p.repoUrl || "#", "href")} target="_blank" rel="noopener noreferrer" class="mesh-item" data-astro-cid-6wyomtiy> <div class="item-icon" data-astro-cid-6wyomtiy>${p.icon || "🧩"}</div> <div class="item-info" data-astro-cid-6wyomtiy> <h4 data-astro-cid-6wyomtiy>${lang === "zh" ? p.nameEn || p.name : p.nameEn || p.name}</h4> <p data-astro-cid-6wyomtiy>${lang === "zh" ? p.description || p.descriptionEn : p.descriptionEn || p.description}</p> </div> </a>`)} </div>`} </div> </section>`;
}, "/Users/eric/work/openclaweco.com/website/src/components/RelatedItems.astro", void 0);

export { $$RelatedItems as $ };
