
const catFacts = document.querySelector('#cat-facts');

fetch('https://cat-fact.herokuapp.com/facts')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        // console.log(data);
        for (let item of data) {
            // console.log(item.text)
            const para = document.createElement('p')
            para.innerText = item.text;
            catFacts.append(para);
        }
    })
    .catch((err)=>{
        console.log(err);
    })