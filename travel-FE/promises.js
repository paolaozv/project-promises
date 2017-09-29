const request = require('request');
const BE_URL = 'http://localhost:3000/api';

const newClient = {
    firstname: "Paola ",
    lastname: "Ortiz de Zevallos"
}

const saveData = (url, data) => {
    return new Promise((resolve, reject) => {
        request.post({
            url: url,
            form: data
        }, (err, response, body) => {
            if (err) {
                reject(err)
            }
            resolve(body)
        })
    })
}

//POST
const CLIENT_API = `${BE_URL}/clients`

saveData(CLIENT_API, newClient)
    .then((resp) => {
        console.log(resp)
    })
    .catch((err) => {
        console.log(err)
    })

    const clientAdded = saveData(CLIENT_API, newClient)
    clientAdded.then((resp) => {
        console.log(resp)
    })

const myPromise = new Promise((resolve, reject) => {
    let i = 0;
    while( i < 1000) {
        i++;
    }

    resolve('fin');
})

myPromise.then((resp) => {
    console.log(resp)
})