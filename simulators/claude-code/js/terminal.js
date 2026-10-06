/**
 * Terminal — DOM-based terminal emulator with input handling and colored output
 */
class Terminal {
  constructor(containerEl, inputEl, promptEl) {
    this.body = containerEl;
    this.input = inputEl;
    this.promptEl = promptEl;
    this.historyIndex = -1;

    this._bindInput();
  }

  // Public submit — used by run buttons
  submit() {
    this._submit();
  }

  _bindInput() {
    this.input.addEventListener('keydown', (e) => {
      if (AppState.isAnimating && e.key !== 'c' && !e.ctrlKey) {
        e.preventDefault();
        return;
      }

      switch (e.key) {
        case 'Enter':
          e.preventDefault();
          this._submit();
          break;
        case 'ArrowUp':
          e.preventDefault();
          this._historyUp();
          break;
        case 'ArrowDown':
          e.preventDefault();
          this._historyDown();
          break;
        case 'c':
          if (e.ctrlKey) {
            e.preventDefault();
            this._interrupt();
          }
          break;
        case 'Tab':
          e.preventDefault();
          this._autoComplete();
          break;
      }
    });
  }

  _submit() {
    const text = this.input.value.trim();
    if (!text) return;

    // Echo user input
    this.echoInput(text);

    // Add to history
    AppState.commandHistory.push(text);
    this.historyIndex = -1;

    // Clear input
    this.input.value = '';

    // Emit event
    AppState.emit('terminal:input', { text });
  }

  _historyUp() {
    if (AppState.commandHistory.length === 0) return;
    if (this.historyIndex < AppState.commandHistory.length - 1) {
      this.historyIndex++;
      this.input.value = AppState.commandHistory[AppState.commandHistory.length - 1 - this.historyIndex];
    }
  }

  _historyDown() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      this.input.value = AppState.commandHistory[AppState.commandHistory.length - 1 - this.historyIndex];
    } else {
      this.historyIndex = -1;
      this.input.value = '';
    }
  }

  _interrupt() {
    AppState.emit('terminal:interrupt');
  }

  _autoComplete() {
    AppState.emit('terminal:tab');
  }

  // ---- Output methods ----

  echoInput(text) {
    const line = document.createElement('div');
    line.className = 'term-line user-input';
    line.innerHTML = `<span class="prompt-prefix">${this._escapeHtml(this.promptEl.textContent)}</span> ${this._escapeHtml(text)}`;
    this.body.appendChild(line);
    this._scrollToBottom();
  }

  writeLine(text = '', className = '') {
    const line = document.createElement('div');
    line.className = `term-line ${className}`.trim();
    if (text === '') {
      line.classList.add('empty');
    } else {
      line.innerHTML = this._parseColors(this._escapeHtml(text));
    }
    this.body.appendChild(line);
    this._scrollToBottom();
    return line;
  }

  writeHTML(html, className = '') {
    const line = document.createElement('div');
    line.className = `term-line ${className}`.trim();
    line.innerHTML = html;
    this.body.appendChild(line);
    this._scrollToBottom();
    return line;
  }

  writeCodeBlock(code, language = '') {
    const wrapper = document.createElement('div');
    wrapper.className = 'term-code-block';
    if (language) {
      const langLabel = document.createElement('div');
      langLabel.className = 'code-lang';
      langLabel.textContent = language;
      wrapper.appendChild(langLabel);
    }
    const pre = document.createElement('pre');
    // Use Prism.js if available, otherwise plain text
    if (window.Prism && language && Prism.languages[language]) {
      pre.innerHTML = Prism.highlight(code, Prism.languages[language], language);
    } else {
      pre.textContent = code;
    }
    wrapper.appendChild(pre);
    this.body.appendChild(wrapper);
    this._scrollToBottom();
    return wrapper;
  }

  writeDiff(additions, removals = [], context = []) {
    const diff = document.createElement('div');
    diff.className = 'term-diff';
    for (const line of removals) {
      diff.innerHTML += `<div class="diff-remove">- ${this._escapeHtml(line)}</div>`;
    }
    for (const line of context) {
      diff.innerHTML += `<div class="diff-context">  ${this._escapeHtml(line)}</div>`;
    }
    for (const line of additions) {
      diff.innerHTML += `<div class="diff-add">+ ${this._escapeHtml(line)}</div>`;
    }
    this.body.appendChild(diff);
    this._scrollToBottom();
  }

  createSpinner() {
    const spinner = document.createElement('div');
    spinner.className = 'term-spinner';
    spinner.innerHTML = '<span class="spinner-dot"></span><span class="spinner-dot"></span><span class="spinner-dot"></span>';
    this.body.appendChild(spinner);
    this._scrollToBottom();
    return spinner;
  }

  clear() {
    this.body.innerHTML = '';
  }

  setPrompt(text) {
    this.promptEl.textContent = text;
  }

  focus() {
    this.input.focus();
  }

  enable() {
    this.input.disabled = false;
    this.input.focus();
  }

  disable() {
    this.input.disabled = true;
  }

  // ---- Helpers ----

  _scrollToBottom() {
    requestAnimationFrame(() => {
      this.body.scrollTop = this.body.scrollHeight;
    });
  }

  _escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  _parseColors(html) {
    // Parse {color}text{/color} markup
    return html
      .replace(/\{green\}(.*?)\{\/green\}/g, '<span class="t-green">$1</span>')
      .replace(/\{red\}(.*?)\{\/red\}/g, '<span class="t-red">$1</span>')
      .replace(/\{yellow\}(.*?)\{\/yellow\}/g, '<span class="t-yellow">$1</span>')
      .replace(/\{cyan\}(.*?)\{\/cyan\}/g, '<span class="t-cyan">$1</span>')
      .replace(/\{blue\}(.*?)\{\/blue\}/g, '<span class="t-blue">$1</span>')
      .replace(/\{magenta\}(.*?)\{\/magenta\}/g, '<span class="t-magenta">$1</span>')
      .replace(/\{dim\}(.*?)\{\/dim\}/g, '<span class="t-dim">$1</span>')
      .replace(/\{bold\}(.*?)\{\/bold\}/g, '<span class="t-bold">$1</span>')
      .replace(/\{accent\}(.*?)\{\/accent\}/g, '<span class="t-accent">$1</span>');
  }
}
