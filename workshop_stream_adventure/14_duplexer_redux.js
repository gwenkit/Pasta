// object mode

const duplexer2 = require('duplexer2')
const through_obj = require('through2').obj


module.exports = function (counter) {
    // `counter` is a readable stream
    // return a duplex stream to count countries on the writable side
    // and pass through `counter` on the readable side
    
    const counts = {}
    const input = through_obj(write, end)

    function write(row, _, next) {
        counts[row.country] = (counts[row.country] || 0) + 1
        next()
    }

    function end(done) {
        counter.setCounts(counts)
        done()
    }

    return duplexer2({objectMode: true}, input, counter)
}


// stream-adventure verify 14_duplexer_redux.js


