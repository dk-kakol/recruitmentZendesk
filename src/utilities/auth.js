exports.getAccount = function(mailKey, passwordKey) {
    let account = {
        email: process.env[mailKey],
        password: process.env[passwordKey]
    }
    return account;
};