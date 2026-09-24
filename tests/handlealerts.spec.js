import { test, expect } from '@playwright/test';

test.describe('Handle different types of JS dialogs in Playwright', () => {

    test('Verify JS Alert', async ({ page }) => {

        await page.goto('https://practice.expandtesting.com/js-dialogs');

        /*

         So as JS dialogs are to be handled differently as they can't be interacted by devtools
        so we have to use on () it takes a  event like we use it here like dialog which acts like a listener 
        also we need a callback which captures the event, so we can play with it.

        1. We can verify/expect the type of the dialog by type() (whether it is alert, confirm or prompt)
        
        2. We can verify the message text of the Js dialog by message() 
        
        3. We can click ok or enter by using the accept() or can click cancel on the JS dialog by reject()

        */

        await page.on('dialog', async (dialogWindow) => {

            await expect(dialogWindow.type()).toContain('alert');

            await expect(dialogWindow.message()).toContain('I am a Js Alert');

            await dialogWindow.accept();

        });

        await page.getByRole('button', { name: /Alert/ }).click();

        await expect(page.locator('//p[@id="dialog-response"]')).toHaveText('OK');

    })


    test('Verify JS Confirm', async ({ page }) => {

        await page.goto('https://practice.expandtesting.com/js-dialogs');

        /*

         So as JS dialogs are to be handled differently as they can't be interacted by devtools
        so we have to use on () it takes a  event like we use it here like dialog which acts like a listener 
        also we need a callback which captures the event, so we can play with it.

        1. We can verify/expect the type of the dialog by type() (whether it is alert, confirm or prompt)
        
        2. We can verify the message text of the Js dialog by message() 
        
        3. We can click ok or enter by using the accept() or can click cancel on the JS dialog by reject()

        */

        await page.on('dialog', async (dialogWindow) => {

            await expect(dialogWindow.type()).toContain('confirm');

            await expect(dialogWindow.message()).toContain('I am a Js Confirm');

            await dialogWindow.accept();

        });

        await page.getByRole('button', { name: /Confirm/ }).click();

        await expect(page.locator('//p[@id="dialog-response"]')).toHaveText('Ok');

    })


    test('Verify JS Prompt', async ({ page }) => {

        await page.goto('https://practice.expandtesting.com/js-dialogs');

        /*

         So as JS dialogs are to be handled differently as they can't be interacted by devtools
        so we have to use on () it takes a  event like we use it here like dialog which acts like a listener 
        also we need a callback which captures the event, so we can play with it.

        1. We can verify/expect the type of the dialog by type() (whether it is alert, confirm or prompt)
        
        2. We can verify the message text of the Js dialog by message() 
        
        3. We can click ok or enter by using the accept() or can click cancel on the JS dialog by reject()

        */

        await page.on('dialog', async (dialogWindow) => {

            await expect(dialogWindow.type()).toContain('prompt');

            await expect(dialogWindow.message()).toContain('I am a Js prompt');

            await dialogWindow.accept('Tommy');

        });

        await page.getByRole('button', { name: /Prompt/ }).click();

        await expect(page.locator('//p[@id="dialog-response"]')).toHaveText('Tommy');

    })

})