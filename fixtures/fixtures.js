import { test as fixture } from '@playwright/test'
const { LoginPage } = require('../pages/loginpage.page');
const { PimPage } = require('../pages/pimpage.page');

const test = fixture.extend({
	loginpage: async ({ page }, use) => {
		await use(new LoginPage(page))
	},
	pimpage: async ({ page }, use) => {
		await use(new PimPage(page))
	}
})
export default test