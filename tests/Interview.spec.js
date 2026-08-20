const {test, expect} = require('@playwright/test');
const path = require('path');
const loginData = require('../utils/Login.json')




test.describe.configure({mode: 'parallel'});

test('Automate login page', async ({page}) => {


    await page.goto("https://the-internet.herokuapp.com/login");
    
    await page.locator('#username').fill(loginData.validUser.username);
    await page.locator('#password').fill(loginData.validUser.password);

    await page.getByRole('button', {name: 'Login'}).click();
    const successMessage = page.getByText("Welcome to the Secure Area. When you are done click logout below.");
    await expect(successMessage).toBeVisible();
})




test('verify checkboxes and uncheck', async({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const checkbox = page.locator('#checkboxes input[type="checkbox"]')
    
    const checkbox1 = checkbox.nth(0);
    const checkbox2 = checkbox.nth(1);
    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).toBeChecked();

    await checkbox1.click();
    await expect(checkbox1).toBeChecked();
    
} )


test('assert dropdown', async({page}) => {

    await page.goto("https://the-internet.herokuapp.com/dropdown");

    await page.locator('#dropdown').selectOption('2');
    await expect(page.locator('#dropdown')).toHaveValue('2');
  

} )

test('login and logout flow', async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.locator('#username').fill("tomsmith");
  await page.locator('#password').fill("SuperSecretPassword!");
  await page.getByRole('button', { name: 'Login' }).click();

  const logoutButton = page.getByRole('link', { name: 'Logout' });
  await logoutButton.click();

  await expect(page.locator('#username')).toBeVisible();
});

test('mock API response', async ({ page }) => {
  // Step 1: Set up the interception BEFORE navigating
 await page.route('**/some-api/**', async (route) => {
    await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({status: 'success', message: 'mocked'}),

    })
 })

   await page.goto('https://the-internet.herokuapp.com/');

});

test('trigger the js button', async ({page})=> {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialog) =>{
        await dialog.accept();
    })
    await page.getByRole('button', {name: 'Click for JS Confirm'}).click();
    
    const result = page.locator('#result');
    await expect(result).toHaveText('You clicked: Ok');
})

