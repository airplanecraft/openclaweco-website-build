/**
 * Chapter 2: Basic Conversation
 * Learn to chat with Claude Code interactively, and master essential slash commands.
 */
ScenarioRegistry.register({
  id: 'ch02',
  title: { en: 'Conversation', zh: '基础对话' },
  prompt: '~/project $',
  initialFilesystem: {},

  intro: [
    { text: '{cyan}{bold}Chapter 2: Basic Conversation{/bold}{/cyan}', delay_ms: 400 },
    { text: '{dim}Learn how to have natural conversations with Claude Code.{/dim}', delay_ms: 200 },
    { text: '', delay_ms: 100 },
    { text: 'Claude Code understands natural language — just talk to it.', delay_ms: 300 }
  ],

  steps: [
    {
      id: 'ch02-s01',
      instruction: {
        en: 'Start an interactive Claude Code session.',
        zh: '启动 Claude Code 交互式会话。'
      },
      hint: 'claude',
      expectedInputs: [{
        patterns: ['claude'],
        fuzzyPatterns: ['claude'],
        keywords: ['claude']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 200 },
            { spinner: true, spinner_duration: 1000 },
            { text: '{cyan}Claude Code interactive session started.{/cyan}', delay_ms: 300 },
            { text: '{dim}Type your message and press Enter. Use /help for commands.{/dim}', delay_ms: 200 }
          ]
        },
        nextStep: 'ch02-s02'
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Type: claude to start a session', zh: '输入：claude 启动会话' } }
        ]
      }
    },
    {
      id: 'ch02-s02',
      instruction: {
        en: 'Ask Claude a question to see how it responds.',
        zh: '向 Claude 提个问题，看看它如何回答。'
      },
      hint: 'claude "What can you help me with?"',
      expectedInputs: [{
        patterns: [
          'claude "What can you help me with?"',
          'claude "what can you do"',
          'claude "What can you do?"',
          'claude "help me"',
          'claude "hello"'
        ],
        fuzzyPatterns: [
          'claude.*"what.*can',
          'claude.*"help',
          'claude.*"hello',
          'claude.*"hi',
          'claude.*tell.*about'
        ],
        keywords: ['claude', 'what', 'help', 'you', 'can']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 1500 },
            { text: 'I can help you with a wide range of software engineering tasks:', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {cyan}1.{/cyan} {bold}Write code{/bold} — generate, edit, and refactor files', delay_ms: 150 },
            { text: '  {cyan}2.{/cyan} {bold}Debug{/bold} — find and fix issues in your codebase', delay_ms: 150 },
            { text: '  {cyan}3.{/cyan} {bold}Explain{/bold} — understand complex code and concepts', delay_ms: 150 },
            { text: '  {cyan}4.{/cyan} {bold}Test{/bold} — write and run tests for your code', delay_ms: 150 },
            { text: '  {cyan}5.{/cyan} {bold}Git{/bold} — manage commits, branches, and PRs', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{dim}Just describe what you need in plain English!{/dim}', delay_ms: 200 }
          ]
        },
        nextStep: 'ch02-s03'
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Ask Claude a question, e.g.: claude "What can you help me with?"', zh: '向 Claude 提问，例如：claude "What can you help me with?"' } }
        ]
      }
    },
    {
      id: 'ch02-s03',
      instruction: {
        en: 'Try /help to see all available slash commands.',
        zh: '试试 /help 查看所有可用的斜杠命令。'
      },
      hint: '/help',
      expectedInputs: [{
        patterns: ['/help'],
        fuzzyPatterns: ['/help', 'help'],
        keywords: ['help']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { text: '{bold}Available slash commands:{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {cyan}/help{/cyan}      {dim}Show this help message{/dim}', delay_ms: 120 },
            { text: '  {cyan}/compact{/cyan}   {dim}Summarize conversation to free context window{/dim}', delay_ms: 120 },
            { text: '  {cyan}/clear{/cyan}     {dim}Clear the entire conversation history{/dim}', delay_ms: 120 },
            { text: '  {cyan}/context{/cyan}   {dim}Add files or URLs to the conversation context{/dim}', delay_ms: 120 },
            { text: '  {cyan}/skills{/cyan}    {dim}Discover and install agent skills{/dim}', delay_ms: 120 },
            { text: '  {cyan}/review{/cyan}    {dim}Review code changes before merging{/dim}', delay_ms: 120 },
            { text: '  {cyan}/commit{/cyan}    {dim}Create a git commit with AI-generated message{/dim}', delay_ms: 120 },
            { text: '  {cyan}/exit{/cyan}      {dim}End the session{/dim}', delay_ms: 120 },
            { text: '', delay_ms: 100 },
            { text: '{dim}These are your power tools — each one unlocks a workflow!{/dim}', delay_ms: 200 }
          ]
        },
        nextStep: 'ch02-s04'
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: /help', zh: '试试：/help' } }
        ]
      }
    },
    {
      id: 'ch02-s04',
      instruction: {
        en: 'Use /compact to summarize the conversation and free up context.',
        zh: '使用 /compact 压缩对话，释放上下文空间。'
      },
      hint: '/compact',
      expectedInputs: [{
        patterns: ['/compact'],
        fuzzyPatterns: ['/compact'],
        keywords: ['compact']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 800 },
            { text: '{green}Conversation context compacted.{/green}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{bold}What /compact does:{/bold}', delay_ms: 200 },
            { text: '  {dim}1. Summarizes the entire conversation so far{/dim}', delay_ms: 150 },
            { text: '  {dim}2. Replaces long history with a concise summary{/dim}', delay_ms: 150 },
            { text: '  {dim}3. Frees up tokens in the context window{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{bold}When to use it:{/bold}', delay_ms: 200 },
            { text: '  {dim}• Long sessions where you\'ve discussed many topics{/dim}', delay_ms: 150 },
            { text: '  {dim}• Before starting a new unrelated task{/dim}', delay_ms: 150 },
            { text: '  {dim}• When you see a "context limit approaching" warning{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{yellow}Tip:{/yellow} {dim}/compact is NOT /clear — it keeps key info, just compressed.{/dim}', delay_ms: 200 }
          ]
        },
        nextStep: 'ch02-s05'
      },
      onFail: {
        responses: [
          { trigger: 'clear|reset|clean', message: { en: '/compact is different from /clear — it summarizes instead of erasing. Try: /compact', zh: '/compact 不是 /clear——它是压缩总结而不是清除。试试：/compact' } },
          { trigger: 'default', message: { en: 'Try: /compact', zh: '试试：/compact' } }
        ]
      }
    },
    {
      id: 'ch02-s05',
      instruction: {
        en: 'Use /context to add files so Claude can reference them.',
        zh: '使用 /context 添加文件，让 Claude 可以参考它们。'
      },
      hint: '/context README.md package.json',
      expectedInputs: [{
        patterns: [
          '/context README.md package.json',
          '/context README.md',
          '/context package.json'
        ],
        fuzzyPatterns: [
          '/context.*README',
          '/context.*package',
          '/context'
        ],
        keywords: ['context']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 300 },
            { spinner: true, spinner_duration: 800 },
            { text: '{green}Added 2 files to context.{/green}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{bold}What /context does:{/bold}', delay_ms: 200 },
            { text: '  {dim}Adds files to Claude\'s "working memory" for this session.{/dim}', delay_ms: 150 },
            { text: '  {dim}Claude can then reference these files in its responses.{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{bold}Common uses:{/bold}', delay_ms: 200 },
            { text: '  {cyan}/context src/app.js{/cyan}       {dim}— review a specific file{/dim}', delay_ms: 150 },
            { text: '  {cyan}/context *.md{/cyan}            {dim}— add all markdown files{/dim}', delay_ms: 150 },
            { text: '  {cyan}/context URL{/cyan}             {dim}— fetch and include a web page{/dim}', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{dim}Use /context when you want Claude to "see" specific files.{/dim}', delay_ms: 200 }
          ]
        },
        nextStep: 'ch02-s06'
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: /context README.md package.json', zh: '试试：/context README.md package.json' } }
        ]
      }
    },
    {
      id: 'ch02-s06',
      instruction: {
        en: 'End the session with /exit.',
        zh: '使用 /exit 结束会话。'
      },
      hint: '/exit',
      expectedInputs: [{
        patterns: ['/exit', '/quit', 'exit', 'quit'],
        fuzzyPatterns: ['/exit', '/quit'],
        keywords: ['exit', 'quit']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 200 },
            { text: '{dim}Session ended. Returning to shell.{/dim}', delay_ms: 300 },
            { text: '', delay_ms: 200 },
            { text: '{green}{bold}Chapter 2 Complete!{/bold}{/green}', delay_ms: 300 },
            { text: 'You can now start, interact with, and exit Claude Code sessions.', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '{bold}Commands you learned:{/bold}', delay_ms: 200 },
            { text: '  {cyan}/help{/cyan}    {dim}— see all commands{/dim}', delay_ms: 120 },
            { text: '  {cyan}/compact{/cyan} {dim}— compress conversation context{/dim}', delay_ms: 120 },
            { text: '  {cyan}/context{/cyan} {dim}— add files for Claude to reference{/dim}', delay_ms: 120 },
            { text: '  {cyan}/exit{/cyan}    {dim}— end session{/dim}', delay_ms: 120 },
            { text: '', delay_ms: 100 },
            { text: '{dim}Next up: Planning a real project!{/dim}', delay_ms: 200 }
          ]
        }
      },
      onFail: {
        responses: [
          { trigger: 'ctrl|control|c', message: { en: 'Ctrl+C works too, but try the graceful way: /exit', zh: 'Ctrl+C 也可以，但试试优雅的方式：/exit' } },
          { trigger: 'default', message: { en: 'Try: /exit', zh: '试试：/exit' } }
        ]
      }
    }
  ]
});
