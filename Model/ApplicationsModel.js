var connection = require('./Connection');

function MethodsApplicationsDB(){
    
    this.getApplications = function(response){
        connection.get(function(er,cn){
            cn.query("select description_application from tb_sanabria_applications", 
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
module.exports = new MethodsApplicationsDB();