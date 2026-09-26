import { test, expect } from "@playwright/test"

// we are importing the testDataLogin file here
import testDataLogin from "../testdata/testDataLogin.json" with { type: "json" };

// I'm giving a describe blobk to properly maintain the test
test.describe("Verify data driven login test", () => {


    // here we are using
    //  the for...of loop which is a modern JavaScript loop 
    // designed specifically to iterate over iterable objects like arrays, string, map, sets, etc..
    // we are now referencing the data variable to the parent array testDataLogin 
    // which iterates over each times taking the current array item

    for(const data of testDataLogin) {

        // Then another describe block, it is optional

        test.describe("Verify test Login for test", () => {

            // As playwright doesn't support duplicate test as it is in loop, so it is getting duplicated
            // so we are making a id key value pair inside our json file, to make each entry unique
            // we are then passing the id with the data variable referencing the parent array
            // like {data.id} inside template literal

            test(`Verify Login for respective credentials for test ${data.id}`, async({ page }) => {

                await page.goto("https://freelance-learn-automation.vercel.app/login");

                await page.getByPlaceholder("Enter Email").fill(data.email);

                await page.getByPlaceholder("Enter Password").fill(data.password);


            });
        })
    }

});