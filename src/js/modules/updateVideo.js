export default function() {
  const videoIframes = document.querySelectorAll('.modal__slider-item-video iframe');

  if(videoIframes.length === 0) return;

  videoIframes.forEach((videoIframe, i) => {
    if(videoIframe.closest('.modal__slider-item')) {
      const perent = videoIframe.closest('.modal__slider-item');
      const btnClose = perent.querySelector('.modal__close-btn');

      btnClose.addEventListener('click', function() {

      });
    }
  });
}
