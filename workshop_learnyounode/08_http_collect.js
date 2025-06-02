// multiple 'data' events

const http = require('http')


let txt = ''
let cnt = 0

http.get(process.argv[2], res => {
    res.setEncoding('utf8')

    res.on('data', data => {
        txt += data
        cnt += data.length
    })
    res.on('end', () => {
        console.info(cnt)
        console.info(txt)
    })
    
    res.on('error', console.error)
}).on('error', console.error)


// node 08_http_collect.js http://example.com
// learnyounode verify 08_http_collect.js


