const mongoose = require('mongoose')
const Product = require('./models/product')

const DUMMY_PRODUCTS = [
    {
        name : 'Nike Sneakers',
        img : "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5pa2UlMjBzbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price : 150,
        desc :'Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure. The Air-Sole units maintain their given form with elasticity, reduce impact and keep the shoe snug and lightweight.'
    },
    {
        name : 'Gym T-Shirt',
        img : "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwdHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        price : 25,
        desc :'Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure. The Air-Sole units maintain their given form with elasticity, reduce impact and keep the shoe snug and lightweight.'
    },
    {
        name : 'Swimming Costume',
        img : "https://contents.mediadecathlon.com/p2539379/28b5b66ea7439c262c506f8cda911373/p2539379.jpg?format=auto&quality=70&f=650x0",
        price : 11.99,
        desc :'Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure. The Air-Sole units maintain their given form with elasticity, reduce impact and keep the shoe snug and lightweight.'
    },
    {
        name : 'Nikon Camera',
        img : "https://images.unsplash.com/photo-1614108831136-a6bba175a08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price : 399,
        desc :'Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure. The Air-Sole units maintain their given form with elasticity, reduce impact and keep the shoe snug and lightweight.'
    },
    {
        name : 'Tripod',
        img : "https://images.unsplash.com/photo-1576299090369-9067e4adca28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJpcG9kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        price : 19,
        desc :'Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure. The Air-Sole units maintain their given form with elasticity, reduce impact and keep the shoe snug and lightweight.'
    },
    {
        name : 'JBL Speaker',
        img : "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price : 75,
        desc :'Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure. The Air-Sole units maintain their given form with elasticity, reduce impact and keep the shoe snug and lightweight.'
    },
    {
        name : 'Honey',
        img : "https://media.istockphoto.com/id/155308208/photo/honey.webp?b=1&s=170667a&w=0&k=20&c=sdPOgV2ZFfqpaPtqKBjSxmkVY8G-zXnTJWZEF8l_6Ig=",
        price : 22,
        desc :'Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure. The Air-Sole units maintain their given form with elasticity, reduce impact and keep the shoe snug and lightweight.'
    },
    {
        name : 'Earphones',
        img : "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVhcnBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price : 150,
        desc :'Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure. The Air-Sole units maintain their given form with elasticity, reduce impact and keep the shoe snug and lightweight.'
    }
]

async function seedDb() {

    await Product.deleteMany({});

    await Product.insertMany(DUMMY_PRODUCTS);

    console.log('DB seeded');
}

module.exports = seedDb;

