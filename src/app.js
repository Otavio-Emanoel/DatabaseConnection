const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const mysql = require("mysql2")
const usuarios = require('./connection/database')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



app.get('/', (req, res) => {
    res.render('index', {
        usuarios: usuarios
    })
})

app.listen(3000, () => {
    console.log("rodando na porta ", 3000)
})