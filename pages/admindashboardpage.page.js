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
    const adminCheckBox = await this.page.getByRole('row', { name: UserName }).locator('label').first().check();
    const rowsUsername = await adminCheckBox.count();
    for(let i = 0; i < rowsUsername; i++){
        console.log(await adminCheckBox.nth(i).textContent());
        if( await adminCheckBox.locator('label').isVisible())
            {
                await adminCheckBox.locator('label').first().check();
                adminTable--;
                break;
            }
        }

   }
}