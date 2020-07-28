const burgerMenu = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-links");
const navSection = document.querySelectorAll(".nav-links li");
console.log(navSection);

burgerMenu.addEventListener("click", () => {
  navLinks.forEach((link) => {
    link.classList.toggle("burger-active");
  });
});

navSection.forEach((link) => {
  link.addEventListener("click", (event) => {
    navLinks.forEach((link) => {
      link.classList.remove("burger-active");
    });
  });
});
