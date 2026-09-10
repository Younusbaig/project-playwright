class Login {

    constructor(page){
        this.page = page;
        this.username = page.getByTestId('input-auth-email');
        this.password = page.getByTestId('input-auth-password');
        this.submit = page.getByTestId("button-auth-submit");
    }


async goto(){
    await this.page.goto('https://test-ecommerce-store--muhammadbaig199.replit.app/sign-in');
}

async signIn(email, password){
    await this.username.fill(email);
    await this.password.fill(password);
    await this.submit.click();
}
}


module.exports = { Login }