const express = require('express')
const app = express();
const path = require('node:path')
const todos = require('./todosList')

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'views')) //files to be rendered in response
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send("Connected")
})

app.get('/home', (req, res) => {
    const randomNum = Math.floor(Math.random()*10)
    res.render('home', {randomNum})
})

app.get('/todos', (req, res) => {
    res.render('todos', {todos})
})

app.listen(8080, () => {
    console.log("Listening to port 8080")
})