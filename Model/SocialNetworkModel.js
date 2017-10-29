var connection = require('./Connection');

function MethodsSocialNetworkDB(){
  
    this.getSocialNetwork = function(response){
        connection.get(function(er,cn){
            cn.query("select url_social_network, path_image_social_network from "+ 
            "tb_sanabria_socialnetworks", 
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
module.exports = new MethodsSocialNetworkDB();