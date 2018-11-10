var toggle = document.querySelector("main-nav__toggle");
var toggle__close = document.querySelector("main-nav__toggle--close");

var menu__site = document.querySelector("main-nav__list--site");
var menu__user = document.querySelector("main-nav__list--user");

toggle.classList.remove("main-nav__toggle--close");
toggle.classList.add("main-nav__toggle--open");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggle.classList.remove("main-nav__toggle--close");
  toggle.classList.add("main-nav__toggle--open");
});
