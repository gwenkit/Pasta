// echo hack the planet | curl -d@- http://localhost:8000

const http = require('http')
const through2 = require('through2')


const port = Number(process.argv[2])
const server = http.createServer((req, res) => {
    if (req.method !== 'POST') return res.end('send me a POST\n')

    req
        .pipe(through2(function (buf, _, next) {
            this.push(buf.toString().toUpperCase())
            next()
        }))
        .pipe(res)

    req.on('error', console.error)
}).on('error', console.error)

server.listen(port)


// stream-adventure verify 09_http_server.js


