/**
 * App — bootstrap, module wiring, chapter loading
 * Each chapter HTML loads this shared script with a chapter ID.
 */

// Set CHAPTER_ID in each chapter HTML before loading this script
// e.g. <script>var CHAPTER_ID = 'ch01';</script>

let term;
let vfs;

document.addEventListener('DOMContentLoaded', () => {
  AppState.load();
  vfs = new VirtualFS();

  const termBody = document.getElementById('terminal-body');
  const termInput = document.getElementById('terminal-input');
  const termPrompt = document.getElementById('terminal-prompt');
  term = new Terminal(termBody, termInput, termPrompt);

  Progress.init();
  HintSystem.init();
  FileTree.init();
  FileViewer.init();

  // Accessibility & gestures (graceful no-op if not loaded)
  if (typeof A11y !== 'undefined') A11y.init();
  if (typeof TouchGestures !== 'undefined') TouchGestures.init();

  _setupEvents();
  _renderUI();

  // Set chapter nav current
  if (typeof CHAPTER_ID !== 'undefined') {
    ChapterNav.currentId = CHAPTER_ID;
    _loadChapter(CHAPTER_ID, true);
  }

  term.focus();

  // Mobile toggles
  const hamburger = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => sidebar.classList.toggle('open'));
  }
  const fileToggle = document.getElementById('file-toggle-btn');
  const rightPanel = document.getElementById('right-panel');
  if (fileToggle && rightPanel) {
    fileToggle.addEventListener('click', () => rightPanel.classList.toggle('open'));
  }

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.addEventListener('click', () => AppState.setLang(AppState.lang === 'en' ? 'zh' : 'en'));

  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) resetBtn.addEventListener('click', () => {
    if (confirm(AppState.lang === 'zh' ? '确定重置所有进度？' : 'Reset all progress?')) {
      AppState.resetProgress();
      location.href = 'index.html';
    }
  });
});

function _setupEvents() {
  AppState.subscribe('terminal:input', (data) => _handleInput(data.text));
  AppState.subscribe('terminal:interrupt', () => Animator.fastForward());
  AppState.subscribe('step:change', () => { _renderInstruction(); _autoFillCommand(); });
  AppState.subscribe('chapter:complete', (data) => _showChapterComplete(data.chapterId));
  AppState.subscribe('lang:change', () => { _renderUI(); _renderInstruction(); ChapterNav.render(); });
}

function _loadChapter(chapterId, tryResume) {
  const chapter = ScenarioRegistry.getById(chapterId);
  if (!chapter) return;

  AppState.startChapter(chapterId);
  vfs.init(chapter.initialFilesystem);
  FileTree.render();
  FileViewer.showEmpty();

  term.clear();
  term.setPrompt(chapter.prompt || '~/project $');
  term.disable();

  const intro = chapter.intro || [];
  Animator.typeLines(term, intro).then(() => {
    // Check if we should resume to a specific step
    let startStepId = null;
    if (tryResume) {
      const resumeStepId = AppState.getResumeStepId(chapterId);
      if (resumeStepId) startStepId = resumeStepId;
    }

    if (!startStepId && chapter.steps.length > 0) {
      startStepId = chapter.steps[0].id;
    }

    if (startStepId) {
      AppState.goToStep(startStepId);
    }

    ChapterNav.render();
    term.enable();
    term.focus();
  });
}

function _handleInput(text) {
  const step = _getCurrentStep();
  if (!step) return;
  const result = DialogueEngine.match(text, step);
  if (result.matched) {
    _onStepSuccess(step, result);
  } else {
    _onStepFail(result.failHint);
  }
}

function _getCurrentStep() {
  if (!AppState.currentStepId) return null;
  const chapter = ScenarioRegistry.getById(AppState.currentChapterId);
  if (!chapter) return null;
  return chapter.steps.find(s => s.id === AppState.currentStepId);
}

