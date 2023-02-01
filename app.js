const navigationLinks = document.querySelector('.navigation-links');
const menuBtn = document.querySelector('.humbarger-btn');
const bodyElement = document.querySelector('body');
const navigationLinksEl = document.querySelector('.navigation-links > a');

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  navigationLinks.classList.toggle('open-nav');
  updateMenuBtnImage();
});

function updateMenuBtnImage() {
  if (navigationLinks.classList.contains('open-nav')) {
    menuBtn.setAttribute('src', 'mobile-ingrediants/Union.png');
    bodyElement.classList.remove('hidescrollbar');
  } else {
    menuBtn.setAttribute('src', './mobile-ingrediants/Icon.png');
    bodyElement.classList.add('hidescrollbar');
  }
}

navigationLinks.addEventListener('click', function () {
  navigationLinks.classList.add('open-nav');
  bodyElement.classList.remove('hidescrollbar');
  menuBtn.setAttribute('src', 'mobile-ingrediants/Union.png');
});
