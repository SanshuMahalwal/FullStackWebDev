console.log("Start")

// function delay(n) {
//     let currentEpoch = new Date().getTime();
//     while (new Date().getTime() < currentEpoch + n*1000) {

//     }
//     fun();
// }

// function fun() {
//     console.log("Inside fun");
// }

// delay(3);

// setTimeout(function() {
//     console.log("Inside setTimeout");
// }, 3000)

const id = setInterval(function() {
    console.log("Inside setInterval");
}, 3000)      

setTimeout(function() {
    clearInterval(id)
}, 12000);

function fun() {
    console.log("Inside fun");
}

fun();


console.log("End")