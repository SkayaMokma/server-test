const snakeNames = require('snake-names')
const http = require('http')
const randomName = snakeNames.random()
const server = http.createServer((req, res) => {
    res.write('<h1>hello</h1>')
    res.end()
})

server.listen(8080, () => console.log('listening on port 8080'))