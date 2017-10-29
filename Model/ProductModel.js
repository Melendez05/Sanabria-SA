var connection = require('./Connection');

function MethodsProductDB(){
    this.getProduct = function(response){
        connection.get(function(er,cn){
            cn.query("select id_product, name_product, description_product, quality_standard_product "+
            "from tb_sanabria_product", 
            function(error, result){
                cn.release();
                if(error){
                    response.send({estado:"error"});
                }else{
                    response.send(result);
                }
            })

        })
    }
}
module.exports = new MethodsProductDB();