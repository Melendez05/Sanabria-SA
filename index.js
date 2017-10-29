var express = require('express');
var cool = require('cool-ascii-faces');
var bodyparser = require('body-parser');
var connection = require('./Model/Connection');
var instances = require('./Controller/RoutesInstance');
var app = express();
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());
connection.start();
instances.config(app);


app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send("Sanabria S.A");
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});