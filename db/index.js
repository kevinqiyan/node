const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "test",
});
db.connect(() => {
  console.log('链接成功')
});


// const sql = "SELECT * FROM kevin";
// 查询
// 菜鸟文档：https://www.runoob.com/nodejs/nodejs-mysql.html
// db.query(sql, (err, result) => {
//   if (err) return console.log("err info", err);
//   console.log("result", result);
// });

// 新增
// const add = "INSERT INTO kevin(id,name,url,alexa,country) VALUES(0,?,?,?,?)";
// const para = ["凯温测试","http://www.baidu.com","123456","CN"]
// db.query(add,para,(err,result) => {
//     if(err) return console.log('insert err',err.message)
//     console.log('insert id:',result)
// })

// 更新
// const update = "UPDATE kevin SET name = ?, url = ? WHERE id = ?";
// const params = ["kevin","guokwa.com",1];
// db.query(update,params,(err,result) => {
//     if(err) return console.log('update err',err.message);
//     console.log('update result', result);
// })

// 删除
// const deleted = "DELETE FROM kevin where id=2";
// db.query(deleted,(err,result) => {
//     if(err)return console.log('deleted err',err.message);
//     console.log('delete result',result)
// })

// db.end();
