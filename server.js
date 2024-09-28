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
    database: 'blog'
});

// routes
app.get("/", (req, res) => {
    connection.query("SELECT * FROM users", (erro, resultados) => {
        // res.send(resultados);
        res.send(resultados[0].username);
    });
});