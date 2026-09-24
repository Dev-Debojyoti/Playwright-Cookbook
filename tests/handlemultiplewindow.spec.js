import { test, expect } from '@playwright/test';

// When we are working in one page, we use page fixture

// While working with different tabs, we need browser fixture

test.describe('Handle multiple tabs or windows demo', () => {

    test('Verify multiple tabs example 1', async ({ browser }) => {

        const context = await browser.newContext();

        const page = await context.newPage();

        await page.goto('https://practice.expandtesting.com/windows');


        const [newPage] = await Promise.all
            (
                [
                    context.waitForEvent('page'),

                    page.locator("//a[text()='Click Here']").click()

                ]
            )

        await expect(newPage).toHaveTitle(/Example/);

        await expect(newPage).toHaveURL(/new/);

        await expect(page).toHaveURL('https://practice.expandtesting.com/windows');

        await expect(newPage.locator("//h1[text()='Example of a new window page for Automation Testing Practice']")).toBeVisible();

        await newPage.close();

        await expect(page.getByText('Opening a new window', { exact: 'true' })).toBeVisible();

    });



    test('Verify multiple tabs example 2', async ({ browser }) => {

        // creating a new Browser context like it is an environment where it has its own cookies, tokens, fresh env.
        // it contains its own tabs and windows.

        const context = await browser.newContext();

        // creating a new page inside the browser context

        const page = await context.newPage();

        await page.goto("https://freelance-learn-automation.vercel.app/login");


        // Before clicking we have to handle the promises returned inside promise.all()

        // we will store the array of promises returned inside a variable and we will destructure it
        // it will be a new tab

        const [newPage] = await Promise.all
            (
                [
                    // first we will handle the wait event with the same browser context

                    // second we will click on the link on the same page

                    context.waitForEvent('page'),

                    page.locator("(//a[@href='https://www.facebook.com/groups/256655817858291'])[1]").click()

                ]
            );


        await newPage.locator("input[type='text']").fill('deb@gmail.com');

        await page.getByPlaceholder('Enter Email').fill('deb@gmail.com');

        await newPage.locator("(//input[@name='pass'])[1]").fill('Test@4321');

        await page.getByPlaceholder('Enter Password').fill('Test@4321');

        await expect(newPage.locator("(//span[text()='See more on Facebook'])[1]")).toBeVisible();

        await newPage.close();

        await page.locator("//h1[text()='Learn Automation Courses']").click();

        await expect(page.locator("//div[@class='course-card row']")).toHaveCount(5);

    })

})

