const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    debug: false,
    host: '127.0.0.1',
    port: '3306',
    user: 'rbasu_cs355fl20',
    password: 'ba4826073',
    database: 'rbasu_cs355fl20'
});

module.exports = dbConnection;
