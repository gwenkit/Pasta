/* readable stream

const { Readable } = require('stream')
const myReadable = new Readable({})
myReadable._read = () => {}

or

const { Readable } = require('stream')
class MyReadable extends Readable {
    _read(size) {}
}

*/


/*
mode: flowing | paused
default: paused; the read() method must be called explicitly
e.g. readable.pipe(writable); automatically into flowing mode
e.g. readable.on('data', ...); in flowing mode; can pause and resume the stream by using `pause()` and `resume()` methods
e.g. readable.on('readable', ...); in paused mode; use the `read(size)` method for start consuming the data
*/


// push(); add content into the readable internal `Buffer`

const { Readable } = require('stream')


// implement a readable stream
const myReadable = new Readable({})
myReadable._read = (size) => {}

// config the readable stream
myReadable.push(process.argv[2])
myReadable.pipe(process.stdout)


// node 04_read_it.js TEST
// stream-adventure verify 04_read_it.js


