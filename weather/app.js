// Init Weather object
const weather = new Weather('Almaty', 'KZ');

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);


function getWeather() {
    weather.getWeather()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));

}