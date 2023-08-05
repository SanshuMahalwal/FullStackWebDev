const express = require('express');
const app = express();

const verify = (req, res, next) => {
    const {password} = req.query;

    if(password !== 'sunny') {
        return res.send('Invalid password!!');
    }

    next();
}

app.use((req, res, next) => {
    console.log('First Middleware');

    req.username = 'Sunny';

    next();

    console.log("After next() of First middleware");
})

app.use((req, res, next) => {
    console.log("Second Middleware");
    next();
})

app.get('/', (req, res) => {
    // console.log(req.username);
    res.send('Home Page')
})

app.get('/secret', verify, (req, res) => {
    res.send('Sometimes I do not want to talk!')
})


app.listen(2222, () => {
    console.log("Server started at port 2222");
})