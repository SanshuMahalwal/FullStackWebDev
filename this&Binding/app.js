// function fun(name, age, gender) {
//     console.log(this)
//     console.log(name)
//     console.log(age)
//     console.log(gender)
// }

// const a = {
//     l: 10,
//     m: true
// }

// fun('Sunny', 25, 'Male');
// fun.call(a, 'Sana', 25, 'Female');
// const f = fun.bind(a);

// //......Thousand lines of code

// console.log(f);
// f('Nikki', 34, 'Female');

/////////////////////////////////////////////////////////

//  A product to be defined by its name and price 

function product(name, price) {
    this.name = name;
    this.price = price;
}

function foodProduct(name, price) {
    product.call(this, name, price);
    this.category = 'food';
}

function electronicProduct(name, price) {
    product.call(this, name, price);
    this.category = 'electronics'
}

const burger = new foodProduct('McVeggie', 5);
const earphones = new electronicProduct('Airdopes161', 30);

console.log(burger);
console.log(earphones);
