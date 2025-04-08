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
    // await page.getByRole('row', { name: ' Dranreb Admin Robert James' }).click();
    // await page.getByRole('row', { name: ' Dranreb Admin Robert James' }).locator('label').click();
    // await page.getByRole('row', { name: ' Yoo Nah Admin Ronaldo Gibbs' }).click();
    // await page.getByRole('row', { name: ' Yoo Nah Admin Ronaldo Gibbs' }).locator('label').click();
    const adminCheckBox = await this.page.getByRole('row', { name: UserName }).locator('label').first().check();
    const rowsUsername = await adminCheckBox.count();
    // const adminCheckBox2 = await this.page.getByRole('row', { name: ' Yoo Nah Admin Ronaldo Gibbs' }).locator('label').click();
    for(let i = 0; i < rowsUsername; i++){
        // const check = await adminCheckBox.nth(i).textContent();
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