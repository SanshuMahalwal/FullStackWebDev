const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../../middlewares');
const User = require('../../models/user');

router.post('/products/:productid/like', isLoggedIn, async(req, res) => {
    const {productid} = req.params;

    const user = req.user;

    if(user.wishlist.includes(productid)) {
        req.user = await User.findByIdAndUpdate(user._id, {$pull: {wishlist:productid}}, {new : true});
    }
    else {
        req.user = await User.findByIdAndUpdate(user._id, {$addToSet: {wishlist:productid}}, {new : true});
    }

    res.send("Wishlist updated!");

})

module.exports = router;