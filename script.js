const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');
const menu = document.querySelector('.navbar__menu');

menuIconOpen.addEventListener('click', () => {
  menu.classList.add('visible');
});
fadeOut();
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

function closeWelcomeMessage() {
  const welcomeMessage = document.querySelector('.welcome-message');
  welcomeMessage.style.display = 'none';
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

var swiper = new Swiper(".home", {
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
    768:{
      slidesPerView:1,
    },
    1024:{
      slidesPerView:1,
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
  }
});

var swiper = new Swiper(".arrivals-slider", {
  loop:true,
  spaceBetween:10,
  centeredSlides: true,
  autoplay: {
    delay:9000,
    disableOnInteraction:false,
  },
  breakpoints: {
    0:{
      slidesPerView:1,
    },

    1024:{
      slidesPerView:3,
    },
  }
});

var swiper = new Swiper(".reviews-slider", {
  loop:true,
  spaceBetween:10,
  centeredSlides: true,
  autoplay: {
    delay:9000,
    disableOnInteraction:false,
  },
  breakpoints: {
    0:{
      slidesPerView:1,
    },

    1024:{
      slidesPerView:3,
    },
  }
});
