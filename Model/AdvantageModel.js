var connection = require('./Connection');

function MethodsAdvantageDB(){
    
    this.getAdvantage = function(response){
        connection.get(function(er,cn){
            cn.query("select description_advantage from tb_sanabria_advantage", 
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
module.exports = new MethodsAdvantageDB();