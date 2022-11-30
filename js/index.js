/*burger*/
let burger = document.querySelector('.burger');
let meny = document.querySelector('.header__nav');
let menyLinks = meny.querySelectorAll('.nav__link-main');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  meny.classList.toggle('header__nav--visible');
  document.body.classList.toggle('stop-scroll');
})

menyLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    meny.classList.remove('header__nav--visible');
    document.body.classList.remove('stop-scroll');
  })
})

/*search*/
let search = document.querySelector('.search');
let searchbox = document.querySelector('.search-ok');
let search2 = document.querySelector('.search-ok-bthn');
let search3 = document.querySelector('.search-ok-close');

search.addEventListener('click', function () {
  searchbox.classList.toggle('search-ok--active');
  document.body.classList.toggle('stop-scroll');
})

search2.addEventListener('click', function () {
  searchbox.classList.remove('search-ok--active');
  document.body.classList.remove('stop-scroll');
})

search3.addEventListener('click', function () {
  searchbox.classList.remove('search-ok--active');
  document.body.classList.remove('stop-scroll');
})

/*work*/

let tabsBtn = document.querySelectorAll('.work__bth');
let tabsItem = document.querySelectorAll('.work__container');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('work__bth--active')
      e.currentTarget.classList.add('work__bth--active');
    });

    tabsItem.forEach(function (elem) {
      elem.classList.remove('work__container--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('work__container--active');
  });
});

/*advertising*/

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

/*accordion*/
document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false,
    collapse: false
  });
})
