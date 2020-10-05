//select elements
const notificationElement = document.getElementById(".notification");
const iconElement =  document.getElementById("weather-icon");
const tempElement =  document.getElementById("temperature-value p");
const descElement = document.getElementById("temperature-description p");
const locationElement =  document.getElementById("location");


//APP data
const Weather = {};
Weather.temperature={
    unit:"celcius"
}

//APP CONST AND VARS
const KELVIN=273;

//API key, get api key
const key="eb899420b4msh54a3ba2026f0a44p1d6056jsn3918f241e814"

//CHECK IF BROWSER SUPPORTS GEOLOCATION
if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError)
}else{

notificationElement.innerHTML=`<p>'browser does not support geolocation</p>`
}

//SET USERS POSITION
 
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE
function showError(error){
    notificationElement.innerHTML=`<p>${error.message}</p>` 
}
//GET WEATHER FROM API PROVIDER
function  getWeather(latitude, longitude){
    
    `lat=${latitude}&lon=${longitude}&appid=${key}`

    fetch("https://rapidapi.p.rapidapi.com/weather?q=Lagos%2CNigeria&callback=test&id=2172797&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "bPnHUyGLA9msh2loEskcGkXU20bep1Z18jwjsnSxybvwmVlN8L"
        }
    })
    .then(function(response){
        console.log(response)
     let data = response.json();
     return data ;  
    })
    .then(function(data){
        Weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        Weather.description = data.weather[0].description;
        Weather.iconId=data.weather[0].icon;
        Weather.city= data.name;
        Weather.country = data.sys.country

    })
    .then(function(){
        displayWeather()
    });

}
  //DISPLAY WEATHER TO UI
  function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${Weather.iconId}.png"/>`;
    tempElement.innerHTML = `${Weather.temperature.value}° <span>C</span>`;
    descElement.innerHTML = Weather.description;
   locationElement.innerHTML = `${Weather.city}, ${Weather.country}`;
   }
   //CELCIUS TO FAHRENHEIT CONVERSION
   function celciusToFahrenheit(temperature){
      return (temperature * 9/5) + 32 
   }

   // when the user clicks on the temperature
   tempElement.addEventListener("click", function(){
       if (weather.temperature.value === undefined){return}
       if(weather.temperature.value == celcius){
         let fahrenheit = celciusToFahrenheit(weather.temperature.value);
         fahrenheit = Math.floor(fahrenheit);
         tempElement.innerHTML = `${fahrenheit}° <span>F</span>`;
         weather.temperature.unit = "fahrenheit"
       }else{
        tempElement.innerHTML = `${Weather.temperature.value}° <span>C</span>`;
        weather.temperature.unit = "celcius"
       }
   })






  




  
