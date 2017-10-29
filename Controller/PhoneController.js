var database = require('../Model/PhoneModel');

function http(){
    this.config = function(app){
        app.get('/phones',function(request,response){
            database.getPhones(response);
        });
    }
}
module.exports = new http();