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
   async admindetailsRecords(){  
    await this.page.mouse.wheel(0, 100);        
    await this.page.mouse.move(20, 40);
         await this.page.locator('.oxd-table-row > div').first().click();
         let rowList = await this.page.locator('.oxd-table-body > div.oxd-table-card').all();
         for(const admin of rowList ){
         console.log(await admin.textContent());
         }
   }
}