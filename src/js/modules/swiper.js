import Swiper, {
  Navigation,
  Pagination
} from "swiper/swiper-bundle";

Swiper.use([Navigation, Pagination]);

export default function () {

  const slider = document.querySelector('.intro__slider');

  new Swiper(slider, {
    // loop: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 30,
    // autoHeight: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: slider.querySelector('.intro__slider-navigation-next'),
      prevEl: slider.querySelector('.intro__slider-navigation-prev')
    },
    pagination: {
      el: ".intro__slider-pagination",
      clickable: true,
    },
  });
}
