let headerText = document.querySelector('.header-text');
let scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    headerText.style.top = value * 0.5 + 'px';
    scrollBtn.style.top = value * 0.1 + 'px';
})