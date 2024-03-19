// CAROUSEL-START
const secondTrack = document.querySelector(".second__carousel__track");
const secondSlides = Array.from(secondTrack.children);
const secondDotsNav = document.querySelector(".second__carousel__nav");
const secondDots = document.querySelectorAll(".second__carousel__indicator");

const secondSlideWidth = secondSlides[0].getBoundingClientRect().width;

//making the secondSlides equally spaced
secondSlides.forEach((slide, index) => {
  slide.style.left = `${index * secondSlideWidth}px`; //for this to work in bigger screens it needs a 'position' attribute in slide in css
  // console.log(slide);
});

//on clicking dot the secondSlides should change
secondDots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    //updating the dot
    const currentDot = secondDotsNav.querySelector(".second__current-slide");
    const targetDot = e.target;
    currentDot.classList.remove("second__current-slide");
    targetDot.classList.add("second__current-slide");

    //updating the slide
    const currentSlide = secondTrack.querySelector(".second__current-slide");
    const targetSlide = secondSlides[index];
    currentSlide.classList.remove("second__current-slide");
    targetSlide.classList.add("second__current-slide");

    //changing the slide
    const amountToMove = `${index * secondSlideWidth}`;
    secondTrack.style.transform = `translateX(-${amountToMove}px)`;
  });
});
//CAROUSEL-END
