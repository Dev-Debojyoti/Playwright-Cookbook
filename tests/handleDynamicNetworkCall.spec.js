import { test, expect } from '@playwright/test';

test('Handle dynamic network call', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.getByText('New user? Signup', { exact: 'true' }).click();

    // As there on clicking when its going to the next page, there is a slight load delay based on get request api
    // which is fetching the categories api
    // playwright cannot handle this api call delay as it is dynamic so we have to explicitly handle it
    // after that we can manage our test scripts and so what we want to do.

    await page.waitForLoadState('networkidle');

    await expect(page.locator('//input[@type="radio"]')).toHaveCount(2);

})