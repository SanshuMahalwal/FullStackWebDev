const { request } = require('express');
const {productSchema} = require('./schemas')
const {reviewSchema} = require('./schemas');
const Product = require('./models/product');

function validateProduct(req, res, next) {
    const {name, img, price, desc} = req.body;

    const { error } = productSchema.validate({name, img, price, desc});

    if(error) {
        return res.render('error', {err : error.details.map((e) => e.message).join(',')});
    }

    next();
}

function validateReview(req, res, next) {
    const {rating, comment} = req.body;

    const { error } = reviewSchema.validate(({rating, comment}));

    if(error) {
        return res.render('error', {err : error.details.map((e) => e.message).join(',')});
    }

    next();
}

function isLoggedIn (req, res, next) {

    // req.session.returnUrl = req.originalUrl; 
    if(req.xhr && !req.isAuthenticated()) {
        return res.status(401).json({msg: 'You are not authorized. Please login!'});
    }

    if(!req.isAuthenticated()) {
        req.flash('error', "You need to login first!");
        return res.redirect('/login');
    }

    next();
}

function isSeller (req, res, next) {

    if(req.user.role !== 'seller') {
        req.flash('error', "You are not authorized for this action!");
        return res.redirect('/products');
    }

    next();
}

async function isProductAuthor(req, res, next) {
    const {productid} = req.params;
    const product = await Product.findById(productid);

    if(!product.author.equals(req.user._id)) {
        req.flash('error', "You are not authorized for the action");
        return res.redirect(`/products/${productid}`);
    }

    next();
}

module.exports = {validateProduct, validateReview, isLoggedIn, isSeller, isProductAuthor};