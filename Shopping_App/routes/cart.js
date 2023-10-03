const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { isLoggedIn } = require('../middlewares');
const Product = require('../models/product');
const {showCart, addToCart, removeFromCart} = require('../controllers/cart')

router.get('/cart', isLoggedIn, showCart) 

router.post('/:productid/cart', isLoggedIn, addToCart)

router.patch('/:productid/cart', isLoggedIn, removeFromCart)


module.exports = router;