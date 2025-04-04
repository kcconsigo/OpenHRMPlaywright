const { expect } = require('@playwright/test');

exports.PimPage = class PimPage {

       /**
   * @param {import('@playwright/test').Page} page
   */
       constructor(page) {
        this.page = page;
        this.pimmenu = page.locator('.oxd-main-menu-item');
        this.addempTab = page.locator('.oxd-topbar-body-nav-tab');
        this.addEmpFirstName = page.locator('.orangehrm-firstname');
        this.addEmpMidName = page.locator('.orangehrm-middlename');
        this.addEmpLastName = page.locator('.orangehrm-lastname');
        this.addEmpID = page.locator('.oxd-input');
        this.addEmpbuttonSave = page.locator('//button[@type="submit"]');
        this.addEmpNationalityField = page.locator('.oxd-select-text.oxd-select-text--active');
        this.addEmpMaritalStatusField = page.locator('.oxd-select-text.oxd-select-text--active');
        this.addEmpInfoSave = page.locator('//button[@type="submit"]');
        this.successfullyMsg = page.getByText('SuccessSuccessfully Saved×');
        this.listEmpNavTab = page.locator('.oxd-topbar-body-nav-tab');
        this.listEmployeeName = page.locator('.oxd-autocomplete-text-input');
        this.listEmployeeNameSelect = page.locator('oxd-autocomplete-dropdown');
        this.listEmpSearchbtn = page.locator('//button[@type="submit"]');
        this.editEmplistbtn = page.locator('.oxd-icon-button');
        this.emplistdisplayTable = page.locator('.oxd-table.orangehrm-employee-list');
        this.buttonEmpInfo = page.locator(".oxd-button");
    }

    async PimTab(){
        await this.pimmenu.nth(1).click();
        
    }
    async addEmpTab(){
        await this.addempTab.nth(2).click();
        await this.page.waitForTimeout(2000);
    }
    async addEmployeeDetails(firstName, middleName, lastName, empID, nationality, maritalstatus){
        await this.addEmpFirstName.fill(firstName);
        await this.addEmpMidName.fill(middleName);
        await this.addEmpLastName.fill(lastName);
        await this.addEmpID.nth(4).fill(empID);
        await expect(async () => {
            await this.addEmpbuttonSave.click({timeout: 1000});
            
        }).toPass();
        await expect(this.successfullyMsg).toBeVisible();
        await this.addEmpNationalityField.nth(0).click();       
        await this.page.getByRole('option', { name: nationality }).click();
        await this.addEmpMaritalStatusField.nth(1).click();
        await this.page.getByRole('option', { name: maritalstatus }).click();
        await this.addEmpInfoSave.nth(1).click();
    }
    async employeeListlandingTab(firstName){
        await this.pimmenu.nth(1).click();
        await this.listEmpNavTab.nth(1).click();
        await this.listEmployeeName.getByPlaceholder('Type for hints...').nth(0).fill(firstName);
        const Empnames = this.listEmployeeNameSelect.getByRole('option', { name: firstName });
        for(let i = 0; i < Empnames; i++){
            if(await Empnames.toBeVisible()){
                await Empnames.nth(i).click();
                return Empnames;
            }  
            return i;          
        }
        await this.listEmpSearchbtn.click();
        await this.editEmplistbtn.nth(3).click();
    }
    
}