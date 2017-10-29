var database = require('../Model/ApplicationsModel');

function http(){
    this.config = function(app){
        app.get('/applications',function(request,response){
            database.getApplications(response);
        });
    }
}
module.exports = new http();