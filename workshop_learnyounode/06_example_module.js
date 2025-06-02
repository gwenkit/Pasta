// module.exports

const fs = require('fs')
const path = require('path')


module.exports = (directory_name, filename_extension, callback_function) => {
    const filename_extension_with_dot = `.${filename_extension}`

    fs.readdir(directory_name, (err, list) => {
        if (err) return callback_function(err)
        
        const filtered_list = list.filter(file_name => {
            // console.log(path.extname(file_name))
            return (path.extname(file_name) === filename_extension_with_dot)
        })
        return callback_function(null, filtered_list)
    })
}


