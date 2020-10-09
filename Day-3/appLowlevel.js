const http = require('http');

// This server is EventEmitter
const server = http.createServer();

// From browser try localhost:3000. Console we can find "connection" event triggered
server.on('connection',(socket)=>{
    console.log('New Connection');
});
server.listen(3000);

console.log('Listening on port 3000...');