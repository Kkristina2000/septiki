const swiper = new Swiper('.swiper', {

  autoplay: {
    delay: 5000,
   },
   slidesPerView: 1,
   loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});