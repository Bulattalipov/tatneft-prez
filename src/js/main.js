// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import introSlider from './modules/introSlider';
import toggleList from './modules/toggleList';
import modalSlider from './modules/modalSlider';
import audioPlay from './modules/audioPlay';
import videoPlayer from './modules/videoPlayer';
import updateVideo from './modules/updateVideo';

documenReady(() => {
  window.___YOUR_PROJECT___API = {};

  lazyIMages();
  initModal();
  introSlider();
  toggleList();
  modalSlider();
  audioPlay();
  videoPlayer();
  updateVideo();
});
