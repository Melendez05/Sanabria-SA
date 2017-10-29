var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./Model/Connection');
var instances = require('./Controller/RoutesInstance');
var app = express();
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());
connection.start();
instances.config(app);
var server = app.listen(8000, function(){
    console.log("escuchando en el puerto " + server.address().port);
});
