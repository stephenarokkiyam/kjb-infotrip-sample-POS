let hamburger = document.getElementById("hamburger");
let nav = document.getElementById("nav");
let icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  if (nav.style.display === "block") {
    nav.style.display = "none";
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  } else {
    nav.style.display = "block";
    nav.style.zIndex = 9999;
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }
});
