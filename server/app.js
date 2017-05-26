var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var Company = require ('./modules/company');
var Employee = require ('./modules/employee');
var path = require('path');
var port = 3366 || process.env.PORT;

app.use(express.static('public'));
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));

app.use ('/employee', Employee);

app.get('/',function(req,res){
  res.sendFile(path.resolve('public/views/index.html'));
});

app.listen(port, function (){
  console.log('server up on port', port);
});
