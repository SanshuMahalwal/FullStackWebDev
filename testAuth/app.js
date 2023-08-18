const express = require('express');
const app = express();
const path = require('node:path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./model/user');
const { isLoggedIn } = require('./middleware');

mongoose.connect('mongodb://127.0.0.1:27017/test-Auth')
    .then(()=>console.log("DB connected"))
    .catch((err)=>console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 *60 *24 * 7
    }    
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', passport.authenticate('local', {failureRedirect: '/login', failureMessage: true}),
                
        (req, res) => {
        console.log(req.user.username);
        console.log("Logged in successfully");
        console.log(req.session);
        let redirectUrl = req.session.returnUrl || '/secret';
        delete req.session.returnUrl;

        res.redirect(redirectUrl);

})

app.get('/secret', isLoggedIn, (req, res) => {
    res.render('secret');
})

app.get('/new', isLoggedIn, (req, res) => {
    res.render('new');
})

app.get('/register', (req, res) => {
    res.render('signup');
})

app.post('/register', async(req, res) => {
    const {username, password} = req.body;
    const user = new User({username});
    const newUser = await User.register(user, password);
    req.login(newUser, function(err) {
        if(err) {return next(err)};
        console.log("Logged in successfully!");
        res.redirect('/secret');
    })
})

app.post('/logout', (req, res) => {
    req.logout(function(err) {
        if(err) {return next(err)};
        console.log("logged out successfully!")
        res.redirect('/login');
    })
})



const port = 4500;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})

