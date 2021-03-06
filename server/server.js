"use strict";
const express = require("express");
const bodyParse = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();
const userRouter = require('./user')
const Chat = require('./model').getModel('chat')

app.use(cookieParser())
app.use(bodyParse.json())
app.use('/user',userRouter)

app.listen(8082,function(){
    console.log('server at:http://localhost:8081')
})


const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
    client.on('sendMsg',function(data){
        const {from,to,msg} = data
        const chatid = [from,to].sort().join('_')
        Chat.create({chatid,from,to,content:msg},function(err,doc){
            console.log(doc)
            io.emit('recvmsg',Object.assign({},doc._doc))
        })
    })

});
app.use(express.static('../build'))
server.listen(9001);