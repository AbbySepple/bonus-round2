var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var Company = require ('./modules/company');
var Employee = require ('./modules/employee');
var port = 3366 || process.env.PORT;

app.use(express.static('public'));
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));

app.use ('/employee', Employee);

app.listen(port, function (){
  console.log('server up on port', port);
});
