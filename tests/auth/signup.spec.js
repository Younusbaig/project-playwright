const {test, expect} = require('@playwright/test');
const { Signup } = require('../../page/signup');
const { createNewUser } = require('../../utils/testDataFactory');





test("Successfully created account", async ({page}) => {
    const user = createNewUser();
    const signUpPage = new Signup(page);
    await signUpPage.goto();
    await page.waitForLoadState('networkidle');
    await signUpPage.createAccount(user.email, user.password);
    const accountVerify = page.getByTestId('button-account-menu');
    await expect(accountVerify).toContainText(user.email);
    await expect(page).toHaveURL('https://test-ecommerce-store--muhammadbaig199.replit.app/');
})

test("should show error when signing up with an already-registered email", async ({page, request}) => {
    const user = createNewUser();
    await request.post('https://test-ecommerce-store--muhammadbaig199.replit.app/api/auth/signup', {
    data: {
      email: user.email,
      password: user.password,
    }
  });
    const signUpPage = new Signup(page);
    await signUpPage.goto();
    await page.waitForLoadState('networkidle');
    await signUpPage.createAccount(user.email, user.password);
    const validationError = page.getByTestId('text-auth-error');
    await expect(validationError).toHaveText("That email is already registered. Try signing in instead.");

} )




