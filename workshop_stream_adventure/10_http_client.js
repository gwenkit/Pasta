// http.request()

const { request } = require('http')


const req = request('http://localhost:8099', {method: 'POST'}, (res) => {
    res.pipe(process.stdout)
})

process.stdin.pipe(req)


/* deprecated
const request = require('request')
const req = request.post('http://localhost:8099')
process.stdin.pipe(req).pipe(process.stdout)
*/


// stream-adventure verify 10_http_client.js


