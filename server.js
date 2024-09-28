// express
const express = require("express");
const app = new express();
app.listen(3000, () => {
    console.log('Estamos conectados...');
});

// mysql
const mysql = require("mysql");
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '12345678b',
    database: 'blogs' //simulação de erro aui, o correto é blog
});

// routes
app.get("/", (req, res) => {
    connection.query("SELECT * FROM users", (erro, resultados) => {
        // res.send(resultados);

        if(erro){
            console.log(erro.message);
            res.send(`erro: ${erro.sqlMessage}`); //message, code, errno, sqlMessage
        }

        res.send(resultados[0].username);
    });
});