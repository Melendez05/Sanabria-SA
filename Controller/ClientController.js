var database = require('../Model/ClientModel');

function http(){
    this.config = function(app){
        app.get('/clients',function(request,response){
            database.getClients(response);
        });
    }
}
module.exports = new http();