const moment = require('moment-timezone');

exports.reportTime = function () {
    return moment().tz("Europe/Warsaw").format('YYYY_MM_DD_HH_mm_ss');
}

exports.timestamp = function() {
    return moment().tz("Europe/Warsaw");
}