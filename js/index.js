import {createMockData} from './data.js';
import {renderCards} from './render.js';
import { sortFilmsData } from './sort.js';
import { searchFilms } from './search.js';

const filmsData = createMockData(10);
sortFilmsData(renderCards, filmsData);
searchFilms(renderCards, filmsData);
renderCards (filmsData);
