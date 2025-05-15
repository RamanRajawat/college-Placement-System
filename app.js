const express = require('express')
const app =express()
const port =3000
const web =require('./routes/web')
const dbcon = require('./database/dbcon')
const connectDb = require('./database/dbcon')



//connecting database 
connectDb()

//view ejs
app.set('view engine', 'ejs')
//css image js link
app.use(express.static('public'))

// data get parse application/x-www-urlencoded
app.use(express.urlencoded())








//route load
app.use('/',web)

//server start
app.listen(port,()=>{
    console.log(`server start localhost:${port}`)
})



