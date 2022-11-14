import './style.css';
import './icon-fonts.css';

const burgerButton = document.querySelector('.burger-button');
const headerLinks = document.querySelectorAll('.header .main-nav a');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
});
window.addEventListener('resize', () => (window.innerWidth > 768 ? burgerButton.classList.remove('active') : null));

headerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerButton.classList.remove('active');
  });
});