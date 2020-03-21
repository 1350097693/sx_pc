var express = require('express');
var app = express();
var cnt=require('./src/mysql')
var router=require('./src/router')

app.use(router)

var server = app.listen(8000, function () {
    console.log("应用实例，访问地址为 http://localhost:8000/")
})

module.exports = app