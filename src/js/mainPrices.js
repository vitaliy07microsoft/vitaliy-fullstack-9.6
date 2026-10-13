let priceSwiper;

const priceSwiperSlide1 = document.getElementById("price-swiper-slide-1");
priceSwiperSlide1.style.width = "100%";
const priceSwiperSlide2 = document.getElementById("price-swiper-slide-1");
priceSwiperSlide2.style.width = "100%";
const priceSwiperSlide3 = document.getElementById("price-swiper-slide-1");
priceSwiperSlide3.style.width = "100%";
const priceSwiperSlide4= document.getElementById("price-swiper-slide-1");
priceSwiperSlide4.style.width = "100%";
const priceSwiperSlide5 = document.getElementById("price-swiper-slide-1");
priceSwiperSlide5.style.width = "100%";


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