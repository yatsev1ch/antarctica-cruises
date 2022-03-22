const header = document.querySelector('.page-header');
const menu = document.querySelector('.page-header__wrapper');
const menuButton = document.querySelector('.page-header__menu-button');

header.classList.remove('page-header--no-js');
menu.classList.remove('page-header__wrapper--no-js');

const menuClickHandler = () => {
  if (menu.classList.contains('page-header__wrapper--opened')) {
    menu.classList.remove('page-header__wrapper--opened');
    return;
  }
  menu.classList.add('page-header__wrapper--opened');
};

menuButton.addEventListener('click', () => {
  menuClickHandler();
});
