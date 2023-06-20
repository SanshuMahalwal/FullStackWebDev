const http = require('http');
const bcrypt = require('bcrypt');

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.end("Hello from my first server");
})

server.listen(1234, ()=>{
    console.log('Server started at port 1234');
})