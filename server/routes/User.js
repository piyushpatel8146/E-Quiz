const express = require('express')
const route = express().router

route.get('/login',(req,res)=>{
    res.json({'msg':'login successful'})
})

route.get('/register',(req,res)=>{
    res.json({'msg':'register successful'})
})

module.exports = route