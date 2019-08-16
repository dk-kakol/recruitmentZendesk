import { Selector, t } from 'testcafe';

export default class navigationBarPage {
    constructor() {
        this.addButton = Selector('li').withAttribute('id', 'global-add').find('button');
    }

    async clickAddButton() {
        await t.click(this.addButton);
    }
}