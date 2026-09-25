/**
 * Dialogue Engine — 3-tier keyword matching with branch resolution
 */
const DialogueEngine = {

  /**
   * Match user input against expected inputs for the current step
   * Returns { matched: true, branch, onSuccess } or { matched: false, failHint }
   */
  match(input, step) {
    if (!step || !step.expectedInputs) {
      return { matched: false, failHint: this._defaultFail() };
    }

    const normalizedInput = input.trim().toLowerCase();

    for (const expected of step.expectedInputs) {
      // Tier 1: Exact match (normalized)
      if (expected.patterns) {
        for (const pattern of expected.patterns) {
          if (normalizedInput === pattern.toLowerCase().trim()) {
            return {
              matched: true,
              branch: expected.branch || null,
              onSuccess: step.onSuccess
            };
          }
        }
      }

      // Tier 2: Fuzzy regex match
      if (expected.fuzzyPatterns) {
        for (const fp of expected.fuzzyPatterns) {
          try {
            const regex = new RegExp(fp, 'i');
            if (regex.test(normalizedInput)) {
              return {
                matched: true,
                branch: expected.branch || null,
                onSuccess: step.onSuccess
              };
            }
          } catch (e) { /* invalid regex, skip */ }
        }
      }

      // Tier 3: Keyword proximity match (2/3 of keywords present)
      if (expected.keywords) {
        const matchCount = expected.keywords.filter(kw =>
          normalizedInput.includes(kw.toLowerCase())
        ).length;
        if (matchCount >= Math.ceil(expected.keywords.length * 0.6)) {
          return {
            matched: true,
            branch: expected.branch || null,
            onSuccess: step.onSuccess,
            closeMatch: true
          };
        }
      }
    }

    // No match — generate fail hint
    return {
      matched: false,
      failHint: this._getFailHint(normalizedInput, step.onFail)
    };
  },

  /**
   * Get the appropriate failure hint based on user's input
   */
  _getFailHint(input, onFail) {
    if (!onFail || !onFail.responses) {
      return this._defaultFail();
    }

    // Check trigger patterns in order
    for (const resp of onFail.responses) {
      if (resp.trigger === 'default') continue;
      try {
        const regex = new RegExp(resp.trigger, 'i');
        if (regex.test(input)) {
          return this._localize(resp.message);
        }
      } catch (e) { /* invalid regex */ }
    }

    // Fall back to default
    const defaultResp = onFail.responses.find(r => r.trigger === 'default');
    if (defaultResp) {
      return this._localize(defaultResp.message);
    }

    return this._defaultFail();
  },

  _defaultFail() {
    const lang = AppState.lang || 'en';
    return lang === 'zh'
      ? '不太对，试试查看上方的提示。'
      : 'Not quite right. Check the hint above.';
  },

  _localize(message) {
    if (typeof message === 'string') return message;
    if (typeof message === 'object') {
      return message[AppState.lang] || message.en || '';
    }
    return '';
  }
};
