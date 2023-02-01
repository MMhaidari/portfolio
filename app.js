const navigationLinks = document.querySelector('.navigation-links');
const menuBtn = document.querySelector('.humbarger-btn');
const bodyElement = document.querySelector('body');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.querySelector('.btn-submit');

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

navigationLinks.addEventListener('click', () => {
  navigationLinks.classList.add('open-nav');
  bodyElement.classList.remove('hidescrollbar');
  menuBtn.setAttribute('src', 'mobile-ingrediants/Union.png');
});

submitBtn.addEventListener('click', (event) => {
  const email = contactForm.elements.email.value;
  const error = document.querySelector('.error');
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    error.style.cssText = 'visibility: visible; opacity: 1';
    error.innerHTML = 'Please enter email in lowercase';
  } else {
    error.style.cssText = 'visibility: hidden; opacity: 0';
  }
});
