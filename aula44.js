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
    stringifyObjects: true,
    database: 'blog'
});

// routes
app.get("/", (req, res) => {

    // let values = ['0', 'teste1', '2030-10-20 09:30:00'];
    // connection.query('INSERT INTO users VALUES(?,?,?)', values, (erro, resultados) => {

    
    let values = [
        ['0', 'teste10', '2030-10-20 09:30:00'],
        ['0', 'teste11', '2030-10-20 10:30:00'],
        ['0', 'teste12', '2030-10-20 11:30:00'],
        ['0', 'teste13', '2030-10-20 12:30:00'],
        ['0', 'teste14', '2030-10-20 13:30:00']
    ];

    connection.query('INSERT INTO users VALUES ?', [values], (erro, resultados) => {

        if(erro){
            res.send(`ERRO: ${erro.sqlMessage}`);
        } else {
            res.send('OK!');
        }
    })
});