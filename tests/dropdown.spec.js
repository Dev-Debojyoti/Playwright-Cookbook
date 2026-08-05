// in the dropdown list only where it is rendered by select tag and options 
{/* <option value="Andhra Pradesh">Andhra Pradesh</option> */ }

// single select ropdown with select tag.
// visible text(label) => Andhra Pradesh

// value => Andhra Pradesh

// index => we start by counting from the select options hidden from there index starts from 0

// await page.locator(locator of select tag).selectOption()

// we can pass visible text or label
// or the value of the specific option
// or by index...


// multiple select dropdown values with select tag

// --> await page.locator(<locator-name>).selectOption(['Playing', 'Reading']);


import { test, expect } from '@playwright/test';

test.describe('Auth flow', () => {

    test('Valid Signup test', async ({ page }) => {

        await page.goto('https://freelance-learn-automation.vercel.app/signup');

        await page.getByPlaceholder('Name').fill('John Doe');

        await page.getByPlaceholder('Email').fill('john.doe@yopmail.com');

        await page.getByPlaceholder('Password').fill('Test@1234');

        await page.getByRole('checkbox', { name: 'JavaScript' }).click();

        await page.getByRole('checkbox', { name: 'PW-chromium-1784977148733' }).click();

        await page.locator('#gender1').click();

        // single locator
        await page.locator('#state').selectOption({ label: 'Goa' });  // visible text

        await page.waitForTimeout(2000);

        await page.locator('#state').selectOption({ value: 'Bihar' });

        await page.waitForTimeout(2000);

        await page.locator('#state').selectOption({ index: 5 });

        // Extracting all values from the whole dropdown list and storing it in variable.
        const allDropdownValues = await page.locator('#state').textContent();

        // printing them in console

        console.log("The Dropdown values are as follows : " + allDropdownValues + " ");

        // assertion from the list of dropdown values, it includes this item and is it true.
        await expect(allDropdownValues.includes("West Bengal")).toBeTruthy();

        //multiple dropdown list, select items using locator & selectOption() method.

        await page.locator('#hobbies').selectOption(['Playing', 'Reading']);

        // checking whether Sign up button is enabled or not ...

        await expect(page.getByRole('button', { name: 'Sign up' })).toBeEnabled();

        // clicking on Sign up button...

        await page.getByRole('button', { name: 'Sign up' }).click();




    })
})