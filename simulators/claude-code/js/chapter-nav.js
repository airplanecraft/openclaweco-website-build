/**
 * Chapter Nav — generates sidebar navigation linking to chapter HTML files
 */
const ChapterNav = {
  // Chapter metadata (matches scenario files)
  chapters: [
    { id: 'ch01', file: 'ch01-install.html', number: 1, title: { en: 'Installation', zh: '安装认证' }, time: '3 min' },
    { id: 'ch02', file: 'ch02-conversation.html', number: 2, title: { en: 'Conversation', zh: '基础对话' }, time: '3 min' },
    { id: 'ch03', file: 'ch03-brainstorming.html', number: 3, title: { en: 'Brainstorming', zh: '头脑风暴' }, time: '4 min' },
    { id: 'ch04', file: 'ch04-planning.html', number: 4, title: { en: 'Planning', zh: '规划与规则' }, time: '4 min' },
    { id: 'ch05', file: 'ch05-development.html', number: 5, title: { en: 'Dev & Testing Rules', zh: '开发与测试规则' }, time: '5 min' },
    { id: 'ch06', file: 'ch06-review.html', number: 6, title: { en: 'Code Review & Debug', zh: '代码审查与调试' }, time: '4 min' },
    { id: 'ch07', file: 'ch07-ship.html', number: 7, title: { en: 'E2E Testing Rules', zh: '端到端测试规则' }, time: '4 min' },
    { id: 'ch08', file: 'ch08-mcp.html', number: 8, title: { en: 'Implement from task_plan.md', zh: '按 task_plan 开发' }, time: '4 min' },
    { id: 'ch09', file: 'ch09-graduation.html', number: 9, title: { en: 'Package as MCP', zh: '打包为 MCP 服务' }, time: '5 min' },
    { id: 'ch10', file: 'ch10-graduation.html', number: 10, title: { en: 'Graduation', zh: '毕业总结' }, time: '4 min' }
  ],

  // Set this per page to highlight current chapter
  currentId: null,

  render() {
    const list = document.getElementById('chapter-list');
    if (!list) return;
    list.innerHTML = '';

    for (const ch of this.chapters) {
      const isCompleted = AppState.isChapterCompleted(ch.id);
      const isActive = this.currentId === ch.id;

      const a = document.createElement('a');
      a.href = ch.file;
      a.className = `chapter-item${isActive ? ' active' : ''}${isCompleted ? ' completed' : ''}`;
      a.innerHTML = `
        <div class="chapter-status">${isCompleted ? '✓' : ch.number}</div>
        <div class="chapter-info">
          <div class="chapter-name">${I18n.l(ch.title)}</div>
          <div class="chapter-duration">${ch.time}</div>
        </div>
      `;
      list.appendChild(a);
    }
  }
};
