const aside = document.querySelector(".aside");
const asideOpener = document.getElementById("asideOpener");
const asideCloser = document.getElementById("asideCloser");

console.log(aside);
console.log(asideOpener);
console.log(asideCloser);

asideOpener.addEventListener("click", function () {
  aside.removeAttribute("id");
});

asideCloser.addEventListener("click", function() {
  aside.id = "aside-hidden";
});