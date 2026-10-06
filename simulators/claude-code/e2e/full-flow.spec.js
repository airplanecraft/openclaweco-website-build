/**
 * E2E Test: Full chapter walkthrough — complete Ch01 step by step
 */
const { test, expect } = require('@playwright/test');

test.describe('Full Chapter Walkthrough — Ch01', () => {
  test('complete all 4 steps of Ch01', async ({ page }) => {
    await page.goto('/ch01-install.html');
    await page.waitForTimeout(3000);

    // Step 1: Install Claude Code
    const instruction = page.locator('#instruction-text');
    await expect(instruction).toContainText('Install Claude Code');

    let runBtn = page.locator('.run-btn.primary');
    await runBtn.click();
    await page.waitForTimeout(3000);

    // Step 2: Check version
    await expect(instruction).toContainText('version');

    runBtn = page.locator('.run-btn.primary');
    await runBtn.click();
    await page.waitForTimeout(3000);

    // Step 3: Start Claude
    await expect(instruction).toContainText('Start');

    runBtn = page.locator('.run-btn.primary');
    await runBtn.click();
    await page.waitForTimeout(3000);

    // Step 4: Help
    await expect(instruction).toContainText('help');

    runBtn = page.locator('.run-btn.primary');
    await runBtn.click();
    await page.waitForTimeout(3000);

    // Should show chapter complete
    const complete = page.locator('.t-green.t-bold');
    await expect(complete.first()).toBeVisible();
  });
});

test.describe('Full Chapter Walkthrough — Ch08', () => {
  test('complete the single-step implementation flow of Ch08', async ({ page }) => {
    await page.goto('/ch08-mcp.html');
    await page.waitForTimeout(3000);

    const instruction = page.locator('#instruction-text');
    await expect(instruction).toContainText('follow task_plan.md');

    const runBtn = page.locator('.run-btn.primary');
    await runBtn.click();
    await page.waitForTimeout(4000);

    await expect(page.locator('.t-green.t-bold').first()).toBeVisible();
    await expect(page.locator('.file-tree-item')).toContainText(['todo.js']);
    await expect(page.locator('.file-tree-item')).toContainText(['CHANGELOG.md']);
  });
});

test.describe('Full Chapter Walkthrough — Ch9', () => {
  test('complete all 4 steps of Ch9', async ({ page }) => {
    await page.goto('/ch09-graduation.html');
    await page.waitForTimeout(3000);

    const instruction = page.locator('#instruction-text');

    // Step 1: Explain MCP server
    await expect(instruction).toContainText('MCP server');
    let runBtn = page.locator('.run-btn.primary');
    await runBtn.click();
    await page.waitForTimeout(3000);

    // Step 2: Create MCP server
    await expect(instruction).toContainText('create an MCP server');
    runBtn = page.locator('.run-btn.primary');
    await runBtn.click();
    await page.waitForTimeout(3000);

    // Step 3: Configure Claude Code to use the MCP server
    await expect(instruction).toContainText('Configure Claude Code');
    runBtn = page.locator('.run-btn.primary');
    await runBtn.click();
    await page.waitForTimeout(3000);

    // Step 4: Test MCP tools and complete the phase
    await expect(instruction).toContainText('Test the MCP tools');
    runBtn = page.locator('.run-btn.primary');
    await runBtn.click();
    await page.waitForTimeout(3000);

    // Should show chapter complete
    const complete = page.locator('.t-green.t-bold');
    await expect(complete.first()).toBeVisible();
  });
});
