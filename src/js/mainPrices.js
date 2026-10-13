let priceSwiper;

const priceMediaQuery = window.matchMedia("(max-width: 767px)");

function togglePriceSwiper() {
  if (priceMediaQuery.matches) {
    if (!priceSwiper) {
      priceSwiper = new Swiper(".main__price--swiper", {
        slidesPerView: "auto",
        pagination: {
          el: ".price-swiper-pagination",
          clickable: true,
        },
      });
    }
  } else {
    if (priceSwiper) {
      priceSwiper.destroy(true, true);
      priceSwiper = undefined;
    }
  }
}