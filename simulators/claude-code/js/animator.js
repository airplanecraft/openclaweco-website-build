/**
 * Animator — typing animation and timed line reveal
 */
const Animator = {
  _fastForward: false,
  _currentPromise: null,
  _rejectCurrent: null,

  /**
   * Type out an array of lines with optional delays and character-by-character animation
   * @param {Terminal} terminal
   * @param {Array} lines - [{ text, delay_ms, typing, charDelay, className, html, code, lang }]
   * @param {Object} opts - { onLine callback }
   * @returns {Promise}
   */
  async typeLines(terminal, lines, opts = {}) {
    AppState.isAnimating = true;
    this._fastForward = false;

    try {
      for (let i = 0; i < lines.length; i++) {
        if (this._fastForward) break;

        const line = lines[i];

        // Pre-line delay
        if (line.delay_ms && !this._fastForward) {
          await this._sleep(line.delay_ms);
        }

        // Code block
        if (line.code !== undefined) {
          terminal.writeCodeBlock(line.code, line.lang || '');
          if (opts.onLine) opts.onLine(line, i);
          continue;
        }

        // Diff
        if (line.diff) {
          terminal.writeDiff(line.diff.add || [], line.diff.remove || [], line.diff.context || []);
          if (opts.onLine) opts.onLine(line, i);
          continue;
        }

        // Spinner
        if (line.spinner) {
          const spinner = terminal.createSpinner();
          if (line.spinner_duration) {
            await this._sleep(line.spinner_duration);
            spinner.remove();
          }
          continue;
        }

        // Typing animation
        if (line.typing && !this._fastForward) {
          const el = terminal.writeLine('', line.className || '');
          await this._typeText(el, line.text || line.html || '', line.charDelay || 12, !!line.html);
        } else {
          // Instant line
          if (line.html) {
            terminal.writeHTML(line.html, line.className || '');
          } else {
            terminal.writeLine(line.text || '', line.className || '');
          }
        }

        if (opts.onLine) opts.onLine(line, i);
      }
    } catch (e) {
      if (e.message !== 'interrupted') throw e;
    }

    AppState.isAnimating = false;
  },

  /**
   * Skip current animation to the end
   */
  fastForward() {
    this._fastForward = true;
    // Resolve any pending sleep immediately
    if (this._currentPromise) {
      clearTimeout(this._currentPromise.timer);
      this._currentPromise.resolve();
      this._currentPromise = null;
    }
    // Reject any pending typing animation
    if (this._rejectCurrent) {
      this._rejectCurrent(new Error('interrupted'));
    }
  },

  /**
   * Character-by-character typing into a DOM element
   */
  _typeText(el, text, charDelay, isHtml) {
    return new Promise((resolve, reject) => {
      this._rejectCurrent = reject;
      let i = 0;
      el.innerHTML = '<span class="term-cursor"></span>';

      const type = () => {
        if (this._fastForward || i >= text.length) {
          // Animation done — set final content
          if (isHtml) {
            el.innerHTML = text;
          } else {
            el.textContent = text;
          }
          this._rejectCurrent = null;
          resolve();
          return;
        }

        // Remove cursor, add char, re-add cursor
        const cursor = '<span class="term-cursor"></span>';
        const char = text[i];
        i++;
        el.innerHTML = el.innerHTML.replace(cursor, '') + char + cursor;

        setTimeout(type, charDelay);
      };

      type();
    });
  },

  _sleep(ms) {
    return new Promise((resolve) => {
      const timer = setTimeout(resolve, ms);
      this._currentPromise = { resolve, timer };
    });
  }
};
