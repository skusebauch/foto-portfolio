//const burgerMenu = document.querySelector(".burger");
//const navLinks = document.querySelectorAll(".nav-links");
//const links = document.querySelectorAll(".nav-links li");
//console.log(navSection);

//burgerMenu.addEventListener("click", () => {
//  navLinks.forEach((link) => {
//    link.classList.toggle("burger-active");
//  });
//});

//navSection.forEach((link) => {
//  link.addEventListener("click", (event) => {
//    navLinks.forEach((link) => {
//      link.classList.remove("burger-active");
//    });
//  });
//});

// refactor

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});
