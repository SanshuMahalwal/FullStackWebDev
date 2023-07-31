const mongoose = require('mongoose');
const Product = require('./models/products')

const DUMMY_PRODUCTS = [
    {
        name: 'iPhone',
        price: 400,
        desc: "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."
    },
    {
        name: 'Nike Shoes',
        price: 100,
        desc: "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."
    },
    {
        name: 'Police Watch',
        price: 150,
        desc: "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."
    },
    {
        name: 'Jabulani football',
        price: 50,
        desc: "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."
    },
    {
        name: 'Adidas T-shirt',
        price: 35,
        desc: "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."
    }   
]

async function seedDB() {

    await Product.insertMany(DUMMY_PRODUCTS);
    console.log("DB seeded");
}

module.exports = seedDB;