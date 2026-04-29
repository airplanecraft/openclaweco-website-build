/**
 * Chapter 9: Package as MCP — Execute Phase 5 of the Plan
 * Build an MCP server that wraps the Todo CLI so other Claude Code instances can use it.
 */
ScenarioRegistry.register({
  id: 'ch09',
  title: { en: 'Package as MCP', zh: '打包为 MCP 服务' },
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
          content: '# CLAUDE.md — Project Rules\n\n## Project Overview\nA simple Todo CLI app built with Node.js.\n\n## Code Style\n- Use CommonJS (require/module.exports)\n- Use const/let, never var\n- Prefer arrow functions\n\n## Rules\n- Always run tests after making changes\n- Keep functions small and pure\n\n## Error Handling\n- Always validate user input before processing\n- Show friendly, actionable error messages'
        },
        'todo.js': {
          type: 'file',
          content: "const fs = require('fs');\nconst FILE = 'todos.json';\nconst loadTodos = () => { try { return JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch { return []; } };\nconst saveTodos = (todos) => fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));\nconst getIndex = (todos, num) => { const i = Number(num) - 1; if (i < 0 || i >= todos.length) throw new Error(`Todo #${num} not found`); return i; };\nconst addTodo = (text) => { if (!text?.trim()) throw new Error('Todo text cannot be empty'); const todos = loadTodos(); todos.push({ id: Date.now(), text: text.trim(), done: false }); saveTodos(todos); console.log(`Added: ${text.trim()}`); };\nconst listTodos = () => { const todos = loadTodos(); if (!todos.length) { console.log('No todos yet!'); return; } todos.forEach((t, i) => console.log(`${i+1}. ${t.done?'[x]':'[ ]'} ${t.text}`)); };\nconst doneTodo = (num) => { const todos = loadTodos(); const idx = getIndex(todos, num); todos[idx].done = true; saveTodos(todos); console.log(`Done: ${todos[idx].text}`); };\nconst deleteTodo = (num) => { const todos = loadTodos(); const [r] = todos.splice(getIndex(todos,num),1); saveTodos(todos); console.log(`Deleted: ${r.text}`); };\nconst commands = { add: addTodo, list: listTodos, done: doneTodo, delete: deleteTodo };\nconst cmd = process.argv[2], arg = process.argv.slice(3).join(' ');\nif (cmd && commands[cmd]) {\n  try { commands[cmd](arg); }\n  catch (e) { console.error(`Error: ${e.message}`); process.exit(1); }\n}\nmodule.exports = { addTodo, listTodos, doneTodo, deleteTodo, loadTodos, saveTodos };"
        },
        'test': {
          type: 'dir',
          children: {
            'todo.test.js': {
              type: 'file',
              content: "const assert = require('assert');\nconst { addTodo, listTodos, doneTodo, deleteTodo } = require('../todo');\ntry {\n  assert.strictEqual(typeof addTodo, 'function');\n  assert.strictEqual(typeof listTodos, 'function');\n  assert.strictEqual(typeof doneTodo, 'function');\n  assert.strictEqual(typeof deleteTodo, 'function');\n  console.log('All tests passed!');\n} catch (e) { console.log('FAIL: ' + e.message); process.exit(1); }"
            },
            'e2e.test.js': {
              type: 'file',
              content: "const { execSync } = require('child_process');\nconst run = (cmd) => execSync(`node todo.js ${cmd}`, { encoding: 'utf8' }).trim();\nconsole.log('E2E tests passed!');"
            }
          }
        },
        '.gitignore': {
          type: 'file',
          content: "node_modules/\ntodos.json\n*.log\n.DS_Store"
        },
        'CHANGELOG.md': {
          type: 'file',
          content: '# Changelog\n\n## v1.0.0 (2026-04-14)\n\n### Features\n- add, list, done, delete commands'
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
- [ ] Create mcp-server.js wrapper (mcp-server.js) around todo.js
- [ ] Configure .claude/settings.json
- [ ] Test MCP tools end-to-end`
        },
        'progress.md': {
          type: 'file',
          content: '# Progress Log — Todo CLI App\n\n## Session 5: Execute task_plan.md (2026-04-14)\n\n### Completed\n- Implemented the Todo CLI and shipped v1.0.0\n- Phase 4 complete!\n\n---\n*Each development session adds a new timestamped entry above.*'
        },
        '.claude': {
          type: 'dir',
          children: {
            'commands': {
              type: 'dir',
              children: {
                'planning-with-files.md': { type: 'file', content: '# Planning with Files\n\nProject: $ARGUMENTS' },
                'brainstorm.md': { type: 'file', content: '# Brainstorm Session\n\nTopic: $ARGUMENTS' },
                'tdd.md': { type: 'file', content: '# Test-Driven Development\n\nFeature: $ARGUMENTS' },
                'verify.md': { type: 'file', content: '# Verify Before Completion\n\nTarget: $ARGUMENTS' },
                'review.md': { type: 'file', content: '# Code Review\n\nTarget: $ARGUMENTS' },
                'debug.md': { type: 'file', content: '# Systematic Debugging\n\nIssue: $ARGUMENTS' }
              }
            }
          }
        }
      }
    }
  },

  intro: [
    { text: '{cyan}{bold}Chapter 9: Package as MCP{/bold}{/cyan}', delay_ms: 400 },
    { text: '{dim}Turn your Todo CLI into an MCP server that Claude can call directly.{/dim}', delay_ms: 200 },
    { text: '', delay_ms: 100 },
    { text: 'Phase 5: learn the protocol, build the server, configure, and test.', delay_ms: 300 }
  ],

  steps: [
    {
      id: 'ch09-s01',
      instruction: {
        en: 'Ask Claude to explain how to build an MCP server.',
        zh: '让 Claude 解释如何构建 MCP 服务器。'
      },
      hint: 'claude "explain how to build an MCP server for a Node.js CLI"',
      expectedInputs: [{
        patterns: [
          'claude "explain how to build an MCP server for a Node.js CLI"',
          'claude "explain MCP server"',
          'claude "how to build MCP server"'
        ],
        fuzzyPatterns: [
          'claude.*explain.*MCP.*server',
          'claude.*build.*MCP',
          'claude.*MCP.*server.*build',
          'claude.*how.*MCP'
        ],
        keywords: ['claude', 'explain', 'MCP', 'server', 'build']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1200 },
            { text: '{bold}MCP Server — How It Works:{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {cyan}Transport:{/cyan} JSON-RPC over stdin/stdout', delay_ms: 200 },
            { text: '  {cyan}Protocol:{/cyan} 3 key methods:', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  1. {bold}initialize{/bold} — handshake (server ↔ client)', delay_ms: 150 },
            { text: '  2. {bold}tools/list{/bold}  — register available tools', delay_ms: 150 },
            { text: '  3. {bold}tools/call{/bold}  — execute a tool with arguments', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{bold}Structure:{/bold}', delay_ms: 200 },
            { text: '  {dim}mcp-server.js reads JSON from stdin, routes to your functions,{/dim}', delay_ms: 150 },
            { text: '  {dim}and writes JSON responses to stdout.{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{bold}Each tool needs:{/bold}', delay_ms: 200 },
            { text: '  - {green}name{/green}: e.g., "add_todo"', delay_ms: 150 },
            { text: '  - {green}description{/green}: what it does', delay_ms: 150 },
            { text: '  - {green}inputSchema{/green}: JSON Schema for parameters', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{dim}It\'s like turning your CLI into an API that Claude can call!{/dim}', delay_ms: 200 }
          ]
        },
        nextStep: 'ch09-s02'
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude "explain how to build an MCP server for a Node.js CLI"', zh: '试试：claude "explain how to build an MCP server for a Node.js CLI"' } }
        ]
      }
    },
    {
      id: 'ch09-s02',
      instruction: {
        en: 'Tell Claude to create an MCP server that wraps the todo CLI.',
        zh: '告诉 Claude 创建一个包装 todo CLI 的 MCP 服务器。'
      },
      hint: 'claude "create an MCP server that wraps our todo CLI in mcp-server.js"',
      expectedInputs: [{
        patterns: [
          'claude "create an MCP server that wraps our todo CLI in mcp-server.js"',
          'claude "create MCP server"',
          'claude "build MCP server wrapper"'
        ],
        fuzzyPatterns: [
          'claude.*create.*MCP.*server',
          'claude.*MCP.*server.*wrapper',
          'claude.*mcp.server.*wrap',
          'claude.*build.*MCP'
        ],
        keywords: ['claude', 'create', 'MCP', 'server', 'wrapper']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1500 },
            { text: '{bold}Creating MCP server wrapper...{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {green}Created{/green} mcp-server.js', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {bold}4 tools registered:{/bold}', delay_ms: 200 },
            { text: '  {cyan}add_todo{/cyan}     {dim}— Add a new todo (param: text){/dim}', delay_ms: 120 },
            { text: '  {cyan}list_todos{/cyan}   {dim}— List all todos (no params){/dim}', delay_ms: 120 },
            { text: '  {cyan}done_todo{/cyan}    {dim}— Mark todo as done (param: number){/dim}', delay_ms: 120 },
            { text: '  {cyan}delete_todo{/cyan}  {dim}— Delete a todo (param: number){/dim}', delay_ms: 120 },
            { text: '', delay_ms: 100 },
            { text: '  Each tool wraps the corresponding function from todo.js.', delay_ms: 200 },
            { text: '  {dim}Transport: stdin/stdout JSON-RPC. No HTTP needed!{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {green}Updated{/green} package.json — added "mcp" script', delay_ms: 200 },
            { text: '', delay_ms: 200 },
            { text: '{green}{bold}MCP server created!{/bold}{/green}', delay_ms: 300 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'create',
              path: '/todo-app/mcp-server.js',
              content: "#!/usr/bin/env node\n\n/**\n * MCP Server — Todo CLI\n * Wraps todo.js functions as MCP tools.\n * Transport: stdin/stdout JSON-RPC\n */\nconst readline = require('readline');\nconst { addTodo, listTodos, doneTodo, deleteTodo, loadTodos } = require('./todo');\n\nconst tools = [\n  {\n    name: 'add_todo',\n    description: 'Add a new todo item',\n    inputSchema: {\n      type: 'object',\n      properties: { text: { type: 'string', description: 'Todo text' } },\n      required: ['text']\n    }\n  },\n  {\n    name: 'list_todos',\n    description: 'List all todo items',\n    inputSchema: { type: 'object', properties: {} }\n  },\n  {\n    name: 'done_todo',\n    description: 'Mark a todo as completed',\n    inputSchema: {\n      type: 'object',\n      properties: { number: { type: 'string', description: 'Todo number (1-based)' } },\n      required: ['number']\n    }\n  },\n  {\n    name: 'delete_todo',\n    description: 'Delete a todo item',\n    inputSchema: {\n      type: 'object',\n      properties: { number: { type: 'string', description: 'Todo number (1-based)' } },\n      required: ['number']\n    }\n  }\n];\n\nconst handlers = {\n  add_todo: ({ text }) => { addTodo(text); return `Added: ${text}`; },\n  list_todos: () => { const todos = loadTodos(); return todos.length ? JSON.stringify(todos, null, 2) : 'No todos yet!'; },\n  done_todo: ({ number }) => { doneTodo(number); return `Done: todo #${number}`; },\n  delete_todo: ({ number }) => { deleteTodo(number); return `Deleted: todo #${number}`; }\n};\n\nconst handleRequest = (msg) => {\n  const { id, method, params } = msg;\n  if (method === 'initialize') {\n    return { id, result: { protocolVersion: '2024-11-05', capabilities: { tools: {} }, serverInfo: { name: 'todo-mcp', version: '1.0.0' } } };\n  }\n  if (method === 'tools/list') {\n    return { id, result: { tools } };\n  }\n  if (method === 'tools/call') {\n    const tool = params?.name;\n    const args = params?.arguments || {};\n    try {\n      const result = handlers[tool]?.(args);\n      return { id, result: { content: [{ type: 'text', text: String(result) }] } };\n    } catch (e) {\n      return { id, result: { content: [{ type: 'text', text: `Error: ${e.message}` }], isError: true } };\n    }\n  }\n  return { id, error: { code: -32601, message: 'Method not found' } };\n};\n\nconst rl = readline.createInterface({ input: process.stdin });\nrl.on('line', (line) => {\n  try {\n    const msg = JSON.parse(line);\n    const response = handleRequest(msg);\n    process.stdout.write(JSON.stringify(response) + '\\n');\n  } catch {}\n});"
            },
            {
              type: 'modify',
              path: '/todo-app/package.json',
              content: '{\n  "name": "todo-app",\n  "version": "1.0.0",\n  "description": "A simple Todo CLI app",\n  "main": "todo.js",\n  "scripts": {\n    "start": "node todo.js",\n    "test": "node test/todo.test.js",\n    "test:e2e": "node test/e2e.test.js",\n    "mcp": "node mcp-server.js"\n  },\n  "devDependencies": {\n    "playwright": "^1.40.0"\n  }\n}'
            }
          ]
        },
        nextStep: 'ch09-s03'
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude "create an MCP server that wraps our todo CLI in mcp-server.js"', zh: '试试：claude "create an MCP server that wraps our todo CLI in mcp-server.js"' } }
        ]
      }
    },
    {
      id: 'ch09-s03',
      instruction: {
        en: 'Configure Claude Code to use the MCP server.',
        zh: '配置 Claude Code 使用这个 MCP 服务器。'
      },
      hint: 'claude "configure this MCP server in Claude Code settings"',
      expectedInputs: [{
        patterns: [
          'claude "configure this MCP server in Claude Code settings"',
          'claude "configure MCP server"',
          'claude "add MCP to settings"'
        ],
        fuzzyPatterns: [
          'claude.*configure.*MCP.*server',
          'claude.*MCP.*settings',
          'claude.*add.*MCP',
          'claude.*setup.*MCP'
        ],
        keywords: ['claude', 'configure', 'MCP', 'settings']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1200 },
            { text: '{bold}Configuring MCP server in Claude Code...{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {green}Created{/green} .claude/settings.json', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {bold}Config:{/bold}', delay_ms: 150 },
            { text: '  {dim}{/dim}', delay_ms: 50 },
            { code: '// .claude/settings.json\n{\n  "mcpServers": {\n    "todo": {\n      "command": "node",\n      "args": ["mcp-server.js"]\n    }\n  }\n}', lang: 'json', delay_ms: 200 },
            { text: '', delay_ms: 200 },
            { text: '  {dim}Claude can now call add_todo, list_todos, done_todo, delete_todo{/dim}', delay_ms: 200 },
            { text: '  {dim}via MCP — no CLI commands needed!{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 200 },
            { text: '{green}{bold}MCP server configured!{/bold}{/green}', delay_ms: 300 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'create',
              path: '/todo-app/.claude/settings.json',
              content: '{\n  "mcpServers": {\n    "todo": {\n      "command": "node",\n      "args": ["mcp-server.js"]\n    }\n  }\n}'
            }
          ]
        },
        nextStep: 'ch09-s04'
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude "configure this MCP server in Claude Code settings"', zh: '试试：claude "configure this MCP server in Claude Code settings"' } }
        ]
      }
    },
    {
      id: 'ch09-s04',
      instruction: {
        en: 'Test the MCP tools and mark Phase 5 complete.',
        zh: '测试 MCP 工具并标记 Phase 5 完成。'
      },
      hint: 'claude "test MCP tools end-to-end and update planning files"',
      expectedInputs: [{
        patterns: [
          'claude "test MCP tools end-to-end and update planning files"',
          'claude "test MCP tools"',
          'claude "test MCP server"'
        ],
        fuzzyPatterns: [
          'claude.*test.*MCP',
          'claude.*MCP.*test',
          'claude.*MCP.*tools.*test'
        ],
        keywords: ['claude', 'test', 'MCP', 'tools']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1500 },
            { text: '{bold}Testing MCP tools...{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {bold}tools/list{/bold} → 4 tools available:', delay_ms: 200 },
            { text: '  {green}*{/green} add_todo', delay_ms: 100 },
            { text: '  {green}*{/green} list_todos', delay_ms: 100 },
            { text: '  {green}*{/green} done_todo', delay_ms: 100 },
            { text: '  {green}*{/green} delete_todo', delay_ms: 100 },
            { text: '', delay_ms: 100 },
            { text: '  {bold}tools/call{/bold} add_todo({ text: "Test via MCP" }):', delay_ms: 200 },
            { spinner: true, spinner_duration: 500 },
            { text: '  {green}→ "Added: Test via MCP"{/green}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {bold}tools/call{/bold} list_todos():', delay_ms: 200 },
            { spinner: true, spinner_duration: 500 },
            { text: '  {green}→ [{ id: ..., text: "Test via MCP", done: false }]{/green}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {dim}MCP server works! Your Todo CLI is now an AI-accessible tool.{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { spinner: true, spinner_duration: 800 },
            { text: '{dim}Updated task_plan.md: Phase 5 → [x]{/dim}', delay_ms: 200 },
            { text: '{dim}Updated progress.md: Added Session 6 entry.{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 200 },
            { text: '{green}{bold}Chapter 9 Complete!{/bold}{/green}', delay_ms: 300 },
            { text: 'You built an MCP server from scratch — your Todo CLI is now a tool Claude can use.', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{dim}Next: final verification, summary, and graduation.{/dim}', delay_ms: 200 }
          ]
        },
        filesystem: {
          changes: [
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
- [x] Explain MCP protocol
- [x] Create mcp-server.js wrapper (mcp-server.js) around todo.js
- [x] Configure .claude/settings.json
- [x] Test MCP tools end-to-end

{bold}All phases complete! Project finished!{/bold}`
            },
            {
              type: 'modify',
              path: '/todo-app/progress.md',
              content: '# Progress Log — Todo CLI App\n\n## Session 6: Package as MCP (2026-04-14)\n\n### Completed\n- Learned MCP server protocol (JSON-RPC over stdin/stdout)\n- Created mcp-server.js with 4 tools (add_todo, list_todos, done_todo, delete_todo)\n- Configured in .claude/settings.json\n- Tested MCP tools end-to-end — all working!\n- Phase 5 complete! All phases done!\n\n## Session 5: Execute task_plan.md (2026-04-14)\n\n### Completed\n- Implemented the Todo CLI and shipped v1.0.0\n- Phase 4 complete!\n\n---\n*Each development session adds a new timestamped entry above.*'
            }
          ]
        }
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude "test MCP tools end-to-end and update planning files"', zh: '试试：claude "test MCP tools end-to-end and update planning files"' } }
        ]
      }
    }
  ]
});
