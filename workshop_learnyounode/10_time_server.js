// npm install strftime --save

const net = require('net')
const strftime = require('strftime')


const port = Number(process.argv[2])
// console.debug(port)


net.createServer(socket => {
    socket.end(now2() + '\n')
}).listen(port)


const now1 = () => {
    let d = new Date()
    return d.getFullYear()         + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate())      + ' ' +
        zeroFill(d.getHours())     + ':' +
        zeroFill(d.getMinutes())
}

const zeroFill = (i) => {
    return (i<10 ? '0' : '') + i
}


// simple
const now2 = () => {
    let d = new Date()
    return strftime('%Y-%m-%d %H:%M', d)
}


// learnyounode verify 10_time_server.js


