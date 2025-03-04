import Swiper, {
  Navigation
} from "swiper/swiper-bundle";

Swiper.use([Navigation]);

export default function () {

  const slider = document.querySelector('.modal__slider');

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
      nextEl: slider.querySelector('.swiper-nav__btn-next'),
      prevEl: slider.querySelector('.swiper-nav__btn-prev')
    },
  });
}
