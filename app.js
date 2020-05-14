const express = require("express");
const bodyparser = require("bodt-parser");
const app = express();
const port = 3000
const mysql = require ("mysql");

app.use(bodyparser.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ashmi123',
    database: 'dbconnector',
});


con.connect(function(err) {
    if (err) throw err;

    con.query("SELECT * FROM cosutomer", function (err,result,fields)
    if (err) throw err;
    Console.log(result);
});
));