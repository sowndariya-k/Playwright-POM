import type { Page, Locator } from '@playwright/test';
export class DashboardPage {
    readonly page:Page;
    readonly dashboardTitle: Locator;
    readonly quickLaunch: Locator;
    readonly timeAtWorkCard: Locator;
    readonly profileMenu: Locator;
    readonly logout: Locator;

    constructor(page:Page){
        this.page=page;
        this.dashboardTitle=page.locator('h6');
        this.quickLaunch = page.locator("//p[normalize-space()='Quick Launch']");
        this.timeAtWorkCard = page.locator("//p[normalize-space()='Time at Work']");
        this.logout=page.locator("//a[normalize-space()='Logout']");
        this.profileMenu=page.locator("//p[@class='oxd-userdropdown-name']");
    }

    async logoutbtn(){
        await this.profileMenu.click();
        await this.logout.click();
    }
}