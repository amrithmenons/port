document.getElementById('fetchWeatherButton').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeather(location);
    } else {
        alert('Please enter a location.');
    }
});

function fetchWeather(location) {
    const apiKey = 'a54e457d4c3a1145ed667761500de974';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.innerHTML = `
        <div>Location: ${data.name}, ${data.sys.country}</div>
        <div>Temperature: ${data.main.temp}°C</div>
        <div>Weather: ${data.weather[0].description}</div>
        <div>Humidity: ${data.main.humidity}%</div>
        <div>Wind Speed: ${data.wind.speed} m/s</div>
    `;
}
