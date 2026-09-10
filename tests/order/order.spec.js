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
    const count = await order.orderCount.count();
    expect(count).toBe(9); 



})
