'use strict'
window.addEventListener('DOMContentLoaded', () => {
var options = { 
    strings: ['Управление бюджетом в для всех. Всего 69,95 € в месяц после 7-дневной пробной версии за 4,99 €', 'Управление бюджетом в для всех. Всего 69,95 € в месяц после 7-дневной пробной версии за 4,99 €'],
    typeSpeed: 40
    
  };
var typed = new Typed('.header__content-text', options);

  const menuList = document.querySelector('.header__list'),
      menuItem = document.querySelectorAll('.header__menu-item'),
      burger = document.querySelector('.header__burger');

  burger.addEventListener('click', () => {
      burger.classList.toggle('header__burger--active');
      menuList.classList.toggle('header__list--active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          burger.classList.toggle('header__burger--active');
          menuList.classList.toggle('header__list--active');
      })
  });
})
