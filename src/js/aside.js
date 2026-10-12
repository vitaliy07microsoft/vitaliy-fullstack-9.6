const asideOpenCloseButton = document.getElementById("aside__top--left--buttons--burger--id");

const asideOpenButtonImgSrc = "../img/burger.svg";
const asideCloseButtonImgSrc = "../img/burgerClose.svg";

asideOpenCloseButton.addEventListener("click", function () {
  if (asideOpenCloseButton.getAttribute("src") === asideOpenButtonImgSrc) {
    asideOpenCloseButton.src = asideCloseButtonImgSrc;
  } else {
    asideOpenCloseButton.src = asideOpenButtonImgSrc;
  }
});