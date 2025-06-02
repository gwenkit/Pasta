// npm install --save concat-stream

const http = require('http')
const concatStream = require('concat-stream')


const target_url = process.argv[2]

http.get(target_url, res => {
    res.pipe(concatStream(
        (data) => {
            let text = data.toString()
            console.info(text.length)
            console.info(text)
        }
    ))

    res.on('error', console.error)
}).on('error', console.error)


// node 08_http_collect_with_concat_stream.js http://example.com
// learnyounode verify 08_http_collect_with_concat_stream.js


