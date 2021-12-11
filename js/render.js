function createFilmsCard(obj) {

  const templateFilmCard = document.querySelector('#card-template');
  let copyCards = templateFilmCard.content.cloneNode(true);
  let { titles, posters, rating, releaseDate, directors, plot, boxOffice } = obj;

  copyCards.querySelector('.card-header__title').textContent = titles;
  copyCards.querySelector('.card-header__image').src = posters;
  copyCards.querySelector('.film-info__rating .film-info__text').textContent = rating;
  copyCards.querySelector('.film-info__plot .film-info__text').textContent = plot;
  copyCards.querySelector('.film-info__release-date .film-info__text').textContent = releaseDate.toLocaleDateString();;
  copyCards.querySelector('.film-info__director .film-info__text').textContent = directors;
  copyCards.querySelector('.film-info__box-office .film-info__text').textContent = `${boxOffice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  return copyCards;
  
};

function renderFilmsCards (filmData) {

    const filmList = document.querySelector('.film-list');
    filmList.innerHTML = '';
    const cardsElements = [];

    filmData.forEach((data) => {
      cardsElements.push(createFilmsCard(data));
    });

    filmList.append(...cardsElements);
    
};

export {
  renderFilmsCards
};
