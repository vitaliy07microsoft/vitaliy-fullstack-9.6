const line = document.querySelector(".aside__middle--type--line");
const items = document.querySelectorAll(".aside__middle--type");

items.forEach((item) => {
  item.addEventListener("click", () => {
    line.style.top = `${item.offsetTop}px`;
  });
});