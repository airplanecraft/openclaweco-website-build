/**
 * Hint System — detect stuck state and show progressive hints
 */
const HintSystem = {
  _timer: null,
  _failCount: 0,
  _currentHintLevel: 0,

  init() {
    AppState.subscribe('step:change', () => this._reset());
    AppState.subscribe('chapter:start', () => this._reset());
    AppState.subscribe('terminal:input', (data) => this._onInput(data.text));
    AppState.subscribe('terminal:tab', () => this._showTabComplete());
  },

  _reset() {
    clearTimeout(this._timer);
    this._failCount = 0;
    this._currentHintLevel = 0;
    this._showDefaultHint();
    this._startTimer();
  },

  _startTimer() {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      if (!AppState.isAnimating) {
        this._currentHintLevel = Math.min(this._currentHintLevel + 1, 2);
        this._showHint();
      }
    }, 20000); // 20 seconds
  },

  _onInput(text) {
    // Reset timer on any input
    clearTimeout(this._timer);
    this._startTimer();
  },

  _onFail() {
    this._failCount++;
    if (this._failCount >= 2) {
      this._currentHintLevel = Math.min(this._currentHintLevel + 1, 2);
    }
    this._showHint();
  },

  _showHint() {
    const step = this._getCurrentStep();
    if (!step) return;

    const hintArea = document.getElementById('hint-area');
    if (!hintArea) return;

    let hintHtml = '';

    if (this._currentHintLevel === 0) {
      // Level 0: Gentle reminder
      hintHtml = `<span class="hint-text">${I18n.t('hint.default')}</span>`;
    } else if (this._currentHintLevel === 1) {
      // Level 1: Show the hint
      const hintText = typeof step.hint === 'object'
        ? I18n.l(step.hint)
        : step.hint;
      hintHtml = `<span class="hint-text">${I18n.l({ en: 'Hint: ', zh: '提示：' })}<span class="hint-cmd" data-cmd="${this._escapeAttr(hintText)}">${this._escapeHtml(hintText)}</span></span>`;
    } else {
      // Level 2: Just show the answer
      const hintText = typeof step.hint === 'object'
        ? I18n.l(step.hint)
        : step.hint;
      hintHtml = `<span class="hint-text">${I18n.l({ en: 'Type: ', zh: '输入：' })}<span class="hint-cmd" data-cmd="${this._escapeAttr(hintText)}">${this._escapeHtml(hintText)}</span> ${I18n.l({ en: '(click to autofill)', zh: '(点击自动填入)' })}</span>`;
    }

    hintArea.innerHTML = hintHtml;

    // Bind click-to-autofill
    const cmds = hintArea.querySelectorAll('.hint-cmd');
    cmds.forEach(el => {
      el.addEventListener('click', () => {
        const input = document.getElementById('terminal-input');
        if (input) {
          input.value = el.dataset.cmd;
          input.focus();
        }
      });
    });
  },

  _showDefaultHint() {
    const hintArea = document.getElementById('hint-area');
    if (hintArea) {
      hintArea.innerHTML = `<span class="hint-text">${I18n.t('hint.default')}</span>`;
    }
  },

  _showTabComplete() {
    const step = this._getCurrentStep();
    if (!step || !step.hint) return;

    const input = document.getElementById('terminal-input');
    if (!input) return;

    const hintText = typeof step.hint === 'object' ? I18n.l(step.hint) : step.hint;
    if (!input.value || hintText.startsWith(input.value)) {
      input.value = hintText;
    }
  },

  _getCurrentStep() {
    if (!AppState.currentChapterId || !AppState.currentStepId) return null;
    const chapter = ScenarioRegistry.getById(AppState.currentChapterId);
    if (!chapter) return null;
    return chapter.steps.find(s => s.id === AppState.currentStepId);
  },

  _escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  _escapeAttr(text) {
    return text.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
};
