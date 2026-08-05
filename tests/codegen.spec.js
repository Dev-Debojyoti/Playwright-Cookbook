/*
Codegen is a built-in code generator, it genertes the playwright test script once we navigate to
any url or click on any elements available in the web page.

for running codegen type the following in Command line

npx playwright codegen

We can use different options along with the command to get different features

to check all features we can use -- npx playwright codegen --help


-o <dir>/<file-name> saves the generated code inside the designated file automatically
use case example1 -->

npx playwright codegen -o ./tests/codegen.spec.js

*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/otp-login');
  await page.getByRole('textbox', { name: 'Your Email Address' }).click();
  await page.getByRole('textbox', { name: 'Your Email Address' }).fill('deb.test@yopmail.com');
  await page.getByRole('button', { name: 'Send OTP Code' }).click();
});