const fs = require('node:fs')
const products = require("./products")
const express = require('express');
const app = express();

app.get('/products', async (req, res)=>{
    const data = await fs.readFile(__dirname + '/data.txt', "utf-8", (err, data)=>{
        if(err) {
            console.log(err);
        }
        res.end(data);
    })
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    for (let product of products) {
        if (product.id === id) {
            res.end(JSON.strongify(product))
        }
    }
})

app.listen(8080, () => {
    console.log("Servet started at port 8080")
})