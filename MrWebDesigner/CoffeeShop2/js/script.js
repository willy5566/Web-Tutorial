let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let search = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');
let cart = document.querySelector('#cart-btn');
let cartItem = document.querySelector('.cart-items-container');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

})


search.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');

})


cart.addEventListener('click', () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

})

window.onscroll = () => {
    navbar.classList.remove('actvie');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}