import { expect } from "@playwright/test";

class Loginpage {

    // ** inside the constructor there will be strictly the page instance and the locators, nothing else

    constructor(page) {

        this.page = page;
        this.usernamelocator = page.getByPlaceholder("Enter Email");
        this.passwordlocator = page.getByPlaceholder("Enter Password");
        this.loginbuttonlocator = page.locator("//button[@type='submit']");
        this.signintext = page.locator("//h2[normalize-space()='Sign In']");

    }


    async loginToApplication(usernameinput, passwordinput) {

        await this.usernamelocator.fill(usernameinput);
        await this.passwordlocator.fill(passwordinput);
        await this.loginbuttonlocator.click();
    }


    async verifySigninTextOnLoginPage() {

        await expect(this.signintext).toBeVisible();


    }


}


export default Loginpage;