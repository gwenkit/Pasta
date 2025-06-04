// stream; chunk by chunk
// duplex stream; which is both readable and writable
// transform stream; which is a duplex stream that can modify or transform the data as it is written and read
// readable.pipe(duplex).pipe(writable)

const fs = require('fs')


fs.createReadStream(process.argv[2]).pipe(process.stdout)


// node 02_meet_pipe.js ./README.md
// stream-adventure verify 02_meet_pipe.js


