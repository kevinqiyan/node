const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user :'root',
    password: '123456',
    socketPath: '/tmp/mysql.sock',
    database: "mysql",
})

db.query("show tables",(err,result) => {
    if(err) return console.log('err info', err)
    console.log('result',result)
})