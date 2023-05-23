const parent = document.querySelector('.parent');
const children = document.querySelectorAll('.child');

//Foolish way

// children.forEach((child)=>{
//     child.addEventListener('click', (e)=>{
//         console.log(e.target.innerText);
//     })
// })

//Better way to do is to add event handler on parent and put a condition

parent.addEventListener('click', (e)=>{
//    console.log(e);
    if (e.target.className.includes('child')) {
        console.log(e.target.innerText);
    }
})