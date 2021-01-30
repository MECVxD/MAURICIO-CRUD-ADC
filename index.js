const express = require('express')
const bodyParser=require('body-parser')

const app=express()

//importing routes
const students = require('./routes/students')

const con=require('./repository/connection/connection')

//middlewares
const {validateToken}=require('./middleware/validateToken')
const {validate}=require('./middleware/students')

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(validateToken)

//routes
app.use('/v1/students', students)//validadte

//starting the server
con.connection().then(msg=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server start on port ${process.env.PORT}`)
    })
}).catch(err=>{
    console.log("There is a problem with connection")
})

module.exports = app