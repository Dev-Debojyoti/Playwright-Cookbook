import { test, expect } from '@playwright/test';

test('Verify file upload feature is working correctly', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');

    // we can point the file in the location present in our system
    // await page.locator('#file-upload').setInputFiles('C:/Users/pc/Downloads/girl-hanging-suicide.jpg');


    // but best practice is that we keep it in a dir inside the project folder.
    // create a directory then point the file 
    await page.locator('#file-upload').setInputFiles('./uploads/img1.png');


    await page.getByRole('button', { name: 'Upload' }).click();

    await expect(page.locator('//h3[text()="File Uploaded!"]')).toBeVisible();

})