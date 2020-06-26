const db = require('../../config/database')
const LivroDao = require('../infra/livro-dao')

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
        const livroDao = new LivroDao(db)

        livroDao.lista()
        .then(livros => resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: livros
            }
        ))
        .catch(error => console.log(error))
    })

    app.get('/livros/form', function(req, resp){
        resp.marko(
            require('../views/livros/form/form.marko')
        )
    })

    app.post('/livros', function(req, resp){
        const livroDao = new LivroDao(db)

        livroDao.adiciona(req.body)
        .then(resp.redirect('/livros'))
        .catch(error => console.log(error))
    })
}
