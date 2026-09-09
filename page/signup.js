class Signup {


    constructor(page){


        this.page = page;
        this.signup = page.getByTestId('nav-signup-btn');
        this.fullName = page.locator('#signup-name');
        this.email = page.locator('#signup-email');
        this.password = page.locator('#signup-password');
        this.confirmPassword = page.locator('#signup-confirm');
        this.signUpTerms = page.locator('#signup-terms');
        this.createAccountBtn = page.getByTestId('signup-submit-btn');

    }

    async goto(){
        await this.page.goto("file:///Users/younus/Downloads/qa-practice-shop.html");
    }

    async createAccount(name, email, password){
        await this.signup.click();
        await this.fullName.fill(name);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
        await this.signUpTerms.click();
        await this.createAccountBtn.click();


    }

}

module.exports = { Signup }