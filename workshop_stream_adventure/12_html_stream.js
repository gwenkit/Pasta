// npm install trumpet through2

const trumpet = require('trumpet') // npm audit fix --force
const through2 = require('through2')


const trmp = trumpet()
const loud = trmp.select('.loud').createStream()
loud
    .pipe(through2(function (buf, _, next) {
        this.push(buf.toString().toUpperCase())
        next()
    }))
    .pipe(loud)

process.stdin.pipe(trmp).pipe(process.stdout)


// stream-adventure verify 12_html_stream.js


