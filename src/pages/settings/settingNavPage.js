import { Selector, t } from 'testcafe';

export default class settingNavPage {
    constructor() {
        this.lead = Selector('a').withAttribute('href', '/settings/leads');
    }

    async clickMenuLeads() {
        await t.click(this.lead);
    }
}