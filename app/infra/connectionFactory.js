var mysql = require('mysql');

function createDbConnection() {
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123456',
        database: 'loja'
    });
}

module.exports = function() {
    return createDbConnection;
};