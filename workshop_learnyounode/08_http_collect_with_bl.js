// npm install bl --save

const http = require('http')
const bl = require('bl')


const target_url = process.argv[2]

http.get(target_url, res => {
    res.pipe(bl(
        (err, data) => {
            if (err) return console.error(err)
            let text = data.toString()
            console.info(text.length)
            console.info(text)
        }
    ))

    res.on('error', console.error)
}).on('error', console.error)


// node 08_http_collect_with_bl.js http://example.com
// learnyounode verify 08_http_collect_with_bl.js


