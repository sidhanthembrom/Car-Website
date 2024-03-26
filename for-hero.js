//HERO-START

//for desktop
let desktopVideo = document.querySelector("#desktop-video");
let mobileVideo = document.querySelector("#mobile-video");

let stopDesktopVideo = () => {
  desktopVideo.loop = false;
  desktopVideo.classList.add("hide");
};

//stop after 6.3s since there is an autoplay in the <video>
setTimeout(stopDesktopVideo, 6300);

//play button on the top right
let desktopBtn = document.querySelector("#desktop-btn");

desktopBtn.addEventListener("click", () => {
  desktopVideo.classList.remove("hide");
  desktopVideo.loop = true; //looping for 6300ms
  setTimeout(stopDesktopVideo, 6300);
});

//for SMARTPHONES
let stopMobileVideo = () => {
  mobileVideo.loop = false;
  mobileVideo.classList.add("hide");
};

setTimeout(stopMobileVideo, 6440);

let mobileBtn = document.querySelector("#mobile-btn");

mobileBtn.addEventListener("click", () => {
  mobileVideo.classList.remove("hide");
  mobileVideo.loop = true; //looping for 6440ms
  setTimeout(stopMobileVideo, 6440);
});
//HERO-END