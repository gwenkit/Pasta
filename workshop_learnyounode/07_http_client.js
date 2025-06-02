// HTTP GET

const http = require('http')


const target_url = process.argv[2]

http.get(target_url, res => {
    // console.log(res) // `Stream` object
    // console.log(res.statusCode)

    res.setEncoding('utf8')

    res.on('data', console.info)
    res.on('error', console.error)
}).on('error', console.error)


// node 07_http_client.js http://example.com
// learnyounode verify 07_http_client.js


