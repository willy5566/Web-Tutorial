var menu = document.getElementById('menu')
var header = document.querySelector('header');
var topEl = document.querySelector('.top');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('toggle');
})

window.addEventListener('scroll', function () {
    menu.classList.remove('fa-times');
    header.classList.remove('toggle');

    if (window.scrollY > 0) {
        topEl.style.display = 'block';
    } else {
        topEl.style.display = 'none'
    }
})

window.addEventListener('load', function () {
    menu.classList.remove('fa-times');
    header.classList.remove('toggle');
})

