// express
const express = require("express");
const app = new express();
app.listen(3000, () => {
    console.log('Estamos conectados...');
});

// mysql
const mysql = require("mysql");
const connection = mysql.createConnection({
    user: 'root',
    password: '', // 12345678b , se pedir senha
    database: 'blog'
});

// routes
app.get("/", (req, res) => {
    res.send('OK!');
});

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    // res.send(id);
    connection.query('SELECT * FROM users WHERE id = ?', [id], (erro, resultado) => {
        if(erro){
            res.send(`Erro:${erro.errno} / ${erro.sqlMessage}`);
        } else {
            res.send(resultado);
        }
    })
})