/**
 * Virtual File System — in-memory file tree with diff support
 */
class VirtualFS {
  constructor() {
    this.root = {};
    this.baseState = {};
  }

  /**
   * Initialize from scenario's filesystem config
   */
  init(config) {
    const raw = this._deepClone(config || {});
    // Wrap root in a proper dir node if it doesn't have one
    this.root = raw.type ? raw : { type: 'dir', children: raw };
    this.baseState = this._deepClone(this.root);
  }

  /**
   * Apply a list of file changes
   */
  applyChanges(changes) {
    if (!changes) return;
    for (const change of changes) {
      switch (change.type) {
        case 'create':
        case 'modify':
          this._setPath(change.path, change.content || '');
          break;
        case 'delete':
          this._deletePath(change.path);
          break;
      }
    }
  }

  /**
   * Read file content
   */
  readFile(path) {
    const node = this._getNode(path);
    return node && node.type === 'file' ? node.content : null;
  }

  /**
   * List directory contents
   */
  listDir(path) {
    const node = path === '/' ? this.root : this._getNode(path);
    if (!node || node.type !== 'dir') return [];
    return Object.keys(node.children || {}).sort((a, b) => {
      const aIsDir = node.children[a].type === 'dir';
      const bIsDir = node.children[b].type === 'dir';
      if (aIsDir && !bIsDir) return -1;
      if (!aIsDir && bIsDir) return 1;
      return a.localeCompare(b);
    });
  }

  /**
   * Get flat file list for tree rendering
   */
  getFileTree(path = '/', depth = 0) {
    const entries = [];
    const node = path === '/' ? this.root : this._getNode(path);
    if (!node || node.type !== 'dir') return entries;

    const children = node.children || {};
    for (const name of Object.keys(children).sort()) {
      const child = children[name];
      const childPath = path === '/' ? '/' + name : path + '/' + name;

      if (child.type === 'dir') {
        entries.push({ name, path: childPath, type: 'dir', depth });
        entries.push(...this.getFileTree(childPath, depth + 1));
      } else {
        const status = this._getChangeStatus(childPath);
        entries.push({ name, path: childPath, type: 'file', depth, status });
      }
    }
    return entries;
  }

  /**
   * Get diff between current and base state
   */
  getDiff(path) {
    const current = this._getNode(path);
    const base = this._getPathFromTree(path, this.baseState);

    if (!current && !base) return null;
    if (!current && base) return { type: 'deleted', content: base.content };
    if (current && !base) return { type: 'created', content: current.content };

    if (current.content !== base.content) {
      return { type: 'modified', current: current.content, base: base.content };
    }
    return null;
  }

  /**
   * Reset to base state
   */
  reset() {
    this.root = this._deepClone(this.baseState);
  }

  // ---- Internal ----

  _getNode(path) {
    return this._getPathFromTree(path, this.root);
  }

  _getPathFromTree(path, tree) {
    if (!path || path === '/') return tree.type ? tree : { type: 'dir', children: tree };
    const parts = path.split('/').filter(Boolean);
    let current = tree;
    for (const part of parts) {
      if (!current) return null;
      if (current.children) {
        current = current.children[part];
      } else if (current[part]) {
        current = current[part];
      } else {
        return null;
      }
    }
    return current;
  }

  _setPath(path, content) {
    const parts = path.split('/').filter(Boolean);
    const fileName = parts.pop();
    let current = this.root;

    // Create intermediate directories
    for (const part of parts) {
      if (!current.children) current.children = {};
      if (!current.children[part]) {
        current.children[part] = { type: 'dir', children: {} };
      }
      current = current.children[part];
    }

    if (!current.children) current.children = {};
    current.children[fileName] = { type: 'file', content };
  }

  _deletePath(path) {
    const parts = path.split('/').filter(Boolean);
    const fileName = parts.pop();
    let current = this.root;

    for (const part of parts) {
      if (!current.children || !current.children[part]) return;
      current = current.children[part];
    }

    if (current.children && current.children[fileName]) {
      delete current.children[fileName];
    }
  }

  _getChangeStatus(path) {
    const current = this._getNode(path);
    const base = this._getPathFromTree(path, this.baseState);

    if (!base && current) return 'new';
    if (base && current && base.content !== current.content) return 'modified';
    return null;
  }

  _deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}
