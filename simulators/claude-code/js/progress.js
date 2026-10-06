/**
 * Progress — chapter progress tracking and UI updates
 */
const Progress = {
  init() {
    AppState.subscribe('step:complete', () => this._update());
    AppState.subscribe('chapter:start', () => this._update());
    AppState.subscribe('progress:reset', () => this._update());
    AppState.subscribe('lang:change', () => this._update());
  },

  _update() {
    const chapter = ScenarioRegistry.getById(AppState.currentChapterId);
    if (!chapter) return;

    const progress = AppState.chapterProgress[AppState.currentChapterId];
    const completedSteps = progress ? progress.completedSteps.length : 0;
    const totalSteps = chapter.steps.length;
    const percentage = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

    AppState.updateChapterPercentage(AppState.currentChapterId, percentage);

    // Update progress bar
    const fill = document.getElementById('progress-fill');
    const label = document.getElementById('progress-label');
    const steps = document.getElementById('progress-steps');

    if (fill) fill.style.width = `${percentage}%`;
    if (label) label.textContent = `${I18n.t('progress.chapter')} ${chapter.number}: ${I18n.l(chapter.title)}`;
    if (steps) steps.textContent = `${completedSteps}/${totalSteps}`;

    // Update ARIA progress
    if (typeof A11y !== 'undefined') A11y.updateProgressAria(percentage);
  },

  renderChapterList() {
    const list = document.getElementById('chapter-list');
    if (!list) return;
    list.innerHTML = '';

    for (const ch of ScenarioRegistry.getAll()) {
      const isCompleted = AppState.isChapterCompleted(ch.id);
      const isActive = AppState.currentChapterId === ch.id;

      const item = document.createElement('div');
      item.className = `chapter-item${isActive ? ' active' : ''}${isCompleted ? ' completed' : ''}`;
      item.innerHTML = `
        <div class="chapter-status">${isCompleted ? '✓' : ch.number}</div>
        <div class="chapter-info">
          <div class="chapter-name">${I18n.l(ch.title)}</div>
          <div class="chapter-duration">${ch.estimatedMinutes || 3} min</div>
        </div>
      `;
      item.addEventListener('click', () => {
        if (!isActive) {
          AppState.emit('chapter:navigate', { chapterId: ch.id });
        }
      });
      list.appendChild(item);
    }
  }
};
