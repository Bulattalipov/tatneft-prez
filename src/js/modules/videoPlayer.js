import videojs from 'video.js';

export default function() {
  // const player = videojs('video-js', {
  //     controls: true,
  //     autoplay: false,
  //     preload: 'auto'
  // });

  const videoBlocks = document.querySelectorAll('.modal__slider-item-video video');

  if(videoBlocks.length === 0) return;

  videoBlocks.forEach(video => {
    video.addEventListener('play', () => {
      videoBlocks.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause(); // Останавливаем другие видео
            }
        });
    });
});
}
