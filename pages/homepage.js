import { expect } from "@playwright/test";
import Loginpage from "../pages/loginPage.js";

class Homepage {

    constructor(page) {

        this.page = page;
        this.homepagetext = page.getByText('Playwright with Java', { exact: true });
        this.addcartbutton = page.getByRole("button", { name: 'Add to Cart' }).last()
        this.hamburgermenuicon = page.getByAltText('menu');
        this.signoutbutton = page.locator("//button[text() = 'Sign out']");
        this.cartmenucount = page.locator("//span[@class='count']");
        this.managetextoption = page.locator("//span[normalize-space()='Manage']");

    }

    async verifyCourseIsVisible() {

        await expect(this.homepagetext).toBeVisible();

    }

    async verifyAddToCartButtonVisible() {

        await expect(this.addcartbutton).toBeVisible();
    }


    async addProductToCart() {

        await this.addcartbutton.click();

    }


    async verifyCartIconCountUpdate() {

        await expect(this.cartmenucount).toHaveText("1");
    }



    async verifyManageMenuOptionIsDisplayed() {

        await expect(this.managetextoption).toBeVisible();
    }


    async logOutFromApplication() {

        await this.hamburgermenuicon.click();
        await this.signoutbutton.click();

    }



}

export default Homepage;