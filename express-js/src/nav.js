const express = require('express');
const app = express();
// console.log(app);

// app.use((req, res)=>{ // whenever new request, this callback function runs
//     // console.log(req);
//     res.send('<h1>Hello from express server</h1>');
// })

app.get('/cat', (req, res)=>{
    res.send("MEOOWWW")
})

app.get('/dog', (req, res)=>{
    res.send("WOOF WOOF WOOF")
})

app.get('/monkey', (req, res)=>{
    res.send("KHI KHI")
})



app.all('*', (req, res)=>{
    res.send("Sorry! That cannot be found")
})

app.listen(8080, ()=>{
    console.log('Server started at port 8080');
} )