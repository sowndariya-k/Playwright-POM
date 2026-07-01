import type { Page, Locator } from '@playwright/test';

export class DemoDashboardPage {
    readonly page: Page;
    readonly welcome: Locator;
    readonly logout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.welcome = page.locator('#nameofuser');
        this.logout = page.locator('#logout2');
    }

    async logoutbtn() {
        await this.logout.click();
    }
}