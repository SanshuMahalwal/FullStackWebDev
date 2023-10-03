const { required, string } = require('joi');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        trim: true
    },
    role : {
        type : String,
        require: true,
        trim: true
    },
    wishlist : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        }
    ],
    cart : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        }
    ],
    cartMap : {
        type: Map,
        of: Number
    },

})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;