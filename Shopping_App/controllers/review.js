const Review = require('../models/review')
const Product = require('../models/product')

module.exports.setReview = async(req, res) => {

    const {productid} = req.params;

    const product = await Product.findById(productid);

    const {rating, comment} = req.body;

    const review = await Review.create({rating, comment});

    const newAvgRating = (product.avgRating*product.reviews.length + parseInt(rating)) / (product.reviews.length + 1) 

    product.avgRating = parseFloat(newAvgRating.toFixed(1));

    product.reviews.push(review);

    await product.save();
    
    req.flash('success', "Added review successfully");

    res.redirect(`/products/${productid}`);
}