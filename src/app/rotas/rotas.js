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
        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    { 
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    { 
                        id: 2,
                        titulo: 'Node Avançado'
                    }
                ]
            }
        )
    })
}
