var database = require('../Model/ImagesModel');

function http(){
    this.config = function(app){
        app.get('/images',function(request,response){
            database.getImages(response);
        });
    }
}
module.exports = new http();