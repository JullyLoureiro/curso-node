const db = require('../../config/database')

module.exports = (app) => {
    app.get('/', function(req, resp){
        resp.send(`
            <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <h5>Casa do código!</h5>
            </body>
            </html>
        `)
    })

    app.get('/livros', function(req, resp){
        db.all('SELECT * FROM livros', function(error, result){
            resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: result
                }
            )
        })
    })
}
