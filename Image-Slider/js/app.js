// Selecting DOM Elements
const slides = document.querySelectorAll(".slide-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

// Index of slide
let slideIndex = 1;
slideImage(slideIndex);

// Adding eventlistener to 'prev' button
prevBtn.addEventListener("click", () => {
  slideIndex--;
  slideImage(slideIndex);
});

// Adding eventlistener to 'next' button
nextBtn.addEventListener("click", () => {
  slideIndex++;
  slideImage(slideIndex);
});

// function for dots
const currentSlide = (x) => {
  slideIndex = x;
  slideImage(slideIndex);
};

// function to show the current slide
function slideImage(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
