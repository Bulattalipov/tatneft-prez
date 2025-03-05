export default function() {
  const blockforClick = document.querySelector('.intro__box-sound');
  if(!blockforClick) return;

  let flagAudio = false;


  const blockAudio = document.querySelector('.intro__box-audio');
  document.querySelector('body').addEventListener('click', function() {
    if(!flagAudio) {
      blockAudio.play();
      flagAudio = true;
    }
  })

  blockforClick.addEventListener('click', function() {
    if(blockforClick.classList.contains('intro__box-sound--dull')) {
      blockforClick.classList.remove('intro__box-sound--dull')
      blockAudio.play();
    } else {
      blockforClick.classList.add('intro__box-sound--dull');
      blockAudio.pause();
    }
  });
}
