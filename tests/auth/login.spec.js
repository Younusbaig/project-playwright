const {test, expect} = require('@playwright/test');
const { Login } = require('../../page/login');
require('dotenv').config();
const users = require('../../data/users')





test('successfully login', async ({page}) => {

    const login = new Login(page);
    await login.goto();
    await page.waitForLoadState('networkidle');
    await login.signIn(users.validUser.email, users.validUser.password);
    await page.pause();
    await expect(page).toHaveURL('https://test-ecommerce-store--muhammadbaig199.replit.app/');
    const verifyAccount = page.getByTestId('button-account-menu');
    await expect(verifyAccount).toContainText(users.validUser.email);



})