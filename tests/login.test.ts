import { test, expect } from '../fixtures/baseFixture';
import loginData from '../test-data/loginData.json';

test.describe('Login Test', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
    });

    test('valid Login', async({loginPage, dashboardPage})=>{
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
        await expect(dashboardPage.dashboardTitle).toHaveText('Dashboard');
    });

    test('Invalid login', async ({ loginPage }) => {
        await loginPage.login(
            loginData.InvalidUser.username,
            loginData.InvalidUser.password
        );
        await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
    });

});