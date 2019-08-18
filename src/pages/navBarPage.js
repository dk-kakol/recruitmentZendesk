import { Selector, t } from 'testcafe';
import constants from '../../constants/langs';
import document from '../utilities/document';

export default class navigationBarPage {
    constructor() {
        this.add = Selector('li').withAttribute('id', 'global-add').find('button');
        this.addLeadOption = Selector('div').withAttribute('data-role', 'menu-item').find('div').withText(constants.MENU_ADD_LEAD);
        this.settings = Selector('a').withAttribute('data-original-title', 'Settings');
        this.settingsOption = Selector('a').withAttribute('href', '/settings/profile');
        this.loadingBar = Selector('div').withAttribute('class', /.*NavigationProgressBar--bar/);
    }

    async clickAddButton() {
        await t.click(this.add);
    }

    async clickAddLead() {
        await t.click(this.addLeadOption);
    }

    async clickSettingsButton() {
        await t.click(this.settings);
    }

    async clickSettingsOption() {
        await t.click(this.settingsOption);
    }

    async verifyLoadingBar() {
        await t.expect(this.loadingBar.getStyleProperty('width')).eql('1025px', 'Loading takes more then 40sec',  { timeout: 40000 });
    }
}