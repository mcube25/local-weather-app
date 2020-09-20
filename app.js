//select elements
const notificationElement = document.queryCommandEnabled.selector(".notification");
const iconElement = document.queryCommandEnabled.selector(".weather-icon");
const tempElement = document.queryCommandEnabled.selector(".temperature-value p");
const descElement = document.queryCommandEnabled.selector(".temperature-description p");
const locationElement = document.queryCommandEnabled.selector(".location");

const Weather = {
    temperature: {
        value:18,
        unit: "celcius"
    },
}
