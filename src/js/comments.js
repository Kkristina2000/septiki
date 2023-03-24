const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
    },

    breakpoints:{
        1440:{
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
        },
        768:{
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
        },
        360:{
            spaceBetween: 20,
            loop: true,
        },
    }
});