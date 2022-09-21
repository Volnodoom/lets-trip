const body = document.querySelector('body');
const header = body.querySelector('.page-header');
const burgerButton = header.querySelector('.header-menu__button');
console.log(header);

const removeNoJs = () => header.classList.remove('page-header__no-js');
const handleBurgerClick = () => header.classList.toggle('page-header--expanded');


burgerButton.addEventListener('click', handleBurgerClick);
removeNoJs();
