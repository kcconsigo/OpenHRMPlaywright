const { expect } = require('@playwright/test');
import * as pimlocators from "../locators/pimpagelocators.json";

exports.PimPage = class PimPage {

       /**
   * @param {import('@playwright/test').Page} page
   */
       constructor(page) {
        this.page = page;
        this.successfullyMsg = page.getByText('SuccessSuccessfully Saved×');
    }
    async PimTab(){
        await this.page.locator(pimlocators.pimmenulocator.pimmenu).nth(1).click();
    }
    async addEmpTab(){
        await this.page.locator(pimlocators.pimmenulocator.addempTab).nth(2).click();
    }
    async addEmployeeDetails(firstName, middleName, lastName, empID, nationality, maritalstatus){
        await this.page.locator(pimlocators.pimmenulocator.addEmpFirstName).fill(firstName);
        await this.page.locator(pimlocators.pimmenulocator.addEmpMidName).fill(middleName);
        await this.page.locator(pimlocators.pimmenulocator.addEmpLastName).fill(lastName);
        await this.page.locator(pimlocators.pimmenulocator.addEmpID).nth(4).fill(empID);
        await expect(async () => {
            await this.page.locator(pimlocators.pimmenulocator.addEmpbuttonSave).click({timeout: 1000});
        }).toPass();
        await expect(this.successfullyMsg).toBeVisible(); 
        await this.page.locator(pimlocators.pimmenulocator.addEmpNationalityField).nth(0).click();     
        await this.page.getByRole('option', { name: nationality }).click();
        await this.page.locator(pimlocators.pimmenulocator.addEmpMaritalStatusField).nth(1).click();
        await this.page.getByRole('option', { name: maritalstatus }).click();
        await this.page.locator(pimlocators.pimmenulocator.addEmpInfoSave).nth(1).click();
    }
    async employeeListlandingTab(firstName){
        await this.page.locator(pimlocators.pimmenulocator.pimmenu).nth(1).click();
        await this.page.locator(pimlocators.listEmpNavTablocator.listEmpNavTab).nth(1).click();
        await this.page.locator(pimlocators.listEmpNavTablocator.listEmployeeName).getByPlaceholder('Type for hints...')
        .nth(0)
        .fill(firstName);
        const Empnames = this.page.locator(pimlocators.listEmpNavTablocator.listEmployeeNameSelect).getByRole('option', { name: firstName });
        for(let i = 0; i < Empnames.count(); i++){
            if(await Empnames.toBeVisible()){
                await Empnames.nth(i).click();
                return Empnames;
            }  
            return i;          
        }
        await this.page.locator(pimlocators.listEmpNavTablocator.listEmpSearchbtn).click();
        await this.page.locator(pimlocators.listEmpNavTablocator.editEmplistbtn).nth(3).click();
    }
    
}