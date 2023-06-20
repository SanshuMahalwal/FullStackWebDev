const http = require('node:http')

const server = http.createServer((req, res)=>{
    // req.method() - GET, POST, PUT, DELETE
    if(req.url === '/') {
        res.writeHead(200, {"content-type":"text/plain"})
        res.end("Home Page")
    }
    else if (req.url === '/about') {
        res.writeHead(200, {"content-type":"text/plain"})
        res.end("About Page")
    }
    else if (req.url === '/api') {
        res.writeHead(200, {"content-type":"application/json"})
        res.end(JSON.stringify({
            firstName: "Bruce",
            lastName: "Lee"
        }))
    }
    else {
        res.writeHead(400, {"content-type":"text/plain"})
        res.end("Page not found!")
    }
})

server.listen(3000, ()=>{
    console.log("Server running at port 3000")
})