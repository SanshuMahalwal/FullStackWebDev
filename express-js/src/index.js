const express = require('express')
const app = express();
const path = require('node:path')
const hbs = require('hbs')
// const staticPath = path.join(__dirname, "../public")
// app.use(express.static(staticPath));
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
const staticPath = path.join(__dirname, "../public")
app.use("/public", express.static(staticPath))

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("index", {
        personName : "Sunny",
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/about/*', (req, res) => {
    res.render("404", {
        errorMessage : "Cannot find this about page"
    })
})

app.get('*', (req, res) => {
    res.render("404", {
        errorMessage : 'Error 404! Page not found'
    })
})



// app.get('/', (req, res)=>{
//     res.send(staticPath);
// })


app.listen(8000, () => {
    console.log("Server started at port 8000")
})