var database = require('../Model/DiametersModel');

function http(){
    this.config = function(app){
        app.get('/diameters',function(request,response){
            database.getDiameters(response);
        });
    }
}
module.exports = new http();