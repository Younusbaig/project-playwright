const { test, expect } = require('../../fixtures/auth.fixture');
const { Order } = require('../../page/order');
const { shippingDetails } = require('../../data/orderData');






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


test('count orders in order history', async ({authenticatedPage})=> {
    const order = new Order(authenticatedPage);
    await order.orderHistory();
    await authenticatedPage.waitForLoadState('networkidle');
    const beforeCount = await order.orderCount.count();
    await order.brandButton();
    // Create a new order
    await order.selectProduct();
    await order.checkoutOrder();
    await order.shippingProduct(shippingDetails);
    await order.submitOrder();
    
    await expect(
    authenticatedPage.getByText('It is on its way.')
).toBeVisible();
    // Go back to order history
    await order.orderHistory();
    await authenticatedPage.waitForLoadState('networkidle');
    const afterCount = await order.orderCount.count();

    await expect(order.orderCount).toHaveCount(beforeCount + 1);



})
