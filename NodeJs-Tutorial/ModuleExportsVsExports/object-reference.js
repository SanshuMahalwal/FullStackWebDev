const obj1 = {
    name: "Bruce Lee"
}

let obj2 = obj1;

// console.log(obj1, obj2);
// obj2.name = "Jackie Chan"

console.log(obj1, obj2); //obj1 and 2 have same address in memory, hence both are same

//Assigning another object to obj2, i.e. CREATING new object
obj2 = {
    name: "Jackie Chan"
}
console.log(obj1, obj2);