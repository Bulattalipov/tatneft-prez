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
      on: {
        slideChange: function () {
            // Останавливаем все видео
            const videos = document.querySelectorAll('video');
            if(videos.length !== 0) {
              videos.forEach((video, i) => {
                if(i === copiesSlider.previousIndex) {
                  video.pause();
                }
              });
            }

            const iframes = document.querySelectorAll('iframe');
            iframes.forEach((iframe, i) => {
              if(i === copiesSlider.previousIndex) {
                iframe.setAttribute("src", iframe.getAttribute("src"));
              }
            })

            // // Запускаем видео на активном слайде
            // const activeSlide = this.slides[this.activeIndex].querySelector('video');
            // if(activeSlide) {
            //   if (activeSlide) {
            //       activeSlide.play();
            //   }
            // }
          },
      },
    });

    window.copiesSliderArray.push(copiesSlider);

    // document.addEventListener('visibilitychange', function() {
    //   if (document.visibilityState === 'hidden') {
    //       copiesSlider.autoplay.stop();
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
          })
        }, 400);
      });
    })
  })
}
