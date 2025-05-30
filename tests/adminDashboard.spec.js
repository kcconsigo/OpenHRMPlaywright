const {test, expect} = require ('@playwright/test');
const { LoginPage } = require('../pages/loginpage.page');
const { AdminDashboardPage } = require('../pages/admindashboardpage.page');

const credentials = JSON.parse(JSON.stringify(require("../utils/credentials.json")));
const admindashboarddetails = JSON.parse(JSON.stringify(require("../utils/admindashboarduser.json")));

test(`should allow me to select Admin details ${credentials.validCredentials.username}, ${credentials.validCredentials.password}`, async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.gotoLogin();
    await loginpage.loginCredentials(credentials.validCredentials.username, credentials.validCredentials.password);
    await loginpage.loginBtn();
    const admindashboardpage = new AdminDashboardPage(page);
    await admindashboardpage.AdminTabPage();
    await admindashboardpage.admindetailsRecords();
    await loginpage.logoutItemBtn();
    await loginpage.logoutBtn();
  });