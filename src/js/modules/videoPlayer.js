import videojs from 'video.js';

export default function() {
  const arrayVideo = document.querySelectorAll('.video-js');
  if(arrayVideo.length === 0) return;
  arrayVideo.forEach((videoItem, i) => {
    const player = videojs(`video-js-${i+1}`, {
        controls: true,
        autoplay: false,
        preload: 'auto'
    });
    console.log(player);
  })


  arrayVideo.forEach(player => {
      const videoInstance = videojs(player);

      videoInstance.on('play', () => {
        arrayVideo.forEach(otherPlayer => {
              const otherVideoInstance = videojs(otherPlayer);
              if (otherPlayer !== player) {
                  otherVideoInstance.pause();
              }
          });
      });
  });
}
