const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Product = require('../models/products')

router.get('/', (req, res) => {
    res.send('Connected');
})

router.get('/products', async (req, res) => {

    const products = await Product.find({})

    res.render('index', {products});
    // res.send(products);
})

router.get('/products/new', (req, res) => {

    res.render('new');
})

router.post('/products', async(req, res) => {

    const {name, price, desc} = req.body;

    await Product.create({name: name, price: price, desc: desc});

    res.redirect('/products');
})

router.get('/products/:productid', async(req, res) => {

    const {productid} = req.params;

    const product = await Product.findById(productid);

    res.render('show', {product});
})

router.get('/products/:productid/edit', async(req, res) => {

    const {productid} = req.params;

    const product = await Product.findById(productid);

    res.render('edit', {product});

})

router.patch('/products/:productid', async(req, res) => {

    const {productid} = req.params;

    const {name, price, desc} = req.body;
    
    await Product.findByIdAndUpdate(productid, {name, price, desc});

    res.redirect(`/products/${productid}`);
    
})

router.delete('/products/:productid', async(req, res) => {

    const {productid} = req.params;

    await Product.findByIdAndDelete(productid);

    res.redirect('/products');

})


module.exports = router;
