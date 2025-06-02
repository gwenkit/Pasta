// managing async

const http = require('http')
const bl = require('bl')


const result_list = []
let complete_count = 0

const print_result_list = () => {
    result_list.forEach(r => {
        console.info(r)
    })
}

const http_get = (url, index) => {
    http.get(url, res => {
        res.pipe(bl(
            (err, data) => {
                if (err) return console.error(err)
                
                result_list[index] = data.toString()
                complete_count++;
                
                if (complete_count === 3) print_result_list()
            }
        ))
    })
}

process.argv.forEach((url, idx) => {
    if (idx > 1) {
        // console.debug(url)
        http_get(url, idx - 2)
    }
})


// node 09_juggling_async.js http://example.com http://example.com http://example.com
// learnyounode verify 09_juggling_async.js


