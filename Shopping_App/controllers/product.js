const express = require('express');
const router = express.Router();
const Product = require('../models/product')


module.exports.getAllProducts = async(req, res) => {
    try {
        const products = await Product.find({});

        res.render('products/index', {products});
    }

    catch (e) {
        res.status(500).render('error', {err : e.message});
    }
}

module.exports.getNewForm = (req, res) => {
    try {
        res.render('products/new');
    }
    catch(e) {
        res.status(500).render('error', {err : e.message});
    }
}

module.exports.setNewProduct = async(req, res) => {

    try {

        const {name, img, price, desc} = req.body;
    
        await Product.create({name, img, price, desc, author: req.user._id});

        req.flash('success', "Successfully added your product!");
    
        res.redirect('/products');
    }

    catch(e) {
        res.status(500).render('error', {err: e.message});
    }
}

module.exports.getProduct = async(req, res) => {

    try {
        const {productid} = req.params;

        const product = await Product.findById(productid).populate('reviews');
    
        res.render('products/show', {product});
    }

    catch(e) {
        res.status(500).render('error', {err: e.message});
    }
}

module.exports.getEditForm = async(req, res) => {
    
    try {
        const {productid} = req.params;

        const product = await Product.findById(productid);
    
        res.render('products/edit', {product});
    }

    catch(e) {
        res.status(500).render('error', {err: e.message});
    }
}

module.exports.editProduct = async(req, res) => {

    try {
        const {productid} = req.params;

        const {name, price, img, desc} = req.body;
    
        await Product.findByIdAndUpdate(productid, {name, desc, price, img});
        
        req.flash('success', "Edited product successfully");

        res.redirect(`/products/${productid}`);
    }

    catch(e) {
        res.status(500).render('error', {err: e.message});
    }
}

module.exports.deleteProduct = async(req, res) => {

    try {
        const {productid} = req.params;

        await Product.findByIdAndDelete(productid);

        res.redirect('/products');
    }

    catch(e) {
        res.status(500).render('error', {err: e.message});
    }
}