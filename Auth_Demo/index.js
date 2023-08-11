const express = require('express');
const app = express();
const path = require('node:path');
const mongoose = require('mongoose');
const User = require('./model/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/auth-Demo')
    .then(() => console.log("DB connected!"))
    .catch((err)=>console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }));

const validateUser = async function(req, res, next) {
    const {username, password} = req.body;

    const user = await User.findOne({username});

    if(user) {
        const validUser = await bcrypt.compare(password, user.password);
        if(!validUser) {
            return res.send("Invalid Password!");
        }
    }
    else {
        return res.send("Enter a Valid Username! Go Back");
    }

    req.session.username = username;

    next();
}

app.get('/', (req, res) => {
    res.send("Home page! Go to '/register' to SignUp or '/login' to Login");
})

app.get('/register', (req, res) => {

    res.render('signup');
})

app.post('/register', async(req, res) => {

    const {username, password} = req.body;

    const salt = await bcrypt.genSalt(12);

    const hash = await bcrypt.hash(password, salt);

    const newUser = await User.create({username, password: hash});

    res.redirect('/login');
     
})

app.get('/login', (req, res) => {

    res.render('login');
})

app.post('/login', validateUser, async(req, res) => {

    res.redirect('/secret');
})

app.get('/logout', (req, res) => {
    req.session.destroy(()=> {
        res.redirect('/login');
    })
});


app.get('/secret', (req, res) => {
    if(req.session.username) {    
        res.send("My secret is that sometimes I talk when I don't want to")
    }
    else {
        res.send("You need to login to view this page!");
    }
})

app.listen(3000, ()=>{
    console.log("Server started at port 3000!");
})