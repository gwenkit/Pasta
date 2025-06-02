// asynchronous

const fs = require('fs')


fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) return console.error(err)

    // console.log(data) // encoded `String`; not `Buffer`
    const result = data.split('\n').length - 1
    console.info(result)
})


// node 04_my_first_async_io.js ./README.md
// learnyounode verify 04_my_first_async_io.js


