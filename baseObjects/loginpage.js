export const userName = page.getByRole('textbox', { name: 'Username' });
export const userPassword = page.getByRole('textbox', { name: 'Password' });
export const loginButton = page.getByRole('button', { name: 'Login' });
export const logoutItem = page.locator('.oxd-userdropdown');
export const logoutButton = page.getByRole('menuitem', { name: 'Logout' });
export const error_msg = page.getByRole('alert').locator('div').filter({ hasText: 'Invalid credentials' });