const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req)

    if(req.url==='/'){
    res.write("Hello world!!\n")
    res.write("Welcome to home page!")
    res.end()
    }

    if (req.url==='/about'){
        res.write("Hello world!!\n")
        res.write("Welcome to about page!")
        res.end()
    }
    

    res.end(`
        <h1>Oops!!</h1>
        <p>The page you are trying to access does not exists</p>
        <a href="/">Click here to go back to home page</a>        
    `)

})

server.listen(2000);