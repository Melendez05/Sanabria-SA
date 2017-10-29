var connection = require('./Connection');

function MethodsPhoneDB(){
   
    this.getPhones = function(response){
        connection.get(function(er,cn){
            cn.query("select phone from tb_sanabria_phone", 
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
module.exports = new MethodsPhoneDB();