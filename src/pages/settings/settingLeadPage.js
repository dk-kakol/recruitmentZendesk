import { Selector, t } from 'testcafe';
import SettingNavPage from './settingNavPage';

export default class settingLeadPage {
    constructor() {
        this.nav = new SettingNavPage();
        this.tabs = Selector('ul').withAttribute('id','leads-settings-tabs');
        this.leadStatusesTab = this.tabs.find('a').withAttribute('href', '#lead-status');
        this.statusRows = Selector('span').withAttribute('class', 'named-object-lead').find('div');
        this.statusName = Selector('input').withAttribute('id', 'name');
        this.saveStatusName = Selector('button').withAttribute('class', /.*save/);

    }

    async clickLeadStatusesTab() {
        await t.click(this.leadStatusesTab);
    }

    async clickEditStatus(name) {
        await t.click(this.statusRows.withText(name).find('button').withText('Edit'));
    }

    async editStatusName(oldName, newName) {
        await t.typeText(this.statusName.withAttribute('value', oldName), newName, { replace: true });
        await t.click(this.saveStatusName.filterVisible());
    }

}