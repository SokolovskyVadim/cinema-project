const apiURL = 'https://fe08-films.herokuapp.com/';
const authEndpoint  = 'auth';
const filmEndpoint  = 'films';
let tokenValue = [];
let token = [];

function auth() {
    return fetch(`${apiURL}${authEndpoint}`, {
        method: "POST",
    }).then((response) => response.json()).then(data => {
        tokenValue = data;
        let tk = data;
        token = tk[0];
        const myToken = `Beare ${token}`;
        getFilmList(myToken);
    });
};

function getFilmList(token) {
    console.log(token);
    return fetch(`${apiURL}${filmEndpoint}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        }
    }).then((response) => response.json()).then(data => {
        console.log(data);
    })
};

auth();

export {
    getFilmList
}
