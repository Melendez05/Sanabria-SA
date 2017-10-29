var database = require('../Model/EmailModel');

function http(){
    this.config = function(app){
        app.get('/email',function(request,response){
            database.getEmails(response);
        });
    }
}
module.exports = new http();