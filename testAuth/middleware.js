
module.exports.isLoggedIn = (req, res, next) => {

    req.session.returnUrl = req.originalUrl;

    if(!req.isAuthenticated()) {
        console.log(req.session);
        return res.status(401).redirect('/login');
    }

    next();
}