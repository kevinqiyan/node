const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
require('./db/index')
// 路由
// const home = require('./routes/home');

app.get('/',(req,res) => {
    res.send('hello world')
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})

app.use('/home',home)