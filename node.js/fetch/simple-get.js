apiUrl = "http://ip-api.com/json";

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('API down?');
        }
        return response.json();
    })
    .then(data => {
        console.log(JSON.stringify(data, null, 2));
    })
    .catch(error => {
        console.error('Error:', error);
    });
