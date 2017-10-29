var database = require('../Model/SocialNetworkModel');

function http(){
    this.config = function(app){
        app.get('/social-network',function(request,response){
            database.getSocialNetwork(response);
        });
    }
}
module.exports = new http();