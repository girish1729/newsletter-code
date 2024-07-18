var fs = require('fs');
var stream = require('stream');

var apiUrl = "https://jsonplaceholder.typicode.com/posts";

const form = new URLSearchParams();
form.append('Name', 'Anu Sithara ');
form.append('my_buffer', new Buffer.alloc(10));
form.append('image', fs.createReadStream('Pictures/anu.jpeg'));

const requestOptions = {
    method: 'POST',
    body: form
};

fetch(apiUrl, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Internet down?');
        }
        return response.json();
    })
    .then(data => {
        console.log(JSON.stringify(data, null, 2));
    })
    .catch(error => {
        console.error('Error:', error);
    });
