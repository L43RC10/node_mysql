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
    
    res.json(api_resposta('success', 'success', []));

});

app.get('/users/:id', (req, res) => {

    let id = req.params.id;
    connection.query('SELECT * FROM users WHERE id = ?', [id], (erro, resultado) => {

        if(erro){

            res.json(api_resposta(`ERRO: ${erro.errno}`, erro.sqlMessage, []));

        } else {
            
            res.json(api_resposta('success', 'success', resultado));

        }

    });

});

function api_resposta(status, message, data){

    return {
        status: status,
        message: message,
        results: data
    }

}