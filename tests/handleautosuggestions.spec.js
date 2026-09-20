import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://www.google.com/');

    await page.locator("textarea[name='q']").focus();

});


test.describe('Handle auto suggestions test scenarios', () => {

    test('Handle auto suggestions using keyboard activities', async ({ page }) => {

        /* 
            Scenario 1 -->

            1. We will type any search query into search box textarea.
            
            2. Then after the search query is typed, then we will wait for the autosuggestions to appear.

            3. Then we will navigate the search auto suggestions by keyboard ArrowDown activity of our desired activity.
            
            4. But this is kind of random, we can't confirm after 2 down key strokes always this suggestion will appear while 
                searching for a particular string.
            
            5. Then we will hit enter key to search that suggestion.   
         
        
        */

        await page.keyboard.type('Playwright');

        await page.waitForSelector("//li[@role='presentation']");

        await page.keyboard.press('ArrowDown');

        await page.keyboard.press('ArrowDown');

        await page.keyboard.press('ArrowDown');

        await page.keyboard.press('Enter');

    });


    test('Handle auto suggestions dynamically using loop', async ({ page }) => {

        /* 
            Scenario 2 -->

            1. We will type any search query into search box textarea.
            
            2. Then after the search query is typed, then we will wait for the autosuggestions to appear.

            3. Then we have to store all the autosuggestions into a array variable we have to use $$ in order to store all the auto sugggestions results.

            4. Then we have to run a loop to query between each and every auto suggestions results.

                We will iterate every item first we will pick up an item and find out its text content by textContent().
                
                We will store the text of that iteration of the list.

            5. We need to apply for a condition as to match the auto suggestions results with our expected result, if the result is found 
                matched we click on the item of the list item then we break the loop.


            Suppose while searching Playwright on google.com --> there comes a list of autosuggestions from which we want to pick
                playwright mcp then we have to check these string matches with the array list of auto suggestions.

            In this process, there is a advantage the position of the search query is dynamic it can be anywhere at the top, 2nd or last,
            we don't have to go through arrow down as it is variable.

            So here we are just matching the expected string with the list of auto suggestions irrespective of their postion.
         
        */

        await page.keyboard.type('Playwright');

        await page.waitForSelector("//li[@role='presentation']");

        // finding the list of auto suggestions by $$() and store it in array variable.
        const suggestionList = await page.$$("//li[@role='presentation']");


        for (let i = 0; i < suggestionList.length; i++) {  // this is a length property to find the length of the array.

            // we find the list item text content with every iteration and store it in a variable.
            const text = await suggestionList[i].textContent();

            // run a condition to check if the text of current iteration matched with our expected string.
            if (text.includes('mcp')) {

                // if the expected string is matched then we click on the list item and break the loop as the item is found
                await suggestionList[i].click();
                break;

            }

        }

    });
});