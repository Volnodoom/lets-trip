const body = document.querySelector('body');
const header = body.querySelector('.page-header');
const burgerButton = header.querySelector('.header-menu__button');
const businessOfferOpenButton = body.querySelector('.rates__button-open')
const offerForBusinessModal = body.querySelector('.modal-rates');
const modalOverlay = offerForBusinessModal.querySelector('.modal__overlay');
const businessOfferCloseButton = offerForBusinessModal.querySelector('.rates__button-close');

const removeNoJs = () => header.classList.remove('page-header__no-js');
const handleBurgerClick = () => header.classList.toggle('page-header--expanded');
const handleModalClose = () => {
  offerForBusinessModal.classList.toggle('modal__active');
  modalOverlay.removeEventListener('click', handleModalClose);
  businessOfferCloseButton.removeEventListener('click', handleModalClose);
};
const handleBusinessOfferButtonClick = () => {
  offerForBusinessModal.classList.toggle('modal__active');
  modalOverlay.addEventListener('click', handleModalClose);
  businessOfferCloseButton.addEventListener('click', handleModalClose);
};

const handleScroll = () => {
  const hasScrollClass = header.classList.contains('page-header__scroll')

  if(window.pageYOffset > 0) {
    if (!hasScrollClass) {
      header.classList.add('page-header__scroll');
    }
  }

  if(window.pageYOffset === 0) {
    header.classList.remove('page-header__scroll');
  }
}

burgerButton.addEventListener('click', handleBurgerClick);
businessOfferOpenButton.addEventListener('click', handleBusinessOfferButtonClick);
window.addEventListener('scroll', handleScroll)

removeNoJs();
