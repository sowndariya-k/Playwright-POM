import type { Page, Locator } from '@playwright/test';

export class DemoLoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly loginLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.loginLink = page.getByRole('link', { name: 'Log in' });
    }

    async navigate() {
        await this.page.goto("https://demoblaze.com/", {
            waitUntil: 'domcontentloaded'
        });
    }

    async login(username: string, password: string) {
    await this.loginLink.click();
    await this.username.waitFor({ state: 'visible' });
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
}
}