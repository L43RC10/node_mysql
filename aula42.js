// express
const express = require("express");
const app = new express();
app.listen(3000, () => {
    console.log('Estamos conectados...');
});

// mysql
const mysql = require("mysql");
const connection = mysql.createConnection({
    // user: 'user_blog',
    // password: 'BilOdu7agoVIKEh55eL8P3f4857ar5'
    
    user: 'root',
    password: '12345678b',
    stringifyObjects: true
});

// routes
app.get("/", (req, res) => {

    connection.query("SELECT * FROM blog.users", (erro, resultados) => {
        if(erro){
            res.send(`erro: ${erro.sqlMessage}`);
        }

        res.send(resultados[2].username);
    });
});