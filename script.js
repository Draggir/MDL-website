const searchIcon = document.querySelector('.navbar__search-icon');
const searchContainer = document.querySelector('.navbar__search-container');

let isSearchVisible = false; // Ajouter une variable pour suivre l'état de la barre de recherche

searchIcon.addEventListener('click', () => {
  if (isSearchVisible) {
    searchContainer.classList.remove('visible');
  } else {
    searchContainer.classList.add('visible');
  }
  fadeOut();
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

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

fadeOut();

var swiper = new Swiper(".Slider-1", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay:9000,
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
    },
  }
});

var swiper = new Swiper(".trends-slider", {
  spaceBetween:10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay:9000,
    disableOnInteraction:false,
  },
  navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  breakpoints: {
    0:{
      slidesPerView:1,
    },

    450:{
      slidesPerView:2,
    },

    768:{
      slidesPerView:3,
    },
    1024:{
      slidesPerView:4,
    },
  }
});
