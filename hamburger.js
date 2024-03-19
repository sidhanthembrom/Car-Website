const button = document.querySelector(".btn");
const innerContainer = document.querySelector(".inner-container");

// //0 = currently closed, make it 1 for to open
// //1 = currently closed, make it 0 for to close
// let value = 0;
button.addEventListener("click", () => {
    
    const visibility = innerContainer.getAttribute("data-visible");

    //opens the menu
    if (visibility === "false") {
        button.style.backgroundImage = "URL('menu-open.png')";
        innerContainer.setAttribute("data-visible", "true");
    }
    //closes the menu
    else {
        button.style.backgroundImage = "URL('menu-close.png')";
        innerContainer.setAttribute("data-visible", "false");
    }
})