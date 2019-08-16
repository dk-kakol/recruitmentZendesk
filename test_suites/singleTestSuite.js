const createTestCafe = require('testcafe');
const fs = require('fs');

const dotenv = require('../src/utilities/dotEnvObject');
const moment = require('../src/utilities/timestamp');

let testcafe = null;
let timestamp = moment.reportTime();
let reportName = 'report-' + timestamp + '.html';
let reportPath = 'reports/' + reportName;
let stream = fs.createWriteStream(reportPath);
let screenshotsPath = 'report-' + timestamp + "/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png";

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['tests/leadTest.js'])
            .reporter(['spec', {
                name: 'html',
                output: stream
            }])
            .screenshots('reports', true, screenshotsPath)
            .browsers(['chrome'])
            .run({
                skipJsErrors: true,
                selectorTimeout: 10000,  //to sprawdzić czy nie trzeba zwiększyć/zmniejszyć
                quarantineMode: false //docelowo na true
            });
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });