/**
 * E2E Test: Index page — chapter grid loads and navigation works
 */
const { test, expect } = require('@playwright/test');

test.describe('Index Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  test('should load and display the title', async ({ page }) => {
    await expect(page.locator('.header-title')).toContainText('Claude Code Simulator');
  });

  test('should render 10 chapter cards', async ({ page }) => {
    const cards = page.locator('.chapter-card');
    await expect(cards).toHaveCount(10);
  });

  test('should have correct chapter titles', async ({ page }) => {
    const titles = page.locator('.card-title');
    await expect(titles.nth(0)).toContainText('Installation & Auth');
    await expect(titles.nth(1)).toContainText('Basic Conversation');
    await expect(titles.nth(2)).toContainText('Brainstorming');
    await expect(titles.nth(3)).toContainText('Planning & CLAUDE.md');
    await expect(titles.nth(4)).toContainText('Dev & Testing Rules');
    await expect(titles.nth(5)).toContainText('Code Review & Debug');
    await expect(titles.nth(6)).toContainText('E2E Testing Rules');
    await expect(titles.nth(7)).toContainText('Implement from task_plan.md');
    await expect(titles.nth(8)).toContainText('Package as MCP');
    await expect(titles.nth(9)).toContainText('Graduation');
  });

  test('should show progress bar at 0/10', async ({ page }) => {
    await expect(page.locator('#progress-text')).toContainText('0 / 10 completed');
  });

  test('language toggle switches to Chinese', async ({ page }) => {
    await page.locator('#lang-toggle').click();
    await expect(page.locator('.header-subtitle.zh')).toBeVisible();
  });

  test('chapter card links to correct chapter page', async ({ page }) => {
    const firstCard = page.locator('.chapter-card').first();
    await expect(firstCard).toHaveAttribute('href', 'ch01-install.html');
  });
});
