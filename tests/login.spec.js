import { test, expect } from '@playwright/test';

const baseUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

test("Verify valid Url", async ({ page }) => {
    await page.goto(baseUrl);

    const pageUrl = await page.url();

    console.log("The Url of the application is : ", pageUrl);

    await expect(page).toHaveURL(pageUrl);
});

test("Verify Valid page Title", async ({ page }) => {

    await page.goto(baseUrl);

    const pageTitle = await page.title();

    console.log("The title of the page is : ", pageTitle);

    await expect(page).toHaveTitle(pageTitle);

});

test("Verify Valid Login", async ({ page }) => {

    await page.goto(baseUrl);

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page).toHaveTitle("OrangeHRM");

    // await expect(page.locator('h5.oxd-text')).toContainText("Login");

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123");

    await page.getByRole('button', { name: ' Login ' }).click();

    await expect(page).toHaveURL(/dashboard/);

    await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();

    await page.locator("img.oxd-userdropdown-img[alt = 'profile picture']").click();

    await page.getByRole('menuitem', { name: 'Logout' }).click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

});