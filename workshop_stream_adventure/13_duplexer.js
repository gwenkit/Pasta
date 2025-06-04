// npm install duplexer2
// duplexer2([options], writable, readable)

const { spawn } = require('child_process')
const duplexer2 = require('duplexer2')


module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    const child_proc = spawn(cmd, args)
    // joining together the stdin and stdout here
    return duplexer2(child_proc.stdin, child_proc.stdout)
}


// stream-adventure verify 13_duplexer.js


