const grandParent = document.querySelector('.grand-parent')
const parent = document.querySelector('.parent')
const mother = document.querySelector('.mother')

mother.addEventListener('click', (e)=> {
    e.stopPropagation();
    console.log("Clicked child")
})

parent.addEventListener('click', (e)=> {
    // e.stopPropagation();
    console.log("Clicked parent")
})
 
grandParent.addEventListener('click', (e)=> {
    // e.stopPropagation();
    console.log("Clicked grandparent")
})

//true - means use Capture instead of bubbling
//false (also default value) - means do not use capture, stay with bubbling