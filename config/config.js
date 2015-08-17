var config = {};

config.db = {
    host: 'mongodb://127.0.0.1:27017/',
    dbname: 'coconut'
};

config.route = {
    get_userinfo_all: 0,
    get_userinfo: 0,
    get_userinfo_basic: 0,
    login: 1
};

config.session = {
    secret: '123456',
    key: 'coconut',
    dbname: 'session'
};

config.server = {
    port: 3303
};

module.exports = config;