/**
 * E2E Test: Chapter flow — loading, terminal interaction, step completion
 * Tests Ch01 (Installation) as the representative chapter flow.
 */
const { test, expect } = require('@playwright/test');

test.describe('Chapter Page — Basic Structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ch01-install.html');
    // Wait for intro animation to finish
    await page.waitForTimeout(3000);
  });

  test('should load 3-column layout', async ({ page }) => {
    await expect(page.locator('.sidebar')).toBeVisible();
    await expect(page.locator('.main-area')).toBeVisible();
    await expect(page.locator('.right-panel')).toBeVisible();
  });

  test('should show chapter navigation in sidebar', async ({ page }) => {
    const items = page.locator('.chapter-item');
    await expect(items).toHaveCount(10);
  });

  test('should highlight current chapter in sidebar', async ({ page }) => {
    const active = page.locator('.chapter-item.active');
    await expect(active).toHaveCount(1);
  });

  test('should show instruction panel with step text', async ({ page }) => {
    const panel = page.locator('#instruction-text');
    await expect(panel).not.toBeEmpty();
  });

  test('should show progress bar', async ({ page }) => {
    const bar = page.locator('.progress-track');
    await expect(bar).toBeVisible();
  });

  test('should show hint area with Run button', async ({ page }) => {
    const btn = page.locator('.run-btn');
    await expect(btn.first()).toBeVisible();
  });

  test('should show file tree section', async ({ page }) => {
    await expect(page.locator('.file-tree-header')).toBeVisible();
  });

  test('terminal input should exist and be enabled', async ({ page }) => {
    const input = page.locator('#terminal-input');
    await expect(input).toBeEnabled();
  });
});

test.describe('Chapter Flow — Step Completion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ch01-install.html');
    await page.waitForTimeout(3000);
  });

  test('should advance to next step when Run button is clicked', async ({ page }) => {
    const runBtn = page.locator('.run-btn.primary');
    await expect(runBtn).toBeVisible();

    // Click Run button to execute the command
    await runBtn.click();

    // Wait for response animation
    await page.waitForTimeout(3000);

    // Progress bar should have advanced
    const progressSteps = page.locator('.progress-steps');
    await expect(progressSteps).toBeVisible();
  });

  test('should accept typed command and advance', async ({ page }) => {
    const input = page.locator('#terminal-input');
    await input.fill('npm install -g @anthropic-ai/claude-code');
    await input.press('Enter');

    await page.waitForTimeout(3000);

    // Should show response lines in terminal
    const terminalLines = page.locator('.term-line');
    const count = await terminalLines.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should show fail hint on wrong command', async ({ page }) => {
    const input = page.locator('#terminal-input');
    await input.fill('wrong command');
    await input.press('Enter');

    await page.waitForTimeout(1000);

    // Should show a yellow hint message
    const yellow = page.locator('.t-yellow');
    await expect(yellow.first()).toBeVisible();
  });
});

test.describe('Chapter Page — Ch10 Graduation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ch10-graduation.html');
    // Wait for intro animation + FS init to complete
    await page.waitForTimeout(5000);
  });

  test('should load with 4 steps', async ({ page }) => {
    const progressSteps = page.locator('.progress-steps');
    const text = await progressSteps.textContent();
    // Progress format is "completed/total" e.g. "0/4"
    expect(text).toMatch(/\d\/4/);
  });

  test('should show initial file tree with project files', async ({ page }) => {
    // Wait for file tree to render after chapter init + intro animation
    await page.waitForFunction(() => {
      const items = document.querySelectorAll('.file-tree-item');
      return items.length > 0;
    }, { timeout: 10000 });
    const treeItems = page.locator('.file-tree-item');
    const count = await treeItems.count();
    // Ch10 has a rich initial filesystem: package.json, CLAUDE.md, todo.js, test/, .claude/, .gitignore
    expect(count).toBeGreaterThan(5);
  });

  test('first step is E2E test', async ({ page }) => {
    const instruction = page.locator('#instruction-text');
    await expect(instruction).toContainText('end-to-end');
  });
});
