var connection = require('./Connection');

function MethodsImagesDB(){
    

    this.getImages = function(response){
        connection.get(function(er,cn){
            cn.query("select description_images, section_site_images, path_images "+ 
            "from tb_sanabria_images", 
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
module.exports = new MethodsImagesDB();