function _onStepSuccess(step, result) {
  term.disable();
  const data = result.onSuccess || step.onSuccess;
  if (!data) return;

  const lines = data.response ? data.response.lines : [];
  Animator.typeLines(term, lines).then(() => {
    if (data.filesystem && data.filesystem.changes) {
      vfs.applyChanges(data.filesystem.changes);
      AppState.emit('fs:change', { changes: data.filesystem.changes });

      // Auto-select last changed file in the viewer
      const lastFileChange = [...data.filesystem.changes]
        .reverse()
        .find(c => c.type === 'create' || c.type === 'modify');
      if (lastFileChange) {
        FileTree.setSelected(lastFileChange.path);
        FileViewer.show(lastFileChange.path);
      }
    }

    AppState.completeStep(step.id);

    if (data.nextStep) {
      AppState.goToStep(data.nextStep);
    } else {
      const chapter = ScenarioRegistry.getById(AppState.currentChapterId);
      const idx = chapter.steps.findIndex(s => s.id === step.id);
      if (idx < chapter.steps.length - 1) {
        AppState.goToStep(chapter.steps[idx + 1].id);
      }
    }

    term.enable();
    term.focus();
    Progress._update();
    ChapterNav.render();
  });
}

function _onStepFail(hintText) {
  HintSystem._failCount++;
  HintSystem._onFail();
  term.writeLine('');
  term.writeHTML(`<span class="t-yellow">${hintText}</span>`);
  term.writeLine('');
  term.focus();
}

function _renderUI() {
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.textContent = I18n.t('lang.toggle');
  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) resetBtn.textContent = I18n.t('reset.label');
  const sidebarTitle = document.getElementById('sidebar-title');
  if (sidebarTitle) sidebarTitle.textContent = I18n.t('sidebar.title');
  const sidebarSubtitle = document.getElementById('sidebar-subtitle');
  if (sidebarSubtitle) sidebarSubtitle.textContent = I18n.t('sidebar.subtitle');
  ChapterNav.render();
}

function _renderInstruction() {
  const panel = document.getElementById('instruction-text');
  const step = _getCurrentStep();
  if (!panel) return;
  panel.innerHTML = step && step.instruction ? I18n.l(step.instruction) : '';
}

function _autoFillCommand() {
  const step = _getCurrentStep();
  if (!step) return;
  const input = document.getElementById('terminal-input');
  const hintText = typeof step.hint === 'object' ? I18n.l(step.hint) : step.hint;

  if (input && hintText) { input.value = hintText; input.focus(); }

  const hintArea = document.getElementById('hint-area');
  if (!hintArea || !hintText) return;

  const hasOptions = step.expectedInputs && step.expectedInputs.length > 1;
  let html = '';

  if (hasOptions) {
    html = `<span class="hint-text">${I18n.l({ en: 'Choose:', zh: '选择：' })} </span>`;
    step.expectedInputs.forEach((exp) => {
      const cmd = exp.patterns ? exp.patterns[0] : hintText;
      const match = cmd.match(/claude\s+"(.+?)"/);
      const display = match ? match[1] : cmd;
      html += `<button class="run-btn" data-cmd="${cmd.replace(/"/g, '&quot;')}">${display}</button> `;
    });
  } else {
    html = `<span class="hint-text">${I18n.l({ en: 'Command:', zh: '命令：' })} </span>`;
    html += `<button class="run-btn primary" data-cmd="${hintText.replace(/"/g, '&quot;')}">${I18n.l({ en: '▶ Run', zh: '▶ 执行' })}</button>`;
    html += `<span class="hint-text" style="margin-left:6px;color:var(--text-muted)">${I18n.l({ en: 'or press Enter', zh: '或按回车' })}</span>`;
  }

  hintArea.innerHTML = html;
  hintArea.querySelectorAll('.run-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (input) { input.value = btn.dataset.cmd; input.focus(); term.submit(); }
    });
  });
}

function _showChapterComplete(chapterId) {
  const chapters = ChapterNav.chapters;
  const idx = chapters.findIndex(c => c.id === chapterId);
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;

  term.writeLine('');
  term.writeHTML(`<span class="t-green t-bold">${I18n.t('chapter.complete')}</span>`);
  term.writeLine('');

  if (next) {
    term.writeLine('');
    term.writeHTML(`<a href="${next.file}" style="color:var(--accent-bright);text-decoration:underline;font-weight:600">${I18n.l({ en: 'Next Chapter →', zh: '下一章 →' })} ${I18n.l(next.title)}</a>`);
    term.writeLine('');
  } else {
    term.writeLine('');
    term.writeHTML(`<span class="t-accent-bright t-bold">${I18n.t('graduation.title')}</span>`);
    term.writeHTML(`<span class="t-dim">${I18n.t('graduation.subtitle')}</span>`);
  }
}
