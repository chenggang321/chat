"use strict";
const express = require("express");
const bodyParse = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
const app = express();

app.use(cookieParser())
app.use(bodyParse.json())
app.use('/user',userRouter)

app.listen(8081,function(){
    console.log('server at:http://localhost:8081')
})