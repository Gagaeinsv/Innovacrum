// This file initializes the application and sets up the burger menu functionality.

import BurgerMenu from './components/BurgerMenu';

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = new BurgerMenu();
    burgerMenu.init();
});