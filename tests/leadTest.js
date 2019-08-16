import { Selector, t } from 'testcafe'; //can be deleted?

import fixture from '../src/fixtures/zendeskSellFixture';
import testCases from '../src/utilities/readData';
import auth from '../src/utilities/auth';
import LoginPage from '../src/pages/loginPage';

const config = fixture();
const lp = new LoginPage();

const tC = testCases.data('data/leadData.json');
const pt = tC['positiveTesting'];

pt.forEach((data) => {
    test('Lead Test: ' + data.caseName, async t => {
        // Step 1: Log into the Zendesk Sell web application. 
        let account = auth.getAccount(data.mailKey, data.passwordKey);
        await lp.login(account.email, account.password);
        
        // Step 2: Create a new Lead. Check that the Lead status visible on the details page is set to "New" 
        // Step 3: Go to Settings → Leads → Lead statuses and change the name of the "New" status to some different name
        // Step 4: The status name change is reflected in the Lead details page
        console.log("a");
        await t.debug();
    });
});
