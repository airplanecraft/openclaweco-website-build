/**
 * Chapter 10: Graduation — Final Verification
 * E2E test, test suite, project summary, skill tree, and graduation celebration.
 */
ScenarioRegistry.register({
  id: 'ch10',
  title: { en: 'Graduation', zh: '毕业总结' },
  prompt: '~/todo-app $',
  initialFilesystem: {
    'todo-app': {
      type: 'dir',
      children: {
        'package.json': {
          type: 'file',
          content: '{\n  "name": "todo-app",\n  "version": "1.0.0",\n  "description": "A simple Todo CLI app",\n  "main": "todo.js",\n  "scripts": {\n    "start": "node todo.js",\n    "test": "node test/todo.test.js",\n    "test:e2e": "node test/e2e.test.js",\n    "mcp": "node mcp-server.js"\n  },\n  "devDependencies": {\n    "playwright": "^1.40.0"\n  }\n}'
        },
        'CLAUDE.md': {
          type: 'file',
          content: '# CLAUDE.md — Project Rules\n\n## Project Overview\nA simple Todo CLI app built with Node.js.\n\n## Code Style\n- Use CommonJS (require/module.exports)\n- Use const/let, never var\n- Prefer arrow functions\n\n## Rules\n- Always run tests after making changes\n- Keep functions small and pure\n\n## Error Handling\n- Always validate user input before processing\n- Show friendly, actionable error messages\n- Never crash — catch and report errors gracefully'
        },
        'todo.js': {
          type: 'file',
          content: "const fs = require('fs');\nconst FILE = 'todos.json';\nconst loadTodos = () => { try { return JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch { return []; } };\nconst saveTodos = (todos) => fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));\nconst getIndex = (todos, num) => { const i = Number(num) - 1; if (i < 0 || i >= todos.length) throw new Error(`Todo #${num} not found`); return i; };\nconst addTodo = (text) => { if (!text?.trim()) throw new Error('Todo text cannot be empty'); const todos = loadTodos(); todos.push({ id: Date.now(), text: text.trim(), done: false }); saveTodos(todos); console.log(`Added: ${text.trim()}`); };\nconst listTodos = () => { const todos = loadTodos(); if (!todos.length) { console.log('No todos yet!'); return; } todos.forEach((t, i) => console.log(`${i+1}. ${t.done?'[x]':'[ ]'} ${t.text}`)); };\nconst doneTodo = (num) => { const todos = loadTodos(); const idx = getIndex(todos, num); todos[idx].done = true; saveTodos(todos); console.log(`Done: ${todos[idx].text}`); };\nconst deleteTodo = (num) => { const todos = loadTodos(); const [r] = todos.splice(getIndex(todos,num),1); saveTodos(todos); console.log(`Deleted: ${r.text}`); };\nconst commands = { add: addTodo, list: listTodos, done: doneTodo, delete: deleteTodo };\nconst cmd = process.argv[2], arg = process.argv.slice(3).join(' ');\nif (cmd && commands[cmd]) {\n  try { commands[cmd](arg); }\n  catch (e) { console.error(`Error: ${e.message}`); process.exit(1); }\n}\nmodule.exports = { addTodo, listTodos, doneTodo, deleteTodo, loadTodos, saveTodos };"
        },
        'mcp-server.js': {
          type: 'file',
          content: "#!/usr/bin/env node\nconst { addTodo, listTodos, doneTodo, deleteTodo, loadTodos } = require('./todo');\nconst tools = [\n  { name: 'add_todo', description: 'Add a new todo', inputSchema: { type: 'object', properties: { text: { type: 'string' } }, required: ['text'] } },\n  { name: 'list_todos', description: 'List all todos', inputSchema: { type: 'object', properties: {} } },\n  { name: 'done_todo', description: 'Mark done', inputSchema: { type: 'object', properties: { number: { type: 'string' } }, required: ['number'] } },\n  { name: 'delete_todo', description: 'Delete todo', inputSchema: { type: 'object', properties: { number: { type: 'string' } }, required: ['number'] } }\n];\nconst handlers = {\n  add_todo: ({ text }) => { addTodo(text); return `Added: ${text}`; },\n  list_todos: () => { const t = loadTodos(); return t.length ? JSON.stringify(t, null, 2) : 'No todos yet!'; },\n  done_todo: ({ number }) => { doneTodo(number); return `Done: #${number}`; },\n  delete_todo: ({ number }) => { deleteTodo(number); return `Deleted: #${number}`; }\n};\nconsole.log('MCP server ready');"
        },
        'test': {
          type: 'dir',
          children: {
            'todo.test.js': {
              type: 'file',
              content: "const assert = require('assert');\nconst { addTodo, deleteTodo, loadTodos, doneTodo } = require('../todo');\ntry {\n  assert.strictEqual(typeof addTodo, 'function'); console.log('PASS: addTodo exists');\n  assert.strictEqual(typeof doneTodo, 'function'); console.log('PASS: doneTodo exists');\n  assert.strictEqual(typeof deleteTodo, 'function'); console.log('PASS: deleteTodo exists');\n  console.log('All tests passed!');\n} catch (e) { console.log('FAIL: ' + e.message); process.exit(1); }"
            },
            'e2e.test.js': {
              type: 'file',
              content: "const { execSync } = require('child_process');\nconsole.log('E2E tests passed!');"
            }
          }
        },
        '.claude': {
          type: 'dir',
          children: {
            'commands': {
              type: 'dir',
              children: {
                'brainstorm.md': { type: 'file', content: '# Brainstorm Session\n\nTopic: $ARGUMENTS' },
                'planning-with-files.md': { type: 'file', content: '# Planning with Files\n\nProject: $ARGUMENTS' },
                'verify.md': { type: 'file', content: '# Verify Before Completion\n\nTarget: $ARGUMENTS' },
                'tdd.md': { type: 'file', content: '# Test-Driven Development\n\nFeature: $ARGUMENTS' },
                'review.md': { type: 'file', content: '# Code Review\n\nTarget: $ARGUMENTS' },
                'debug.md': { type: 'file', content: '# Systematic Debugging\n\nIssue: $ARGUMENTS' }
              }
            },
            'settings.json': {
              type: 'file',
              content: '{\n  "mcpServers": {\n    "todo": {\n      "command": "node",\n      "args": ["mcp-server.js"]\n    }\n  }\n}'
            }
          }
        },
        '.gitignore': {
          type: 'file',
          content: "node_modules/\ntodos.json\n*.log\n.DS_Store"
        },
        'CHANGELOG.md': {
          type: 'file',
          content: '# Changelog\n\n## v1.0.0 (2026-04-14)\n\n### Features\n- add, list, done, delete commands\n- MCP server wrapper (4 tools)'
        }
      }
    }
  },

  intro: [
    { text: '{cyan}{bold}Chapter 10: Graduation!{/bold}{/cyan}', delay_ms: 400 },
    { text: '{dim}The final chapter — verify everything works and celebrate!{/dim}', delay_ms: 200 },
    { text: '', delay_ms: 100 },
    { text: 'You planned, configured, built, packaged, and shipped a complete project.', delay_ms: 300 }
  ],

  steps: [
    {
      id: 'ch10-s01',
      instruction: {
        en: 'Run an end-to-end test — add a todo, mark it done, then list.',
        zh: '运行端到端测试——添加待办、标记完成、列出所有。'
      },
      hint: 'node todo.js add "Graduate from Claude Code Academy" && node todo.js done 1 && node todo.js list',
      expectedInputs: [{
        patterns: [
          'node todo.js add "Graduate from Claude Code Academy" && node todo.js done 1 && node todo.js list'
        ],
        fuzzyPatterns: [
          'node.*todo.*add.*graduate.*done.*list',
          'node.*todo.*add.*&&.*done.*&&.*list',
          'node.*todo.*add.*node.*todo.*done.*node.*todo.*list'
        ],
        keywords: ['node', 'todo', 'add', 'done', 'list']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1000 },
            { text: '{green}Added: Graduate from Claude Code Academy{/green}', delay_ms: 200 },
            { text: '{green}Done: Graduate from Claude Code Academy{/green}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '1. [x] Graduate from Claude Code Academy', delay_ms: 150 },
            { text: '', delay_ms: 200 },
            { text: '{dim}E2E flow works perfectly!{/dim}', delay_ms: 200 }
          ]
        },
        nextStep: 'ch10-s02'
      },
      onFail: {
        responses: [
          { trigger: 'add|done|list', message: { en: 'Run all three commands chained: node todo.js add "..." && node todo.js done 1 && node todo.js list', zh: '链式运行三个命令：node todo.js add "..." && node todo.js done 1 && node todo.js list' } },
          { trigger: 'default', message: { en: 'Try the full E2E command from the hint above.', zh: '试试提示中的完整 E2E 命令。' } }
        ]
      }
    },
    {
      id: 'ch10-s02',
      instruction: {
        en: 'Run the full test suite to confirm all features work.',
        zh: '运行完整测试套件确认所有功能正常。'
      },
      hint: 'npm test',
      expectedInputs: [{
        patterns: ['npm test', 'node test/todo.test.js'],
        fuzzyPatterns: ['npm.*test', 'node.*test'],
        keywords: ['test', 'npm']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1000 },
            { text: '{green}PASS: addTodo exists{/green}', delay_ms: 200 },
            { text: '{green}PASS: doneTodo exists{/green}', delay_ms: 200 },
            { text: '{green}PASS: deleteTodo exists{/green}', delay_ms: 200 },
            { text: '{green}All tests passed!{/green}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{green}{bold}Test suite: 100% passing{/bold}{/green}', delay_ms: 200 }
          ]
        },
        nextStep: 'ch10-s03'
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Run the test suite with: npm test', zh: '运行测试套件：npm test' } }
        ]
      }
    },
    {
      id: 'ch10-s03',
      instruction: {
        en: 'Ask Claude for a final summary of everything we accomplished.',
        zh: '让 Claude 总结我们一起完成的所有内容。'
      },
      hint: 'claude "summarize the entire project and what we accomplished"',
      expectedInputs: [{
        patterns: [
          'claude "summarize the entire project and what we accomplished"',
          'claude "summarize the project"',
          'claude "give me a project summary"'
        ],
        fuzzyPatterns: [
          'claude.*summarize.*project',
          'claude.*project.*summary',
          'claude.*what.*we.*accomplish',
          'claude.*summary'
        ],
        keywords: ['claude', 'summarize', 'project', 'summary']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1500 },
            { text: '{bold}{cyan}Final Project Summary: Todo CLI v1.0.0{/cyan}{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {bold}Features:{/bold} add, list, done, delete — all working', delay_ms: 150 },
            { text: '  {bold}Quality:{/bold} Unit tests + E2E tests — all passing', delay_ms: 150 },
            { text: '  {bold}Workflow:{/bold} task_plan.md → rules → implementation → MCP packaging', delay_ms: 150 },
            { text: '  {bold}Skills:{/bold} brainstorming, planning, TDD, verify, review, debug', delay_ms: 150 },
            { text: '  {bold}MCP:{/bold} Your own MCP server with 4 tools', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{bold}{cyan}Your Development Journey:{/cyan}{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 80 },
            { text: '  {green}*{/green} Ch5:  Dev & Testing Rules     {dim}→ TDD + subagent workflow{/dim}', delay_ms: 120 },
            { text: '  {green}*{/green} Ch6:  Code Review & Debug    {dim}→ Quality + root cause analysis{/dim}', delay_ms: 120 },
            { text: '  {green}*{/green} Ch7:  E2E Testing Rules      {dim}→ End-to-end + QA + ship rules{/dim}', delay_ms: 120 },
            { text: '  {green}*{/green} Ch8:  Implement from task_plan {dim}→ Build the project{/dim}', delay_ms: 120 },
            { text: '  {green}*{/green} Ch9:  Package as MCP         {dim}→ Turn CLI into Claude tools{/dim}', delay_ms: 120 },
            { text: '  {green}*{/green} Ch10: Graduation             {dim}→ Verify, summarize, celebrate{/dim}', delay_ms: 120 },
            { text: '', delay_ms: 200 },
            { text: '{dim}You now have a full Claude Code workflow from planning to MCP packaging.{/dim}', delay_ms: 200 }
          ]
        },
        nextStep: 'ch10-s04'
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude "summarize the entire project and what we accomplished"', zh: '试试：claude "summarize the entire project and what we accomplished"' } }
        ]
      }
    },
    {
      id: 'ch10-s04',
      instruction: {
        en: 'Celebrate your graduation! Run the victory command.',
        zh: '庆祝毕业！运行胜利命令。'
      },
      hint: 'node todo.js add "I graduated from Claude Code Academy!"',
      expectedInputs: [{
        patterns: [
          'node todo.js add "I graduated from Claude Code Academy!"',
          'node todo.js add "I graduated!"',
          'node todo.js add graduated'
        ],
        fuzzyPatterns: [
          'node.*todo.*add.*graduat',
          'node.*todo.*add.*celebrat',
          'node.*todo.*add.*done'
        ],
        keywords: ['node', 'todo', 'add', 'graduated']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1000 },
            { text: '{green}Added: I graduated from Claude Code Academy!{/green}', delay_ms: 300 },
            { text: '', delay_ms: 300 },
            { text: '{bold}{cyan}========================================{/cyan}{/bold}', delay_ms: 200 },
            { text: '{bold}{cyan}=                                      ={/cyan}{/bold}', delay_ms: 200 },
            { text: '{bold}{cyan}=     {green}CONGRATULATIONS, GRADUATE!{/green}     {cyan}={/cyan}{/bold}', delay_ms: 300 },
            { text: '{bold}{cyan}=                                      ={/cyan}{/bold}', delay_ms: 200 },
            { text: '{bold}{cyan}========================================{/cyan}{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 200 },
            { text: '{bold}You mastered:{/bold}', delay_ms: 200 },
            { text: '  {green}1.{/green} Installing and authenticating Claude Code', delay_ms: 150 },
            { text: '  {green}2.{/green} Having natural conversations with AI', delay_ms: 150 },
            { text: '  {green}3.{/green} Planning projects with brainstorming & planning skills', delay_ms: 150 },
            { text: '  {green}4.{/green} Writing CLAUDE.md — coding rules and self-governance', delay_ms: 150 },
            { text: '  {green}5.{/green} Configuring development, review, debug, and E2E rules', delay_ms: 150 },
            { text: '  {green}6.{/green} Executing task_plan.md to build a real project', delay_ms: 150 },
            { text: '  {green}7.{/green} Building MCP servers — turning CLIs into AI tools', delay_ms: 150 },
            { text: '  {green}8.{/green} Complete workflow: plan → configure → build → package → graduate', delay_ms: 150 },
            { text: '', delay_ms: 200 },
            { text: '{bold}Project shipped. MCP server built. Graduation complete.{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 200 },
            { text: '{dim}You\'re now ready to use Claude Code in real projects!{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 200 },
            { text: '{green}{bold}Chapter 10 Complete — YOU DID IT!{/bold}{/green}', delay_ms: 400 }
          ]
        }
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Celebrate your achievement: node todo.js add "I graduated from Claude Code Academy!"', zh: '庆祝你的成就：node todo.js add "I graduated from Claude Code Academy!"' } }
        ]
      }
    }
  ]
});
