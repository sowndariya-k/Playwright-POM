import { test, expect } from '../fixtures/baseFixture';
import loginData from '../test-data/loginData.json';

test.describe('Dashboard Test', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });

    test.afterEach(async ({ dashboardPage }) => {
        await dashboardPage.logoutbtn();
    });

    test('verify dashboard assertion', async ({ dashboardPage }) => {
        await expect(dashboardPage.quickLaunch).toBeVisible();
        await expect(dashboardPage.timeAtWorkCard).toBeVisible();
    });
    

});