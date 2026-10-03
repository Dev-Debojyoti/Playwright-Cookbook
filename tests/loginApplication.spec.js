import { test, expect } from '@playwright/test';

import Loginpage from "../pages/loginpage.js";

import Homepage from '../pages/homepage.js';

import testData from '../testdata/testdata.json' with { type: 'json' };


test("Login and Logout of Application using POM", async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const loginpage = new Loginpage(page);

    await loginpage.loginToApplication(testData.email, testData.password);

    const homepage = new Homepage(page);

    await homepage.verifyCourseIsVisible();

    await homepage.verifyAddToCartButtonVisible();

    await homepage.addProductToCart();

    await homepage.verifyCartIconCountUpdate();

    await homepage.verifyManageMenuOptionIsDisplayed();

    await homepage.logOutFromApplication();

    await loginpage.verifySigninTextOnLoginPage();

})
