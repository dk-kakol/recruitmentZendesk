import { ClientFunction } from 'testcafe';

exports.getUrl = ClientFunction(() => document.location.href);