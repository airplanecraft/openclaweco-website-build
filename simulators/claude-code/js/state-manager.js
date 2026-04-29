/**
 * State Manager — centralized state with pub/sub and localStorage persistence
 */
const AppState = {
  // State
  currentChapterId: null,
  currentStepId: null,
  chapterProgress: {},   // { chapterId: { completedSteps: [], percentage: 0 } }
  commandHistory: [],
  isAnimating: false,
  lang: 'en',

  // Pub/Sub
  _listeners: {},

  subscribe(event, callback) {
    if (!this._listeners[event]) this._listeners[event] = [];
    this._listeners[event].push(callback);
    return () => {
      this._listeners[event] = this._listeners[event].filter(cb => cb !== callback);
    };
  },

  emit(event, data) {
    (this._listeners[event] || []).forEach(cb => cb(data));
  },

  // Persistence
  save() {
    try {
      localStorage.setItem('claude-sim-state', JSON.stringify({
        chapterProgress: this.chapterProgress,
        commandHistory: this.commandHistory.slice(-50),
        currentChapterId: this.currentChapterId,
        currentStepId: this.currentStepId,
        lang: this.lang
      }));
    } catch (e) { /* localStorage full or unavailable */ }
  },

  load() {
    try {
      const raw = localStorage.getItem('claude-sim-state');
      if (raw) {
        const data = JSON.parse(raw);
        if (data.chapterProgress) this.chapterProgress = data.chapterProgress;
        if (data.commandHistory) this.commandHistory = data.commandHistory;
        if (data.currentChapterId) this.currentChapterId = data.currentChapterId;
        if (data.currentStepId) this.currentStepId = data.currentStepId;
        if (data.lang) this.lang = data.lang;
      }
    } catch (e) { /* corrupt data, start fresh */ }
  },

  // Get the step to resume to for a chapter (null = start from beginning)
  getResumeStepId(chapterId) {
    const progress = this.chapterProgress[chapterId];
    if (!progress || progress.completedSteps.length === 0) return null;
    // If currentStepId belongs to this chapter, resume there
    if (this.currentChapterId === chapterId && this.currentStepId) {
      return this.currentStepId;
    }
    return null;
  },

  // Chapter actions
  startChapter(chapterId) {
    this.currentChapterId = chapterId;
    if (!this.chapterProgress[chapterId]) {
      this.chapterProgress[chapterId] = { completedSteps: [], percentage: 0 };
    }
    this.currentStepId = null;
    this.save();
    this.emit('chapter:start', { chapterId });
  },

  completeStep(stepId) {
    const progress = this.chapterProgress[this.currentChapterId];
    if (!progress) return;
    if (!progress.completedSteps.includes(stepId)) {
      progress.completedSteps.push(stepId);
    }
    this.save();
    this.emit('step:complete', { stepId });
  },

  goToStep(stepId) {
    this.currentStepId = stepId;
    this.save();
    this.emit('step:change', { stepId });
  },

  isStepCompleted(stepId) {
    const progress = this.chapterProgress[this.currentChapterId];
    return progress ? progress.completedSteps.includes(stepId) : false;
  },

  isChapterCompleted(chapterId) {
    const progress = this.chapterProgress[chapterId];
    return progress && progress.percentage === 100;
  },

  updateChapterPercentage(chapterId, percentage) {
    if (!this.chapterProgress[chapterId]) {
      this.chapterProgress[chapterId] = { completedSteps: [], percentage: 0 };
    }
    const wasAlreadyComplete = this.chapterProgress[chapterId].percentage === 100;
    this.chapterProgress[chapterId].percentage = percentage;
    this.save();
    if (percentage === 100 && !wasAlreadyComplete) {
      this.emit('chapter:complete', { chapterId });
    }
  },

  resetProgress() {
    this.chapterProgress = {};
    this.commandHistory = [];
    this.currentChapterId = null;
    this.currentStepId = null;
    this.save();
    this.emit('progress:reset');
  },

  setLang(lang) {
    this.lang = lang;
    this.save();
    this.emit('lang:change', { lang });
  }
};
