const sortingFilmButtons = document.querySelectorAll('.sorting .button');
const sortingPanel = document.querySelector('.control-panel.sorting');

function sortFilmsData(render, data) {
  sortingPanel.addEventListener('click', (event) => {
    const { target } = event;
    let desiredId = event.target.id;
    if (desiredId === 'rating') {
      sortingFilmButtons.forEach((item) => item.classList.remove('button_checked')); 
      target.classList.add('button_checked');
      render(
        data.sort((minValue, maxValue) => maxValue.rating * 10 - minValue.rating * 10)
      );
    }
    if (desiredId === 'releaseDate') {
      sortingFilmButtons.forEach((item) => item.classList.remove('button_checked'));
      target.classList.add('button_checked');
      render(
        data.sort(
          (minValue, maxValue) =>
            new Date(maxValue.releaseDate).getTime() -
            new Date(minValue.releaseDate).getTime()
        )
      );
    }
    if (desiredId === 'boxOffice') {
      sortingFilmButtons.forEach((item) => item.classList.remove('button_checked'));
      target.classList.add('button_checked');

      render(data.sort((minValue, maxValue) => maxValue.boxOffice - minValue.boxOffice));
    }
  });
};
export { sortFilmsData };
