var connection = require('./Connection');

function MethodsTissueDB(){
    this.getTissue = function(response){
        connection.get(function(er,cn){
            cn.query("select id_tissue, number_mm_tissue, inches_tissue "+
            "from tb_sanabria_tissue", 
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
module.exports = new MethodsTissueDB();