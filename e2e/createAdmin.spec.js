const {test, expect} = require ('@playwright/test');
const { LoginPage } = require('../pages/loginpage.page');
const { AdminPage } = require('../pages/adminpage.page');

const credentials = JSON.parse(JSON.stringify(require("../utils/credentials.json")));
const admindetails = JSON.parse(JSON.stringify(require("../utils/admindetails.json")));

test.describe('Login Page', () => {
  for(const admindetailspage of admindetails){
    test(`should allow me to create Admin ${credentials.validCredentials.username}, ${credentials.validCredentials.password}, ${admindetailspage.EmpName}, ${admindetailspage.UserName},${admindetailspage.Password},${admindetailspage.ConfirmPassword}`, async ({ page }) => {
      const loginpage = new LoginPage(page);
      await loginpage.gotoLogin();
      await loginpage.loginCredentials(credentials.validCredentials.username, credentials.validCredentials.password);
      await loginpage.loginBtn();
      const adminpage = new AdminPage(page);
      await adminpage.AdminTab();
      await adminpage.selectUserRoleAndUserStatus();
      await adminpage.createNewEmployeeInputTextFields(admindetailspage.EmpName, admindetailspage.UserName, admindetailspage.Password, admindetailspage.ConfirmPassword);
      await adminpage.clickSavebtn();
      await loginpage.logoutItemBtn();
      await loginpage.logoutBtn();
    });
  }
});