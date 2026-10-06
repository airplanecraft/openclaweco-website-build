/**
 * Accessibility — ARIA labels and keyboard navigation
 */
const A11y = {
  init() {
    this._addAriaLabels();
    this._setupKeyboardNav();
    this._setupTerminalFocus();
  },

  _addAriaLabels() {
    // Sidebar
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.setAttribute('role', 'navigation');

    // Chapter list
    const chapterList = document.getElementById('chapter-list');
    if (chapterList) chapterList.setAttribute('aria-label', 'Chapter navigation');

    // Terminal
    const termBody = document.getElementById('terminal-body');
    if (termBody) {
      termBody.setAttribute('role', 'log');
      termBody.setAttribute('aria-label', 'Terminal output');
      termBody.setAttribute('aria-live', 'polite');
    }

    // Terminal input
    const termInput = document.getElementById('terminal-input');
    if (termInput) {
      termInput.setAttribute('aria-label', 'Terminal command input');
    }

    // File tree
    const fileTree = document.getElementById('file-tree');
    if (fileTree) {
      fileTree.setAttribute('role', 'tree');
      fileTree.setAttribute('aria-label', 'Project files');
    }

    // File viewer
    const fileBody = document.getElementById('file-viewer-body');
    if (fileBody) {
      fileBody.setAttribute('role', 'document');
      fileBody.setAttribute('aria-label', 'File content viewer');
    }

    // Progress bar
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
      progressFill.setAttribute('role', 'progressbar');
      progressFill.setAttribute('aria-valuemin', '0');
      progressFill.setAttribute('aria-valuemax', '100');
      progressFill.setAttribute('aria-valuenow', '0');
    }

    // Instruction panel
    const instruction = document.getElementById('instruction-text');
    if (instruction) instruction.setAttribute('aria-live', 'polite');

    // Hint area
    const hintArea = document.getElementById('hint-area');
    if (hintArea) hintArea.setAttribute('aria-label', 'Command hints');

    // Buttons
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.setAttribute('aria-label', 'Toggle language');

    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) resetBtn.setAttribute('aria-label', 'Reset progress');
  },

  _setupKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + B → toggle sidebar
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.toggle('open');
      }

      // Escape → close mobile panels
      if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar');
        const panel = document.getElementById('right-panel');
        if (sidebar) sidebar.classList.remove('open');
        if (panel) panel.classList.remove('open');
      }

      // Ctrl/Cmd + E → toggle right panel
      if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        const panel = document.getElementById('right-panel');
        if (panel) panel.classList.toggle('open');
      }
    });
  },

  _setupTerminalFocus() {
    // Click anywhere in main area to focus terminal
    const mainArea = document.querySelector('.main-area');
    if (mainArea) {
      mainArea.addEventListener('click', (e) => {
        if (e.target.closest('a, button, .run-btn, .chapter-item')) return;
        const input = document.getElementById('terminal-input');
        if (input && !input.disabled) input.focus();
      });
    }
  },

  /**
   * Update progress bar ARIA value (called from Progress._update)
   */
  updateProgressAria(pct) {
    const fill = document.getElementById('progress-fill');
    if (fill) fill.setAttribute('aria-valuenow', String(pct));
  }
};
