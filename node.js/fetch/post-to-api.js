var apiUrl = "https://jsonplaceholder.typicode.com/posts";
var json = {
    name: "Girish Venkatachalam",
    website: "https://photoveda.pro",
    Open_source: "https://progress-up.live",
    Github: "https://github.com/girish1729",
    Personal: "https://girishvenkatachalam.me"
};
const requestOptions = {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
};

fetch(apiUrl, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Internet issue is it?');
        }
        return response.json();
    })
    .then(data => {
        console.log(JSON.stringify(data, null, 2));
    })
    .catch(error => {
        console.error('Error:', error);
    });
