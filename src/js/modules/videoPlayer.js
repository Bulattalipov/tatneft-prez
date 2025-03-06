import videojs from 'video.js';

export default function() {
  // const player = videojs('video-js', {
  //     controls: true,
  //     autoplay: false,
  //     preload: 'auto'
  // });

  const videoBlocks = document.querySelectorAll('.modal__slider-item-video');

  if(videoBlocks.length === 0) return;

  videoBlocks.forEach(videoBlock => {
    const videoElem = videoBlock.querySelector('.modal__slider-item-video-elem');
    const btn = videoBlock.querySelector('.modal__slider-item-video-play');
    btn.addEventListener('click', function() {
      this.style.display = 'none';
      videoElem.setAttribute('controls', true);
      videoElem.play();
    });
  })
}
