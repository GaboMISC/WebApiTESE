const sql = require('mssql')

const sqlConfig = {
    user: 'sa',
    password: 'sasa',
    database: 'FormatosTESE',
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
}

sql.connect(sqlConfig)

module.exports = sql

//const result = sql.query`select * from mytable where id = ${value}`
//console.dir(result)

