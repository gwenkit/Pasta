/* readable stream

const { Writable } = require('stream')
const myWritable = new Writable({
    write(chunk, encoding, callback) {
        // If the `chunk` is a string, `encoding` will be the character encoding for the string. Otherwise it may be ignored.
        // And `callback` function will be called when the processing for the supplied chunk is complete.
        // 
        // The `callback` function receive one argument,
        // this argument must be an `Error` object if the write process fail
        // or `null` if succeded.
    }
})

or

const { Writable } = require('stream')
class MyWritable extends Writable {
    _write(chunk, encoding, callback) {
        // MUST NOT be called by your application code directly
    }
}

*/


/*
e.g. readable.on('data', (chunk) => { writable.write(chunk) })
*/


const { Writable } = require('stream')
// const { StringDecoder } = require('string_decoder')
// const decoder = new StringDecoder('utf8')

// implement a writable stream
const MyWritable = new Writable()
MyWritable._write = (chunk, encoding, callback) => {
    // console.log(`writing: ${decoder.write(chunk)}`)
    console.log(`writing: ${chunk.toString()}`)
    callback()
}

// config the writable stream
process.stdin.on('data', (chunk) => {
    MyWritable.write(chunk)
})


// node 05_write_to_me
// stream-adventure verify 05_write_to_me.js


