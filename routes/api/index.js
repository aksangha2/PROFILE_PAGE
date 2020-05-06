const express=require('express')
const route=express.Router();

route.use('/home',require('./home').route)
route.use('/profile',require('./profile').route)
route.use('/education',require('./education').route)
route.use('/projects',require('./projects').route)
route.use('/contact',require('./contact').route)


exports=module.exports={route};