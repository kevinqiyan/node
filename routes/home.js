const express  = require('express')
const router = express.Router()

router.use((req,res,next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/query/user',(req,res) => {
    res.send('home page')
})

module.exports = router