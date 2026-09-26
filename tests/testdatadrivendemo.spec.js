import { test, expect } from '@playwright/test';

import testDataFile from '../testdata/testdata.json' with { type: 'json' };


test('Verify data driven tests', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    // We can access the json object, array and other key value pair by the foloowing way below from the testDataFile
    // we have imported earlier

    await page.getByPlaceholder('Enter Email').fill(testDataFile.email);
    await page.getByPlaceholder('Enter Email').fill(testDataFile.password);
    await page.getByPlaceholder('Enter Email').fill(testDataFile.name);
    await page.getByPlaceholder('Enter Email').fill(testDataFile.gender[0]);
    await page.getByPlaceholder('Enter Email').fill(testDataFile.gender[1]);
    await page.getByPlaceholder("Enter Email").fill(testDataFile.address.city);
    await page.getByPlaceholder("Enter Email").fill(testDataFile.address.state);
    await page.getByPlaceholder("Enter Email").fill(testDataFile.address.street);
    await page.getByPlaceholder("Enter Email").fill(testDataFile.address.pincode);

});




