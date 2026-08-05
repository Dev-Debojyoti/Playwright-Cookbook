/*

For retry of failed test cases
we can use retry either in playwright.config.js 

by 

1.  export default defineConfig({

        retries: 2,


2. or we can directly while running from the terminal can mention retries:3

    npx playwright test .tests/example.spec.js --headed --retries=3

    The failed test will only get rerun on retry, if it failed first during normal execution
    but on 1st retry test, it got passed then the test will go into flaky test category..
*/


import { test, expect } from '@playwright/test';

test.describe("Auth flow pages", () => {

    test("Verify Valid Login", async ({ page }) => {

        await page.goto("https://practice.expandtesting.com/login");

        await expect(page).toHaveTitle(/Test/);

        await expect(page).toHaveURL(/practice/);

        await page.locator('input#username').fill('practice');

        await page.locator('input#password').fill('SuperSecretPassword!');

        await page.getByRole('button', { name: 'Login' }).click();

        await page.waitForURL("https://practice.expandtesting.com/secure");

        await expect(page).toHaveURL(/secure/);

        await expect(page.getByText(/You logged/, { text: 'true' }));

        await page.getByRole('link', { name: ' Logout' }).click();

        await expect(page.getByText(/You logged/, { text: 'true' }));

        await expect(page).toHaveURL("https://practice.expandtesting.com/login");

    })
})

