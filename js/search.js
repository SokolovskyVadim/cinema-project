const inputSearchFilms = document.querySelector('.search__input');
const sortButtonsFilms = document.querySelectorAll('.sorting .button');

function searchFilms(render, data) {
  inputSearchFilms.addEventListener('keyup', (event) => {
    const inputFilmsValue = event.target.value;

    if (inputFilmsValue) {

      render(data.filter((data) => data.titles.toLowerCase().includes(inputFilmsValue.toLowerCase())));

      sortButtonsFilms.forEach((item) => item.classList.remove('button_checked'));

    }

    if (!inputFilmsValue) {
      return render(data);
    }

  });
};

export {
  searchFilms,
  sortButtonsFilms,
  inputSearchFilms
};
