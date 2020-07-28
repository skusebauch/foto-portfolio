const burgerMenu = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-links");

burgerMenu.addEventListener("click", (event) => {
  navLinks.forEach((link) => {
    link.classList.toggle("burger-active");
  });
});
