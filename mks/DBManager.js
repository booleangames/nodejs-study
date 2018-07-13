var mysql = require('mysql');
var connection = mysql.createConnection({
    host : '10.25.20.206',
    port : '3306',
    user : 'doz2',
    password : 'test1324',
    database : 'doz3_global_gl2_r1'
});

module.exports = {
    DBConnect : function() {
        connection.connect();
        console.log('[NOTI]DB Connected!');
    },

    TestFunc : function() {
        console.log('Test DBManager');
    },

    // query function
    DoQuery : function(queryStr) {
        connection.query(queryStr, function(error, results, fields) {
            if (error) throw error;
            console.log(results);
            return results;
        })
    },

    DBDisconnect : function() {
        connection.end();
    }
};