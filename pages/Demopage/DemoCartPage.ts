import type { Page, Locator } from '@playwright/test';

export class DemoCartPage {
    readonly page: Page;
    readonly cartLink: Locator;
    readonly addToCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.locator('#cartur');
        this.addToCart = page.getByRole('link', { name: 'Add to cart' });
    }
    async selectProduct(product: string) {
    await this.page.getByRole('link', { name: product, exact: true }).click();
    }
    async addProduct() {
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.addToCart.click();
        const dialog = await dialogPromise;
        await dialog.accept();
    }
    async openCart() {
        await this.cartLink.click();
        await this.page.waitForSelector('#tbodyid tr');
    }
    verifyProduct(product: string): Locator {
    return this.page.locator('#tbodyid td').filter({ hasText: product }).first();
    }
}