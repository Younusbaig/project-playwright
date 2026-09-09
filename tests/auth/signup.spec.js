const {test, expect} = require('@playwright/test');
const { Signup } = require('../../page/signup');
const users = require('../../data/users');





test("Successfully created account", async ({page}) => {
    await page.pause();
    const signUpPage = new Signup(page);
    await signUpPage.goto();
    await signUpPage.createAccount(users.validUser.fullName, users.validUser.email, users.validUser.password);
    const welcome = page.getByTestId('nav-username');
    const firstName = users.validUser.fullName.split(' ')[0];
    await expect(welcome).toHaveText(`Hi, ${firstName}`);
})

test("invalid data Error", async ({page}) => {
    await page.pause();
    const signUpPage = new Signup(page);
    await signUpPage.goto();
    await signUpPage.createAccount(users.invalidUser.fullName, users.invalidUser.email, users.invalidUser.password);
    const singupError = page.locator('#err-signup-email');
    await expect(singupError).toHaveText('Enter a valid email address.');
    const passwordError = page.locator('#err-signup-password');
    await expect(passwordError).toHaveText('Password must be 8+ characters with a letter and a number.');
} )




