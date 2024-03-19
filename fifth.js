// CAROUSEL-START
const fifthtrack = document.querySelector(".fifth__carousel__track");
const fifthSlides = Array.from(fifthtrack.children);
const fifthDotsNav = document.querySelector(".fifth__carousel__nav");
const fifthDots = document.querySelectorAll(".fifth__carousel__indicator");

const fifthSlideWidth = fifthSlides[0].getBoundingClientRect().width;

//making the fifthSlides equally spaced
fifthSlides.forEach((slide, index) => {
  slide.style.left = `${index * fifthSlideWidth}px`; //for this to work in bigger screens it needs a 'position' attribute in slide in css
  // console.log(slide);
});

//on clicking dot the fifthSlides should change
fifthDots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    //updating the dot
    const currentDot = fifthDotsNav.querySelector(".fifth__current-slide");
    const targetDot = e.target;
    currentDot.classList.remove("fifth__current-slide");
    targetDot.classList.add("fifth__current-slide");

    //updating the slide
    const currentSlide = fifthtrack.querySelector(".fifth__current-slide");
    const targetSlide = fifthSlides[index];
    currentSlide.classList.remove("fifth__current-slide");
    targetSlide.classList.add("fifth__current-slide");

    //changing the slide
    const amountToMove = `${index * fifthSlideWidth}`;
    fifthtrack.style.transform = `translateX(-${amountToMove}px)`;
  });
});
//CAROUSEL-END
