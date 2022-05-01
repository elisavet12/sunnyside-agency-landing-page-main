var burger = document.querySelector("button.burger");
var nav = document.querySelector("nav.nav--main");
var body = document.querySelector("body");
var mediaQuery = window.matchMedia("(min-width: 600px)");

function openMenu() {
  nav.classList.add("nav--open");
  body.classList.add("noScroll");
  document.getElementById("myDiv").style.display = "none";
}

function isMobile() {
  if (mediaQuery.matches) {
    openMenu();
  }
}

burger.addEventListener("click", openMenu);
