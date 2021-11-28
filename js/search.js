const inputFilmsSearch = document.querySelector('.search__input');
const sortingFilmsButtons = document.querySelectorAll('.sorting .button');
function searchFilms(render, data) {
  inputFilmsSearch.addEventListener('keyup', (event) => {
    const inputValue = event.target.value;
    if (inputValue) {
      render(
        data.filter((data) =>
          data.titles.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
      sortingFilmsButtons.forEach((item) => item.classList.remove('button_checked'));
    }
    if (!inputValue) {
      return render(data);
    }
  });
};
export { searchFilms };
