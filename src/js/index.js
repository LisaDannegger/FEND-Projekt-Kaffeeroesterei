// import shop from "./shop";
import validateForm from "./contactForm";
import navigation from "./navigation";

navigation();

const navBar = document.querySelector(".main-navigation-box");
const divBar = document.querySelector(".main-navigation");

window.onscroll = function () {
  const top = window.scrollY;

  if (top <= 450) {
    navBar.classList.remove("nav-scrolled");
    divBar.classList.remove("div-scrolled");
  } else {
    navBar.classList.add("nav-scrolled");
    divBar.classList.add("div-scrolled");
  }
};

validateForm();

// shop();

// import shopDetail from "./shopDetail";

// shopDetail();

// import validation from "./contactForm";
// validation();

//import myFunction, { multiply } from "./myModule";

// myFunction();

// const result = multiply(2, 5);

// console.log(result);
