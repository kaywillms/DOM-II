// Your code goes here
const header = document.querySelector("header");
const body = document.querySelector("body");
const logoName = document.querySelector(".logo-heading");

// Logo effects
logoName.addEventListener("mouseover", () => {
  logoName.style.transition = "transform 1s";
  logoName.style.transform = "rotate(-364deg)";
});

logoName.addEventListener("mouseleave", () => {
  logoName.style.transition = "transform 1s";
  logoName.style.transform = "rotate(1deg)";
});

//Navigation effects
document.querySelectorAll(".nav-link").forEach((nav) => {
  nav.addEventListener("mouseover", () => {
    nav.style.textDecoration = "underline";
    nav.style.color = "#FDB813";
  });
});

document.querySelectorAll(".nav-link").forEach((nav) => {
  nav.addEventListener("mouseleave", () => {
    nav.style.textDecoration = "none";
    nav.style.color = " #212529";
  });
});

//Header effects
header.addEventListener("click", (e) => {
  e.stopPropagation();
  header.style.backgroundColor = "#A9A9A9";
  header.style.color = "white";
  console.log("Header was clicked");
});

//Body effects
body.addEventListener("click", () => {
  body.style.backgroundColor = "#add8e6";
});

//Scroll event
window.addEventListener("scroll", () => {
  body.style.backgroundColor = "#90EE90";
});

//Button effect
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("dblclick", (e) => {
    console.log("dblclick: ", e);
    e.stopPropagation();
    console.log("clicked the button!");
  });
});

//Image effects
document.querySelectorAll(".img-content").forEach((pic) => {
  pic.addEventListener("mouseover", (e) => {
    pic.style.transform = "scale(1.2)";
    pic.style.transition = "transform 1s";
  });
});

document.querySelectorAll(".img-content").forEach((pic) => {
  pic.addEventListener("mouseleave", (e) => {
    pic.style.transform = "scale(1.0)";
    pic.style.transition = "transform 1s";
  });
});
