import {createMockData} from './data.js';
import {getFilmList} from './api.js';
import {renderFilmsCards} from './render.js';
import { sortFilmsData } from './sort.js';
import { searchFilms } from './search.js';
import { addToFavoritesFilm, showFavoritesFilms } from './local-storage.js';

const filmsData = createMockData(10);
// const filmsData = getFilmList();
sortFilmsData(renderFilmsCards, filmsData);
searchFilms(renderFilmsCards, filmsData);
renderFilmsCards (filmsData);
addToFavoritesFilm();
showFavoritesFilms(filmsData, renderFilmsCards);
