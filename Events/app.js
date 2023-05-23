const btn = document.querySelector('.btn');
// const btn = document.getElementsByClassName(btn)
// console.dir(btn);

// btn.onclick = function() {
//     console.log("Clicked!!");
// } 

// btn.onclick = function() {
//     console.log("Hellooo!");
// } 

// This will not let us add multiple events on the same class
// To avoid : We do it by adding event listener


btn.addEventListener('click', () => {
    console.log("Hey!")
})

btn.addEventListener('click', () => {
    console.log("Clicked!")
})