import { readLoginData, LoginUser } from '../../utils/excelReader';
import { test, expect } from '../../fixtures/demoblazeFixture';

const users: LoginUser[] = readLoginData();

console.log('Excel Data:', users);

const validUser = users.find(user => user.type === 'valid');
const invalidUser = users.find(user => user.type === 'invalid');

test.describe('Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
    });

    test('Valid Login', async ({ loginPage, dashboardPage }) => {

        if (!validUser) {
            throw new Error('Valid user not found in loginData.xlsx');
        }

        await loginPage.login(
            validUser.username,
            validUser.password
        );

        await expect(dashboardPage.welcome)
            .toBeVisible({ timeout: 10000 });

        await expect(dashboardPage.welcome)
            .toContainText('Welcome');
    });

    test('Invalid Login', async ({ loginPage }) => {
        if (!invalidUser) {
            throw new Error('Invalid user not found in loginData.xlsx');
        }
        loginPage.page.once('dialog', async dialog => {
            expect(dialog.message()).toBe('Wrong password.');
            await dialog.accept();
        });
        await loginPage.login(
            invalidUser.username,
            invalidUser.password
        );
    });

});