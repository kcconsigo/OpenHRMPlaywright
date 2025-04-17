const { expect } = require('@playwright/test');
import * as adminlocators from "../locators/adminpagelocators.json";

exports.AdminPage = class AdminPage{
    /**
    * @param {import('@playwright/test').Page} page
    */
 constructor(page){
     this.page = page;
     this.userRoleField = page.getByRole('option', { name: 'Admin' });
     this.userStatusField = page.getByRole('option', { name: 'Enabled' });
     this.successfullyMsg = page.getByText('SuccessSuccessfully Saved×');
     this.successfullyEditInfoMsg = page.getByText('SuccessSuccessfully Updated×');
     this.successfullyDeletedUser = page.getByText('SuccessSuccessfully Deleted×');
     this.NorecordsFound = page.getByText('InfoNo Records Found×');
   }
   async AdminTab(){
    await this.page.locator(adminlocators.adminmenulocator.adminmenu).nth(0).click();
    await this.page.locator(adminlocators.adminmenulocator.empAddButton).nth(2).click();
   }
   async selectUserRoleAndUserStatus(){
    await this.page.locator(adminlocators.adminmenulocator.userRoleSelectOptions).nth(0).click();
    await this.userRoleField.click();
    await this.page.locator(adminlocators.adminmenulocator.userStatus).nth(1).click();
    await this.userStatusField.click();
   }
 
   async createNewEmployeeInputTextFields(EmpName, UserName, Password, ConfirmPassword){
     await this.page.locator(adminlocators.adminmenulocator.userEmpName).getByPlaceholder('Type for hints...').fill(EmpName);
    const EmpNameSelectList = this.page.locator(adminlocators.adminmenulocator.userEmpNameSelect).getByRole('option', { name: EmpName });
     for(let i = 0; i < EmpNameSelectList; ++i )
     {
       text = await this.userEmpNameSelect.nth(i).textContent();
       if(text === EmpNameSelectList)
       {
         await this.EmpNameSelectList.nth(i).click();
         break;
       }
       return EmpNameSelectList;
     }
    //  await this.userEmpNameSelect.getByRole('option', { name: EmpName }).click();
     await this.page.locator(adminlocators.adminmenulocator.userEmpNameSelect).getByRole('option', { name: EmpName }).click()
     await this.page.locator(adminlocators.adminmenulocator.username).nth(1).fill(UserName);
     await this.page.locator(adminlocators.adminmenulocator.password).nth(2).fill(Password);
     await this.page.locator(adminlocators.adminmenulocator.comfirmPassword).nth(3).fill(ConfirmPassword);
   }
   async clickSavebtn(){
    await expect(async () => {
        await this.page.locator(adminlocators.adminmenulocator.submitBtbnSave).nth(0).click();
        console.log(await this.successfullyMsg.textContent());
    }).toPass();
   }
 
   async loadingSpinner(){
     await expect(async () => {
       const webLoadingSpinnerLocator = this.page.locator('.oxd-loading-spinner-container');
       await webLoadingSpinnerLocator.waitFor();
     }).toPass();
 
   }
 }