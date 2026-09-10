class Order {

    constructor(page){
        this.page = page;
        this.product = page.getByTestId('link-product-name-6');
        this.quantity = page.getByTestId('button-increase-quantity');
        this.addToCart = page.getByTestId('button-add-to-cart');
        this.cart = page.getByTestId('link-cart');
        this.checkout = page.getByTestId('button-checkout');
        this.shippingName = page.getByTestId('input-shipping-name');
        this.shippingAddress = page.getByTestId('input-shipping-address');
        this.shippingCity = page.getByTestId('input-shipping-city');
        this.postalCode = page.getByTestId('input-shipping-postal-code');
        this.submit = page.getByTestId('button-place-order');
        this.orderCount = page.locator('[data-testid^="card-order-"]');
        this.navButton = page.getByTestId('button-account-menu');
        this.ordersLink = page.getByTestId('link-orders');


    }


    async goto(){
        await this.page.goto('https://test-ecommerce-store--muhammadbaig199.replit.app/sign-in');
    }

    async selectProduct(){
        await this.product.click();
        await this.quantity.click();
        await this.addToCart.click();
    }

    async checkoutOrder(){
        await this.cart.click();
        await this.checkout.click();
    }

    async shippingProduct(data){
        await this.shippingName.fill(data.name);
        await this.shippingAddress.fill(data.address);
        await this.shippingCity.fill(data.city);
        await this.postalCode.fill(data.postalCode); 
    }

    async submitOrder(){
        await this.submit.click();
    }


    async orderHistory(){
        await this.navButton.click();
        await this.ordersLink.click();

    }
}

module.exports = { Order }