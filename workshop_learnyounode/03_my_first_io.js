// `cat file | wc -l`

const fs = require('fs')


// console.log(process.argv)

const filename = process.argv[2]
// console.log(filename)
const buf = fs.readFileSync(filename) // `Buffer` object
// console.log(buf)
const str = buf.toString()
// console.log(str)
const lines = str.split('\n')
// console.log(lines)
const result = lines.length - 1 // except the last one
console.info(result)


// node 03_my_first_io.js ./README.md
// learnyounode verify 03_my_first_io.js


