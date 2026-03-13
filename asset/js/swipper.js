
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

stopButton.addEventListener("click", () => {
  swiper.autoplay.stop();
});
startButton.addEventListener("click", () => {
  swiper.autoplay.start();
});