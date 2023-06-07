function add(x, y) {
    return x + y;
}

console.log(add(5, 6));

const car = {
    name: 'BMW',
    color: 'Black',
    price: 100000
}

console.log(car);
console.log(car.__proto__ === Object.prototype)

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get getName() {
        return this.name;
    }

    get getAge() {
        return this.age
    }
}

const p1 = new Person('Sunny', 25)

console.log(p1);
console.log(p1.getName)