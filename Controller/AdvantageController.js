var database = require('../Model/AdvantageModel');

function http(){
    this.config = function(app){
        app.get('/advantage',function(request,response){
            database.getAdvantage(response);
        });
    }
}
module.exports = new http();