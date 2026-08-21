import { test, expect } from '@playwright/test';

async function login(page, email, password) {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.getByPlaceholder('Enter Email').fill(email);

    await page.getByPlaceholder('Enter Password').fill(password);

    await page.getByRole('button', { name: 'Sign in' }).click();

}


test.describe('Auth Flow page', () => {

    test.beforeEach(async ({ page }) => {

        await login(page, 'admin@email.com', 'admin@123');

    })


    test('Verify Successful navigation to Dashboard page after Valid Login', async ({ page }) => {

        await expect(page.getByText('Playwright with Java')).toBeVisible();

        await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/');

        await page.getByText('Manage', { exact: true }).hover();

        await page.getByText('Manage Courses').click();

        await expect(page).toHaveURL(/manage/);

        await expect(page.locator('.title')).toHaveText('Manage Courses');



    })
})