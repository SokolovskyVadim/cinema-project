import { sortButtonsFilms, inputSearchFilms } from './search.js';

const filmList = document.querySelector('.film-list');
const favoritesFilmsList = [];

const removeFilmFromFavoritesList = (arr, value) => {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

function getFavoritesFilmsList() {
  localStorage.setItem('favorites', JSON.stringify(favoritesFilmsList));
  filmList.innerHTML = '';
  JSON.parse(localStorage.getItem('favorites')).forEach((item) => {
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.insertAdjacentHTML('afterBegin', item);
    filmList.append(divCard);
  });
};

function addToFavoritesFilm() {
  filmList.addEventListener('click', (event) => {
    const { target } = event;
    target.closest('.card').remove();
    if (target.closest('.button').classList.contains('button_add')) {
      if (favoritesFilmsList) {
        removeFilmFromFavoritesList(
          favoritesFilmsList,
          target.closest('.card').innerHTML
        );
      }
      target.closest('.button').classList.toggle('button_remove');
    }
    if (target.closest('.button').classList.contains('button_remove')) {
      favoritesFilmsList.push(target.closest('.card').innerHTML);
      target.closest('.button').classList.toggle('button_add');
      console.log(favoritesFilmsList);
    }
  });
};

function showFavoritesFilms(data, render) {
  const favorite = document.querySelector('#favorite');
  favorite.addEventListener('click', (event) => {
    const checkValue = event.target.checked;

    if (!checkValue) {
      return render(data);
    }
    if (checkValue) {
      getFavoritesFilmsList();

      sortButtonsFilms.forEach((item) => item.classList.remove('button_checked'));
      inputSearchFilms.value = '';
    }
  });
};

export {
  showFavoritesFilms,
  addToFavoritesFilm
};
