const mongoose = require('mongoose');
const Review = require('./review');
const User = require('./user');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        min: 0,
        default: 0
    },
    desc: {
        type: String,
        trim: true
    }, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Review'
        }
    ],
    avgRating : {
        type: Number,
        default: 0
    },
})

productSchema.post('findOneAndDelete', async(product) => {
    
    if(product.reviews.length > 0) {
        
        await Review.deleteMany({_id : {$in : product.reviews}});
    }
})    

const Product = mongoose.model('Product', productSchema);

module.exports = Product;