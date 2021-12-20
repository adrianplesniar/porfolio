const galleryId = document.querySelectorAll('.project-image-gallery');
let slideIndex = new Array(galleryId.length).fill(1);

for(let i=0; i<galleryId.length; i++) {
    showSlides(1, i);
}

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    let i;
    let x = galleryId[no].querySelectorAll('.image');
    let dots = galleryId[no].querySelectorAll('.control-square');
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" control-square-active", "");
    }
    x[slideIndex[no]-1].style.display = "block"; 
    dots[slideIndex[no]-1].className += " control-square-active"; 
  }