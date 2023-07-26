const express = require('express')
const app = express();
const path = require('node:path')
const port = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/weather', (req, res) => {
    res.render('weather')
})

app.get('*', (req, res) => {
    res.status(404)
    res.send("404! Page not found")
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})