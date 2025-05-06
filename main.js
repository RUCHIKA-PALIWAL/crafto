window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// slider swiper//
const swiper = new Swiper(".wrapper", {
  // Optional parameters
  spaceBetween: 20,

  loop: true,
  autoplay: {
    delay: 5000,

    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-start",
    prevEl: ".swiper-button-end",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});














