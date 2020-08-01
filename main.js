const api = {
    key: "98c24656f930835a74aa58532941454e",
    baseURL: "https://api.openweathermap.org/data/2.5/weather"
}

//Selectors
const searchBox = document.querySelector(".search-box");
let currentDate = document.querySelector(".location .date")
    let newDate = new Date();
    
    currentDate.innerText = `${newDate.getFullYear()}--${(newDate.getMonth()+1)}--${newDate.getDate()}`

//eventListeners
searchBox.addEventListener('keypress', setQuery);

//functions
function setQuery (e){
    if(e.keyCode == 13){
        getResults(searchBox.value);
        console.log(searchBox.value)
        searchBox.value = "";
    }
}

function getResults(query){
    fetch(`${api.baseURL}?q=${query}&units=metric&appid=${api.key}`)
        .then(weather => {
            return weather.json();
            
        }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    //selectors
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let stateOfWeather = document.querySelector('.current .weather');
    stateOfWeather.innerText = `${weather.weather[0].main}`



}
