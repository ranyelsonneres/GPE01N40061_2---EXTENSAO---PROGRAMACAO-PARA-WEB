const express = require('express'); //importar o framework
const router = express.Router(); //modularizar as rotas

//chamar a conexão com o banco de dados
const db = require('../db');

//criar as rotas do meu sistema
//rota: cadastrar
//caminho: /api/users/
router.post('/', (req, res)=>{
    const {nome, email} = req.body; //pegar o corpo da requisição do front
    

    //executar a instrução sql
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email],
        (err, result) =>{
            if (err) return res.status(500).send(err);
            res.status(201).json({id: result.insertId, nome, email});
        }
    );
});

//exportar o módulo de rotas: router
module.exports = router;
