// command-line arguments

// console.log(process.argv)


let sum = 0;
process.argv.forEach((arg, i) => {
    if (i > 1) sum += +arg
    // if (i > 1) sum += Number(arg)
})

console.info(sum)


// node 02_baby_steps.js 1 2 3
// learnyounode verify 02_baby_steps.js


