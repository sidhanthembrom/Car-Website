// CAROUSEL-START
const fourthtrack = document.querySelector(".fourth__carousel__track");
const fourthSlides = Array.from(fourthtrack.children);
const fourthDotsNav = document.querySelector(".fourth__carousel__nav");
const fourthDots = document.querySelectorAll(".fourth__carousel__indicator");

const fourthSlideWidth = fourthSlides[0].getBoundingClientRect().width;

//making the fourthSlides equally spaced
fourthSlides.forEach((slide, index) => {
  slide.style.left = `${index * fourthSlideWidth}px`; //for this to work in bigger screens it needs a 'position' attribute in slide in css
  // console.log(slide);
});

//on clicking dot the fourthSlides should change
fourthDots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    //updating the dot
    const currentDot = fourthDotsNav.querySelector(".fourth__current-slide");
    const targetDot = e.target;
    currentDot.classList.remove("fourth__current-slide");
    targetDot.classList.add("fourth__current-slide");

    //updating the slide
    const currentSlide = fourthtrack.querySelector(".fourth__current-slide");
    const targetSlide = fourthSlides[index];
    currentSlide.classList.remove("fourth__current-slide");
    targetSlide.classList.add("fourth__current-slide");

    //changing the slide
    const amountToMove = `${index * fourthSlideWidth}`;
    fourthtrack.style.transform = `translateX(-${amountToMove}px)`;
  });
});
//CAROUSEL-END
