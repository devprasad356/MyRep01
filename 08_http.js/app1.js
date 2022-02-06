const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello world!!\n")
    res.write("Welcome!")
    res.write('Happy Learning<br>')
    res.write('See You Soon')
    res.end()
})

server.listen(2000);