import videojs from 'video.js';

export default function() {
  const player = videojs('.modal__slider-item-video', {
      controls: true,
      autoplay: false,
      preload: 'auto'
  });
}
