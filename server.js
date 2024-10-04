// express
const express = require("express");
const app = new express();
app.listen(3000, () => {
    console.log('Estamos conectados...');
});

// mysql
const mysql = require("mysql");
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password: '',
    database: 'blog' //simulação de erro aui, o correto é blog
});

// routes
app.get("/", (req, res) => {
    connection.query("SELECT * FROM users", (erro, resultados) => {
        // res.send(resultados);

        if(erro){
            console.log(erro.message);
            res.send(`erro: ${erro.errno}`); //message, code, errno, sqlMessage
        }

        res.send(resultados[0].username);
    });
});