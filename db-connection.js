
let mysql = require('mysql');

let conninfo={

    host: 'localhost',
    user: 'root',
    password: 'ashmi123',
    database: 'dbconnector',
};

let Connection = mysql.createConnection(conninfo);

con.connect(function(err) {
    if(err) throw err;

    con.query("SELECT * FROM candidate ", function (err,result,fields)
    if(err) throw err;
    Console.log(result);
});
});