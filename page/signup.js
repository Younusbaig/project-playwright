class Signup {


    constructor(page){


        this.page = page;
        this.email = page.getByTestId('input-auth-email');
        this.password = page.getByTestId('input-auth-password');
        this.createAccountBtn = page.getByTestId('button-auth-submit');
    }

    async goto(){
        await this.page.goto("https://test-ecommerce-store--muhammadbaig199.replit.app/sign-up");
    }

    async createAccount(email, password){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.createAccountBtn.click();


    }

}

module.exports = { Signup }