const apiKey = 'b2a6cf7f3a4324d3d21233809b5c97e8';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Trivandrum&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Openweather API is down or Internet is down');
        }
        return response.json();
    })
    .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const location = data.name;
        console.log(`Temperature in ${location}: ${temperature}°C`);
        console.log(`Weather: ${description}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });
