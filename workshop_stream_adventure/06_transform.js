// npm install through2

const through = require('through2')

/* usage
// initialization
const stream = through(write, end)

// optional
function write(buffer, encoding, next) {
    // e.g. this.push('I got some data: ' + buffer + '\n')
    next()
}

// optional
function end(done) {
    done()
}
*/


const stream = through(function (buf, _, next) {
    this.push(buf.toString().toUpperCase())
    next()
})

process.stdin.pipe(stream).pipe(process.stdout)


// node 06_transform.js
// stream-adventure verify 06_transform.js


