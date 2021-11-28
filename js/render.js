import {createFilmsCard} from './data.js';

function renderCards (filmData) {
    const filmList = document.querySelector('.film-list');
    filmList.innerHTML = '';
    const cardsElements = [];
    filmData.forEach((data) => {
      cardsElements.push(createFilmsCard(data));
    });
    filmList.append(...cardsElements);
};

export {
  renderCards
}