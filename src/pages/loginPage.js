import { Selector, t } from 'testcafe';
import NavigationBarPage from './navBarPage';

export default class loginPage {
    constructor() {
        this.emailField = Selector('input').withAttribute('id', "user_email");
        this.passwordField = Selector('input').withAttribute('id', "user_password");
        this.submitButton = Selector('button').withAttribute('class', /.*login-button.*/);
        this.nav = new NavigationBarPage();
    }

    async enterEmail(email) {
        await t.typeText(this.emailField, email);
    }

    async enterPassword(password) {
        await t.typeText(this.passwordField, password);
    }

    async clickSubmitButton() {
        await t.click(this.submitButton);
    }

    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSubmitButton();
        await this.nav.verifyLoadingBar();
    }
}