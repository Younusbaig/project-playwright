const { test, expect } = require('../../fixtures/auth.fixture');
const { Order } = require('../../page/order');
const { shippingDetails } = require('../../data/orderData');
const users = require('../../data/users')






test('create a happy order flow', async ({authenticatedPage})=> {

    const order = new Order(authenticatedPage);
    await order.selectProduct();
    await order.checkoutOrder();
    await order.shippingProduct(shippingDetails);
    await order.submitOrder();
     await expect(
        authenticatedPage.getByText('It is on its way.')
    ).toBeVisible();
})


test.only('count orders in order history', async ({authenticatedPage})=> {
    const order = new Order(authenticatedPage);
    await order.orderHistory();
    await expect(order.orderCount.first()).toBeVisible()
    const beforeCount = await order.orderCount.count();
    await order.brandButton();
    // Create a new order
    await order.selectProduct();
    await order.checkoutOrder();
    await expect(
    authenticatedPage.getByTestId('button-account-menu')
).toContainText(users.validUser.email);
    await order.shippingProduct(shippingDetails);
    await order.submitOrder();
    
    await expect(
    authenticatedPage.getByText('It is on its way.')
).toBeVisible();
    // Go back to order history
    await order.orderHistory();
    await expect(order.orderCount.first()).toBeVisible();

    await expect(order.orderCount).toHaveCount(beforeCount + 1);



})


test('search product', async ({authenticatedPage}) => {

    const order = new Order(authenticatedPage);
    await order.search();
    const verifyProduct = authenticatedPage.getByTestId('text-product-name');
    await expect(verifyProduct).toHaveText('Arc Ceramic Carafe');

})



