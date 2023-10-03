const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
const Joi = require('joi');
const { validateProduct, isLoggedIn, isSeller, isProductAuthor } = require('../middlewares');
const { getAllProducts, getNewForm, setNewProduct, getProduct, getEditForm, editProduct, deleteProduct } = require('../controllers/product');


router.route('/')
    .get(getAllProducts)
    .post(isLoggedIn, isSeller, validateProduct, setNewProduct)
    

router.get('/new', isLoggedIn, isSeller, getNewForm);

router.route('/:productid')
    .get(getProduct)
    .patch(isLoggedIn, isSeller,isProductAuthor, validateProduct, editProduct)
    .delete(isLoggedIn, isSeller, isProductAuthor, deleteProduct)

router.get('/:productid/edit', isLoggedIn, isSeller, isProductAuthor, getEditForm)


module.exports = router;