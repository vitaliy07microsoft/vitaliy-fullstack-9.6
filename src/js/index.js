import '../scss/style.scss'

// brands
const brandsSwiper = new Swiper(".main__brands--swiper", {
  width: 240,
  pagination: {
    el: ".brands-swiper-pagination",
    clickable: true,
  },
});

const brandsMediaQuery = window.matchMedia("(max-width: 767px)");

brandsMediaQuery.addEventListener("change", (e) => {
  if (!e.matches) {
    brandsSwiper.slideTo(0, 0);
  }
});

//tech
const techSwiper = new Swiper(".main__tech--swiper", {
  width: 240,
  pagination: {
    el: ".tech-swiper-pagination",
    clickable: true,
  },
});

const techMediaQuery = window.matchMedia("(max-width: 767px)");

techMediaQuery.addEventListener("change", (e) => {
  if (!e.matches) {
    techSwiper.slideTo(0, 0);
  }
});
