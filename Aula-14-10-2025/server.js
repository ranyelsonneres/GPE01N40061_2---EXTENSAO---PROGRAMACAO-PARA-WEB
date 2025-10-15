const express = require('express')
const app = express()
const port = 3000
const path = require('path');

//mecanismo para prover arquivos estáticos
app.use(express.static('public'))

app.get('/', (req, res) => {
  //res.send('Hello World!')
  //res.sendFile(path.join(__dirname + 'public/index.html'))
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/sobre', (req, res) => {
  //res.send('Pagina Sobre - Fiz uma alteração')
  //res.sendFile(__dirname + 'public/sobre.html')
  res.sendFile(path.join(__dirname, 'public', 'sobre.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
