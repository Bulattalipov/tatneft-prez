export default function() {
  const buttonOpen = document.querySelector('.intro__button');
  const blockRules = document.querySelector('.rules');
  const buttonReturn = document.querySelector('.rules__return');
  if(!buttonOpen) return;

  buttonOpen.addEventListener('click', function() {
    blockRules.style.zIndex = "3";
    document.querySelector('.intro').style.height = '100vh';
  });

  buttonReturn.addEventListener('click', function() {
    blockRules.style.zIndex = "-1";
    document.querySelector('.intro').style.height = 'auto';
  })
}
