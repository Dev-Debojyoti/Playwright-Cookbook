import { test, expect } from '@playwright/test';

const baseUrl = "https://www.wikipedia.org//"


test("Verify page Title", async ({ page }) => {

    await page.goto(baseUrl);

    const pageUrl = await page.url();

    console.log("The Url of the page returned : ", pageUrl);

    expect(page).toHaveURL(pageUrl);

    const pageTitle = await page.title();

    console.log("The title of the page is : ", pageTitle);

    expect(page).toHaveTitle(pageTitle);

});