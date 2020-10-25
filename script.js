let appId= '5827b81385a644c2eff3e31bbe9b0e21';
let units = 'imperial';
let searchMethod = 'zip';


function getSearchMthod(searchTerm) {
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
        searchMethod = 'zip';
    else
        searchMethod = 'q';
}
function searchWeather(searchTerm){
    getSearchMthod(searchTerm);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = 'url("clear.jpg")';
            break;
        case 'Clouds':
            document.body.style.backgroundImage = 'url("cloudy.jpg")';
            break;
        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url("rainy.jpg")';
            break;

        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url("thunderstorm.jpg")';
            break;
        case 'Snow':
            document.body.style.backgroundImage = 'url("snowy.jpg")'; 
            break;
        default:
            break;
    }

    let weatherDescriptionHeader  =document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementByIdById('temperature')
    let humidytyElement = document.getElementById('humidity')
    let widnSpeedElement = document.getElementById('windSpeed');
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('documentIconImg')
}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if (searchTerm)
        searchWeather(searchTerm)
})
