const apiKey = "b0e4eefe6a2d193741da82b3a8f3115f";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let searchBox = document.querySelector("#search input");
let searchBtn = document.querySelector("#search button");
let weatherIcon = document.getElementById("weather-icon");



let span = document.querySelector("span");
span.innerHTML = '\u00d7';

    



async function checkWeather(cityName){
    const response = await fetch(apiURL + cityName + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status === 404){
        document.getElementById("invalid-city-name").style.display = "block";
        searchBox.value = '';
    }else{
        document.getElementById("invalid-city-name").style.display = "none";
        searchBox.value = '';
    }

    // console.log(data);

    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png";
    }else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.getElementById("weather").style.display = "block";
    
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

