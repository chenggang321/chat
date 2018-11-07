const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send('Hello World!')
})

app.get('/data',function(req,res){
    res.json({
        user:'admin',
        isAuth:false,
        age:27
    })
})

app.listen(8081,function(){
    console.log('server at:http://localhost:8081')
})