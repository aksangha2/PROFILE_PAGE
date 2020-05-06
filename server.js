const express=require('express')
const path=require('path')
const nodemailer=require('nodemailer')
const app=express()

const SERVER_PORT=process.env.PORT || 2345

const route=require("./routes/api").route
const route2=require("./routes/api/contact").route

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine",'hbs')
app.set("views",__dirname+"/views")

app.use("/",express.static(path.join(__dirname,'public')))
app.use("/api",route)
app.use("/api/contact",route2)

app.listen(SERVER_PORT,console.log("Server started at http://localhost:2345"))