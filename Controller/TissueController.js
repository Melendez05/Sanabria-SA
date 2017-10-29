var database = require('../Model/TissueModel');

function http(){
    this.config = function(app){
        app.get('/tissue',function(request,response){
            database.getTissue(response);
        });
    }
}
module.exports = new http();