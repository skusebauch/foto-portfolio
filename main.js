const burger = document.querySelector(".burger");
const burgerLink = document.querySelector(".nav-links-burger");
const burgerLinks = burgerLink.querySelectorAll("li");
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
let pageScene;

function animateSlides() {
  // init controller
  controller = new ScrollMagic.Controller();
  // select some things
  const sliders = document.querySelectorAll(".slide");
  const mainHeader = document.querySelector(".nav");
  sliders.forEach((slide, index, slides) => {
    const revealImg = slide.querySelector(".reveal-img");
    //gsap - slideTl
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideTl.fromTo(mainHeader, { y: "-100%" }, { y: "0%" }, "-=0.5");
    // Create Scene Scroll Animation
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.8,
      reverse: false,
    })
      //.addIndicators({
      //  colorStart: "black",
      //  colorTrigger: "black",
      //  name: "slide",
      //})
      .setTween(slideTl)
      .addTo(controller);
  });
}
animateSlides();

$(document).ready(function () {
  const menuBtn = $("a");

  menuBtn.click(() => {
    setTimeout(() => {
      removeHash();
    }, 5);
  });

  function removeHash() {
    history.replaceState(
      "",
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    );
  }
});
