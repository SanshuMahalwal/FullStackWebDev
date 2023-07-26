const city_inp = document.querySelector('.city-inp');
const btn = document.querySelector('.check-btn');
const city_out = document.querySelector('.city-out');
const weather_data = document.querySelector('.weather-data') ;
const city_temp = document.querySelector('.city-temp')
const city_mood = document.querySelector('.city-mood')
const city_feels = document.querySelector('.city-feels')
const main = document.querySelector('.weather_header')

btn.addEventListener('click', async(e) => {
    e.preventDefault();
    if(city_inp.value === "") {
        city_out.innerText = "Please provide a city name";
        weather_data.classList.add('data_hide');
    }
    else {
        let cityName = city_inp.value;
        try {
            city_out.innerText = cityName

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=68c181b97b20267c73f96324584cdf23`
            const res = await fetch(url);
            const data = await res.json();

            weather_data.classList.remove('data_hide');

            if(city_mood.classList.length > 1) {
                city_mood.classList.remove(city_mood.classList[1], city_mood.classList[2]);
            }
            if(main.classList.length > 2) {
                main.classList.remove(main.classList[2]);
            }

            city_temp.innerHTML = `${data.main.temp}<sup>o</sup>C`;
            city_feels.innerText = data.weather[0].main;

            if(data.weather[0].main == 'Clear') {
                city_mood.classList.add('bi', 'bi-sun');
                main.classList.add('clear');
            }
            if(data.weather[0].main == 'Rain') {
                city_mood.classList.add('bi', 'bi-cloud-rain-heavy');
                main.classList.add('rain');
            }

            if(data.weather[0].main == 'Fog') {
                city_mood.classList.add('bi', 'bi-cloud-fog2');
                main.classList.add('fog');
            }

            if(data.weather[0].main == 'Haze') {
                city_mood.classList.add('bi', 'bi-cloud-haze2');
                main.classList.add('haze');
            }
        
            if(data.weather[0].main == 'Clouds') {
                city_mood.classList.add('bi', 'bi-clouds-fill');
                main.classList.add('clouds');
            }
            
            if(data.weather[0].main == 'Mist') {
                city_mood.classList.add('bi', 'bi-moisture');
                main.classList.add('mist');
            } 
            if(data.weather[0].main == 'Drizzle') {
                city_mood.classList.add('bi', 'bi-cloud-drizzle'); 
                main.classList.add('drizzle');
            } 
            if(data.weather[0].main == 'Snow') {
                city_mood.classList.add('bi', 'bi-snow3'); 
                main.classList.add('snow');
            } 
            
            city_inp.value = "";
        }
        catch(err) {
            console.log(err);
            weather_data.classList.add('data_hide');
            city_out.innerText = "Please provide a valid city name"
        }
    }
});