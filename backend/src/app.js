
// rotas / recursos




// metodos HTTP
// GET: Buscar ou listar uma informação do back-end
//POST: Criar uma informção no Back-end
// PUT: Alterar uma informação no back-end
// DELETE: Deletar uma informação no back-end



//tipos de parametros
//Query params: Parametros nomeados enviados na rota após o "?",(filtros,paginação)
//Route params: Parmetros utilizados para identificar recursos
//request body: Corpo da requisição utilizado para criar ou alterar recursos


//SQL: mySQL, SQLite, postgresSQL,oracle.Microsoft SQL Server
// NoSQL: MongoDB

// Driver: select * from user
//Query builder: table('user').select('*').where()

const express = require ('express')
const cors = require('cors')
const routes = require('./routes.js')
const app = express()
const {errors} = require('celebrate')

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
  credentials: true
}))

app.use(express.json())

app.use(routes)
app.use(errors())
app.use(express.static('public'))


module.exports = app
