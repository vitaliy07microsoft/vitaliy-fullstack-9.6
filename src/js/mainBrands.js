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

let isOpen768 = false;
let isOpen1120 = false;

const brandsSlide11 = document.querySelector("#brands-swiper-slide-11");
const brandsAllSlides = document.querySelectorAll(".brands-swiper-slide");
const brandsButton = document.querySelector(".main__brands--show--more--button");
const brandsButtonImage = document.querySelector(".main__brands--show--more--button--img");
const brandsButtonText = document.querySelector(".main__brands--show--more--button--text");
const brandsTabletOpenSlides = Array.from(brandsAllSlides).slice(0, 6);
const brandsTabletCloseSlides = Array.from(brandsAllSlides).slice(6, 11);
const brandsPcOpenSlides = Array.from(brandsAllSlides).slice(0, 8);
const brandsPcCloseSlides = Array.from(brandsAllSlides).slice(8, 11);

brandsButton.addEventListener("click", brandsShowMore);

function brandsCheckScreenWidth() {
   if (window.innerWidth <= 767) {
    isOpen768 = false;
    isOpen1120 = false;
  }

  if (window.innerWidth <= 1119 && !isOpen768) {
    brandsTabletOpenSlides.forEach((slide) => {
      slide.classList.remove("brands-swiper-slide-hidden");
    });

    brandsTabletCloseSlides.forEach((slide) => {
      slide.classList.add("brands-swiper-slide-hidden");
    });

    isOpen768 = true;
    isOpen1120 = false;

  } else if (window.innerWidth >= 1120 && !isOpen1120) {
    brandsPcOpenSlides.forEach((slide) => {
      slide.classList.remove("brands-swiper-slide-hidden");
    });

    brandsPcCloseSlides.forEach((slide) => {
      slide.classList.add("brands-swiper-slide-hidden");
    });

    isOpen1120 = true;
    isOpen768 = false;
  }

  brandsButtonTextChange();
}

window.addEventListener("resize", brandsCheckScreenWidth);
brandsCheckScreenWidth();

function brandsShowMore() {
  if (window.innerWidth <= 1119) {
    brandsTabletOpenSlides.forEach((slide) => {
      slide.classList.remove("brands-swiper-slide-hidden");
    });

    brandsTabletCloseSlides.forEach((slide) => {
      slide.classList.toggle("brands-swiper-slide-hidden");
    });

    if (!brandsSlide11.classList.contains("brands-swiper-slide-hidden")) {
      isOpen768 = true;
    }
  } else if (window.innerWidth >= 1120) {
    brandsPcOpenSlides.forEach((slide) => {
      slide.classList.remove("brands-swiper-slide-hidden");
    });

    brandsPcCloseSlides.forEach((slide) => {
      slide.classList.toggle("brands-swiper-slide-hidden");
    });

    if (!brandsSlide11.classList.contains("brands-swiper-slide-hidden")) {
      isOpen1120 = true;
    }
  }

  brandsButtonTextChange();
}

function brandsButtonTextChange() {
  if ( brandsSlide11.classList.contains("brands-swiper-slide-hidden")){
    brandsButtonText.textContent = "Показать всё";
    brandsButtonImage.style.transform = "rotate(0deg)";
  } else {
    brandsButtonText.textContent = "Скрыть";
    brandsButtonImage.style.transform = "rotate(180deg)";
  }
}