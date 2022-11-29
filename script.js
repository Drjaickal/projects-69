const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItems = document.getElementById('currnt-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForcast = document.getElementById('weather-forcast');
const currentTempEl = document.getElementById('currnet-temp');



const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'Saturday']
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY = '05b0ae37402c59cab7bafe71a828bb26';
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12hoursFormat = hour >= 13 ? hour % 12 : hour
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'pm' : 'am'

    timeEl.innerHTML = `${hoursIn12hoursFormat}:${minutes}<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ',' + date + ' ' + month[month]


}, 1000);

getWeatherData()

function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {

        let { latitude, longitude } = success.coords;


        fetch('https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}').then(res => res.json()).then(data => {
            console.log(data)
            showWeatherData(data);
        })
    })
}

function showWeatherData(data) {


}