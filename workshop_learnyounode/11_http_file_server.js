// `createServer` and `listen`

const http = require('http')
const fs = require('fs')


const port = Number(process.argv[2])
// console.debug(port)
const file_path = process.argv[3]
// console.debug(file_path)


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    fs.createReadStream(file_path).pipe(res)
}).listen(port)


// learnyounode verify 11_http_file_server.js


