import { test, expect } from '@playwright/test';

test("Verify error message on invalid login credentials", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder('Username').fill('Admin');

    await page.locator('input[type="password"]').fill('addfvfvfvfv');

    await page.locator('#login-button').click();

    const errorMessage = await page.locator('h3[data-test="error"]').textContent();

    console.log("The error message is : ", errorMessage);

    expect(errorMessage.includes("Epic")).toBeTruthy();

});