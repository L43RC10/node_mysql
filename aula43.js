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
    password: '12345678b',
    stringifyObjects: true,
    database: 'blog'
});

// routes
app.get("/", (req, res) => {

    connection.query("SELECT * FROM users WHERE id = ? AND username = ?", [1, 'Dalila'], (erro, resultados) => {
    // connection.query("SELECT * FROM users", (erro, resultados) => {

        if(erro){
            res.send(`erro: ${erro.sqlMessage}`);
        }

        if(resultados.length != 0){
            
            // res.send(`${resultados[0].username} cadastrado em ${resultados[0].created}`);

            // exemplo de como podemos tratar o resultado de uma query em html
            // let html = '<ul>';
            // resultados.forEach(linha => {
            //     html += `<li> ${linha.username} </li>`;
            // });
            // html += '</ul>';
            // res.send(html);

            res.send(resultados);

        } else {
            res.send("Não existem resultados");
        }
    });
});