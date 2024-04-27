// npm install express
// npm install express --save
// npm install body-parser --save
// npm install cookie-parser --save


var express = require('express'); 
var app = express(); 
app.get('/', function (req, res) { 
res.send('Hello!!!'); 
}) 
var server = app.listen(8000, function () { 
var host = server.address().address 
var port = server.address().port 
console.log("Example app listening at http://%s:%s", host, port) 
}) 