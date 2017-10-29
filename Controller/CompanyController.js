var database = require('../Model/CompanyModel');

function http(){
    this.config = function(app){
        app.get('/company',function(request,response){
            database.getCompany(response);
        });
    }
}
module.exports = new http();