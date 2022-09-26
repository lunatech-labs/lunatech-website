const elToggle  = document.querySelector("#menu-toggle");
const elContent = document.querySelector("#menu-content");

elToggle.addEventListener("click", function() {
  elContent.classList.toggle("is-hidden");
});