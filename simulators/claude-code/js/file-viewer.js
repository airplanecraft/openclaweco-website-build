/**
 * File Viewer — displays file content/diff in the right panel
 */
const FileViewer = {
  init() {
    AppState.subscribe('fs:change', () => {
      if (this._currentPath) this.show(this._currentPath);
    });
  },

  _currentPath: null,

  show(path) {
    this._currentPath = path;

    const header = document.getElementById('file-viewer-header');
    const body = document.getElementById('file-viewer-body');
    if (!header || !body) return;

    const diff = vfs.getDiff(path);
    const content = vfs.readFile(path);
    const fileName = path.split('/').pop();

    // Header
    let badgeHtml = '';
    if (diff) {
      const cls = diff.type === 'created' ? 'new' : 'modified';
      const label = diff.type === 'created' ? 'NEW' : 'MODIFIED';
      badgeHtml = `<span class="file-viewer-badge ${cls}">${label}</span>`;
    }
    header.innerHTML = `
      <span class="file-viewer-title">${fileName}</span>
      ${badgeHtml}
    `;
    header.style.display = 'flex';

    // Body
    if (diff && diff.type === 'modified') {
      body.innerHTML = `<pre>${this._renderDiff(diff.base, diff.current)}</pre>`;
    } else if (content !== null) {
      const highlighted = this._highlight(content, path);
      body.innerHTML = `<pre>${highlighted}</pre>`;
    } else {
      body.innerHTML = '<div class="file-viewer-empty">File not found</div>';
    }
  },

  showEmpty() {
    this._currentPath = null;
    const header = document.getElementById('file-viewer-header');
    const body = document.getElementById('file-viewer-body');
    if (header) { header.innerHTML = ''; header.style.display = 'none'; }
    if (body) body.innerHTML = '<div class="file-viewer-empty">Click a file to view its content</div>';
  },

  _highlight(code, path) {
    const ext = path.split('.').pop();
    const langMap = { js: 'javascript', ts: 'typescript', json: 'json', md: 'markdown', py: 'python' };
    const lang = langMap[ext];
    if (window.Prism && lang && Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], lang);
    }
    return this._esc(code);
  },

  _renderDiff(oldText, newText) {
    const oldLines = oldText.split('\n');
    const newLines = newText.split('\n');
    let html = '';
    const maxLen = Math.max(oldLines.length, newLines.length);

    for (let i = 0; i < maxLen; i++) {
      const o = oldLines[i];
      const n = newLines[i];
      if (o === undefined && n !== undefined) {
        html += `<span class="diff-add">+ ${this._esc(n)}</span>\n`;
      } else if (n === undefined && o !== undefined) {
        html += `<span class="diff-remove">- ${this._esc(o)}</span>\n`;
      } else if (o !== n) {
        html += `<span class="diff-remove">- ${this._esc(o)}</span>\n`;
        html += `<span class="diff-add">+ ${this._esc(n)}</span>\n`;
      } else {
        html += `<span class="diff-context">  ${this._esc(o)}</span>\n`;
      }
    }
    return html;
  },

  _esc(t) {
    return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
};
