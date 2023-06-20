const express = require('express')
const app = express();
const path = require('node:path')
const templatePath = path.join(__dirname, "../templates")
// const staticPath = path.join(__dirname, "../public")
// app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", templatePath)

app.get("/", (req, res) => {
    res.render("index", {
        personName : "Sunny",
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

// app.get('/', (req, res)=>{
//     res.send(staticPath);
// })


app.listen(8000, () => {
    console.log("Server started at port 8000")
})