const route=require('express').Router()
const path=require('path')

route.get("/",(req,res)=>{
    res.render('home')
})

exports=module.exports={route};