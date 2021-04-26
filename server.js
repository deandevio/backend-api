const http = require('http')

const todos = [
    { id: 1, text: 'Todo One'},
    { id: 3, text: 'Todo Two'},
    { id: 3, text: 'Todo Three'}
]

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application,json')
    res.setHeader('X-Powered-By', 'GET-REKT')
    res.write('<h1>Hello</h1>')
    res.write('<h2>Hello</h2>')
    res.write('HELLO')
    res.end(JSON.stringify({
        success: true,
        data: todos
    }))
})

const PORT = 5000

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})