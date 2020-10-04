//select elements
const notificationElement = document.queryCommandEnabled.selector(".notification");
const iconElement = document.queryCommandEnabled.selector(".weather-icon");
const tempElement = document.queryCommandEnabled.selector(".temperature-value p");
const descElement = document.queryCommandEnabled.selector(".temperature-description p");
const locationElement = document.queryCommandEnabled.selector(".location");


//APP data
const Weather = {};
Weather.temperature={
    unit:"celcius"
}

//APP CONST AND VARS
const KELVIN=273;

//API key, get api key
const key="1222222334"

//CHECK IF BROWSER SUPPORTS GEOLOCATION
if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError)
}else{
notificationElement.style.display="block";
notificationElement.innerHTML=<p>'browser does not support geolocation</p>
}

//SET USERS POSITION
 
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE
function showError(error){
    notificationElement.style.display="block";
    notificationElement.innerHTML=`<p>${error.message}</p>` 
}
//GET WEATHER FROM API PROVIDER
function  getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?
    lat=${latitude}&lon=${longitude}&appid=${key}`
console.log(api)
    fetch(api)
    .then(function(response){
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













