const mysql = require('mysql')
const db = mysql.createConnection({
    host: '127.0.0.1',
    user :'root',
    password: '123456',
    socketPath: '/tmp/mysql.sock',
    database: "test",
})
db.connect()
const sql = "SELECT * FROM kevin"
// 查询
// 菜鸟文档：https://www.runoob.com/nodejs/nodejs-mysql.html
db.query(sql,(err,result) => {
    if(err) return console.log('err info', err)
    console.log('result',result)
})
db.end()
