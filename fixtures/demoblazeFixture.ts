import {test as base, expect} from '@playwright/test';
import {DemoLoginPage} from '../pages/Demopage/DemoLoginPage'
import {DemoDashboardPage} from '../pages/Demopage/DemoDashboardPage'
import {DemoCartPage} from '../pages/Demopage/DemoCartPage'
type Fixtures ={
    loginPage: DemoLoginPage;
    dashboardPage: DemoDashboardPage;
    cartPage: DemoCartPage;
}

export const test=base.extend<Fixtures>({
    loginPage: async({page},use) =>{
        await use(new DemoLoginPage(page));
    },
    dashboardPage: async({page},use) =>{
            await use(new DemoDashboardPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new DemoCartPage(page));
    }
});
export {expect};