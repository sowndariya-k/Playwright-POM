import type { Page, Locator } from '@playwright/test';
export class LoginPage {
    readonly page:Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly loginTitle :Locator;
    readonly errorMessage: Locator;

    constructor (page:Page){
        this.page=page;
        this.username=page.locator("//input[@placeholder='Username']");
        this.password=page.getByRole('textbox', { name: 'Password' });
        this.loginButton=page.getByRole('button', { name: 'Login' });
        this.loginTitle=page.getByRole('heading', { name: 'Login' });
        this.errorMessage=page.locator(".oxd-alert-content-text");
    }

    async navigate(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        {
            waituntil: `domcontentloaded`
        }
    }

    async getLoginTitle(){
        return await this.loginTitle.textContent();
    }

    async login(username: string, password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage(){
        return await this.errorMessage.textContent(); 
    }
}
