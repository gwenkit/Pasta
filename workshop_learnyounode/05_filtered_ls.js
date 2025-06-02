// filter

const fs = require('fs')
const path = require('path')


const dir_path = process.argv[2]
// console.log(dir_path)
const filter_ext = `.${process.argv[3]}`
// console.log(filter_ext)


fs.readdir(dir_path, (err, list) => {
    if (err) return console.error(err)
    
    list.forEach(file_name => {
        // console.log(path.extname(file_name))
        if (path.extname(file_name) === filter_ext) console.info(file_name)
        // if (file_name.endsWith(filter_ext)) console.info(file_name)
    })
})


// node 05_filtered_ls.js . md
// learnyounode verify 05_filtered_ls.js


