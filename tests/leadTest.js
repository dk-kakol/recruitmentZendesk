import { Selector, t } from 'testcafe'; //can be deleted?

import fixture from '../src/fixtures/zendeskSellFixture';
import testCases from '../src/utilities/readData';
import auth from '../src/utilities/auth';
import constants from '../constants/langs';

import LoginPage from '../src/pages/loginPage';
import NavigationBarPage from '../src/pages/navBarPage';
import AddLeadPage from '../src/pages/addLeadPage';
import LeadDetailsPage from '../src/pages/leadDetailsPage';
import SettingLeadPage from '../src/pages/settings/settingLeadPage';

const config = fixture();
const lp = new LoginPage();
const np = new NavigationBarPage();
const alp = new AddLeadPage();
const ldp = new LeadDetailsPage();
const slp = new SettingLeadPage();

const tC = testCases.data('data/leadData.json');
const pt = tC['positiveTesting'];

pt.forEach((data) => {
    test('Lead Test: ' + data.caseName, async t => {
        // Step 1: Log into the Zendesk Sell web application. 
        let account = auth.getAccount(data.mailKey, data.passwordKey);
        await lp.login(account.email, account.password);
        await t.wait(30000); 

        // Step 2: Create a new Lead. Check that the Lead status visible on the details page is set to "New" 
        await np.clickAddButton();
        await np.clickAddLead();
        await alp.createLead({
            lastName: data.lastName
        });
        await ldp.verifyLeadStatus(constants.NEW_STATUS);
        
        // Step 3: Go to Settings → Leads → Lead statuses and change the name of the "New" status to some different name
        await np.clickSettingsButton();
        await np.clickSettingsOption();
        await slp.nav.clickMenuLeads();
        await slp.clickLeadStatusesTab();
        await slp.clickEditStatus(constants.NEW_STATUS);

        // Step 4: The status name change is reflected in the Lead details page
        await t.debug();
    });
});
