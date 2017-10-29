var connection = require('./Connection');

function MethodsClientDB(){
    
    this.getClients = function(response){
        connection.get(function(er,cn){
            cn.query("select link_client, path_logo_client from tb_sanabria_clients", 
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
module.exports = new MethodsClientDB();