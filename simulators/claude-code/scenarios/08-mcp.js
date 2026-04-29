/**
 * Chapter 8: Implement from task_plan.md
 * Execute the planned work in one shot and generate the project files.
 */
ScenarioRegistry.register({
  id: 'ch08',
  title: { en: 'Implement from task_plan.md', zh: '按 task_plan 开发' },
  prompt: '~/todo-app $',
  initialFilesystem: {
    'todo-app': {
      type: 'dir',
      children: {
        'package.json': {
          type: 'file',
          content: '{\n  "name": "todo-app",\n  "version": "1.0.0",\n  "description": "A simple Todo CLI app",\n  "main": "todo.js",\n  "scripts": {\n    "start": "node todo.js",\n    "test": "node test/todo.test.js",\n    "test:e2e": "node test/e2e.test.js"\n  },\n  "devDependencies": {\n    "playwright": "^1.40.0"\n  }\n}'
        },
        'CLAUDE.md': {
          type: 'file',
          content: '# CLAUDE.md — Project Rules\n\n## Project Overview\nA simple Todo CLI app built with Node.js.\n\n## Development Workflow\n- Every feature must follow TDD: RED → GREEN → REFACTOR\n- Run npm test after every change\n- Run npm run test:e2e before shipping\n\n## Subagent Development\n- Use /subagent for independent features to parallelize\n- Merge results and run full verification\n\n## Code Review Rules\n- Run /review before every commit\n\n## Debugging Rules\n- Use /debug for bugs and unexpected behavior\n\n## Ship Rules\n- Bump version in package.json following semver\n- Update CHANGELOG.md before shipping'
        },
        'task_plan.md': {
          type: 'file',
          content: `# Task Plan — Todo CLI App

## Workflow Rules (cross-cutting)
- [x] Install test-driven-development + verification-before-completion
- [x] Install subagent-driven-development for independent feature work
- [x] Install requesting-code-review + systematic-debugging
- [x] Configure CLAUDE.md with TDD, review, debug, E2E, and ship rules

## Phase 1: Foundations
### 1.1 Project Setup
- [x] package.json baseline
- [x] CLAUDE.md project rules
- [ ] findings.md / progress.md upkeep

## Phase 2: Core CLI Features
### 2.1 Add Command
- [ ] 🔴 Test add command behavior
- [ ] 🟢 Implement add command
- [ ] 🔵 Refactor + verify

### 2.2 List Command
- [ ] 🔴 Test list command output
- [ ] 🟢 Implement list command
- [ ] 🔵 Refactor + verify

### 2.3 Done Command
- [ ] 🔴 Test mark-done behavior
- [ ] 🟢 Implement done command
- [ ] 🔵 Refactor + verify

### 2.4 Delete Command
- [ ] 🔴 Test delete behavior
- [ ] 🟢 Implement delete command
- [ ] 🔵 Refactor + verify

### ✅ Phase 2 Checkpoint
- [ ] /review on core CLI
- [ ] Regression tests green
- [ ] Git commit for core CLI implementation

## Phase 3: End-to-End Release
### 3.1 E2E Flow
- [ ] 🔴 Test add → list → done → delete flow
- [ ] 🟢 Implement remaining gaps for E2E
- [ ] 🔵 Refactor

### 3.2 QA & Ship
- [ ] QA report with health score
- [ ] Version bump + CHANGELOG
- [ ] Release commit for v1.0.0`
        },
        'findings.md': {
          type: 'file',
          content: '# Findings — Todo CLI App\n\n## F-001: JSON file is enough for local persistence\n## F-002: Flat single-file CLI keeps the first version simple\n## F-003: add/list and done/delete can be developed in parallel with subagents'
        },
        'progress.md': {
          type: 'file',
          content: '# Progress Log — Todo CLI App\n\n## Session 4: Rules Ready (2026-04-14)\n\n### Completed\n- Dev, review, debug, E2E, and ship rules configured\n\n### Next\n- Execute task_plan.md and build the project\n\n---\n*Each development session adds a new timestamped entry above.*'
        }
      }
    }
  },

  intro: [
    { text: '{cyan}{bold}Chapter 8: Implement from task_plan.md{/bold}{/cyan}', delay_ms: 400 },
    { text: '{dim}All rules are configured. Now give Claude one sentence and let it execute the plan.{/dim}', delay_ms: 200 },
    { text: '', delay_ms: 100 },
    { text: 'This chapter is intentionally simple: the point is to trust the workflow you already set up.', delay_ms: 250 }
  ],

  steps: [
    {
      id: 'ch08-s01',
      instruction: {
        en: 'Tell Claude to follow task_plan.md and implement the Todo CLI project.',
        zh: '告诉 Claude 按照 task_plan.md 完成 Todo CLI 项目开发。'
      },
      hint: 'claude "follow task_plan.md and implement the Todo CLI project"',
      expectedInputs: [{
        patterns: [
          'claude "follow task_plan.md and implement the Todo CLI project"',
          'claude "implement the project according to task_plan.md"',
          'claude "follow task_plan.md and build the project"'
        ],
        fuzzyPatterns: [
          'claude.*follow.*task_plan',
          'claude.*implement.*task_plan',
          'claude.*build.*project.*task_plan'
        ],
        keywords: ['claude', 'task_plan', 'implement', 'project']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1800 },
            { text: '{bold}Executing task_plan.md...{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 80 },
            { text: '  {green}*{/green} Read task_plan.md, findings.md, progress.md, CLAUDE.md', delay_ms: 150 },
            { text: '  {green}*{/green} Split work across subagents: add/list and done/delete', delay_ms: 150 },
            { text: '  {green}*{/green} Applied TDD + verification + code review rules', delay_ms: 150 },
            { text: '  {green}*{/green} Generated implementation, tests, changelog, and shipped v1.0.0', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{bold}Artifacts created:{/bold}', delay_ms: 200 },
            { text: '  {cyan}todo.js{/cyan}       {dim}— CLI with add, list, done, delete{/dim}', delay_ms: 120 },
            { text: '  {cyan}test/todo.test.js{/cyan} {dim}— unit tests{/dim}', delay_ms: 120 },
            { text: '  {cyan}test/e2e.test.js{/cyan}  {dim}— full-flow test scaffold{/dim}', delay_ms: 120 },
            { text: '  {cyan}CHANGELOG.md{/cyan}   {dim}— ship log for v1.0.0{/dim}', delay_ms: 120 },
            { text: '', delay_ms: 100 },
            { text: '{dim}One sentence kicked off the whole workflow because the rules and plan were already in place.{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 200 },
            { text: '{green}{bold}Chapter 8 Complete!{/bold}{/green}', delay_ms: 300 },
            { text: '{dim}Next: package the finished project as an MCP server.{/dim}', delay_ms: 200 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'create',
              path: '/todo-app/todo.js',
              content: "const fs = require('fs');\nconst FILE = 'todos.json';\nconst loadTodos = () => { try { return JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch { return []; } };\nconst saveTodos = (todos) => fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));\nconst getIndex = (todos, num) => { const i = Number(num) - 1; if (i < 0 || i >= todos.length) throw new Error(`Todo #${num} not found`); return i; };\nconst addTodo = (text) => { if (!text?.trim()) throw new Error('Todo text cannot be empty'); const todos = loadTodos(); todos.push({ id: Date.now(), text: text.trim(), done: false }); saveTodos(todos); console.log(`Added: ${text.trim()}`); };\nconst listTodos = () => { const todos = loadTodos(); if (!todos.length) { console.log('No todos yet!'); return; } todos.forEach((t, i) => console.log(`${i + 1}. ${t.done ? '[x]' : '[ ]'} ${t.text}`)); };\nconst doneTodo = (num) => { const todos = loadTodos(); const idx = getIndex(todos, num); todos[idx].done = true; saveTodos(todos); console.log(`Done: ${todos[idx].text}`); };\nconst deleteTodo = (num) => { const todos = loadTodos(); const [removed] = todos.splice(getIndex(todos, num), 1); saveTodos(todos); console.log(`Deleted: ${removed.text}`); };\nconst commands = { add: addTodo, list: listTodos, done: doneTodo, delete: deleteTodo };\nconst cmd = process.argv[2];\nconst arg = process.argv.slice(3).join(' ');\nif (cmd && commands[cmd]) {\n  try { commands[cmd](arg); }\n  catch (e) { console.error(`Error: ${e.message}`); process.exit(1); }\n}\nmodule.exports = { addTodo, listTodos, doneTodo, deleteTodo, loadTodos, saveTodos };"
            },
            {
              type: 'create',
              path: '/todo-app/test/todo.test.js',
              content: "const assert = require('assert');\nconst { addTodo, listTodos, doneTodo, deleteTodo } = require('../todo');\ntry {\n  assert.strictEqual(typeof addTodo, 'function');\n  assert.strictEqual(typeof listTodos, 'function');\n  assert.strictEqual(typeof doneTodo, 'function');\n  assert.strictEqual(typeof deleteTodo, 'function');\n  console.log('All tests passed!');\n} catch (e) {\n  console.log('FAIL: ' + e.message);\n  process.exit(1);\n}"
            },
            {
              type: 'create',
              path: '/todo-app/test/e2e.test.js',
              content: "const { execSync } = require('child_process');\nconst run = (cmd) => execSync(`node todo.js ${cmd}`, { encoding: 'utf8' }).trim();\nconsole.log('E2E tests passed!');"
            },
            {
              type: 'create',
              path: '/todo-app/.gitignore',
              content: "node_modules/\ntodos.json\n*.log\n.DS_Store"
            },
            {
              type: 'create',
              path: '/todo-app/CHANGELOG.md',
              content: '# Changelog\n\n## v1.0.0 (2026-04-14)\n\n### Features\n- add, list, done, delete commands'
            },
            {
              type: 'modify',
              path: '/todo-app/task_plan.md',
              content: `# Task Plan — Todo CLI App

## Workflow Rules (cross-cutting)
- [x] Install test-driven-development + verification-before-completion
- [x] Install subagent-driven-development for independent feature work
- [x] Install requesting-code-review + systematic-debugging
- [x] Configure CLAUDE.md with TDD, review, debug, E2E, and ship rules

## Phase 1: Foundations
### 1.1 Project Setup
- [x] package.json baseline
- [x] CLAUDE.md project rules
- [x] findings.md / progress.md upkeep

## Phase 2: Core CLI Features
### 2.1 Add Command
- [x] 🔴 Test add command behavior
- [x] 🟢 Implement add command
- [x] 🔵 Refactor + verify

### 2.2 List Command
- [x] 🔴 Test list command output
- [x] 🟢 Implement list command
- [x] 🔵 Refactor + verify

### 2.3 Done Command
- [x] 🔴 Test mark-done behavior
- [x] 🟢 Implement done command
- [x] 🔵 Refactor + verify

### 2.4 Delete Command
- [x] 🔴 Test delete behavior
- [x] 🟢 Implement delete command
- [x] 🔵 Refactor + verify

### ✅ Phase 2 Checkpoint
- [x] /review on core CLI
- [x] Regression tests green
- [x] Git commit for core CLI implementation

## Phase 3: End-to-End Release
### 3.1 E2E Flow
- [x] 🔴 Test add → list → done → delete flow
- [x] 🟢 Implement remaining gaps for E2E
- [x] 🔵 Refactor

### 3.2 QA & Ship
- [x] QA report with health score
- [x] Version bump + CHANGELOG
- [x] Release commit for v1.0.0

## Phase 4: Package as MCP
### 4.1 MCP Wrapper
- [ ] Explain MCP protocol
- [ ] Create mcp-server.js wrapper
- [ ] Configure .claude/settings.json
- [ ] Test MCP tools end-to-end`
            },
            {
              type: 'modify',
              path: '/todo-app/progress.md',
              content: '# Progress Log — Todo CLI App\n\n## Session 5: Execute task_plan.md (2026-04-14)\n\n### Completed\n- Followed task_plan.md to implement the Todo CLI\n- Used subagent parallel development for independent features\n- Generated todo.js, unit tests, E2E scaffold, .gitignore, and changelog\n- Completed development, review, debug, E2E, and ship phases\n\n### Next\n- Package the finished CLI as an MCP server\n\n## Session 4: Rules Ready (2026-04-14)\n\n### Completed\n- Dev, review, debug, E2E, and ship rules configured\n\n---\n*Each development session adds a new timestamped entry above.*'
            }
          ]
        }
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude "follow task_plan.md and implement the Todo CLI project"', zh: '试试：claude "follow task_plan.md and implement the Todo CLI project"' } }
        ]
      }
    }
  ]
});
