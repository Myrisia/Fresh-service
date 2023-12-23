const burgerBtn = document.querySelector(".header__burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".mobile-menu__close-btn");
const a = mobileMenu.querySelectorAll("a");
burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
a.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
