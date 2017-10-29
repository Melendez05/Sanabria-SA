var connection = require('./Connection');

function MethodsCompanyDB(){
    this.getCompany = function(response){
        connection.get(function(er,cn){
            cn.query("select name_company, history_company, mission_company, vision_company,"+ 
            " address_company from tb_sanabria_company", function(error, result){
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
module.exports = new MethodsCompanyDB();