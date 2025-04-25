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

    let rowList = await this.page.locator('label').all();
    for(const admin of rowList ){
      // await expect(this.page.getByText(admin)).toBeVisible();
      const text = await admin.textContent();
      console.log(text);
    }
  
   }
}