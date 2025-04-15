const {test, expect} = require ('@playwright/test');
const { LoginPage } = require('../pages/loginpage.page');
const { PimPage } = require('../pages/pimpage.page');

const credentials = JSON.parse(JSON.stringify(require("../utils/credentials.json")));
const pimdetails = JSON.parse(JSON.stringify(require("../utils/pimdetails.json")));
  for (const pimdetailspage of pimdetails){
  test(`should allow me to create Pim Employees ${credentials.validCredentials.username},${credentials.validCredentials.password}, ${pimdetailspage.firstName}, ${pimdetailspage.middleName}, ${pimdetailspage.lastName}, ${pimdetailspage.empID},${pimdetailspage.nationality[2]}, ${pimdetailspage.maritalstatus[1]},`, {tag: '@RegressionTesting'}, async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.gotoLogin();
    await loginpage.loginCredentials(credentials.validCredentials.username, credentials.validCredentials.password);
    await loginpage.loginBtn();

    const pimpage = new PimPage(page);
    await pimpage.PimTab();
    await pimpage.addEmpTab();
    await pimpage.addEmployeeDetails(pimdetailspage.firstName, pimdetailspage.middleName, pimdetailspage.lastName, pimdetailspage.empID, pimdetailspage.nationality[2],pimdetailspage.maritalstatus[1]);
    await pimpage.employeeListlandingTab(pimdetailspage.firstName);
    await loginpage.logoutItemBtn();
    await loginpage.logoutBtn();
  });
};


