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

let isOpen768 = false;
let isOpen1120 = false;

const techSlide9 = document.querySelector("#tech-swiper-slide-9");
const techAllSlides = document.querySelectorAll(".tech-swiper-slide");
const techButton = document.querySelector(".main__tech--show--more--button");
const techButtonImage = document.querySelector(".main__tech--show--more--button--img");
const techButtonText = document.querySelector(".main__tech--show--more--button--text");
const techTabletOpenSlides = Array.from(techAllSlides).slice(0, 3);
const techTabletCloseSlides = Array.from(techAllSlides).slice(3, 9);
const techPcOpenSlides = Array.from(techAllSlides).slice(0, 4);
const techPcCloseSlides = Array.from(techAllSlides).slice(4, 9);

techButton.addEventListener("click", techShowMore);

function techCheckScreenWidth() {
   if (window.innerWidth <= 767) {
    isOpen768 = false;
    isOpen1120 = false;
  }

  if (window.innerWidth <= 1119 && !isOpen768) {
    techTabletOpenSlides.forEach((slide) => {
      slide.classList.remove("tech-swiper-slide-hidden");
    });

    techTabletCloseSlides.forEach((slide) => {
      slide.classList.add("tech-swiper-slide-hidden");
    });

    isOpen768 = true;
    isOpen1120 = false;

  } else if (window.innerWidth >= 1120 && !isOpen1120) {
    techPcOpenSlides.forEach((slide) => {
      slide.classList.remove("tech-swiper-slide-hidden");
    });

    techPcCloseSlides.forEach((slide) => {
      slide.classList.add("tech-swiper-slide-hidden");
    });

    isOpen1120 = true;
    isOpen768 = false;
  }

  techButtonTextChange();
}

window.addEventListener("resize", techCheckScreenWidth);
techCheckScreenWidth();

function techShowMore() {
  if (window.innerWidth <= 1119) {
    techTabletOpenSlides.forEach((slide) => {
      slide.classList.remove("tech-swiper-slide-hidden");
    });

    techTabletCloseSlides.forEach((slide) => {
      slide.classList.toggle("tech-swiper-slide-hidden");
    });

    if (!techSlide9.classList.contains("tech-swiper-slide-hidden")) {
      isOpen768 = true;
    }
  } else if (window.innerWidth >= 1120) {
    techPcOpenSlides.forEach((slide) => {
      slide.classList.remove("tech-swiper-slide-hidden");
    });

    techPcCloseSlides.forEach((slide) => {
      slide.classList.toggle("tech-swiper-slide-hidden");
    });

    if (!techSlide9.classList.contains("tech-swiper-slide-hidden")) {
      isOpen1120 = true;
    }
  }

  techButtonTextChange();
}

function techButtonTextChange() {
  if ( techSlide9.classList.contains("tech-swiper-slide-hidden")){
    techButtonText.textContent = "Показать всё";
    techButtonImage.style.transform = "rotate(0deg)";
  } else {
    techButtonText.textContent = "Скрыть";
    techButtonImage.style.transform = "rotate(180deg)";
  }
}