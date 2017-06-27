var mysql = require('mysql');

function createDbConnection() {
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '123456',
            database: 'loja'
        });
    }

    if (process.env.NODE_ENV.indexOf('test') > -1) {
        return mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '123456',
            database: 'teste'
        });
    }
}

module.exports = function() {
    return createDbConnection;
};