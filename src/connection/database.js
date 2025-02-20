const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
});

connection.execute(
    'SELECT * FROM `table`',
    function (err, results, fields) {
        console.log(results);
        // console.log(fields); 
        results.forEach(user => {
            
            console.log(user.nome)
            console.log(user.idade)
            console.log(user.email)
            console.log('')
        });
        const usuarios = results
    }

);

module.exports = connection