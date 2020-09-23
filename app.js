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
const key="122222233445555"

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
}

















