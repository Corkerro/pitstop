// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

const headerFooterButton = document.querySelector('.header__footer_button');
const headerFooter = document.querySelector('.header__footer');

if (window.innerHeight >= 570) {
  headerFooter.classList.add('_active');
}

headerFooterButton.addEventListener('click', () => {
  headerFooter.classList.toggle('_active');
});
