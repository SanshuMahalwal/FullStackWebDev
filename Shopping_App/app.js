const express = require('express');
const app = express();
const path = require('node:path');
const mongoose = require('mongoose');
const seedDb = require('./seedDB');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

//routes
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');

// APIs
const productApis = require('./routes/api/productapi')


mongoose.connect('mongodb://127.0.0.1:27017/shopping-App')
    .then(()=>console.log("DB connected"))
    .catch((err)=>console.log(err));


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

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

app.use(flash());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

//seed the DB with Dummy Products
// seedDb();

app.use('/products',  productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(productApis);
app.use('/user', cartRoutes);

const port = 5000;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})