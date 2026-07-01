import 'dotenv/config';

import { test, expect } from '../../fixtures/demoblazeFixture';

test.describe('Cart Test', () => {

    test.beforeEach(async ({ loginPage, dashboardPage }) => {

        await loginPage.navigate();

        await loginPage.login(
            process.env.U_NAME!,
            process.env.PASSWORD!
        );

        await expect(dashboardPage.welcome)
            .toBeVisible({ timeout: 10000 });

    });

    test('Add Product To Cart', async ({ cartPage }) => {

        await cartPage.selectProduct(
            process.env.PRODUCT_NAME!
        );

        await cartPage.addProduct();

        await cartPage.openCart();

        await expect(
            cartPage.verifyProduct(
                process.env.PRODUCT_NAME!
            )
        ).toBeVisible();

    });

});