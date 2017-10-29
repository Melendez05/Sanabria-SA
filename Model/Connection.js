var mysql = require('mysql');
function Connection(){
    this.pool = null;

    this.start = function(){
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'root',            
            password: '',
            database: 'db_sanabria_sa'
        })
    }

    this.get = function(callback){
        this.pool.getConnection(function(error,connection){ 
            callback(error,connection)
        })
    }

}
module.exports = new Connection()
