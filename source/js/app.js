'use strict';

var toggle = document.querySelector(".main-nav__toggle");
var toggle__open = document.querySelector(".main-nav__toggle--open");
var toggle__close = document.querySelector(".main-nav__toggle--close");
var toggle__icon = document.querySelector(".main-nav__toggle-icon");
var toggle__icon__close = document.querySelector(".main-nav__toggle-icon--close");
var toggle__icon__open = document.querySelector(".main-nav__toggle-icon--open");
var toggle__icon__show = document.querySelector(".main-nav__toggle-icon--show");
var menu__site = document.querySelector(".main-nav__list--site");
var menu__user = document.querySelector(".main-nav__list--user");

var index = document.querySelector(".contacts");
var catalog = document.querySelector(".product");

var modal = document.querySelector(".modal--options");
var button_week__order = document.querySelector(".product-week__button");
var product__cart = document.querySelector(".product__cart");
var wrapper = document.querySelector(".site-wrapper");

toggle__icon__open.classList.add("main-nav__toggle-icon--show");
toggle.classList.add("main-nav__toggle--open");
menu__site.classList.add("main-nav__list--close");
menu__user.classList.add("main-nav__list--close");

if(index !== null){
  console.log("index");
  toggle.addEventListener("click", function (evt) {
    if(toggle.classList.contains("main-nav__toggle--open")){
      evt.preventDefault();
      toggle__icon__open.classList.remove("main-nav__toggle-icon--show");
      toggle__icon__close.classList.add("main-nav__toggle-icon--show");
      toggle.classList.remove("main-nav__toggle--open");
      toggle.classList.add("main-nav__toggle--close");
      menu__site.classList.remove("main-nav__list--close");
      menu__user.classList.remove("main-nav__list--close");
      }
    else {
      evt.preventDefault();
      toggle__icon__close.classList.remove("main-nav__toggle-icon--show");
      toggle__icon__open.classList.add("main-nav__toggle-icon--show");
      toggle.classList.remove("main-nav__toggle--close");
      toggle.classList.add("main-nav__toggle--open");
      menu__site.classList.add("main-nav__list--close");
      menu__user.classList.add("main-nav__list--close");
      }
  });

  button_week__order.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
    wrapper.classList.add("site-wrapper--modal");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal--show")) {
        modal.classList.remove("modal--show");
        wrapper.classList.remove("site-wrapper--modal");
      }
    }
  });
} else if(catalog !== null){
  console.log("catalog");
  product__cart.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
    wrapper.classList.add("site-wrapper--modal");
  });

    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal--show")) {
        modal.classList.remove("modal--show");
        wrapper.classList.remove("site-wrapper--modal");
      }
    }
  });
}




