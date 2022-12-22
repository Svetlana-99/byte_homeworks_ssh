let slideIndex = 1;
showSlides(slideIndex);
let changeIndexSlide;

function changeSlides(changeIndexSlide) {
  showSlides(slideIndex += changeIndexSlide);
}

function showSlides(changeIndexSlide) {
  
    const slides = document.getElementsByClassName("mySlides");

    if (changeIndexSlide > slides.length) {slideIndex = 1}    
    if (changeIndexSlide < 1) {slideIndex = slides.length}
   
    for (let i=0; i< slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  

  
}
const nextSlides = document.getElementById("next");
nextSlides.addEventListener('click', () => {
    changeSlides(1)});

const prevSlides = document.getElementById("prev");
prevSlides.addEventListener('click', () => {
    changeSlides(-1)});

