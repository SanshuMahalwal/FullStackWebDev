const inp = document.querySelector('.inp')

inp.addEventListener('focus', ()=>{
    inp.style.backgroundColor = 'Yellow'
})

// inp.addEventListener('blur', (e)=>{
//     inp.style.backgroundColor = ''
//     console.log(e.target.value);
// })

inp.addEventListener('keydown', ()=>{
    inp.style.backgroundColor = 'blue'
})
inp.addEventListener('keyup', ()=>{
    inp.style.backgroundColor = 'red'
})

// document.querySelector('body').addEventListener('load', ()=>{
//     document.querySelector('h1').innerText += '(Page loaded successfully)';
// })
let bdy = document.querySelector('body');
// console.log(bdy);
// bdy.addEventListener('load', ()=>{
//     const hdg = document.querySelector('#hdg')
//     hdg.innerText = hdg.innerText +  " (Page loaded successfully)"
//     console.log(hdg);
// })

inp.addEventListener('change', ()=>{
    inp.style.backgroundColor = 'coral'
})
