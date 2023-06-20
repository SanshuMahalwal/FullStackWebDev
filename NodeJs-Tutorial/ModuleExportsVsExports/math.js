// exports.add = (a, b) => a + b
// exports.subtract = (a, b) => a - b

//Doing the above way will change the module.exports object as well,
//as both are refernces to each other, but the problem occurs in 
//the following method using exports

const add = (a, b) => a + b
const subtract = (a, b) => a - b

exports = {
    add, 
    subtract
}

//This way, the reference will break and exports will be another new
//object than module.exports and hence module.exports will remain an
//empty object, which is exported. 
//NOTE : 'module.exports' is exported and not 'exports'  





