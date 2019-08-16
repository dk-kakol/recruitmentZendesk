import { Selector, t } from 'testcafe';

export default class leadDetailsPage {
    constructor() {
        this.leadStatus = Selector('span').withAttribute("class", "lead-status");
    }

    async verifyLeadStatus(expectedStatus) {
        await t.expect(this.leadStatus.innerText).eql(expectedStatus);
    }
}