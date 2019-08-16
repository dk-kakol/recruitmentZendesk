import { Selector, t } from 'testcafe';

export default class addLeadPage {
    constructor() {
        this.lastName = Selector('input').withAttribute('placeholder', 'Last Name');
        this.saveAndViewButton = Selector('button').withAttribute('data-action', 'save-and-visit');
    }

    async enterLastName(name) {
        await t.typeText(this.lastName, name);
    }

    async clickSaveAndViewButton() {
        await t.click(this.saveAndViewButton);
    }

    /**
        * 
        * @param {Object} data 
        * @param {string} data.lastName
     */
    async createLead(data) {
        await this.enterLastName(data.lastName);
        await this.clickSaveAndViewButton();
    }
}