const { expect } = require('@playwright/test');

exports.AdminDashboardPage = class AdminDashboardPage{
    /**
    * @param {import('@playwright/test').Page} page
    */
   constructor(page){
      this.page = page;
      this.adminmenu = page.locator(".oxd-main-menu-item");
   }
   async AdminTabPage(){
      await this.adminmenu.nth(0).click();
  }
   async admindetailsRecords(UserName){  
    await this.page.mouse.wheel(0, 100);        
    await this.page.mouse.move(20, 40);
   //  await this.page.getByRole('row', { name: UserName }).locator('label').check();
   //  await this.page.getByRole('row', { name: UserName }).locator('label').check();
    let rowList = this.page.locator("//div[@role='row']//following::div[@role='cell']//following::div//following::label//input[@type='checkbox']//ancestor::div[@role='row']//child::div[contains(text(), '"+UserName+"')]")
    for(var x = 0; x < rowList;  x++){
      await this.rowList.nth(x).click()
    }

    let adminList = ['Dranreb', 'Yoo Nah']
    for(const admin of adminList ){
      await expect(this.page.getByText(admin)).toBeVisible();

    }
   }
}