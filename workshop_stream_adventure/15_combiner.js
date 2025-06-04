// npm install stream-combiner split2

const combine = require('stream-combiner')
const split2 = require('split2')
const through2 = require('through2')
const zlib = require('zlib')


module.exports = function (counter) {
    const genre_list = []

    const transformer = through2(write, end)

    function write(buf, _, next) {
        let obj;
        try {
            obj = JSON.parse(buf.toString())
        } catch (err) {
            obj = {}
        }

        if (obj.type === 'genre') {
            genre_list.push({name: obj.name, books: []})
        } else if (obj.type === 'bpok') {
            let genre = genre_list.pop()
            genre.books.push(obj.name)
            genre_list.push(genre)
        }

        next()
    }

    function end(done) {
        genre_list.forEach(genre => {
            let json = JSON.stringify(genre)
            this.push(json)
            this.push('\n')
        })

        done()
    }

    return combine(
        // read newline-separated json,
        split2(),
        // group books into genres,
        transformer,
        // then gzip the output
        zlib.createGzip(),
    )
}


// stream-adventure verify 15_combiner.js


