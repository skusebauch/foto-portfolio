const burger = document.querySelector(".burger");
const burgerLink = document.querySelector(".nav-links-burger");
const burgerLinks = burgerLink.querySelectorAll("li");
console.log(burgerLinks);

//burger.addEventListener("click", () => {
//  nav.classList.toggle("nav-open");
//  burger.classList.toggle("toggle");
//});

//links.forEach((link) => {
//  link.addEventListener("click", () => {
//    nav.classList.toggle("nav-open");
//    burger.classList.toggle("toggle");
//  });
//});

burger.addEventListener("click", navToggle);
burgerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to(".line2", 0.5, { opacity: "1" });
    gsap.to(".line3", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to("#logo", 1, { color: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -20%" });
    document.body.classList.remove("hide");
  });
});

function navToggle(event) {
  console.log(event.target);
  if (!event.target.classList.contains("active")) {
    event.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 9, background: "white" });
    gsap.to(".line2", 0.5, { opacity: "0" });
    gsap.to(".line3", 0.5, { rotate: "-45", y: -9, background: "white" });
    gsap.to("#logo", 1, { color: "white" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(1500px at 100% -20%" });
    //avoid scrolling
    document.body.classList.add("hide");
  } else {
    event.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to(".line2", 0.5, { opacity: "1" });
    gsap.to(".line3", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to("#logo", 1, { color: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -20%" });
    document.body.classList.remove("hide");
  }
}

// animation slide
let controller;
let slideScene;

function animateSlides() {
  // init controller
  controller = new ScrollMagic.Controller();
  // select some things
  const sliders = document.querySelectorAll(".slide");
  const mainHeader = document.querySelector(".nav");
  sliders.forEach((slide) => {
    const revealImg = slide.querySelector(".reveal-img");
    //gsap
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideTl.fromTo(mainHeader, { y: "-100%" }, { y: "0%" }, "-=0.5");
  });
}

animateSlides();
