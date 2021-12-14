import {titles, directors, discriptions} from './mock-data.js';
import { random, randomDate, randomInt } from './utils.js';

function createMockData (numArrLength) {
    let result = [...Array(numArrLength).keys()].map((item, index) => (item = {
            titles: titles[index] || '-',
            releaseDate: randomDate('01/01/1990', '01/01/2021') || '-',
            plot: discriptions[index] || '-',
            posters: `/images/posters/${index + 1}.jpg`,
            boxOffice: randomInt(1000000, 10000000) || '-',
            rating: random(1, 10).toFixed(1) || 0 || '-',
            directors: directors[index] || '-',
    }));
    return result
};

export {
    createMockData 
}
