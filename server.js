const http = require('http')

const servidor = http.createServer(function(req, res){
    let html = ''

    if(req.url == '/'){
        html = `
            <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <p>Casa do código!</p>
            </body>
            </html>
        `   
    } else  if(req.url == '/livros'){
        html = `
            <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <h1>Casa do código livros!</h1>
            </body>
            </html>
        `   
    }

    res.end(html)
});

servidor.listen(3000);