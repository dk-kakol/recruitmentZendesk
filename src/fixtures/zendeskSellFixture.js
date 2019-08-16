import { ClientFunction } from 'testcafe';

import params from '../utilities/readConsoleParams';
import read from '../../src/utilities/readData';

const environment = params.env === undefined ? 'prod' : params.env;
const configData = read.data('config/zendeskAppConfig.json');
let config = configData[environment];

export default () => {
    fixture `Zendesk Sell App`
        .page `${config.url}`
        .beforeEach( async t => {
            //set new cookies
            const setCookie = ClientFunction((config) => {
                config.cookies.forEach((value) => {
                    document.cookie = value;
                })
            });
            //get current cookies
            const getCookie = ClientFunction(() => {
                return document.cookie;
            });
            await setCookie(config);
            console.log(await getCookie());

        });
    return config;
};