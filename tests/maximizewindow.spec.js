/*
 
To set a particular viewport size, we can perform any of the 2 optiions

1. Set viewport size globally for all test scripts in
    the playwright.config.js file

2. We can implicitly set viewport size for our required test script

==================================================================================================

1. in playwright.config.js file

projects: [
    {
      name: 'chromium',
      use: {
              ...devices['Desktop Chrome'],
              viewport: { width: 1920, height: 1080 }
            },
          }
    }

2. or inside the required test script

// set viewport for this file's tests
test.use({ viewport: { width: 1600, height: 1000 } });

*/


import { test, expect } from '@playwright/test';

// // set viewport for this file's tests
// test.use({ viewport: { width: 1500, height: 1000 } })

test("Verify valid Register New User", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/register");

    /*  

    To check the viewport height and width -- we printed it
    
    console.log(await page.viewportSize().width);

    console.log(await page.viewportSize().height);

    */
    await page.getByRole('radio', { name: 'Male', exact: true }).click();


    await page.locator('input#FirstName').fill('John');


    await page.locator('input#LastName').fill('Doe');


    await page.getByLabel('Email:').fill('deb7+36i@yopmail.com');


    await page.locator('input#Password').fill('test@1234');


    await page.locator('input#ConfirmPassword').fill('test@1234');


    await page.locator('input#register-button').click();


    await page.locator('input[value="Continue"]').click();


});