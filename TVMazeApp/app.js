
const movieList = document.querySelector('#movie-list');
const inp = document.querySelector('#inp')
const btn = document.querySelector('#btn')

let URL = "https://api.tvmaze.com/search/shows?q="
btn.addEventListener('click', ()=>{
    URL = URL + inp.value;
    inp.value = "";
    fetch(URL)
    .then((res)=>{
        const data = res.json();
        return data;
    })
    .then((data)=>{
        console.log(data); 
        for (let item of data) {
            const li = document.createElement('li');
            movieList.append(li);
            const image = document.createElement('img');
            image.src = item.show.image.medium;
            li.append(image);
        }
    })
    
})

    
