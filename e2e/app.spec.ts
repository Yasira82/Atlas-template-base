import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Atlas/i);
});

test('enter button visible', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('button', { name: 'Enter Atlas' })
  ).toBeVisible();
});

test('app name visible', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Atlas' })
  ).toBeVisible();
});
