var database = require('../Model/ProductModel');

function http(){
    this.config = function(app){
        app.get('/product',function(request,response){
            database.getProduct(response);
        });
    }
}
module.exports = new http();