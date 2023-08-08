const express = require('express')
const app = express();
const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

app.get('/', (req, res) => {
    res.redirect('/views');
})

app.get('/views', (req, res) => {
    
    if(req.session.views) {
        req.session.views += 1;
    }
    else {
        req.session.views = 1;
    }

    res.send(`You visited this page ${req.session.views} times`);
})

app.get('/getusername', (req, res) => {

    req.session.username = "Sunny"
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {

    const {username = "Anonymous"} = req.session;
    res.send(`Hello ${username}`);
})





app.listen(3500, () => {
    console.log("Server started at port 3500");
})