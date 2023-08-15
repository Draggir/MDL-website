const searchIcon = document.querySelector('.navbar__search-icon');
const searchContainer = document.querySelector('.navbar__search-container');

let isSearchVisible = false; // Ajouter une variable pour suivre l'état de la barre de recherche

searchIcon.addEventListener('click', () => {
  if (isSearchVisible) {
    searchContainer.classList.remove('visible');
  } else {
    searchContainer.classList.add('visible');
  }
  
  isSearchVisible = !isSearchVisible; // Inverser l'état de la barre de recherche
});

const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');
const menu = document.querySelector('.navbar__menu');

menuIconOpen.addEventListener('click', () => {
  menu.classList.add('visible');
});

menuIconClose.addEventListener('click', () => {
  menu.classList.remove('visible');
});

var swiper = new Swiper(".Slider-1", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay:2000,
    disableOnInteraction:false,
  },
  breakpoints: {
    0:{
      slidesPerView:1,
    },
    768:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView:3,
      spaceBetween:0,
    },
  }
});

  var swiper = new Swiper(".citations-cards", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });