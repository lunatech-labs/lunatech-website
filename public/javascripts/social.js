const soToggle  = document.querySelector("#social-toggle");
const soContent = document.querySelector("#social-content");

soToggle.addEventListener("click", function() {
  soContent.classList.toggle("is-hidden");
});