export default function() {
  const blockforClick = document.querySelector('.intro__box-sound');
  if(!blockforClick) return;

  const blockAudio = document.querySelector('.intro__box-audio');

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
