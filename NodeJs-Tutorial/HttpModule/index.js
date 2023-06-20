const http = require('node:http')

const server = http.createServer((req, res)=>{
    console.log(req);
    res.writeHead(200, {"content-type":"text/plain"});
    res.end("Hello World!")
})

server.listen(3000, ()=>{
    console.log("Server running at port 3000")
})