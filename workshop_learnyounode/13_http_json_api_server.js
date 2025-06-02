// npm install --save moment

const http = require('http')
const url = require('url')
const moment = require('moment')


const port = Number(process.argv[2])

const parsetime = (moment_dt) => {
    return {
        hour:   moment_dt.hour(),
        minute: moment_dt.minute(),
        second: moment_dt.second(),
    }
}

const unixtime = (moment_dt) => {
    return {
        unixtime: moment_dt.valueOf(),
    }
}


const server = http.createServer((req, res) => {
    let route = url.parse(req.url, true)
    console.debug(route)

    let moment_dt = moment(route.query.iso)
    let result // undefined

    if (route.pathname === '/api/parsetime') {
        // e.g. /api/parsetime?iso=2025-06-02T15:25:07.910Z
        result = parsetime(moment_dt)
    } else if (route.pathname === '/api/unixtime') {
        // e.g. /api/unixtime?iso=2025-06-02T15:25:07.910Z
        result = unixtime(moment_dt)
    }

    if (result) {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(port)


// learnyounode verify 13_http_json_api_server.js


