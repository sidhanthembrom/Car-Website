const image = document.querySelector(".image-container img");
const colorName = document.querySelector(".colorName");
const colorChoices = document.querySelectorAll(".colorChoices p");
const TorRedColor = document.querySelector(".TorRed-color.active");
const BlackSteelColor = document.querySelector(".BlackSteel-color");
const PearlWhiteColor = document.querySelector(".PearlWhite-color");

const netPrice = document.querySelector(".image-container p span");
const stripesContainer = document.querySelector(".stripes-container");

const wheel1 = document.querySelector(".wheel-1");
const wheel2 = document.querySelector(".wheel-2");

const zoom = document.querySelector(".zoom");

const close = document.querySelector(".close");

let currChoice;
let selected = 0; //info about the colors
let stripesChosen = 0; //info about stripes section
let zoomed = 0; //initially not zoomed


// changing to red color
function red(currChoice, choiceColor) {
  currChoice.classList.remove("active");
  choiceColor.classList.add("active");
  colorName.innerText = "Tor Red";
}

// changing to black color
function black(currChoice, choiceColor) {
  currChoice.classList.remove("active");
  choiceColor.classList.add("active");
  colorName.innerText = "Black Steel";
}

// changing to white color
function white(currChoice, choiceColor) {
  currChoice.classList.remove("active");
  choiceColor.classList.add("active");
  colorName.innerText = "Pearl White";
}

colorChoices.forEach((colorChoice) => {
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
        red(currChoice, TorRedColor);
        image.setAttribute("src", "build1-red-stripes.jpeg");
        selected = 1;
        stripesChosen = 1;
      } else if (selected === 1 && stripesChosen === 0) {
        red(currChoice, TorRedColor);
        image.setAttribute("src", "build1-red.jpeg");
        selected = 1;
      } else {
        red(currChoice, TorRedColor);
        image.setAttribute("src", "build1-red.jpeg");
        selected = 0; //for red
      }
    } else if (e.target.getAttribute("class") === "BlackSteel-color") {
      if (
        (selected === 1 && stripesChosen === 1) ||
        (selected === 6 && stripesChosen === 0) ||
        (selected === 6 && stripesChosen === 1) ||
        selected === 6
      ) {
        black(currChoice, BlackSteelColor);
        image.setAttribute("src", "build1-black-stripes.jpeg");
        selected = 5;
        stripesChosen = 1;
      } else if (selected === 1 && stripesChosen === 0) {
        black(currChoice, BlackSteelColor);
        image.setAttribute("src", "build1-black.jpeg");
        selected = 5;
      } else {
        black(currChoice, BlackSteelColor);
        image.setAttribute("src", "build1-black.jpeg");
        selected = 3; //for black
      }
    } else if (e.target.getAttribute("class") === "PearlWhite-color") {
      if (
        (selected === 1 && stripesChosen === 1) ||
        (selected === 5 && stripesChosen === 1)
      ) {
        white(currChoice, PearlWhiteColor);
        image.setAttribute("src", "build1-white-stripes.jpeg");
        selected = 6;
      } else if (selected === 1 && stripesChosen === 0) {
        white(currChoice, PearlWhiteColor);
        image.setAttribute("src", "build1-white.jpeg");
        selected = 6;
      } else {
        white(currChoice, PearlWhiteColor);
        image.setAttribute("src", "build1-white.jpeg");
        selected = 4; //for white
      }
    }
  });
});


// stripes choosed
function stripesSelected(choiceColor) {
  stripesContainer.style.backgroundColor = "lightgrey";
  netPrice.innerText = "29,760";
  currChoice.classList.remove("active");
  choiceColor.classList.add("active");
  wheel1.classList.remove("lightgrey");
  wheel2.classList.add("lightgrey");
}

// stripes deselected
function deSelected() {
    netPrice.innerText = "29,660";
    stripesContainer.style.backgroundColor = "white";
    wheel2.classList.remove("lightgrey");
    wheel1.classList.add("lightgrey");
}

stripesContainer.addEventListener("click", () => {
  currChoice = document.querySelector(".active");
  //   console.log(currChoice);
  if (selected === 0) {
    //   iff stripes tab is clicked first this activates the default selection that is red + stripes
    stripesSelected(TorRedColor);
    image.setAttribute("src", "build1-red-stripes.jpeg");

    selected = 1;
    stripesChosen = 1;
  }
  // 2 -> for red || 3 -> for black || 4 -> for white
  // start
  else if (selected === 3) {
    stripesSelected(BlackSteelColor);
    image.setAttribute("src", "build1-black-stripes.jpeg");

    selected = 5;
  } else if (selected === 5) {
    deSelected();
    image.setAttribute("src", "build1-black.jpeg");

    selected = 3;
  } else if (selected === 4) {
    stripesSelected(PearlWhiteColor);
    image.setAttribute("src", "build1-white-stripes.jpeg");
    
    selected = 6;
  } else if (selected === 6) {
    deSelected();
    image.setAttribute("src", "build1-white.jpeg");

    selected = 4;
  }
  //end

  //used for toggling stripes tab
  // selected === 1 && stripesChose === 1
  else {
    deSelected();
    image.setAttribute("src", "build1-red.jpeg");

    selected = 0;
    stripesChosen = 0;
  }
});


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


// zooming code starts
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