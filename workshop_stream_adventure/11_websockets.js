// npm install ws

const WebSocket = require('ws')


const ws = new WebSocket('ws://localhost:8099')
ws.on('error', console.error)

// ws.on('open', () => {
//     ws.send('hello\n')
// })

const stream = WebSocket.createWebSocketStream(ws)
stream.write('hello\n')

stream.pipe(process.stdout)


// stream-adventure verify 11_websockets.js


