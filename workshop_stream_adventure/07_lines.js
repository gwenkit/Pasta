// npm install split2 through2

const split2 = require('split2')
const through2 = require('through2')


let num = 0

process.stdin
    .pipe(split2())
    .pipe(through2(function (buf, _, next) {
        if (num % 2 != 0) this.push(buf.toString().toUpperCase() + '\n')
        else this.push(buf.toString().toLowerCase() + '\n')

        num++

        next()
    }))
    .pipe(process.stdout)


// node 07_lines.js
// stream-adventure verify 07_lines.js


