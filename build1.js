const colorName = document.querySelector(".colorName");
const TorRedColor = document.querySelector(".TorRed-color.active");
const BlackSteelColor = document.querySelector(".BlackSteel-color");
const PearlWhiteColor = document.querySelector(".PearlWhite-color");
const image = document.querySelector(".image-container img");

const netPrice = document.querySelector(".image-container p span");
const stripesContainer = document.querySelector(".stripes-container");

const colorChoices = document.querySelectorAll(".colorChoices p");
let currChoice;

let selected = 0; //info about the colors
let stripesChosen = 0; //info about stripes section

const wheel1 = document.querySelector(".wheel-1");
const wheel2 = document.querySelector(".wheel-2");

const zoom = document.querySelector(".zoom");

const close = document.querySelector(".close");


wheel2.addEventListener("click", () => {
  if (stripesContainer.style.backgroundColor === "lightgrey") {
    alert("already choosen");
  } else {
    alert("Please select the option from Stripes and Decals");
  }
});

wheel1.addEventListener("click", () => {
  if (
    stripesContainer.style.backgroundColor === "lightgrey" &&
    wheel2.style.backgroundColor === "lightgrey"
  ) {
    alert("Cannot Choose");
  } else {
    alert("It is the default");
  }
});


colorChoices.forEach((colorChoice, index) => {
  colorChoice.addEventListener("click", (e) => {
    //always checks for "active class" after the event occurs
    currChoice = document.querySelector(".active");
    if (e.target.getAttribute("class") === "TorRed-color") {
      if (
        (selected === 1 && stripesChosen === 1) ||
        (selected === 5 && stripesChosen === 0) ||
        (selected === 5 && stripesChosen === 1) ||
        (selected === 6 && stripesChosen === 1)
      ) {
        currChoice.classList.remove("active");
        TorRedColor.classList.add("active");
        image.setAttribute("src", "build1-red-stripes.jpeg");
        colorName.innerText = "Tor Red";
        selected = 1;
        stripesChosen = 1;
      } else if (selected === 1 && stripesChosen === 0) {
        currChoice.classList.remove("active");
        TorRedColor.classList.add("active");
        image.setAttribute("src", "build1-red.jpeg");
        colorName.innerText = "Tor Red";
        selected = 1;
      } else {
        currChoice.classList.remove("active");
        TorRedColor.classList.add("active");
        image.setAttribute("src", "build1-red.jpeg");
        colorName.innerText = "Tor Red";
        selected = 0; //for red
      }
    } else if (e.target.getAttribute("class") === "BlackSteel-color") {
      if (
        (selected === 1 && stripesChosen === 1) ||
        (selected === 6 && stripesChosen === 0) ||
        (selected === 6 && stripesChosen === 1) ||
        selected === 6
      ) {
        currChoice.classList.remove("active");
        BlackSteelColor.classList.add("active");
        image.setAttribute("src", "build1-black-stripes.jpeg");
        colorName.innerText = "Black Steel";
        selected = 5;
        stripesChosen = 1;
      } else if (selected === 1 && stripesChosen === 0) {
        currChoice.classList.remove("active");
        BlackSteelColor.classList.add("active");
        image.setAttribute("src", "build1-black.jpeg");
        colorName.innerText = "Black Steel";
        selected = 5;
      } else {
        currChoice.classList.remove("active");
        BlackSteelColor.classList.add("active");
        image.setAttribute("src", "build1-black.jpeg");
        colorName.innerText = "Black Steel";
        selected = 3; //for black
      }
    } else if (e.target.getAttribute("class") === "PearlWhite-color") {
      if (
        (selected === 1 && stripesChosen === 1) ||
        (selected === 5 && stripesChosen === 1)
      ) {
        currChoice.classList.remove("active");
        PearlWhiteColor.classList.add("active");
        image.setAttribute("src", "build1-white-stripes.jpeg");
        colorName.innerText = "Pearl White";
        selected = 6;
      } else if (selected === 1 && stripesChosen === 0) {
        currChoice.classList.remove("active");
        PearlWhiteColor.classList.add("active");
        image.setAttribute("src", "build1-white.jpeg");
        colorName.innerText = "Pearl White";
        selected = 6;
      } else {
        currChoice.classList.remove("active");
        PearlWhiteColor.classList.add("active");
        image.setAttribute("src", "build1-white.jpeg");
        colorName.innerText = "Pearl White";
        selected = 4; //for white
      }
    }
  });
});

stripesContainer.addEventListener("click", () => {
  currChoice = document.querySelector(".active");
  //   console.log(currChoice);
  if (selected === 0) {
    //   iff stripes tab is clicked first this activates the default selection that is red + stripes
    stripesContainer.style.backgroundColor = "lightgrey";
    netPrice.innerText = "29,760";
    image.setAttribute("src", "build1-red-stripes.jpeg");
    currChoice.classList.remove("active");
    TorRedColor.classList.add("active");
    wheel1.classList.remove("lightgrey");
    wheel2.classList.add("lightgrey");
    selected = 1;
    stripesChosen = 1;
  }
  // 2 -> for red
  // 3 -> for black
  // 4 -> for white
  else if (selected === 3) {
    netPrice.innerText = "29,760";
    image.setAttribute("src", "build1-black-stripes.jpeg");
    currChoice.classList.remove("active");
    BlackSteelColor.classList.add("active");
    stripesContainer.style.backgroundColor = "lightgrey";
    wheel1.classList.remove("lightgrey");
    wheel2.classList.add("lightgrey");
    selected = 5;
  } else if (selected === 5) {
    netPrice.innerText = "29,660";
    image.setAttribute("src", "build1-black.jpeg");
    stripesContainer.style.backgroundColor = "white";
    wheel2.classList.remove("lightgrey");
    wheel1.classList.add("lightgrey");
    selected = 3;
  } else if (selected === 4) {
    netPrice.innerText = "29,760";
    image.setAttribute("src", "build1-white-stripes.jpeg");
    currChoice.classList.remove("active");
    PearlWhiteColor.classList.add("active");
    stripesContainer.style.backgroundColor = "lightgrey";
    wheel1.classList.remove("lightgrey");
    wheel2.classList.add("lightgrey");
    selected = 6;
  } else if (selected === 6) {
    netPrice.innerText = "29,660";
    image.setAttribute("src", "build1-white.jpeg");
    stripesContainer.style.backgroundColor = "white";
    wheel2.classList.remove("lightgrey");
    wheel1.classList.add("lightgrey");
    selected = 4;
  }
  //end

  //used for toggling stripes tab
  // selected === 1 && stripesChose === 1
  else {
    stripesContainer.style.backgroundColor = "white";
    netPrice.innerText = "29,660";
    image.setAttribute("src", "build1-red.jpeg");
    wheel2.classList.remove("lightgrey");
    wheel1.classList.add("lightgrey");
    selected = 0;
    stripesChosen = 0;
  }
});


// zooming code starts
let zoomed = 0; //initially not zoomed
zoom.addEventListener("click", () => {
  if (zoomed === 0) {
    image.classList.add("center-zoom");
    close.classList.remove("hide");
    close.classList.add("close-button");
    zoomed = 1;
  }
});

close.addEventListener("click", () => {
  //zoomed = 1 (pic zoomed)
  if (zoomed === 1) {
    image.classList.remove("center-zoom");
    close.classList.add("hide");
    close.classList.remove("close-button");
    zoomed = 0;
  }
});
// zooming code ends
