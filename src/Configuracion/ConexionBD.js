const sql = require('mysql')

const sqlConfig = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'FormatosTESE',
    port: 3306
});

sqlConfig.connect()
module.exports = sqlConfig
