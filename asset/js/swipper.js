
let swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  ShadowRoot: true,

  cardsEffect: {
    slideShadows: true
  }
});