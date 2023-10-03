const User = require('../models/user')

module.exports.getSignupForm = (req, res) => {
    res.render('auth/register');
}

module.exports.performSignup = async(req, res) => {
    try {
        const {username, password, email, role} = req.body;
        const user = new User({username, email, role, cartMap: {}});
        const newUser = await User.register(user, password);
    
        req.login(newUser, function(err) {
            if (err) { return next(err); }
            req.flash('success', `Welcome ${newUser.username}`);
            return res.redirect('/products');
        });
    }
    catch(e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
}

module.exports.getLoginForm = (req, res) => {
    res.render('auth/login');
}

module.exports.performLogin =  (req, res) => {

    req.flash('success', `Welcome back ${req.body.username}`);

    let redirectUrl = req.session.returnUrl || '/products';
    delete req.session.returnUrl;
    res.redirect(redirectUrl);
}

module.exports.performLogout = (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.flash('success', "Logged out successfully!");
        res.redirect('/login');
    });  
}