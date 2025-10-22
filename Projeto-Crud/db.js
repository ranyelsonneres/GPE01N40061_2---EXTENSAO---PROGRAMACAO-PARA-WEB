const mysql = require('mysql2');

//criar a instancia (crendenciais de acesso)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123', //catolica: catolica
    database: 'userdb_3',
    port: '3306' //catolica: 3307
 });

 //estabelecer a conexão
 db.connect(err =>{
    if (err) throw err;
    console.log("banco de dados conectado");
 });

 //exportar o módulo de conexão (db.js)
 module.exports = db;
