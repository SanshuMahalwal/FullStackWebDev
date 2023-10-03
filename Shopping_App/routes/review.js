const express = require('express');
const router = express.Router();
const Review = require('../models/review');
const Product = require('../models/product');
const { validateReview } = require('../middlewares');
const { isLoggedIn } = require('../middlewares');
const {setReview} = require('../controllers/review');

router.post('/products/:productid/review', isLoggedIn, validateReview, setReview);

// router.delete('/products/:productid/:reviewid', async(req, res) => {

//     const productid = req.params.productid;

//     const reviewid = req.params.reviewid;

//     await Review.findByIdAndDelete(reviewid);
    
//     res.redirect(`/products/${productid}`);

// })

module.exports = router;