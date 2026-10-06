/**
 * Chapter 6: Code Review & Debug Rules
 * Install code review, systematic debugging, and finish-branch skills. Configure quality gates.
 * This chapter is about CONFIGURING rules — no application code is written.
 */
ScenarioRegistry.register({
  id: 'ch06',
  title: { en: 'Code Review & Debug Rules', zh: '代码审查与调试规则' },
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
          content: '# CLAUDE.md — Project Rules\n\n## Project Overview\nA simple Todo CLI app built with Node.js.\n\n## Code Style\n- Use CommonJS (require/module.exports)\n- Use const/let, never var\n- Prefer arrow functions\n- Use template literals\n\n## File Conventions\n- Main logic: todo.js\n- Unit tests: test/todo.test.js\n- E2E tests: test/e2e.test.js\n- Data storage: todos.json\n- Planning: task_plan.md, findings.md, progress.md\n\n## Development Workflow\n- Every feature must follow TDD: RED → GREEN → REFACTOR\n- Write unit tests BEFORE implementing features\n- Run npm test after every change\n- Keep functions small and pure\n\n## TDD Rules (Enforced)\n- FORBIDDEN: Skip RED phase, comment out failing tests, weaken assertions\n- Required: RED fails first → GREEN minimal code → REFACTOR → commit\n- Use TDD skill for every new feature\n\n## Unit Testing\n- Framework: Node.js assert module\n- One test file per source file\n- Cover: happy path, edge cases, error handling\n- Run: npm test\n\n## Subagent Development\n- Use /subagent for independent features to parallelize\n- Each subagent must follow TDD independently\n- After merge, run full test suite to verify no conflicts\n\n## Planning Files\n- Update task_plan.md when completing tasks ([ ] -> [/] -> [x])\n- Record discoveries in findings.md with F-NNN IDs\n- Append to progress.md at end of each session\n\n## Error Handling\n- Always validate user input before processing\n- Show friendly, actionable error messages\n- Never crash — catch and report errors gracefully\n\n## Git\n- Use conventional commits (feat:, fix:, test:, docs:)\n- Never modify package.json without asking\n- Add JSDoc comments to exported functions'
        },
        'task_plan.md': {
          type: 'file',
          content: `# Task Plan — Todo CLI App

## Skill Chain
1. /brainstorming (done) → 2. /planning-with-files (done) → 3. /test-driven-development (installed)
4. /verification-before-completion (installed) → 5. /subagent-driven-development (installed)
6. /requesting-code-review → 7. /systematic-debugging

## Workflow Rules (cross-cutting)
- [x] Install test-driven-development + verification-before-completion
- [x] Install subagent-driven-development for independent feature work
- [ ] Install requesting-code-review + systematic-debugging
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
          content: '# Findings — Todo CLI App\n\n## F-001: MVP Commands\n**Decision**: Start with add, list, done. Add delete via TDD.\n**Why**: Core CRUD workflow — create, read, update covers 80% of usage.\n\n## F-002: Storage Format\n**Decision**: Use JSON file (todos.json) for persistence.\n**Why**: Simple, human-readable, no database dependency.\n\n## F-003: Module System\n**Decision**: Use CommonJS (require/module.exports).\n**Why**: No build tool needed, runs directly with Node.js.\n\n## F-004: File Structure\n**Decision**: Flat layout with single todo.js entry point.\n**Why**: Under 100 lines, no need for modular splitting yet.\n\n## F-005: Plan Structure\n**Decision**: Organize task_plan.md by deliverable phases and per-feature TDD slices.\n**Why**: Easier to execute, review, and resume than splitting phases by workflow label.\n\n## F-006: Rule System\n**Decision**: Put self-governance, TDD, and planning-file requirements in CLAUDE.md.\n**Why**: Claude should inherit the workflow contract before any implementation work starts.\n\n## F-007: TDD Discipline\n**Decision**: Every feature must start with a failing test and finish with verification evidence.\n**Why**: Prevents speculative implementation and keeps feature checkpoints auditable.\n\n## F-008: Subagent Usage\n**Decision**: Use subagents only for independent features such as add/list vs done/delete.\n**Why**: Parallelism is useful only when file ownership and verification remain clear.\n\n---\n*New findings will be added as the project evolves.*'
        },
        'progress.md': {
          type: 'file',
          content: '# Progress Log — Todo CLI App\n\n## Session 2: Dev & Testing Rules (2026-04-14)\n\n### Completed\n- Installed TDD + verification + subagent skills\n- Updated CLAUDE.md with development rules\n- Added findings F-007 ~ F-008 for development workflow design\n- 5 skills installed\n\n## Session 1: Brainstorming & Planning (2026-04-13)\n\n### Completed\n- Installed brainstorming + planning skills\n- Generated task_plan.md and CLAUDE.md\n- Recorded findings F-001 ~ F-006\n\n---\n*Each development session adds a new timestamped entry above.*'
        },
        '.claude': {
          type: 'dir',
          children: {
            'commands': {
              type: 'dir',
              children: {
                'planning-with-files.md': { type: 'file', content: '# Planning with Files\n\nFile-based planning to organize and track progress.\n\nProject: $ARGUMENTS' },
                'brainstorm.md': { type: 'file', content: '# Brainstorm Session\n\nTopic: $ARGUMENTS' },
                'tdd.md': { type: 'file', content: '# Test-Driven Development\n\nFeature: $ARGUMENTS' },
                'verify.md': { type: 'file', content: '# Verify Before Completion\n\nTarget: $ARGUMENTS' },
                'subagent.md': { type: 'file', content: '# Subagent-Driven Development\n\nTasks: $ARGUMENTS' }
              }
            }
          }
        }
      }
    }
  },

  intro: [
    { text: '{cyan}{bold}Chapter 6: Code Review & Debug Rules{/bold}{/cyan}', delay_ms: 400 },
    { text: '{dim}Configure quality gates before writing any code.{/dim}', delay_ms: 200 },
    { text: '', delay_ms: 100 },
    { text: 'This chapter installs code review, debugging, and branch management skills.', delay_ms: 300 },
    { text: 'We also add quality rules to CLAUDE.md and configure pre-commit hooks.', delay_ms: 250 }
  ],

  steps: [
    {
      id: 'ch06-s01',
      instruction: {
        en: 'Install the code review and systematic debugging skills.',
        zh: '安装代码审查和系统化调试技能。'
      },
      hint: 'claude "install requesting-code-review skill and systematic-debugging skill"',
      expectedInputs: [{
        patterns: [
          'claude "install requesting-code-review skill and systematic-debugging skill"',
          'claude "install code review and debugging skills"',
          'claude "install code review skill"',
          'claude "install review and debug skills"'
        ],
        fuzzyPatterns: [
          'claude.*install.*code.*review.*debug',
          'claude.*install.*review.*skill',
          'claude.*install.*debugging.*skill',
          'claude.*requesting.*code.*review'
        ],
        keywords: ['claude', 'install', 'review', 'debug', 'skill']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1500 },
            { text: '{green}Installed 2 skills:{/green}', delay_ms: 200 },
            { text: '', delay_ms: 80 },
            { text: '  {green}*{/green} {cyan}requesting-code-review{/cyan}', delay_ms: 150 },
            { text: '    {dim}Pre-merge quality gate — catches issues before they ship{/dim}', delay_ms: 150 },
            { text: '  {green}*{/green} {cyan}systematic-debugging{/cyan}', delay_ms: 150 },
            { text: '    {dim}5-step structured fix: Reproduce → Hypothesize → Isolate → Fix → Verify{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: 'You now have {bold}7 skills{/bold} installed:', delay_ms: 200 },
            { text: '  {dim}brainstorming → planning → TDD → verify → subagent → code-review → debug{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{bold}Code Review skill flow:{/bold}', delay_ms: 200 },
            { text: '  {dim}1. Claude reviews its own code before completing a task{/dim}', delay_ms: 150 },
            { text: '  {dim}2. Checks: correctness, security, performance, maintainability{/dim}', delay_ms: 150 },
            { text: '  {dim}3. Auto-fixes issues found, then re-verifies{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{bold}Systematic Debugging flow:{/bold}', delay_ms: 200 },
            { text: '  {dim}Iron Law: NO FIXES WITHOUT ROOT CAUSE INVESTIGATION{/dim}', delay_ms: 200 },
            { text: '  {dim}Every fix must trace back to a verified root cause{/dim}', delay_ms: 150 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'create',
              path: '/todo-app/.claude/commands/review.md',
              content: '# Code Review\n\nReview code for quality, security, and best practices.\n\n## Checklist\n1. Correctness\n2. Security\n3. Performance\n4. Maintainability\n5. Conventions\n\nTarget: $ARGUMENTS'
            },
            {
              type: 'create',
              path: '/todo-app/.claude/commands/debug.md',
              content: '# Systematic Debugging\n\nDebug an issue using a structured 5-step method.\n\n## Steps\n1. **Reproduce**: Confirm the bug exists\n2. **Hypothesize**: Form a theory about the cause\n3. **Isolate**: Narrow down the root cause\n4. **Fix**: Apply the minimal fix\n5. **Verify**: Confirm the fix works and no regressions\n\nIssue: $ARGUMENTS'
            }
          ]
        },
        nextStep: 'ch06-s02'
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude "install requesting-code-review skill and systematic-debugging skill"', zh: '试试：claude "install requesting-code-review skill and systematic-debugging skill"' } }
        ]
      }
    },
    {
      id: 'ch06-s02',
      instruction: {
        en: 'Install the finish-branch skill for branch management.',
        zh: '安装 finish-branch 技能，用于分支管理。'
      },
      hint: 'claude "install finishing-a-development-branch skill"',
      expectedInputs: [{
        patterns: [
          'claude "install finishing-a-development-branch skill"',
          'claude "install finish-branch skill"',
          'claude "install branch management skill"'
        ],
        fuzzyPatterns: [
          'claude.*install.*finish.*branch',
          'claude.*install.*branch.*skill',
          'claude.*finishing.*development.*branch'
        ],
        keywords: ['claude', 'install', 'finish', 'branch', 'skill']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1200 },
            { text: '{green}Installed:{/green} {cyan}finishing-a-development-branch{/cyan}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{bold}What this skill does:{/bold}', delay_ms: 200 },
            { text: '  {dim}Guides completion of development work with structured options:{/dim}', delay_ms: 200 },
            { text: '  {dim}1. Run final verification (tests + review){/dim}', delay_ms: 150 },
            { text: '  {dim}2. Choose integration strategy (merge, PR, or cleanup){/dim}', delay_ms: 150 },
            { text: '  {dim}3. Update planning files and changelog{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: 'You now have {bold}8 skills{/bold} installed.', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{dim}Now let\'s add quality rules to CLAUDE.md.{/dim}', delay_ms: 200 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'create',
              path: '/todo-app/.claude/commands/finish-branch.md',
              content: '# Finishing a Development Branch\n\nGuide the completion and integration of development work.\n\n## Steps\n1. Run final verification\n2. Review all changes\n3. Choose: merge, PR, or cleanup\n4. Update planning files\n\nBranch: $ARGUMENTS'
            }
          ]
        },
        nextStep: 'ch06-s03'
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude "install finishing-a-development-branch skill"', zh: '试试：claude "install finishing-a-development-branch skill"' } }
        ]
      }
    },
    {
      id: 'ch06-s03',
      instruction: {
        en: 'Add code review and debug rules to CLAUDE.md, then update planning files.',
        zh: '在 CLAUDE.md 中添加代码审查和调试规则，然后更新规划文件。'
      },
      hint: 'claude "add code review, debugging, and git rules to CLAUDE.md, then update planning files"',
      expectedInputs: [{
        patterns: [
          'claude "add code review, debugging, and git rules to CLAUDE.md, then update planning files"',
          'claude "add review and debug rules to CLAUDE.md"',
          'claude "update CLAUDE.md with quality rules"'
        ],
        fuzzyPatterns: [
          'claude.*add.*code.*review.*CLAUDE.md',
          'claude.*CLAUDE.md.*quality.*rules',
          'claude.*CLAUDE.md.*review.*debug',
          'claude.*update.*CLAUDE.md.*review'
        ],
        keywords: ['claude', 'CLAUDE.md', 'review', 'debug', 'rules', 'quality']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1500 },
            { text: '{bold}Updated CLAUDE.md with quality rules:{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {green}+{/green} {bold}Git Rules{/bold}', delay_ms: 200 },
            { text: '    {dim}Use Conventional Commits format: <type>(<scope>): <description>{/dim}', delay_ms: 150 },
            { text: '    {dim}Types: feat, fix, refactor, test, docs, chore{/dim}', delay_ms: 150 },
            { text: '    {dim}Only commit when tests pass{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '  {green}+{/green} {bold}Code Review Rules{/bold}', delay_ms: 200 },
            { text: '    {dim}Run /review before every commit{/dim}', delay_ms: 150 },
            { text: '    {dim}Check: correctness, security, performance, conventions{/dim}', delay_ms: 150 },
            { text: '    {dim}Auto-fix issues found, then re-verify{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '  {green}+{/green} {bold}Debugging Rules{/bold}', delay_ms: 200 },
            { text: '    {dim}Use /debug for any bug or unexpected behavior{/dim}', delay_ms: 150 },
            { text: '    {dim}Iron Law: NO FIXES without root cause investigation{/dim}', delay_ms: 150 },
            { text: '    {dim}3 failed hypotheses → escalate (architectural issue){/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { spinner: true, spinner_duration: 800 },
            { text: '{dim}Updated task_plan.md, findings.md, and progress.md.{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 200 },
            { text: '{green}{bold}Chapter 6 Complete!{/bold}{/green}', delay_ms: 300 },
            { text: 'Quality rules configured:', delay_ms: 200 },
            { text: '  {green}*{/green} Code review before every commit', delay_ms: 150 },
            { text: '  {green}*{/green} Systematic debugging with root cause analysis', delay_ms: 150 },
            { text: '  {green}*{/green} Branch management and integration', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{dim}8 skills installed. CLAUDE.md now enforces quality gates.{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{dim}Next up: E2E & Ship Rules — testing and release configuration.{/dim}', delay_ms: 200 }
          ]
        },
        filesystem: {
          changes: [
            {
              type: 'modify',
              path: '/todo-app/CLAUDE.md',
              content: '# CLAUDE.md — Project Rules\n\n## Project Overview\nA simple Todo CLI app built with Node.js.\n\n## Code Style\n- Use CommonJS (require/module.exports)\n- Use const/let, never var\n- Prefer arrow functions\n- Use template literals\n\n## File Conventions\n- Main logic: todo.js\n- Unit tests: test/todo.test.js\n- E2E tests: test/e2e.test.js\n- Data storage: todos.json\n- Planning: task_plan.md, findings.md, progress.md\n\n## Development Workflow\n- Every feature must follow TDD: RED → GREEN → REFACTOR\n- Write unit tests BEFORE implementing features\n- Run npm test after every change\n- Keep functions small and pure\n\n## TDD Rules (Enforced)\n- FORBIDDEN: Skip RED phase, comment out failing tests, weaken assertions\n- Required: RED fails first → GREEN minimal code → REFACTOR → commit\n- Use TDD skill for every new feature\n\n## Unit Testing\n- Framework: Node.js assert module\n- One test file per source file\n- Cover: happy path, edge cases, error handling\n- Run: npm test\n\n## Subagent Development\n- Use /subagent for independent features to parallelize\n- Each subagent must follow TDD independently\n- After merge, run full test suite to verify no conflicts\n\n## Git Rules\n- Use Conventional Commits format: <type>(<scope>): <description>\n- Types: feat, fix, refactor, test, docs, chore\n- Only commit when tests pass\n\n## Code Review Rules\n- Run /review before every commit\n- Checklist: correctness, security, performance, maintainability, conventions\n- Auto-fix issues found, then re-verify\n\n## Debugging Rules\n- Use /debug for any bug or unexpected behavior\n- Iron Law: NO FIXES without root cause investigation first\n- 5-step method: Reproduce → Hypothesize → Isolate → Fix → Verify\n- 3 failed hypotheses → escalate (architectural issue, not code bug)\n\n## Planning Files\n- Update task_plan.md when completing tasks ([ ] -> [/] -> [x])\n- Record discoveries in findings.md with F-NNN IDs\n- Append to progress.md at end of each session\n\n## Error Handling\n- Always validate user input before processing\n- Show friendly, actionable error messages\n- Never crash — catch and report errors gracefully'
            },
            {
              type: 'modify',
              path: '/todo-app/task_plan.md',
              content: `# Task Plan — Todo CLI App

## Skill Chain
1. /brainstorming (done) → 2. /planning-with-files (done) → 3. /test-driven-development (installed)
4. /verification-before-completion (installed) → 5. /subagent-driven-development (installed)
6. /requesting-code-review (installed) → 7. /systematic-debugging (installed) → 8. /finishing-a-development-branch (installed)

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
            {
              type: 'modify',
              path: '/todo-app/findings.md',
              content: '# Findings — Todo CLI App\n\n## F-001: MVP Commands\n**Decision**: Start with add, list, done. Add delete via TDD.\n**Why**: Core CRUD workflow — create, read, update covers 80% of usage.\n\n## F-002: Storage Format\n**Decision**: Use JSON file (todos.json) for persistence.\n**Why**: Simple, human-readable, no database dependency.\n\n## F-003: Module System\n**Decision**: Use CommonJS (require/module.exports).\n**Why**: No build tool needed, runs directly with Node.js.\n\n## F-004: File Structure\n**Decision**: Flat layout with single todo.js entry point.\n**Why**: Under 100 lines, no need for modular splitting yet.\n\n## F-005: Plan Structure\n**Decision**: Organize task_plan.md by deliverable phases and per-feature TDD slices.\n**Why**: Easier to execute, review, and resume than splitting phases by workflow label.\n\n## F-006: Rule System\n**Decision**: Put self-governance, TDD, and planning-file requirements in CLAUDE.md.\n**Why**: Claude should inherit the workflow contract before any implementation work starts.\n\n## F-007: TDD Discipline\n**Decision**: Every feature must start with a failing test and finish with verification evidence.\n**Why**: Prevents speculative implementation and keeps feature checkpoints auditable.\n\n## F-008: Subagent Usage\n**Decision**: Use subagents only for independent features such as add/list vs done/delete.\n**Why**: Parallelism is useful only when file ownership and verification remain clear.\n\n## F-009: Review Gate\n**Decision**: Run requesting-code-review before commits, not only after bugs are found.\n**Why**: Review is cheaper as a checkpoint than as a late cleanup step.\n\n## F-010: Root-Cause Debugging\n**Decision**: Treat debugging as evidence-based root-cause analysis, not trial-and-error patching.\n**Why**: Avoids symptom fixes and prevents repeated regressions.\n\n---\n*New findings will be added as the project evolves.*'
            },
            {
              type: 'modify',
              path: '/todo-app/progress.md',
              content: '# Progress Log — Todo CLI App\n\n## Session 3: Code Review & Debug Rules (2026-04-14)\n\n### Completed\n- Installed requesting-code-review skill\n- Installed systematic-debugging skill\n- Installed finishing-a-development-branch skill\n- Updated CLAUDE.md with git, review, and debug rules\n- Added findings F-009 ~ F-010 for quality-gate design\n- 8 skills total now installed\n\n### Next\n- Add E2E, QA, and ship rules\n- Record release-gate decisions in findings.md\n\n## Session 2: Dev & Testing Rules (2026-04-14)\n\n### Completed\n- Installed TDD + verification + subagent skills\n- Updated CLAUDE.md with development rules\n- Added findings F-007 ~ F-008\n\n## Session 1: Brainstorming & Planning (2026-04-13)\n\n### Completed\n- Installed brainstorming + planning skills\n- Generated task_plan.md and CLAUDE.md\n- Recorded findings F-001 ~ F-006\n\n---\n*Each development session adds a new timestamped entry above.*'
            }
          ]
        }
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude "add code review, debugging, and git rules to CLAUDE.md, then update planning files"', zh: '试试：claude "add code review, debugging, and git rules to CLAUDE.md, then update planning files"' } }
        ]
      }
    }
  ]
});
