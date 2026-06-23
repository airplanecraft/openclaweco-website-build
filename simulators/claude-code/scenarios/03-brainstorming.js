/**
 * Chapter 3: Brainstorming
 * 1. Create project directory
 * 2. Write requirement.md
 * 3. Install + invoke brainstorming skill → generates brainstorm.md
 * 4. Generate FRD + Architecture docs
 */
ScenarioRegistry.register({
  id: 'ch03',
  title: { en: 'Brainstorming', zh: '头脑风暴' },
  prompt: '~/ $',
  initialFilesystem: {},

  intro: [
    { text: '{cyan}{bold}Chapter 3: Brainstorming{/bold}{/cyan}', delay_ms: 400 },
    { text: '{dim}Every project starts with a need. Let\'s define ours first.{/dim}', delay_ms: 200 },
    { text: '', delay_ms: 100 },
    { text: 'You want a {bold}Todo CLI app{/bold} to manage your daily tasks from the terminal.', delay_ms: 300 },
    { text: 'Before writing any code, let\'s set up the project and brainstorm ideas.', delay_ms: 250 },
    { text: '', delay_ms: 100 },
    { text: 'First, create the project folder. Then define the requirement.', delay_ms: 300 }
  ],

  steps: [
    {
      id: 'ch03-s01',
      instruction: {
        en: 'Create the project directory and enter it.',
        zh: '创建项目目录并进入。'
      },
      hint: 'mkdir todo-app && cd todo-app',
      expectedInputs: [{
        patterns: ['mkdir todo-app && cd todo-app', 'mkdir todo-app; cd todo-app', 'mkdir todo-app'],
        fuzzyPatterns: ['mkdir.*todo.app', 'mkdir todo'],
        keywords: ['mkdir', 'todo']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 200 },
            { text: '{green}Created directory: todo-app/{/green}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{dim}Project home is ready. Now let\'s define what to build!{/dim}', delay_ms: 200 }
          ]
        },
        filesystem: {
          changes: [
            { type: 'create', path: '/todo-app', content: null }
          ]
        },
        nextStep: 'ch03-s02'
      },
      onFail: {
        responses: [
          { trigger: 'touch|new|create file', message: { en: 'First create the directory with: mkdir todo-app', zh: '先创建目录：mkdir todo-app' } },
          { trigger: 'default', message: { en: 'Try: mkdir todo-app && cd todo-app', zh: '试试：mkdir todo-app && cd todo-app' } }
        ]
      }
    },
    {
      id: 'ch03-s02',
      instruction: {
        en: 'Tell Claude your requirement — save as requirement.md.',
        zh: '告诉 Claude 你的需求——保存为 requirement.md。'
      },
      hint: 'claude "create requirement.md: I need a todo CLI app to manage daily tasks"',
      expectedInputs: [{
        patterns: [
          'claude "create requirement.md: I need a todo CLI app to manage daily tasks"',
          'claude "create requirement.md for a todo CLI app"',
          'claude "write requirement.md for a todo CLI"',
          'claude "I need a todo CLI app, save as requirement.md"'
        ],
        fuzzyPatterns: [
          'claude.*requirement.*todo',
          'claude.*todo.*requirement',
          'claude.*create.*requirement',
          'claude.*need.*todo.*cli'
        ],
        keywords: ['claude', 'requirement', 'todo', 'cli']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1000 },
            { text: '{green}Created requirement.md{/green}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{bold}Requirement:{/bold} A Todo CLI app to manage daily tasks from the terminal.', delay_ms: 200 },
            { text: '', delay_ms: 80 },
            { text: '{dim}Always start with a clear requirement before diving into code.{/dim}', delay_ms: 200 },
            { text: '{dim}Next: install brainstorming skill and explore ideas!{/dim}', delay_ms: 200 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'create',
              path: '/todo-app/requirement.md',
              content: '# Requirement — Todo CLI App\n\n## Need\nA command-line tool to manage daily tasks from the terminal.\n\n## Core Features\n- Add a new todo\n- List all todos\n- Mark a todo as done\n- Delete a todo\n\n## Constraints\n- Simple, lightweight, no external dependencies\n- Persist data in a local file\n- Friendly error messages\n\n---\n*This requirement drives the brainstorming and planning phases.*'
            }
          ]
        },
        nextStep: 'ch03-s03'
      },
      onFail: {
        responses: [
          { trigger: 'mkdir|touch|npm', message: { en: 'Use Claude to write it: claude "create requirement.md: I need a todo CLI app to manage daily tasks"', zh: '用 Claude 来写：claude "create requirement.md: I need a todo CLI app to manage daily tasks"' } },
          { trigger: 'default', message: { en: 'Try: claude "create requirement.md: I need a todo CLI app to manage daily tasks"', zh: '试试：claude "create requirement.md: I need a todo CLI app to manage daily tasks"' } }
        ]
      }
    },
    {
      id: 'ch03-s03',
      instruction: {
        en: 'Install the brainstorming skill.',
        zh: '安装 brainstorming 技能。'
      },
      hint: 'claude "install brainstorming skill"',
      expectedInputs: [{
        patterns: [
          'claude "install brainstorming skill"',
          'claude "install the brainstorming skill"',
          'claude "add brainstorming skill"',
          'claude "install brainstorming"'
        ],
        fuzzyPatterns: [
          'claude.*install.*brainstorm',
          'claude.*add.*brainstorm',
          'claude.*brainstorm.*skill'
        ],
        keywords: ['claude', 'install', 'brainstorm', 'skill']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1500 },
            { text: '{green}Installed brainstorming skill{/green}', delay_ms: 200 },
            { text: '{dim}Created .claude/commands/brainstorm.md{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{bold}What is the brainstorming skill?{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 80 },
            { text: '  Guides a structured session: {cyan}Diverge → Filter → Converge → Action{/cyan}', delay_ms: 150 },
            { text: '  Invoke it with {cyan}/brainstorming{/cyan} and pass your topic.', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{dim}Let\'s brainstorm based on our requirement!{/dim}', delay_ms: 200 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'create',
              path: '/todo-app/.claude',
              content: null
            },
            {
              type: 'create',
              path: '/todo-app/.claude/commands',
              content: null
            },
            {
              type: 'create',
              path: '/todo-app/.claude/commands/brainstorm.md',
              content: '# Brainstorm Session\n\nGuide a structured brainstorming session on the given topic.\n\n## Steps\n1. **Divergent Phase**: Generate many ideas freely\n2. **Group & Filter**: Cluster related ideas\n3. **Convergent Phase**: Select the best options\n4. **Action Items**: Define next steps\n\nTopic: $ARGUMENTS'
            }
          ]
        },
        nextStep: 'ch03-s04'
      },
      onFail: {
        responses: [
          { trigger: 'npm.*install|apt|brew|pip', message: { en: 'Skills are not packages! Try: claude "install brainstorming skill"', zh: '技能不是安装包！试试：claude "install brainstorming skill"' } },
          { trigger: 'default', message: { en: 'Try: claude "install brainstorming skill"', zh: '试试：claude "install brainstorming skill"' } }
        ]
      }
    },
    {
      id: 'ch03-s04',
      instruction: {
        en: 'Invoke the brainstorming skill to explore features based on the requirement.',
        zh: '调用 brainstorming 技能，基于需求探索功能。'
      },
      hint: '/brainstorming Todo CLI App',
      expectedInputs: [{
        patterns: [
          '/brainstorming Todo CLI App',
          '/brainstorming Todo CLI',
          '/brainstorming todo app',
          '/brainstorming todo cli'
        ],
        fuzzyPatterns: [
          '/brainstorming.*todo',
          '/brainstorming.*cli',
          '/brainstorming.*app',
          'brainstorming'
        ],
        keywords: ['brainstorming', 'todo', 'app']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 2000 },
            { text: '{bold}Brainstorm Session: Todo CLI App{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{cyan}Divergent Phase — Feature Ideas:{/cyan}', delay_ms: 150 },
            { text: '  {cyan}1.{/cyan} {bold}Core commands{/bold} — add, list, done, delete', delay_ms: 150 },
            { text: '  {cyan}2.{/cyan} {bold}File storage{/bold} — persist todos in a JSON file', delay_ms: 150 },
            { text: '  {cyan}3.{/cyan} {bold}Status markers{/bold} — pending [ ] / completed [x]', delay_ms: 150 },
            { text: '  {cyan}4.{/cyan} {bold}Input validation{/bold} — friendly error messages', delay_ms: 150 },
            { text: '  {cyan}5.{/cyan} {bold}Number indexing{/bold} — refer to todos by #1, #2...', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{cyan}Convergent Phase — MVP Scope:{/cyan}', delay_ms: 150 },
            { text: '  Start with {bold}add, list, done{/bold} for v1.', delay_ms: 150 },
            { text: '  Add delete later via TDD.', delay_ms: 150 },
            { text: '  Keep it under 100 lines.', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{green}Brainstorm results saved to brainstorm.md!{/green}', delay_ms: 200 },
            { text: '{dim}Now let\'s turn these ideas into FRD and architecture documents.{/dim}', delay_ms: 200 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'create',
              path: '/todo-app/brainstorm.md',
              content: '# Brainstorm — Todo CLI App\n\n## Requirement\nA Todo CLI app to manage daily tasks from the terminal.\n\n## Ideas\n1. Core commands — add, list, done, delete\n2. File storage — persist todos in a JSON file\n3. Status markers — pending [ ] / completed [x]\n4. Input validation — friendly error messages\n5. Number indexing — refer to todos by #1, #2...\n\n## MVP Scope\n- Start with add, list, done for v1\n- Add delete later via TDD\n- Keep it under 100 lines\n- Use CommonJS, no build tool\n- Flat layout with single todo.js\n\n---\n*Generated by /brainstorming skill*'
            }
          ]
        },
        nextStep: 'ch03-s05'
      },
      onFail: {
        responses: [
          { trigger: 'claude.*install|npm.*install', message: { en: 'The skill is already installed! Now invoke it: /brainstorming Todo CLI App', zh: '技能已经安装好了！现在调用它：/brainstorming Todo CLI App' } },
          { trigger: 'default', message: { en: 'Try: /brainstorming Todo CLI App', zh: '试试：/brainstorming Todo CLI App' } }
        ]
      }
    },
    {
      id: 'ch03-s05',
      instruction: {
        en: 'Generate FRD and architecture documents based on the brainstorm.',
        zh: '基于头脑风暴生成功能需求文档和技术架构文档。'
      },
      hint: 'claude "create frd.md and architecture.md based on the brainstorm"',
      expectedInputs: [{
        patterns: [
          'claude "create frd.md and architecture.md based on the brainstorm"',
          'claude "create frd.md and architecture.md"',
          'claude "generate frd and architecture"',
          'claude "create frd and architecture docs"'
        ],
        fuzzyPatterns: [
          'claude.*frd.*architecture',
          'claude.*architecture.*frd',
          'claude.*create.*frd',
          'claude.*architecture.*md'
        ],
        keywords: ['claude', 'frd', 'architecture']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 2000 },
            { text: 'Reading brainstorm.md and requirement.md...', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{green}Created frd.md{/green} — {dim}what to build{/dim}', delay_ms: 200 },
            { text: '{green}Created architecture.md{/green} — {dim}how to build it{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{bold}FRD highlights:{/bold}', delay_ms: 200 },
            { text: '  {cyan}4 commands:{/cyan} add, list, done, delete', delay_ms: 150 },
            { text: '  {cyan}Data:{/cyan} JSON file storage with ID indexing', delay_ms: 150 },
            { text: '  {cyan}Validation:{/cyan} input checks, friendly errors', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{bold}Architecture highlights:{/bold}', delay_ms: 200 },
            { text: '  {cyan}Stack:{/cyan} Node.js, CommonJS, no dependencies', delay_ms: 150 },
            { text: '  {cyan}Files:{/cyan} todo.js (main), todos.json (data), test/', delay_ms: 150 },
            { text: '  {cyan}Testing:{/cyan} TDD with assert module', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{dim}FRD defines WHAT. Architecture defines HOW. Planning defines WHEN.{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 200 },
            { text: '{green}{bold}Chapter 3 Complete!{/bold}{/green}', delay_ms: 300 },
            { text: 'Requirement → Brainstorm → FRD → Architecture — project foundation complete.', delay_ms: 200 },
            { text: 'Next: Install planning skill and create a structured development plan.', delay_ms: 200 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'create',
              path: '/todo-app/frd.md',
              content: '# Functional Requirements Document — Todo CLI App\n\n## Overview\nA command-line tool to manage daily tasks.\n\n## Features\n\n### F1: Add Todo\n- Command: `todo.js add "Buy milk"`\n- Appends a new todo to the list\n- Auto-assigns an ID (#1, #2, ...)\n- Shows confirmation message\n\n### F2: List Todos\n- Command: `todo.js list`\n- Displays all todos with ID, status, and text\n- Shows pending [ ] and completed [x] markers\n\n### F3: Mark Done\n- Command: `todo.js done 1`\n- Marks todo #1 as completed\n- Shows confirmation or error if not found\n\n### F4: Delete Todo\n- Command: `todo.js delete 1`\n- Removes todo #1 from the list\n- Shows confirmation or error if not found\n\n## Data\n- Storage: todos.json (auto-created)\n- Format: [{id, text, done}]\n\n## Validation\n- Empty text → friendly error\n- Invalid ID → "Todo #X not found"\n- No todos → "No todos yet!"\n\n## Non-Functional\n- Zero external dependencies\n- Single-file implementation\n- Under 100 lines of code'
            },
            {
              type: 'create',
              path: '/todo-app/architecture.md',
              content: '# Architecture — Todo CLI App\n\n## Tech Stack\n- **Runtime**: Node.js\n- **Modules**: CommonJS (require/module.exports)\n- **Testing**: Node.js assert module + TDD\n- **Storage**: JSON file (todos.json)\n\n## File Structure\n```\ntodo-app/\n├── todo.js           # Main CLI logic (all commands)\n├── test/\n│   └── todo.test.js  # Unit tests\n├── todos.json        # Data storage (auto-created)\n├── package.json      # Project config\n├── CLAUDE.md         # AI project rules\n├── requirement.md    # Original requirement\n├── brainstorm.md     # Brainstorm session\n├── frd.md            # Functional requirements\n├── architecture.md   # This file\n└── .claude/commands/ # Custom skills\n```\n\n## Design Decisions\n- **Single file**: todo.js handles all commands via process.argv\n- **JSON storage**: Read/write todos.json on each command\n- **ID indexing**: Auto-increment ID for each new todo\n- **Error handling**: try/catch with friendly messages, never crash\n\n## TDD Strategy\n- Write test before implementation (RED → GREEN → REFACTOR)\n- Test each command: add, list, done, delete\n- Test edge cases: empty input, invalid ID, empty list\n\n## Dependencies\nNone. Only Node.js built-in modules:\n- fs (file read/write)\n- assert (testing)\n- path (file paths)'
            }
          ]
        },
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude "create frd.md and architecture.md based on the brainstorm"', zh: '试试：claude "create frd.md and architecture.md based on the brainstorm"' } }
        ]
      }
    }
  ]
});
