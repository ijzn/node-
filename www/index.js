const http = require('http');

const serverHandle = require('../app.js');

const PORT = 4002;

const server = http.createServer(serverHandle);

server.listen(PORT)

console.log(`server is runing port localhost:${PORT}`);