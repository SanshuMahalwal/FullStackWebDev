// const superhero = require('./super-hero')
// console.log(superhero);
// console.log(superhero.getName());

// superhero.setName("Superman")

// console.log(superhero.getName());

// const newSuperhero = require('./super-hero')
// console.log(superhero.getName());

const superhero = require('./super-hero');

const mysuperhero = new superhero("Batman")

console.log(mysuperhero.getName());

const newSuperhero = new superhero("Superman")
console.log(newSuperhero.getName());