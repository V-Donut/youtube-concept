const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});
const swiper1 = new Swiper('.recommendation-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: '.recommendation-button-next',
    prevEl: '.recommendation-button-prev',
  },
});

