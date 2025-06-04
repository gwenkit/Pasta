// npm install tar concat-stream

const crypto = require('crypto')
const tar = require('tar')
const concat = require('concat-stream')


const parser = new tar.Parser()
parser.on('entry', function (entry) {
    if (entry.type !== 'File') return entry.resume()

    const h = crypto.createHash('md5', { encoding: 'hex' })
    entry.pipe(h).pipe(concat(function (hash) {
        console.log(hash + ' ' + entry.path)
    }))
})

const cipher = process.argv[2]
const cipher_key = process.argv[3]
const cipher_iv = process.argv[4]

process.stdin
    .pipe(crypto.createDecipheriv(cipher, cipher_key, cipher_iv))
    .pipe(parser)


// stream-adventure verify 17_secretz.js


