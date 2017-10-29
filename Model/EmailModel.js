var connection = require('./Connection');

function MethodsEmailDB(){

        this.getEmails = function(response){
        connection.get(function(er,cn){
            cn.query("select email from tb_sanabria_email", 
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
module.exports = new MethodsEmailDB();