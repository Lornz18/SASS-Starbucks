const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
  header.classList.toggle("open");
});

const starNav = document.querySelectorAll(".star__nav__link");
const starContent = document.querySelectorAll(".coffee__tab__content");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}

function removeActiveContent() {
  starContent.forEach((star) => {
    star.classList.remove("active");
  });
}

// LINKS
const links = document.querySelectorAll(".footer__content__links h4");
links.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});


// scroll
const gutter = document.querySelector(".gutter");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 100) {
    gutter.classList.add("fixed");
  } else {
    gutter.classList.remove("fixed");
  }
});