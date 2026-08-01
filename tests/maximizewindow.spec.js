import { test, expect } from '@playwright/test';

test("Verify valid Register New User", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/register");


    await page.getByRole('radio', { name: 'Male', exact: true }).click();


    await page.locator('input#FirstName').fill('John');


    await page.locator('input#LastName').fill('Doe');


    await page.getByLabel('Email:').fill('deb7+2i@yopmail.com');


    await page.locator('input#Password').fill('test@1234');

    
    await page.locator('input#ConfirmPassword').fill('test@1234');

    
    await page.locator('input#register-button').click();


    await page.locator('input[value="Continue"]').click();


});