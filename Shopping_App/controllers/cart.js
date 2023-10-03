const User = require('../models/user')

module.exports.showCart = async(req, res) => {
    const userid = req.user._id;
    const user = await User.findById(userid).populate('cart');
    const totalAmount = user.cart.reduce((prev, curr) => prev + curr.price*user.cartMap.get(curr._id), 0);
    res.render('products/cart', {user, totalAmount}); 
}

module.exports.addToCart = async(req, res) => {
    const {productid} = req.params;
    const userid = req.user._id;
    const user = await User.findById(userid);
    //check if productid is already available in cart
    const isPresent = user.cart.includes(productid);
    if(!isPresent) {
        user.cart.push(productid);
        user.cartMap.set(productid, 1);
    }
    else {
        const val = user.cartMap.get(productid); 
        user.cartMap.set(productid, val+1);
    }
    
    await user.save();

    res.redirect('/user/cart');
    // res.redirect(`/products/${productid}`);
}

module.exports.removeFromCart = async(req, res) => {
    const userid = req.user._id;
    const {productid} = req.params;
    const user = await User.findById(userid);
    const newVal = user.cartMap.get(productid) - 1;
    if(!newVal) {
        user.cartMap.delete(productid);
        req.user = await User.findByIdAndUpdate(userid, {$pull : {cart : productid}}, {new: true});
        req.user.cartMap.delete(productid);
    }
    else {
        user.cartMap.set(productid, newVal);
        req.user.cartMap.set(productid, newVal);
    }
    
    await user.save();
    res.redirect('/user/cart');

}
