import {renderFilmsCards} from './render.js';

const apiURL = "https://fe08-films.herokuapp.com";
const authEndpoint = "/auth";
const filmEndpoint = "/films";
let myFilmList = [];

function auth() {
    return fetch(`${apiURL}${authEndpoint}`, {
        method: "POST",
    }).then((response) => response.json()).then(data => {
        let tk = Object.values(data);
        const myToken = `Beare ${tk[0]}`;
        getFilmList(myToken);
    });
}

function getFilmList(token) {
    return fetch(`${apiURL}${filmEndpoint}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Autorization: `${token}`,
        },
    }).then((response) => response.json()).then(data => {
        let filmList = data["films"];
        myFilmList = filmList
        renderFilmsCards(myFilmList);
    });
}

auth();

export {
    getFilmList
}
