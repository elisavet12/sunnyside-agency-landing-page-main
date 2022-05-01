var burger = document.querySelector("button.burger");
var nav = document.querySelector("nav.nav--main");
var body = document.querySelector("body");
var mediaQuery = window.matchMedia("(min-width: 600px)");
var myDiv = document.querySelector("div.test");

function openMenu() {
  nav.classList.toggle("nav--open");
  body.classList.toggle("noScroll");
  myDiv.classList.toggle("test--open");

  // document.getElementById("myDiv").style.display = "none";
}

function isMobile() {
  if (mediaQuery.matches) {
    openMenu();
  }
}

burger.addEventListener("click", openMenu);
