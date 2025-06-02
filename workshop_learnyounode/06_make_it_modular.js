// require

const example_module = require('./06_example_module')


const dir_path = process.argv[2]
// console.log(dir_path)
const filter_ext = process.argv[3]
// console.log(filter_ext)


example_module(dir_path, filter_ext, (err, list) => {
    if (err) return console.error('[ERROR]', err)
    
    // list.forEach(file_name => {
    //     console.info(file_name)
    // })
    console.info(list.join('\n'))
})


// node 06_make_it_modular.js . md
// learnyounode verify 06_make_it_modular.js


