let headerText = document.querySelector('.header-text');
let scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    scrollBtn.style.top = value * 0.1 + 'px';

    if (window.matchMedia("(max-width: 600px)").matches) {
        headerText.style.top = value * 0.3 + 'px';
      } else {
        headerText.style.top = value * 0.5 + 'px';
      }
})