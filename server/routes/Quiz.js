const express = require('express')
const route = express().router

route.get('/',(req,res)=>{
    res.json({'msg':'List of all the quizs'})
})

route.get('/',(req,res)=>{
    res.json({'msg':'List of all the quizs'})
})


module.exports = route