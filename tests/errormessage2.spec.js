import { test, expect } from '@playwright/test';

test("Verify error message on invalid login credentials", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder('Username').fill('Admin');

    await page.locator('input[type="password"]').fill('addfvfvfvfv');

    await page.getByRole('button', { name: " Login " }).click();

    const errorMessage = await page.locator('//p[contains(@class,"oxd-alert-content-text")]').textContent();

    console.log("The error message is : ", errorMessage);

    expect(errorMessage.includes("Invalid")).toBeTruthy();

});