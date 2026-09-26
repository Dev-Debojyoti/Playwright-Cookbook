import { test, expect } from '@playwright/test';

test.beforeEach(async({ page }) => {

    await page.goto('https://www.google.com/');

    await page.locator("textarea[name='q']").focus();

})


test.describe('Keyboard actions in Playwright', () => {

    test('Verify simple keyboard type a word with delay & press single keystroke', async ({ page }) => {

        await page.keyboard.type('Labrador', { delay: 2000 });

        await page.keyboard.press('Enter');

    });


    test('Verify multiple keyboard stroke scenario 1', async({ page }) => {

        // type tommmy
        // Press CTRL A
        // Press Backspace

        await page.keyboard.type('Tommy');

        await page.keyboard.press('Control+A');

        await page.keyboard.press('Backspace');

    });


    test('Verify multiple keystroke scenario 2', async({ page }) => {

        // type bulldog
        // Ctrl + shift + left arrow key
        // Ctrl + c
        // Ctrl + v

        await page.keyboard.type('Bulldog', { delay: 500 });

        await page.keyboard.press('Control+Shift+ArrowLeft');

        await page.keyboard.press('Control+KeyX');

        await page.keyboard.press('Control+KeyV');

    });


    test('Verify multiple keyboard stroke scenario 3', async({ page }) => {

        // Type from Keyboard --> Andrew Anderson
        // Then need to remove ANderson from end 
        // like n o s r e d n A
        // final result will be "Andrew "

        await page.keyboard.type('Andrew Anderson', { delay: 100 });

        await page.keyboard.down('Shift');

        for(let i=0; i<'Anderson'.length; i++) {

            await page.keyboard.press('ArrowLeft');
        } 

        await page.keyboard.press('Backspace');

        await page.keyboard.up('Shift');

    });

})
