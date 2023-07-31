const express = require('express')
const app = express()
const path = require('node:path')
const mongoose = require('mongoose')
const seedDB = require('./seed')
const methodOverride = require('method-override');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

//Routes
const productRoutes = require('./routes/productRoutes')


mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => console.log("DB connected!"))
    .catch((err)=>console.log(err));


//Seeding the DB with dummy products
// seedDB();

app.use(productRoutes);


app.listen(3000, ()=>{
    console.log('Server started at port 3000')
})