// @ts-check
import { test, expect } from '@playwright/test';
import { Main } from '../pages/main';

test('check logging', async ({ page }) => {
  const main = new Main(page);
  await main.navigateTo();

  await expect(main.pageHeader).toBeVisible();
  await main.login.fill(process.env.AOLOGIN);
  await main.password.fill(process.env.AOPASSWORD);
  await main.logInBtn.click();
  await expect(main.status).toContainText('Witaj: ' + process.env.AOLOGIN);
});
