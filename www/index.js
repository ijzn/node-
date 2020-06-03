const http = require('http');
const qs = require('querystring')

const cb = require('../app.js');

const PORT = 4002;

const server = http.createServer(cb)

server.listen(PORT)

console.log(`server is runing port localhost:${PORT}`);