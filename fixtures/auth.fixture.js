const { test: base, expect } = require('@playwright/test');
const { Login } = require('../page/login');
const users = require('../data/users');

const test = base.extend({
    authenticatedPage: async ({ page }, use) => {

        const login = new Login(page);

        await login.goto();
        await login.signIn(
            users.validUser.email,
            users.validUser.password
        );

        await expect(page).toHaveURL(
            'https://test-ecommerce-store--muhammadbaig199.replit.app/'
        );

        const verifyAccount = page.getByTestId('button-account-menu');

        await expect(verifyAccount).toContainText(
            users.validUser.email
        );

        await use(page);
    }
});

module.exports = { test, expect };