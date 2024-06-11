// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Humburger
const humbuger = document.querySelector("#hambuger");
const navMenu = document.querySelector("#nav-menu");

humbuger.addEventListener("click", () => {
  humbuger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("scale-0");
});
