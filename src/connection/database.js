const mysql = require('mysql2')
const bodyparser = require('body-parser')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '987654310',
    database: 'test',
});

function getUsuarios() {
    return new Promise((resolve, reject) => {
        connection.execute(
            'select * from `table`',
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            }

        )
    })
}

function createUsuario({nome, idade, email}) {
    return new Promise((resolve, reject) => {
        connection.execute(
            'insert into `table` (nome, idade, email) values (?, ?, ?)',
            [nome, idade, email],
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            }
        )
    })
}

module.exports = {connection, getUsuarios, createUsuario }