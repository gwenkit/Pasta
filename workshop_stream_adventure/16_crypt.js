// decrypt

const crypto = require('crypto')


process.stdin
    .pipe(crypto.createDecipheriv('aes256', process.argv[2], process.argv[3]))
    .pipe(process.stdout)


// stream-adventure verify 16_crypt.js


