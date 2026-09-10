const {test, expect} = require('@playwright/test');
const { Signup } = require('../../page/signup');
const users = require('../../data/users');





test("Successfully created account", async ({page}) => {
    const signUpPage = new Signup(page);
    await signUpPage.goto();
    await page.waitForLoadState('networkidle');
    await signUpPage.createAccount(users.validUser.email, users.validUser.password);
})

test("invalid data for signup", async ({page, request}) => {
    await request.post('https://test-ecommerce-store--muhammadbaig199.replit.app/api/auth/signup', {
    data: {
      email: users.validUser.email,
      password: users.validUser.password,
    }
  });
    const signUpPage = new Signup(page);
    await signUpPage.goto();
    await page.waitForLoadState('networkidle');
    await signUpPage.createAccount(users.validUser.email, users.validUser.password);
    const validationError = page.getByTestId('text-auth-error');
    await expect(validationError).toHaveText("That email is already registered. Try signing in instead.");

} )




