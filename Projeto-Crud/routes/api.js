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

//rota para listar os usuários do banco
router.get('/', (req, res) => {
    //executar a consulta SQL
    db.query('SELECT * FROM users', (err, results) =>{
        if(err) return res.status(500).send(err);
        res.json(results);
    });
});

//rota para editar, pode-se utilizar o Patch para atualizar partes específicas
router.put('/:id', (req, res) => {
    //extrair os dados
    const {nome, email} = req.body;
    const {id} = req.params;

    //executar a instrução SQL
    db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err) =>{
        if(err) return res.status(500).send(err);
        res.json({id, nome, email});
    });
});

router.delete('/:id', (req, res) =>{
    //pegar o ID do usuário
    const {id} = req.params;

    //executar a instrução SQL
    db.query('DELETE FROM users WHERE id = ?', [id], (err)=>{
        if(err) return res.status(500).send(err);
        res.sendStatus(204);
    });
});


//exportar o módulo de rotas: router
module.exports = router;
