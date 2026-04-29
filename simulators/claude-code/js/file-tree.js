/**
 * File Tree — renders virtual filesystem as a tree in the right panel
 * Supports new file animations, auto-scroll, and task_plan progress
 */
const FileTree = {
  _selectedPath: null,
  _newPaths: new Set(),
  _modifiedPaths: new Set(),

  setSelected(path) {
    this._selectedPath = path;
    this.render();
  },

  init() {
    AppState.subscribe('fs:change', (data) => {
      if (data && data.changes) {
        for (const c of data.changes) {
          if (c.type === 'create') this._newPaths.add(c.path);
          if (c.type === 'modify') this._modifiedPaths.add(c.path);
        }
      }
      this.render();
      setTimeout(() => {
        this._newPaths.clear();
        this._modifiedPaths.clear();
      }, 1000);
    });
    AppState.subscribe('chapter:start', () => {
      this._selectedPath = null;
      this._newPaths.clear();
      this._modifiedPaths.clear();
      this.render();
    });
  },

  /**
   * Parse task_plan.md from virtual FS and return completion stats
   */
  _getPlanProgress() {
    // Find task_plan.md in the virtual FS
    const files = vfs.getFileTree();
    const planFile = files.find(f => f.name === 'task_plan.md' && f.type === 'file');
    if (!planFile) return null;

    const content = vfs.readFile(planFile.path);
    if (!content) return null;

    const lines = content.split('\n');
    const taskLines = lines.filter(l => l.match(/^- \[[ x/]\]/));
    if (taskLines.length === 0) return null;

    const done = taskLines.filter(l => l.match(/^- \[x\]/)).length;
    const total = taskLines.length;
    return { done, total, pct: Math.round((done / total) * 100) };
  },

  render() {
    const container = document.getElementById('file-tree');
    if (!container) return;

    const section = container.closest('.file-tree-section');

    // Render task_plan progress bar above file tree
    if (section) {
      const progress = this._getPlanProgress();
      let headerEl = section.querySelector('.file-tree-plan-progress');

      if (progress) {
        if (!headerEl) {
          headerEl = document.createElement('div');
          headerEl.className = 'file-tree-plan-progress';
          const treeHeader = section.querySelector('.file-tree-header');
          treeHeader.insertAdjacentElement('afterend', headerEl);
        }
        headerEl.innerHTML =
          `<div class="plan-progress-label">Plan ${progress.done}/${progress.total}</div>` +
          `<div class="plan-progress-track"><div class="plan-progress-fill" style="width:${progress.pct}%"></div></div>`;
        headerEl.style.display = '';
      } else if (headerEl) {
        headerEl.style.display = 'none';
      }
    }

    const files = vfs.getFileTree();
    if (files.length === 0) {
      container.innerHTML = `<div style="color:var(--text-muted);font-size:10px;">No files yet</div>`;
      return;
    }

    container.innerHTML = '';
    let lastNewElement = null;

    for (const file of files) {
      const item = document.createElement('div');
      const isNew = this._newPaths.has(file.path);
      const isModified = this._modifiedPaths.has(file.path);

      let cls = 'file-tree-item';
      if (file.path === this._selectedPath) cls += ' selected';
      if (isNew) cls += ' file-new';
      if (isModified) cls += ' file-modified';
      item.className = cls;

      item.style.paddingLeft = `${file.depth * 12 + 2}px`;

      const icon = file.type === 'dir' ? '📁' : '📄';
      let badge = '';
      if (isNew || file.status === 'new') badge = '<span class="file-badge new">NEW</span>';
      else if (isModified || file.status === 'modified') badge = '<span class="file-badge modified">~</span>';

      item.innerHTML = `<span class="file-icon">${icon}</span><span>${file.name}</span>${badge}`;

      if (file.type === 'file') {
        item.addEventListener('click', () => {
          this._selectedPath = file.path;
          FileViewer.show(file.path);
          this.render();
        });
      }

      container.appendChild(item);

      if (isNew) lastNewElement = item;
    }

    if (lastNewElement) {
      lastNewElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
};
