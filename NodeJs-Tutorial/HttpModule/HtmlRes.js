const http = require('node:http')
const fs = require("node:fs");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type":"text/html"});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    // const html = fs.readFileSync(__dirname + "/index.html", "utf-8")
    // res.end(html)
})

server.listen(3000, ()=>{
    console.log("Server running at port 3000")
})