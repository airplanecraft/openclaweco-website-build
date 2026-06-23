/**
 * Chapter 7: E2E & Ship Rules
 * Set up Playwright scaffolding, add E2E/QA/ship rules to CLAUDE.md.
 * This chapter is about CONFIGURING rules — no application code is written.
 */
ScenarioRegistry.register({
  id: 'ch07',
  title: { en: 'E2E & Ship Rules', zh: '端到端与发布规则' },
  prompt: '~/todo-app $',
  initialFilesystem: {
    'todo-app': {
      type: 'dir',
      children: {
        'package.json': {
          type: 'file',
          content: '{\n  "name": "todo-app",\n  "version": "1.0.0",\n  "description": "A simple Todo CLI app",\n  "main": "todo.js",\n  "scripts": {\n    "start": "node todo.js",\n    "test": "node test/todo.test.js"\n  }\n}'
        },
        'CLAUDE.md': {
          type: 'file',
          content: '# CLAUDE.md — Project Rules\n\n## Project Overview\nA simple Todo CLI app built with Node.js.\n\n## Code Style\n- Use CommonJS (require/module.exports)\n- Use const/let, never var\n- Prefer arrow functions\n- Use template literals\n\n## File Conventions\n- Main logic: todo.js\n- Unit tests: test/todo.test.js\n- E2E tests: test/e2e.test.js\n- Data storage: todos.json\n- Planning: task_plan.md, findings.md, progress.md\n\n## Development Workflow\n- Every feature must follow TDD: RED → GREEN → REFACTOR\n- Write unit tests BEFORE implementing features\n- Run npm test after every change\n- Keep functions small and pure\n\n## TDD Rules (Enforced)\n- FORBIDDEN: Skip RED phase, comment out failing tests, weaken assertions\n- Required: RED fails first → GREEN minimal code → REFACTOR → commit\n- Use TDD skill for every new feature\n\n## Unit Testing\n- Framework: Node.js assert module\n- One test file per source file\n- Cover: happy path, edge cases, error handling\n- Run: npm test\n\n## Subagent Development\n- Use /subagent for independent features to parallelize\n- Each subagent must follow TDD independently\n- After merge, run full test suite to verify no conflicts\n\n## Git Rules\n- Use Conventional Commits format: <type>(<scope>): <description>\n- Types: feat, fix, refactor, test, docs, chore\n- Only commit when tests pass\n\n## Code Review Rules\n- Run /review before every commit\n- Checklist: correctness, security, performance, maintainability, conventions\n- Auto-fix issues found, then re-verify\n\n## Debugging Rules\n- Use /debug for any bug or unexpected behavior\n- Iron Law: NO FIXES without root cause investigation first\n- 5-step method: Reproduce → Hypothesize → Isolate → Fix → Verify\n- 3 failed hypotheses → escalate (architectural issue, not code bug)\n\n## Planning Files\n- Update task_plan.md when completing tasks ([ ] -> [/] -> [x])\n- Record discoveries in findings.md with F-NNN IDs\n- Append to progress.md at end of each session\n\n## Error Handling\n- Always validate user input before processing\n- Show friendly, actionable error messages\n- Never crash — catch and report errors gracefully'
        },
        'task_plan.md': {
          type: 'file',
          content: `# Task Plan — Todo CLI App

## Skill Chain (8 skills)
1. /brainstorming → 2. /planning-with-files → 3. /test-driven-development
4. /verification-before-completion → 5. /subagent-driven-development
6. /requesting-code-review → 7. /systematic-debugging → 8. /finishing-a-development-branch

## Workflow Rules (cross-cutting)
- [x] Install test-driven-development + verification-before-completion
- [x] Install subagent-driven-development for independent feature work
- [x] Install requesting-code-review + systematic-debugging
- [ ] Configure CLAUDE.md with TDD, review, debug, E2E, and ship rules

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
- [ ] Release commit for v1.0.0

## Phase 4: Package as MCP
### 4.1 MCP Wrapper
- [ ] Explain MCP protocol
- [ ] Create mcp-server.js wrapper
- [ ] Configure .claude/settings.json
- [ ] Test MCP tools end-to-end`
        },
        'findings.md': {
          type: 'file',
          content: '# Findings — Todo CLI App\n\n## F-001: MVP Commands\n**Decision**: Start with add, list, done. Add delete via TDD.\n**Why**: Core CRUD workflow — create, read, update covers 80% of usage.\n\n## F-002: Storage Format\n**Decision**: Use JSON file (todos.json) for persistence.\n**Why**: Simple, human-readable, no database dependency.\n\n## F-003: Module System\n**Decision**: Use CommonJS (require/module.exports).\n**Why**: No build tool needed, runs directly with Node.js.\n\n## F-004: File Structure\n**Decision**: Flat layout with single todo.js entry point.\n**Why**: Under 100 lines, no need for modular splitting yet.\n\n## F-005: Plan Structure\n**Decision**: Organize task_plan.md by deliverable phases and per-feature TDD slices.\n**Why**: Easier to execute, review, and resume than splitting phases by workflow label.\n\n## F-006: Rule System\n**Decision**: Put self-governance, TDD, and planning-file requirements in CLAUDE.md.\n**Why**: Claude should inherit the workflow contract before any implementation work starts.\n\n## F-007: TDD Discipline\n**Decision**: Every feature must start with a failing test and finish with verification evidence.\n**Why**: Prevents speculative implementation and keeps feature checkpoints auditable.\n\n## F-008: Subagent Usage\n**Decision**: Use subagents only for independent features such as add/list vs done/delete.\n**Why**: Parallelism is useful only when file ownership and verification remain clear.\n\n## F-009: Review Gate\n**Decision**: Run requesting-code-review before commits, not only after bugs are found.\n**Why**: Review is cheaper as a checkpoint than as a late cleanup step.\n\n## F-010: Root-Cause Debugging\n**Decision**: Treat debugging as evidence-based root-cause analysis, not trial-and-error patching.\n**Why**: Avoids symptom fixes and prevents repeated regressions.\n\n---\n*New findings will be added as the project evolves.*'
        },
        'progress.md': {
          type: 'file',
          content: '# Progress Log — Todo CLI App\n\n## Session 3: Code Review & Debug Rules (2026-04-14)\n\n### Completed\n- Installed review + debug + finish-branch skills\n- Updated CLAUDE.md with quality rules\n- Added findings F-009 ~ F-010\n- 8 skills installed\n\n## Session 2: Dev & Testing Rules (2026-04-14)\n\n### Completed\n- Installed TDD + verification + subagent skills\n- Updated CLAUDE.md with development rules\n- Added findings F-007 ~ F-008\n\n## Session 1: Brainstorming & Planning (2026-04-13)\n\n### Completed\n- Installed brainstorming + planning skills\n- Generated task_plan.md and CLAUDE.md\n- Recorded findings F-001 ~ F-006\n\n---\n*Each development session adds a new timestamped entry above.*'
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
                'subagent.md': { type: 'file', content: '# Subagent-Driven Development\n\nTasks: $ARGUMENTS' },
                'review.md': { type: 'file', content: '# Code Review\n\nTarget: $ARGUMENTS' },
                'debug.md': { type: 'file', content: '# Systematic Debugging\n\nIssue: $ARGUMENTS' },
                'finish-branch.md': { type: 'file', content: '# Finishing a Development Branch\n\nBranch: $ARGUMENTS' }
              }
            }
          }
        }
      }
    }
  },

  intro: [
    { text: '{cyan}{bold}Chapter 7: E2E & Ship Rules{/bold}{/cyan}', delay_ms: 400 },
    { text: '{dim}The last configuration step before development begins.{/dim}', delay_ms: 200 },
    { text: '', delay_ms: 100 },
    { text: 'Set up Playwright, configure E2E testing rules, and add QA/ship conventions.', delay_ms: 300 },
    { text: 'After this, all rules are in place — one command builds everything.', delay_ms: 250 }
  ],

  steps: [
    {
      id: 'ch07-s01',
      instruction: {
        en: 'Set up Playwright for E2E testing.',
        zh: '设置 Playwright 进行 E2E 测试。'
      },
      hint: 'claude "set up Playwright for E2E testing in this project"',
      expectedInputs: [{
        patterns: [
          'claude "set up Playwright for E2E testing in this project"',
          'claude "set up Playwright"',
          'claude "install Playwright for E2E"'
        ],
        fuzzyPatterns: [
          'claude.*set.*up.*Playwright',
          'claude.*install.*Playwright',
          'claude.*Playwright.*E2E',
          'claude.*E2E.*Playwright'
        ],
        keywords: ['claude', 'Playwright', 'E2E', 'set', 'up']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1500 },
            { text: '{bold}Setting up Playwright...{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {green}*{/green} Updated package.json with playwright dependency', delay_ms: 200 },
            { text: '  {green}*{/green} Added test:e2e script to package.json', delay_ms: 200 },
            { text: '  {green}*{/green} Created test/e2e.test.js scaffolding', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{bold}E2E test structure:{/bold}', delay_ms: 200 },
            { text: '  {dim}test/e2e.test.js — tests the full user flow:{/dim}', delay_ms: 150 },
            { text: '  {dim}  1. Add a todo → verify output{/dim}', delay_ms: 120 },
            { text: '  {dim}  2. List todos → verify display{/dim}', delay_ms: 120 },
            { text: '  {dim}  3. Mark done → verify status change{/dim}', delay_ms: 120 },
            { text: '  {dim}  4. Delete → verify removal{/dim}', delay_ms: 120 },
            { text: '  {dim}  5. List empty → verify clean state{/dim}', delay_ms: 120 },
            { text: '', delay_ms: 100 },
            { text: '{dim}Playwright is ready. Now let\'s add E2E rules to CLAUDE.md.{/dim}', delay_ms: 200 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'modify',
              path: '/todo-app/package.json',
              content: '{\n  "name": "todo-app",\n  "version": "1.0.0",\n  "description": "A simple Todo CLI app",\n  "main": "todo.js",\n  "scripts": {\n    "start": "node todo.js",\n    "test": "node test/todo.test.js",\n    "test:e2e": "node test/e2e.test.js"\n  },\n  "devDependencies": {\n    "playwright": "^1.40.0"\n  }\n}'
            },
            {
              type: 'create',
              path: '/todo-app/test/e2e.test.js',
              content: "/**\n * E2E Test — Full User Flow\n * Tests the entire Todo CLI from a user's perspective.\n */\nconst { execSync } = require('child_process');\nconst fs = require('fs');\n\n// TODO: Implement E2E tests when todo.js is built\n// Expected flow: add → list → done → delete\nconsole.log('E2E test scaffolding ready — implement after development.');"
            }
          ]
        },
        nextStep: 'ch07-s02'
      },
      onFail: {
        responses: [
          { trigger: 'npm.*install', message: { en: 'Let Claude handle the setup: claude "set up Playwright for E2E testing in this project"', zh: '让 Claude 处理设置：claude "set up Playwright for E2E testing in this project"' } },
          { trigger: 'default', message: { en: 'Try: claude "set up Playwright for E2E testing in this project"', zh: '试试：claude "set up Playwright for E2E testing in this project"' } }
        ]
      }
    },
    {
      id: 'ch07-s02',
      instruction: {
        en: 'Add E2E, QA, and ship rules to CLAUDE.md.',
        zh: '在 CLAUDE.md 中添加 E2E、QA 和发布规则。'
      },
      hint: 'claude "add E2E testing, QA check, and ship rules to CLAUDE.md"',
      expectedInputs: [{
        patterns: [
          'claude "add E2E testing, QA check, and ship rules to CLAUDE.md"',
          'claude "add E2E and ship rules to CLAUDE.md"',
          'claude "update CLAUDE.md with E2E QA ship rules"'
        ],
        fuzzyPatterns: [
          'claude.*add.*E2E.*CLAUDE.md',
          'claude.*CLAUDE.md.*E2E.*ship',
          'claude.*CLAUDE.md.*QA.*rules',
          'claude.*E2E.*testing.*rules'
        ],
        keywords: ['claude', 'E2E', 'QA', 'ship', 'CLAUDE.md', 'rules']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1500 },
            { text: '{bold}Updated CLAUDE.md with E2E & Ship rules:{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {green}+{/green} {bold}E2E Testing{/bold}', delay_ms: 200 },
            { text: '    {dim}Test full user flows (add → list → done → delete){/dim}', delay_ms: 150 },
            { text: '    {dim}Verify CLI output and exit codes{/dim}', delay_ms: 150 },
            { text: '    {dim}Run: npm run test:e2e{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '  {green}+{/green} {bold}QA Check{/bold}', delay_ms: 200 },
            { text: '    {dim}Before shipping, run both unit + E2E tests{/dim}', delay_ms: 150 },
            { text: '    {dim}Generate health score report{/dim}', delay_ms: 150 },
            { text: '    {dim}Fix all critical and high-severity issues first{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '  {green}+{/green} {bold}Ship Rules{/bold}', delay_ms: 200 },
            { text: '    {dim}Bump version in package.json (semver){/dim}', delay_ms: 150 },
            { text: '    {dim}Create/update CHANGELOG.md with version entry{/dim}', delay_ms: 150 },
            { text: '    {dim}Final commit: chore(todo): ship vX.Y.Z{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{dim}CLAUDE.md now has ALL rules: dev → test → review → debug → E2E → ship.{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{green}{bold}All rules configured!{/bold}{/green}', delay_ms: 300 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'modify',
              path: '/todo-app/CLAUDE.md',
              content: '# CLAUDE.md — Project Rules\n\n## Project Overview\nA simple Todo CLI app built with Node.js.\n\n## Code Style\n- Use CommonJS (require/module.exports)\n- Use const/let, never var\n- Prefer arrow functions\n- Use template literals\n\n## File Conventions\n- Main logic: todo.js\n- Unit tests: test/todo.test.js\n- E2E tests: test/e2e.test.js\n- Data storage: todos.json\n- Planning: task_plan.md, findings.md, progress.md\n\n## Development Workflow\n- Every feature must follow TDD: RED → GREEN → REFACTOR\n- Write unit tests BEFORE implementing features\n- Run npm test after every change\n- Keep functions small and pure\n\n## TDD Rules (Enforced)\n- FORBIDDEN: Skip RED phase, comment out failing tests, weaken assertions\n- Required: RED fails first → GREEN minimal code → REFACTOR → commit\n- Use TDD skill for every new feature\n\n## Unit Testing\n- Framework: Node.js assert module\n- One test file per source file\n- Cover: happy path, edge cases, error handling\n- Run: npm test\n\n## E2E Testing\n- Test full user flows (add → list → done → delete)\n- Verify CLI output and exit codes\n- Run: npm run test:e2e\n\n## Subagent Development\n- Use /subagent for independent features to parallelize\n- Each subagent must follow TDD independently\n- After merge, run full test suite to verify no conflicts\n\n## Git Rules\n- Use Conventional Commits format: <type>(<scope>): <description>\n- Types: feat, fix, refactor, test, docs, chore\n- Only commit when tests pass\n\n## Code Review Rules\n- Run /review before every commit\n- Checklist: correctness, security, performance, maintainability, conventions\n- Auto-fix issues found, then re-verify\n\n## Debugging Rules\n- Use /debug for any bug or unexpected behavior\n- Iron Law: NO FIXES without root cause investigation first\n- 5-step method: Reproduce → Hypothesize → Isolate → Fix → Verify\n- 3 failed hypotheses → escalate (architectural issue, not code bug)\n\n## QA Check Rules\n- Before shipping: run both unit tests (npm test) and E2E tests (npm run test:e2e)\n- Generate health score report\n- Fix all critical and high-severity issues before shipping\n\n## Ship Rules\n- Bump version in package.json following semver\n- Create/update CHANGELOG.md with version entry\n- Final commit format: chore(todo): ship vX.Y.Z\n- Only ship when all tests pass\n\n## Planning Files\n- Update task_plan.md when completing tasks ([ ] -> [/] -> [x])\n- Record discoveries in findings.md with F-NNN IDs\n- Append to progress.md at end of each session\n\n## Error Handling\n- Always validate user input before processing\n- Show friendly, actionable error messages\n- Never crash — catch and report errors gracefully'
            }
          ]
        },
        nextStep: 'ch07-s03'
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude "add E2E testing, QA check, and ship rules to CLAUDE.md"', zh: '试试：claude "add E2E testing, QA check, and ship rules to CLAUDE.md"' } }
        ]
      }
    },
    {
      id: 'ch07-s03',
      instruction: {
        en: 'Update planning files — all rules configured.',
        zh: '更新规划文件 — 所有规则已配置。'
      },
      hint: 'claude "update task_plan.md, findings.md, and progress.md — all rules configured, ready for development"',
      expectedInputs: [{
        patterns: [
          'claude "update task_plan.md, findings.md, and progress.md — all rules configured, ready for development"',
          'claude "update planning files"',
          'claude "mark all rules configured"'
        ],
        fuzzyPatterns: [
          'claude.*update.*task_plan.*rules',
          'claude.*update.*planning.*files',
          'claude.*all.*rules.*configured',
          'claude.*ready.*development'
        ],
        keywords: ['claude', 'update', 'planning', 'rules', 'development']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1000 },
            { text: '{dim}Updated task_plan.md: all rule phases marked complete{/dim}', delay_ms: 200 },
            { text: '{dim}Updated findings.md: Added release-gate decisions.{/dim}', delay_ms: 200 },
            { text: '{dim}Updated progress.md: Added E2E & Ship Rules session entry.{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 200 },
            { text: '{green}{bold}Chapter 7 Complete!{/bold}{/green}', delay_ms: 300 },
            { text: 'ALL rules configured. Your project is ready for development:', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {green}*{/green} TDD: RED → GREEN → REFACTOR (enforced)', delay_ms: 150 },
            { text: '  {green}*{/green} Code Review: before every commit', delay_ms: 150 },
            { text: '  {green}*{/green} Debugging: root cause first, always', delay_ms: 150 },
            { text: '  {green}*{/green} E2E Testing: full user flow verification', delay_ms: 150 },
            { text: '  {green}*{/green} QA: health score before ship', delay_ms: 150 },
            { text: '  {green}*{/green} Ship: semver version bump + changelog', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{bold}8 skills installed. Complete CLAUDE.md. All rules active.{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{cyan}{bold}Next: One command to build it all.{/bold}{/cyan}', delay_ms: 300 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'modify',
              path: '/todo-app/task_plan.md',
              content: `# Task Plan — Todo CLI App

## Skill Chain (8 skills installed)
1. /brainstorming → 2. /planning-with-files → 3. /test-driven-development
4. /verification-before-completion → 5. /subagent-driven-development
6. /requesting-code-review → 7. /systematic-debugging → 8. /finishing-a-development-branch

## Workflow Rules (cross-cutting)
- [x] Install test-driven-development + verification-before-completion
- [x] Install subagent-driven-development for independent feature work
- [x] Install requesting-code-review + systematic-debugging
- [x] Configure CLAUDE.md with TDD, review, debug, E2E, and ship rules

{bold}All rules configured! Ready for development.{/bold}

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
- [ ] Release commit for v1.0.0

## Phase 4: Package as MCP
### 4.1 MCP Wrapper
- [ ] Explain MCP protocol
- [ ] Create mcp-server.js wrapper
- [ ] Configure .claude/settings.json
- [ ] Test MCP tools end-to-end`
            },
            {
              type: 'modify',
              path: '/todo-app/findings.md',
              content: '# Findings — Todo CLI App\n\n## F-001: MVP Commands\n**Decision**: Start with add, list, done. Add delete via TDD.\n**Why**: Core CRUD workflow — create, read, update covers 80% of usage.\n\n## F-002: Storage Format\n**Decision**: Use JSON file (todos.json) for persistence.\n**Why**: Simple, human-readable, no database dependency.\n\n## F-003: Module System\n**Decision**: Use CommonJS (require/module.exports).\n**Why**: No build tool needed, runs directly with Node.js.\n\n## F-004: File Structure\n**Decision**: Flat layout with single todo.js entry point.\n**Why**: Under 100 lines, no need for modular splitting yet.\n\n## F-005: Plan Structure\n**Decision**: Organize task_plan.md by deliverable phases and per-feature TDD slices.\n**Why**: Easier to execute, review, and resume than splitting phases by workflow label.\n\n## F-006: Rule System\n**Decision**: Put self-governance, TDD, and planning-file requirements in CLAUDE.md.\n**Why**: Claude should inherit the workflow contract before any implementation work starts.\n\n## F-007: TDD Discipline\n**Decision**: Every feature must start with a failing test and finish with verification evidence.\n**Why**: Prevents speculative implementation and keeps feature checkpoints auditable.\n\n## F-008: Subagent Usage\n**Decision**: Use subagents only for independent features such as add/list vs done/delete.\n**Why**: Parallelism is useful only when file ownership and verification remain clear.\n\n## F-009: Review Gate\n**Decision**: Run requesting-code-review before commits, not only after bugs are found.\n**Why**: Review is cheaper as a checkpoint than as a late cleanup step.\n\n## F-010: Root-Cause Debugging\n**Decision**: Treat debugging as evidence-based root-cause analysis, not trial-and-error patching.\n**Why**: Avoids symptom fixes and prevents repeated regressions.\n\n## F-011: E2E Gate\n**Decision**: Treat E2E as a release-phase checkpoint that proves the whole CLI flow works together.\n**Why**: Unit tests alone do not validate command chaining and user-visible output.\n\n## F-012: QA and Ship Discipline\n**Decision**: Require QA evidence, semver versioning, and changelog updates before release.\n**Why**: Shipping should leave an audit trail, not just a passing local test run.\n\n---\n*New findings will be added as the project evolves.*'
            },
            {
              type: 'modify',
              path: '/todo-app/progress.md',
              content: '# Progress Log — Todo CLI App\n\n## Session 4: E2E & Ship Rules (2026-04-14)\n\n### Completed\n- Set up Playwright for E2E testing\n- Added E2E, QA, and ship rules to CLAUDE.md\n- Added findings F-011 ~ F-012 for release-gate design\n- ALL rules now configured!\n- 8 skills installed\n\n### Rules Configured\n- TDD enforcement (RED → GREEN → REFACTOR)\n- Code review before every commit\n- Systematic debugging with root cause analysis\n- E2E testing with Playwright\n- QA health score check\n- Semver ship rules\n\n### Next\n- Development: implement task_plan.md\n\n## Session 3: Code Review & Debug Rules (2026-04-14)\n\n### Completed\n- Installed review + debug + finish-branch skills\n- Added findings F-009 ~ F-010\n\n## Session 2: Dev & Testing Rules (2026-04-14)\n\n### Completed\n- Installed TDD + verification + subagent skills\n- Added findings F-007 ~ F-008\n\n## Session 1: Brainstorming & Planning (2026-04-13)\n\n### Completed\n- Installed brainstorming + planning skills\n- Recorded findings F-001 ~ F-006\n\n---\n*Each development session adds a new timestamped entry above.*'
            }
          ]
        }
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude "update task_plan.md, findings.md, and progress.md — all rules configured, ready for development"', zh: '试试：claude "update task_plan.md, findings.md, and progress.md — all rules configured, ready for development"' } }
        ]
      }
    }
  ]
});
