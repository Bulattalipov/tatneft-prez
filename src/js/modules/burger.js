export default () => {
  let body = document.querySelector('body');
  let menuBtn = document.querySelector('.header__burger');
  let mainMenu = document.querySelector('.menu');
  let mainMenuBtns = mainMenu.querySelectorAll(".nav__list-link");

  menuBtn.addEventListener('click', function () {
    // body.classList.toggle('disable-scroll');
    menuBtn.classList.toggle('active');
    mainMenu.classList.toggle('active');
    body.classList.toggle('body--blur');
  })

  // mainMenuBtns.forEach(item => {
  //   item.addEventListener('click', () => {
  //     body.classList.toggle('disable-scroll');
  //     menuBtn.classList.toggle('active');
  //     mainMenu.classList.toggle('active');
  //   })
  // })
}
