const route=require('express').Router()

route.get("/",(req,res)=>{
    res.sendStatus(200)
})


exports=module.exports={route};