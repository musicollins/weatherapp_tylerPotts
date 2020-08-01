const api = {
    key: "98c24656f930835a74aa58532941454e",
    baseURL: "https://api.openweathermap.org/data/2.5/weather"
}

//Selectors
const searchBox = document.querySelector(".search-box");
let currentDate = document.querySelector(".location .date")
    let newDate = new Date();

    let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    let month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

    currentDate.innerText = `${weekday[newDate.getDay()]} ${newDate.getDate()} ${month[newDate.getMonth()]} ${newDate.getFullYear()}`

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

    let temp = document.querySelector('.current .temp');
    temp.innerText = `${Math.floor(weather.main.temp)}°C`;

    let hiLow = document.querySelector('.current .hi-low');
    hiLow.innerText = ` ${Math.floor(weather.main.temp_min)} / ${Math.floor(weather.main.temp_max)} `




}
