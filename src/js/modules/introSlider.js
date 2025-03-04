import Swiper from "swiper/swiper-bundle";

export default function () {

  const slider = document.querySelector('.intro__slider');

  new Swiper(slider, {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["100%", 0, 0],
      },
      next: {
        translate: [0, 0, -400],
      },
    },
    rtl: true,
    loop: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 2500, // Задержка между слайдами в миллисекундах
    //   disableOnInteraction: false, // Не отключать автопроигрывание при взаимодействии
    // },
    // autoHeight: true,
  });
}
