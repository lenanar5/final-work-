let burger = document.querySelector(".burger");
let xMark = document.querySelector(".xMark");
let mobileMenu = document.querySelector(".nav");

burger.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  xMark.style.display = "block";
  burger.style.display = "none";
});

xMark.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  xMark.style.display = "none";
  burger.style.display = "block";
});
