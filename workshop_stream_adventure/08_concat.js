// npm install concat-stream

const concat = require('concat-stream') // writable stream


process.stdin
    .pipe(concat(function (buf) {
        const r = buf.toString().split('').reverse().join('')
        process.stdout.write(s)
    }))


// stream-adventure verify 08_concat.js


