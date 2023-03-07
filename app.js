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

// Data preserve
const contactDetails = {
  fullName: String,
  email: String,
  message: String,
};

window.onload = () => {
  const contactData = JSON.parse(localStorage.getItem('contactDetails'));
  console.log(contactData);

  //populate the local storage information into the contact form
  if (contactData) {
    console.log(contactData);
    document.getElementById('name').value = contactData.fullName;
    document.getElementById('email').value = contactData.email;
    document.getElementById('msg').value = contactData.message;
  }
};

contactForm.addEventListener('change', () => {
  contactDetails.fullName = document.getElementById('name').value;
  contactDetails.email = document.getElementById('email').value;
  contactDetails.message = document.getElementById('msg').value;
  //set the local storage data with the upddated contact form
  localStorage.setItem('contactDetails', JSON.stringify(contactDetails));
});
