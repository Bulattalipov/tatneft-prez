import Swiper, {
  Navigation
} from "swiper/swiper-bundle";

Swiper.use([Navigation]);

export default function () {

  const sliders = document.querySelectorAll('.modal__slider');

  if(sliders.length === 0) return;

  window.copiesSliderArray = [];

  sliders.forEach(slider => {
    const copiesSlider = new Swiper(slider, {
      // slidesPerView: "auto",
      centeredSlides: true,
      speed: 0,
      spaceBetween: 30,
      // autoHeight: true,
      scrollOnFocus: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: slider.querySelector('.swiper-nav__btn-next'),
        prevEl: slider.querySelector('.swiper-nav__btn-prev')
      },
    });

    window.copiesSliderArray.push(copiesSlider)

    // document.addEventListener('visibilitychange', function() {
    //   if (document.visibilityState === 'hidden') {
    //       copiesSlider.autoplay.stop();
    //       console.log('Автопроигрывание остановлено');
    //   } else {
    //       copiesSlider.autoplay.start();
    //   }
    // });
  })



  const rulesItems = document.querySelector('.rules__items');
  if(!rulesItems) return;

  const rulesItemArray = document.querySelectorAll('.rules__item');

  rulesItemArray.forEach((rulesItem, i) => {

    const btns = rulesItem.querySelectorAll('.rules__item-button');
    btns.forEach(btn => {
      btn.addEventListener('click', function() {
        setTimeout(() => {
          window.copiesSliderArray.forEach(slider => {
            slider.slideTo(i, 0, true);
            console.log(slider.slideTo(i, 0, true));
          })
        }, 400);
      });
    })
  })
}
