const {test, expect} = require ('@playwright/test');
const { LoginPage } = require('../pages/loginpage.page');
const { AdminPage } = require('../pages/adminpage.page');

const credentials = JSON.parse(JSON.stringify(require("../utils/credentials.json")));

test.describe('Login Page', () => {
  test(`should allow me to enter valid credentials ${credentials.validCredentials.username}, ${credentials.validCredentials.password}`, async ({ page }) => {

    const loginpage = new LoginPage(page);
    await loginpage.gotoLogin();
    await loginpage.loginCredentials(credentials.validCredentials.username, credentials.validCredentials.password);
    await loginpage.loginBtn();
  });

  test(`should not allow me to enter invalid credentials ${credentials.invalidCredentials.username}, ${credentials.invalidCredentials.password}`, async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.gotoLogin();
    await loginpage.loginCredentials(credentials.invalidCredentials.username, credentials.invalidCredentials.password);
    await loginpage.loginBtn();
    await loginpage.verifyerr_msg();
    await loginpage.logoutItemBtn();
    await loginpage.logoutBtn();
  });
});