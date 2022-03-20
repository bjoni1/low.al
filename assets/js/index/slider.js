window.addEventListener("load", start, false);

let slideIndex = 1;

function start(){
  showSlides(slideIndex);
  document.getElementsByClassName("prev")[0].addEventListener("click", previousSlide, false);
  document.getElementsByClassName("next")[0].addEventListener("click", nextSlide, false);
  setInterval(nextSlide, 5000);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function nextSlide(){
  showSlides(slideIndex +=1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
