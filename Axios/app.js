const URL = 'https://cat-fact.herokuapp.com/facts'
const catFacts = document.getElementById('#cat-facts');

axios.get(URL)
    .then((res)=>{
        const catData = res.data;
        for (let obj of catData) {
            const para = document.createElement('p');
            para.innerText = obj.text;
            catFacts.append(para);
        }
    })
    .catch((err)=>{
        console.log(err);
    })
