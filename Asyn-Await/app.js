const fruits = {
    pineapple : '🍍',
    apple : '🍎',
    banana : '🍌',
    mango : '🥭'
}

// function getFruits(name) {
//     return new Promise((resolve, reject)=>{
//         if (!(name in fruits)) {
//             throw new Error('cannot find the fruit');
//         }
//         resolve(fruits[name]);
//     })
// }

async function getFruits(name) {

        if(!(name in fruits)) {
            throw new Error(`cannot find ${name}`)
        }
    
        return fruits[name];    
}

// let a = getFruits('pineapple')
// a.then((val)=>{
//     console.log(val);
// })

async function getFruitShake() {

    try {
        console.log('Starting to get fruits');

        let apple = await getFruits('apple');
        console.log(`Got ${apple}, getting second fruit`);
        let banana = await getFruits('banana');
        console.log(`Got ${banana}, getting third fruit`);
        let mango = await getFruits('mango');
        console.log(`Got ${mango}, now we can make a shake`);
    }

    catch(err) {
        console.log(err.message);
    }
    
}

console.log('START')

getFruitShake();

console.log('END')

console.log('After thousand lines of code....')
console.log('After thousand lines of code....')
console.log('After thousand lines of code....')
console.log('After thousand lines of code....')
console.log('After thousand lines of code....')
console.log('After thousand lines of code....')
console.log('After thousand lines of code....')
console.log('After thousand lines of code....')
console.log('After thousand lines of code....')
console.log('After thousand lines of code....')


//3 ways of async-await
//1.in series
//2.complete parallel
//3.limited parallel 

//Static Methods
//Promise.resolve, .reject, .all, .allSettled, .race, .any 