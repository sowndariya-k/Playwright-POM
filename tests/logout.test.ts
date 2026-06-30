import { test, expect } from '../fixtures/baseFixture';
import loginData from '../test-data/loginData.json';

test.describe('Logout flow', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });

    test('verify logout ', async ({ loginPage, dashboardPage }) => {
        await dashboardPage.logoutbtn();
        await expect(loginPage.loginTitle).toHaveText('Login');
    });

});