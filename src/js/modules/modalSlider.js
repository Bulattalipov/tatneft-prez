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
      speed: 500,
      spaceBetween: 30,
      // autoHeight: true,
      navigation: {
        nextEl: slider.querySelector('.swiper-nav__btn-next'),
        prevEl: slider.querySelector('.swiper-nav__btn-prev')
      },
    });

    window.copiesSliderArray.push(copiesSlider)
  })



  // const rulesItems = document.querySelector('.rules__items');
  // if(!rulesItems) return;

  // const rulesItemArray = document.querySelectorAll('.rules__item');

  // rulesItemArray.forEach((rulesItem, i) => {
  //   const btns = rulesItem.querySelectorAll('.rules__item-button');
  //   btns.forEach(btn => {
  //     btn.addEventListener('click', function() {
  //       window.copiesSliderArray.forEach(slider => {
  //         slider.slideTo(i);
  //         console.log(slider.slideTo(i));
  //       })
  //     });
  //   })
  // })
}


// const iframeArray = document.querySelectorAll('.modal__slider-item-video iframe');
// iframeArray.forEach(item => {
//   item.src = item.src;
// });
