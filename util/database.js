const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: '#JzJT3Min100$ml'
});

module.exports = pool.promise();