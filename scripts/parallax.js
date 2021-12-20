let headerText = document.querySelector('.header-text');
let buttons = document.querySelector('.buttons-wrapper');
let gallery = document.querySelector('.project-image-gallery');
let projectText = document.querySelectorAll('.project-text');
let scrollBtn = document.querySelector('.scroll-btn-wrapper');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    headerText.style.top = value * 0.1 + 'px';
    gallery.style.top = value * -0.1 + 'px';
})