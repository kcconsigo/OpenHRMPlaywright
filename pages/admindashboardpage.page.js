const { expect } = require('@playwright/test');

exports.AdminDashboardPage = class AdminDashboardPage{
    /**
    * @param {import('@playwright/test').Page} page
    */
   constructor(page){
      this.page = page;
      this.adminmenu = page.locator(".oxd-main-menu-item");
      this.colCheckbox = page.locator('.oxd-table-cell.oxd-padding-cell');
   }
   async AdminTabPage(){
      await this.adminmenu.nth(0).click();
  }
   async admindetailsRecords(){  
    await this.page.mouse.wheel(0, 100);        
    await this.page.mouse.move(20, 40);
    await this.page.getByRole('row', { name: ' Dranreb Admin Robert James' }).locator('label').check();
    await this.page.getByRole('row', { name: ' Yoo Nah Admin Ronaldo Gibbs' }).locator('label').check();

    let adminList = ['Dranreb', 'Yoo Nah']
    for(const admin of adminList ){
      await expect(this.page.getByText(admin)).toBeVisible();

    }
   }
}