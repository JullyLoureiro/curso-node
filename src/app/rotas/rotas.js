module.exports = (app) => {
    app.get('/', function(req, resp){
        resp.send(`
            <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <p>Casa do código!</p>
            </body>
            </html>
        `)
    })

    app.get('/livros', function(req, resp){
        resp.send(`
            <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <p>Listagem de livros!</p>
            </body>
            </html>
        `)
    })
}
