// Slick
$(document).ready(function () {
  $(".services__list").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: false,
  });

  $(".fade").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $(".footer__topList").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
});

// // Shrink Navigation Menu
const getElement = (selector) => {
  return document.querySelector(selector);
};

window.onscroll = () => {
  scrollHeader();
};

const scrollHeader = () => {
  if (document.documentElement.scrollTop > 10) {
    getElement(".header").classList = "header header__active";
  } else {
    getElement(".header").classList = "header";
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const logoBlack = getElement(".header__logoContainer>img:first-child");
  const logoWhite = getElement(".header__logoContainer>img:nth-child(2)");

  logoBlack.style.display = "block";
  logoWhite.style.display = "none";
});

// Header Menu
getElement(".header__rightContentL").addEventListener("click", () => {
  const headerMenu = getElement(".headerMenu");
  const headerMenuC = getElement(".headerMenu .container");
  const logoBlack = getElement(".header__logoContainer>img:first-child");
  const logoWhite = getElement(".header__logoContainer>img:nth-child(2)");
  const iconMenu = getElement(".header__rightContentL>div");
  const textMenu = getElement(".text__menu");
  const contenMenu = getElement(".text__menu>p");

  // Header Menu
  if (headerMenu.classList == "headerMenu") {
    headerMenu.classList = "headerMenu headerMenuShow";
    setTimeout(() => {
      headerMenuC.style.display = "block";
    }, 1000);
  }else {
    headerMenuC.style.display = "none";
    setTimeout(() => {
      headerMenu.classList = "headerMenu";
    }, 1000);
  }
  
  // // Logo
  if (logoBlack.style.display == "block") {
    setTimeout(() => {
      logoBlack.style.display = "none";
      logoWhite.style.display = "block";
    }, 1000);
  } else {
    setTimeout(() => {
      logoBlack.style.display = "block";
      logoWhite.style.display = "none";
    }, 1000);
  }

  // Icon Menu
  if (iconMenu.classList == "rightContent__icon") {
    iconMenu.classList = "rightContent__iconActive";
  } else {
    iconMenu.classList = "rightContent__icon";
  }

  // Text Menu
  if (textMenu.classList == "text__menu") {
    setTimeout(() => {
      textMenu.classList = "text__menu text__menuActive";
      contenMenu.textContent = "Close";
    }, 1000);
  }else {
    setTimeout(() => {
      textMenu.classList = "text__menu";
      contenMenu.textContent = "Menu";
    }, 1000);
  }
});
