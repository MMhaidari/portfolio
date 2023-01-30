const navigationLinks = document.querySelector(".navigation-links");
const menuBtn = document.querySelector(".humbarger-btn");

// document.addEventListener("DOMContentLoaded", (e) => {
//   navigationLinks.style.display = "none";
// });

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navigationLinks.classList.toggle("open-nav");
  updateMenuBtnImage();
});

function updateMenuBtnImage() {
  if (navigationLinks.classList.contains("open-nav")) {
    menuBtn.setAttribute("src", "mobile-ingrediants/Union.png");
  } else {
    menuBtn.setAttribute("src", "./mobile-ingrediants/Icon.png");
  }
}
