const http = require('node:http')

const server = http.createServer((req, res)=>{
    
    const superhero = {
        firstName : "Bruce",
        lastName : "Lee"
    }

    res.writeHead(200, {"content-type":"application/json"});
    res.end(JSON.stringify(superhero))
})

server.listen(3000, ()=>{
    console.log("Server running at port 3000")
})