const { expect, chromium } = require('@playwright/test');

exports.LoginPage = class LoginPage {

       /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page;
        this.userName = page.getByRole('textbox', { name: 'Username' });
        this.userPassword = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.logoutItem = page.locator('.oxd-userdropdown');
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
        this.error_msg = page.getByRole('alert').locator('div').filter({ hasText: 'Invalid credentials' });
    }   

    async gotoLogin(){
        const browser = await chromium.launch();
        const context = await browser.newContext();
        // const page = await context.newPage();
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await browser.close();
    }
    async loginCredentials(username, password){
        await this.userName.fill(username);
        await this.userPassword.fill(password);
    }
    async loginBtn(){
        await this.loginButton.click();
    }
    async logoutItemBtn(){
        await this.logoutItem.click({ timeout: 3000 });
    }
    async logoutBtn(){
        await this.logoutButton.click({ timeout: 3000 });
    }
    async verifyerr_msg(){
        return await expect(this.error_msg).toHaveText('Invalid credentials');
    }
}