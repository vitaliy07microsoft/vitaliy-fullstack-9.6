let priceSwiper;

function togglePriceSwiper() {
  if (window.innerWidth <= 767) {
    if (!priceSwiper) {
      priceSwiper = new Swiper(".main__price--swiper", {
        width: 260,
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

togglePriceSwiper();

window.addEventListener("resize", togglePriceSwiper);