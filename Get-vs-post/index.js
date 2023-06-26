const express = require('express')
const app = express();
const path = require('node:path')

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'views'))

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/products', (req, res) => {
    console.log(req.query)
    res.send("You made a 'get' request");
})

app.post('/products', (req, res) => {
    console.log(req.body)
    res.send("You made a 'post' request")
})

app.listen(4000, () => {
    console.log("Server started at port 4000")
})