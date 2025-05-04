const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const mysql = require("mysql2")
const { getUsuarios, createUsuario, connection } = require('./connection/database')
const urlencoded = require('body-parser/lib/types/urlencoded')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))


app.get('/', async (req, res) => {
    try {
        const usuarios = await getUsuarios()
        console.log(usuarios)
        console.log(req.query);
        
        res.render('index', {
            usuarios: usuarios
        })
    } catch (error) {
        console.error("Erro ao obter os usuarios", error)
        res.status(500).send('Erro ao acessar o banco de dados')
    }
})

app.post('/registro', async (req, res) => {
    try {
        const { nome, idade, email } = req.body
        console.log(nome, idade, email)
        await createUsuario({ nome, idade, email })
        res.render('index', {usuarios})
    } catch (error) {
        console.error("Erro ao criar usuario", error)
    }

})

app.listen(3000, () => {
    console.log("rodando na porta ", 3000)
})