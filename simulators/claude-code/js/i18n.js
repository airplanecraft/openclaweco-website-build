/**
 * i18n — bilingual support (en/zh)
 */
const I18n = {
  strings: {
    'sidebar.title': { en: 'Claude Code', zh: 'Claude Code' },
    'sidebar.subtitle': { en: 'Simulator', zh: '模拟器' },
    'progress.chapter': { en: 'Chapter', zh: '章节' },
    'progress.step': { en: 'Step', zh: '步骤' },
    'hint.default': { en: 'Type a command and press Enter', zh: '输入命令后按回车' },
    'lang.toggle': { en: '🌐 中文', zh: '🌐 EN' },
    'reset.label': { en: 'Reset', zh: '重置' },
    'filetree.title': { en: 'Files', zh: '文件' },
    'filetree.empty': { en: 'No files yet', zh: '暂无文件' },
    'modal.close': { en: 'Close', zh: '关闭' },
    'chapter.complete': { en: 'Chapter Complete!', zh: '章节完成！' },
    'chapter.next': { en: 'Next Chapter →', zh: '下一章 →' },
    'graduation.title': { en: 'Congratulations!', zh: '恭喜！' },
    'graduation.subtitle': { en: "You've mastered Claude Code basics", zh: '你已经掌握了 Claude Code 基础' }
  },

  t(key) {
    const entry = this.strings[key];
    if (!entry) return key;
    return entry[AppState.lang] || entry.en || key;
  },

  /**
   * Localize a bilingual text field
   * Input can be: "string" or { en: "...", zh: "..." }
   */
  l(text) {
    if (!text) return '';
    if (typeof text === 'string') return text;
    return text[AppState.lang] || text.en || '';
  }
};
