
let swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },

  cardsEffect: {
    slideShadows: true
  }
});

let stopButton = document.getElementById("stopButton");
let startButton = document.getElementById("startButton");

stopButton.addEventListener("click", () => {
  swiper.autoplay.stop();
});
startButton.addEventListener("click", () => {
  swiper.autoplay.start();
});
function updateButtonOpacity() { 
  if(swiper.autoplay.running) {
    stopButton.style.opacity = "1";
    startButton.style.opacity = "0.5 ";
  }else {
    stopButton.style.opacity = "0.5";
    startButton.style.opacity = "1";
  }
}
updateButtonOpacity();
swiper.on("autoplayStart", updateButtonOpacity);
swiper.on("autoplayStop", updateButtonOpacity);
