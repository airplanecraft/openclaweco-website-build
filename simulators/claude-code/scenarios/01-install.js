/**
 * Chapter 1: Installation & Authentication
 * Learn to install Claude Code and authenticate.
 */
ScenarioRegistry.register({
  id: 'ch01',
  title: { en: 'Installation', zh: '安装认证' },
  prompt: '~ $',
  initialFilesystem: {},

  intro: [
    { text: '{cyan}{bold}Welcome to the Claude Code Simulator!{/bold}{/cyan}', delay_ms: 400 },
    { text: '{dim}In this chapter, you\'ll learn how to install and authenticate Claude Code.{/dim}', delay_ms: 200 },
    { text: '', delay_ms: 100 },
    { text: 'Let\'s get started.', delay_ms: 300 }
  ],

  steps: [
    {
      id: 'ch01-s01',
      instruction: {
        en: 'Install Claude Code globally using npm.',
        zh: '使用 npm 全局安装 Claude Code。'
      },
      hint: 'npm install -g @anthropic-ai/claude-code',
      expectedInputs: [{
        patterns: ['npm install -g @anthropic-ai/claude-code', 'npm i -g @anthropic-ai/claude-code'],
        fuzzyPatterns: ['npm.*install.*claude-code', 'npm.*i.*-g.*claude'],
        keywords: ['npm', 'install', 'claude-code']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 200 },
            { spinner: true, spinner_duration: 1500 },
            { text: '{green}added 1 package in 3.2s{/green}', delay_ms: 300 },
            { text: '', delay_ms: 100 },
            { text: '{dim}Claude Code installed successfully!{/dim}', delay_ms: 200 }
          ]
        },
        nextStep: 'ch01-s02'
      },
      onFail: {
        responses: [
          { trigger: 'yarn|pnpm|brew', message: { en: 'npm is the recommended installer for Claude Code. Try: npm install -g @anthropic-ai/claude-code', zh: '推荐使用 npm 安装 Claude Code。试试：npm install -g @anthropic-ai/claude-code' } },
          { trigger: 'default', message: { en: 'Try: npm install -g @anthropic-ai/claude-code', zh: '试试：npm install -g @anthropic-ai/claude-code' } }
        ]
      }
    },
    {
      id: 'ch01-s02',
      instruction: {
        en: 'Verify the installation by checking the version.',
        zh: '查看版本号来验证安装是否成功。'
      },
      hint: 'claude --version',
      expectedInputs: [{
        patterns: ['claude --version', 'claude -v', 'claude -V'],
        fuzzyPatterns: ['claude.*version', 'claude.*-v'],
        keywords: ['claude', 'version']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 200 },
            { text: '{accent}Claude Code v1.0.33{/accent}', delay_ms: 300 },
            { text: '', delay_ms: 100 },
            { text: 'Installation confirmed!', delay_ms: 200 }
          ]
        },
        nextStep: 'ch01-s03'
      },
      onFail: {
        responses: [
          { trigger: 'help', message: { en: 'You don\'t need help yet! Just check the version with: claude --version', zh: '还不需要帮助！查看版本即可：claude --version' } },
          { trigger: 'default', message: { en: 'Try: claude --version', zh: '试试：claude --version' } }
        ]
      }
    },
    {
      id: 'ch01-s03',
      instruction: {
        en: 'Start Claude Code to begin the authentication process.',
        zh: '启动 Claude Code 开始认证流程。'
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
            { spinner: true, spinner_duration: 1200 },
            { text: '{cyan}Welcome to Claude Code!{/cyan}', delay_ms: 300 },
            { text: '', delay_ms: 100 },
            { text: 'Opening browser for authentication...', delay_ms: 400 },
            { text: '{green}Authentication successful!{/green}', delay_ms: 600 },
            { text: '', delay_ms: 100 },
            { text: '{dim}You\'re now connected to Anthropic\'s API.{/dim}', delay_ms: 200 }
          ]
        },
        nextStep: 'ch01-s04'
      },
      onFail: {
        responses: [
          { trigger: 'login|auth|sign', message: { en: 'Just type: claude to start the interactive session — it handles auth automatically.', zh: '只需输入：claude 启动交互式会话，它会自动处理认证。' } },
          { trigger: 'default', message: { en: 'Just type: claude', zh: '只需输入：claude' } }
        ]
      }
    },
    {
      id: 'ch01-s04',
      instruction: {
        en: 'Open the help to discover available commands.',
        zh: '打开帮助信息查看可用命令。'
      },
      hint: 'claude --help',
      expectedInputs: [{
        patterns: ['claude --help', 'claude -h', 'claude help'],
        fuzzyPatterns: ['claude.*help', 'claude.*-h'],
        keywords: ['claude', 'help']
      }],
      onSuccess: {
        response: {
          lines: [
            { text: '', delay_ms: 200 },
            { text: '{bold}Usage: claude [options] [command]{/bold}', delay_ms: 200 },
            { text: '', delay_ms: 100 },
            { text: '  {cyan}init{/cyan}        Initialize CLAUDE.md for a project', delay_ms: 150 },
            { text: '  {cyan}chat{/cyan}        Start an interactive conversation', delay_ms: 150 },
            { text: '  {cyan}config{/cyan}      Manage configuration settings', delay_ms: 150 },
            { text: '  {cyan}mcp{/cyan}         Configure MCP servers', delay_ms: 150 },
            { text: '  {cyan}install{/cyan}     Install a skill', delay_ms: 150 },
            { text: '', delay_ms: 100 },
            { text: '{dim}These commands will become your daily tools!{/dim}', delay_ms: 200 },
            { text: '', delay_ms: 200 },
            { text: '{green}{bold}Chapter 1 Complete!{/bold}{/green}', delay_ms: 300 },
            { text: 'You\'ve installed and authenticated Claude Code.', delay_ms: 200 }
          ]
        },
        filesystem: {
          changes: []
        }
      },
      onFail: {
        responses: [
          { trigger: 'default', message: { en: 'Try: claude --help', zh: '试试：claude --help' } }
        ]
      }
    }
  ]
});
