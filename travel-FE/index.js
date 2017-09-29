const request = require('request');
const BE_URL = 'http://localhost:3000/api';

const newClient = {
    firstname: "Paola ",
    lastname: "Ortiz de Zevallos"
}

//POST
const CLIENT_API = `${BE_URL}/clients`

request.post({
    url: CLIENT_API, 
    form: newClient
    }, (err, response, body) => {
    console.log(body);
})

//GET

const client2 = `${CLIENT_API}/2`

request.get(client2, (err, response, body) => {
    console.log(body)
})