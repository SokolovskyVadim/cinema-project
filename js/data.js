import {titles, directirs, discriptions} from './mock-data.js';
import {randomIntFromInterval, randomDate} from './utils.js';

function createMockData (numArrLength) {
    let result = [...Array(numArrLength).keys()].map((item, index) => (item = {
            titles:titles[index],
            movieReleaseDate: randomDate(new Date(2018, 0, 1), new Date()),
            plot: discriptions[index],
            posters: `/images/posters/${index + 1}.jpg`,
            boxOffice: randomIntFromInterval(1000000, 10000000),
            rating: randomIntFromInterval(1, 10),
            directors: directirs[index]
    }));
    return result
};

function createFilmsCard(obj) {
    const template = document.querySelector('#card-template');
    let cloneDiv = template.content.cloneNode(true);
    let { titles, posters, rating, movieReleaseDate, directors, plot, boxOffice } = obj;
    cloneDiv.querySelector('.card-header__title').textContent = titles;
    cloneDiv.querySelector('.card-header__image').src = posters;
    cloneDiv.querySelector('.film-info__rating .film-info__text').textContent = rating;
    cloneDiv.querySelector('.film-info__plot .film-info__text').textContent = plot;
    cloneDiv.querySelector('.film-info__release-date .film-info__text').textContent = movieReleaseDate;
    cloneDiv.querySelector('.film-info__director .film-info__text').textContent = directors;
    cloneDiv.querySelector('.film-info__box-office .film-info__text').textContent = `${boxOffice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    return cloneDiv;
};

export {
    createMockData,
    createFilmsCard 
}
