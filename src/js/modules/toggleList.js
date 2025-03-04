export default function() {
  const buttonOpen = document.querySelector('.intro__button');
  const blockRules = document.querySelector('.rules');
  const buttonReturn = document.querySelector('.rules__return');
  if(!buttonOpen) return;

  buttonOpen.addEventListener('click', function() {
    blockRules.style.zIndex = "3";
  });

  buttonReturn.addEventListener('click', function() {
    blockRules.style.zIndex = "-1";
  })
}
