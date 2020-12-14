
//   Burger //

const burgerWrapper = document.querySelector('.burger__icon__wrapper');

const burger = document.querySelector('.burger__icon');
const menuBody = document.querySelector('.intro__nav__list');


burgerWrapper.onclick = function(){
    burger.classList.toggle('burger-icon-active');
    menuBody.classList.toggle('intro__nav__list_active');

}