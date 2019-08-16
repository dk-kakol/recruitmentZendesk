var minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const env = args.env;

exports.env = env;
