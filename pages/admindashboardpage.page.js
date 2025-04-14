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
   async admindetailsRecords(UserName){  
    await this.page.mouse.wheel(0, 100);        
    await this.page.mouse.move(20, 40);
   //  await this.page.getByRole('row', { name: ' Dranreb Admin Robert James' }).locator('label').click();
   //  await this.page.getByRole('row', { name: ' Yoo Nah Admin Ronaldo Gibbs' }).locator('label').click();
   //  await this.page.locator("//div[@class='orangehrm-paper-container']//div[4]//div[1]//div[2]//div[contains(text(),'"+UserName+"')]");

   // await page.getByRole('cell', { name: UserName }).click();
   // await page.getByRole('cell', { name: 'Yoo Nah' }).click();
   // await page.getByRole('cell', { name: 'Alexandr5afde' }).click();

    for(const row of await this.page.getByRole('row', { name: UserName }).locator('label').all())
         console.log(await row.textContent())
         // const rowNames = await page.getByRole('cell', { name: UserName })
         // for (const row of rowNames.getByRole('listitem').all())
         //    console.log(await row.textContent())
         
    
    //div[@class='oxd-table-cell oxd-padding-cell']//following::div[@class='oxd-table-card-cell-checkbox']//following::label//input[@type='checkbox']//ancestor::div[@role='rowgroup']//child::div[contains(text(), 'Dranreb')]
    // const adminCheckBox = await this.page.getByRole('row', { name: UserName }).locator('label').first().check();
    // const rowsUsername = await adminCheckBox.count();
    // for(let i = 0; i < adminCheckBox; i++){
    //     await adminCheckBox.locator('label').nth(i).first().check();
    //     if(adminCheckBox.isVisible())
    //         {
    //             await adminCheckBox.locator('label').nth(i).first().check();
    //             break;
    //         }
    //     } return adminCheckBox;
   }
}