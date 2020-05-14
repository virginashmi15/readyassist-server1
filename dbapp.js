const express = require('express');
const badyparser = require('bodyparser');
const app = express();
const mysql = require('mysql');

app.use(bodyparser.json());

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ashmi123',
    database:'cdconnecter'
});
conn.connect((err) => {
    if(err)throw err;
    console.log("mysql connected");

});
app.get('/api/candidates',(req,res) =>
{
    let sql = "SELECT * FROM candidate";
    let query = conn.query(sql,(err,result) => {
        if (err) throw err;
        res.send(JOSN.stringify({"status": = 200,"error": null, "respons":results}));

    });
});

app.get('/api/candidates/:id',(req,res) => {
    let sql = "SELECT * FROM candidates WHERE id=" + req.params.id;
    let query = conn.query(sql,(err,result) => {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200,"error": null,"response": results}));

    });
});

app.listen(3000,() => {
    console.log('server started on port 3000');

});