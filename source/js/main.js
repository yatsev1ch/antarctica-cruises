const page = document.querySelector('.page');
const header = document.querySelector('.page-header');
const menu = document.querySelector('.page-header__wrapper');
const menuOverlay = document.querySelector('.page-header__menu-overlay');

header.classList.remove('page-header--no-js');
menu.classList.remove('page-header__wrapper--no-js');

const isMenuOpened = () => menu.classList.contains('page-header__wrapper--opened');
const isMenuButton = (target) => target.classList.contains('page-header__menu-button');
const isMenuLink = (target) => target.classList.contains('page-header__nav-link');

const openMenu = () => {
  menu.classList.add('page-header__wrapper--opened');
  page.classList.add('page--with-menu');
};

const closeMenu = () => {
  menu.classList.remove('page-header__wrapper--opened');
  page.classList.remove('page--with-menu');
};

const menuClickHandler = () => {
  if (isMenuOpened()) {
    closeMenu();
    return;
  }
  openMenu();
};

menu.addEventListener('click', (evt) => {
  switch (true) {
    case isMenuButton(evt.target):
      menuClickHandler();
      break;
    case isMenuLink(evt.target):
      closeMenu();
  }
});

menuOverlay.addEventListener('click', () => {
  closeMenu();
});
