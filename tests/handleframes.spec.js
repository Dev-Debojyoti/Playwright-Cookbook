import {test, expect} from '@playwright/test';

/*

So we've been dealing with web applications, but if there is a iframe inside a web application, 
which has been embed inside the application then it needs to be handled differently.

For a web page, we can directly access any web elements directly using devtools, but if the element is in a
iframe or frame, then first we need to access or enter inside that particular element, then we can access
the specified element.

So, first we need to locate the frame by frameLocator(), and store it in a variable.
Then, we can use that variable to access the element.

*/


test('Verify the handling of frames', async({ page }) => {

    await page.goto('https://docs.oracle.com/javase/8/docs/api/');

    const iframe1 = await page.frameLocator("//frame[@name='packageListFrame']");

    await iframe1.locator("//a[@href='java/applet/package-frame.html']").click();

    const iframe2 = await page.frameLocator("//frame[@name='packageFrame']");

    await expect(iframe2.getByText('Interfaces')).toBeVisible();
});