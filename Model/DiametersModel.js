var connection = require('./Connection');

function MethodsDiametersDB(){
   
    this.getDiameters = function(response){
        connection.get(function(er,cn){
            cn.query("select id_diameter, number_mm_diameter, number_diameter "+
            "from tb_sanabria_diameter", 
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
module.exports = new MethodsDiametersDB();