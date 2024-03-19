// CAROUSEL-START
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const dotsNav = document.querySelector(".carousel__nav");
const dots = document.querySelectorAll(".carousel__indicator");

const slideWidth = slides[0].getBoundingClientRect().width;

//making the slides equally spaced
slides.forEach((slide, index) => {
  slide.style.left = `${index * slideWidth}px`; //for this to work in bigger screens it needs a 'position' attribute in slide in css
});

//on clicking dot the slides should change
dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    //updating the dot
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetDot = e.target;
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");

    //updating the slide
    const currentSlide = track.querySelector(".current-slide");
    const targetSlide = slides[index];
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");

    //changing the slide
    const amountToMove = `${index * slideWidth}`;
    track.style.transform = `translateX(-${amountToMove}px)`;
  });
});
//CAROUSEL-END  