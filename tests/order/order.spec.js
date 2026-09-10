const { test, expect } = require('../../fixtures/auth.fixture');
const { Order } = require('../../page/order');






test('create a happy order flow', async ({authenticatedPage})=> {

    const order = new Order(authenticatedPage);
    await order.selectProduct();
    await order.checkoutOrder();
    await order.shippingProduct();
    await order.submitOrder();
     await expect(
        authenticatedPage.getByText('It is on its way.')
    ).toBeVisible();
})
