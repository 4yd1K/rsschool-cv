import i18Obj from './translate.js';

const hamburger = document.querySelector(".hamburger");
const rMenu = document.querySelector(".right-menu");
const rightMenuFirstlink = document.querySelector(".R1");
const rightMenuSecondlink = document.querySelector(".R2");
const rightMenuThirdlink = document.querySelector(".R3");
const rightMenuFourthlink = document.querySelector(".R4");
const rightMenuFifthlink = document.querySelector(".R5");

console.log(hamburger);
console.log(rMenu);

function toggleMenu() {
  hamburger.classList.toggle("open");

  //   rMenu.classList.toggle('.open-menu');
}
function openMenu() {
  rMenu.classList.toggle("open-menu");
}

hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("click", openMenu);
rightMenuFirstlink.addEventListener("click", openMenu);
rightMenuSecondlink.addEventListener("click", openMenu);
rightMenuThirdlink.addEventListener("click", openMenu);
rightMenuFourthlink.addEventListener("click", openMenu);
rightMenuFifthlink.addEventListener("click", openMenu);

rightMenuFirstlink.addEventListener("click", toggleMenu);
rightMenuSecondlink.addEventListener("click", toggleMenu);
rightMenuThirdlink.addEventListener("click", toggleMenu);
rightMenuFourthlink.addEventListener("click", toggleMenu);
rightMenuFifthlink.addEventListener("click", toggleMenu);

// rMenu.addEventListener('click', toggleMenu);

// rMenu.addEventListener('click', openMenu);

// портфолио 3

const portfolioBtn = document.querySelector(".winter");
const portfolioBtn2 = document.querySelector(".spring");
const portfolioBtn3 = document.querySelector(".summer");
const portfolioBtn4 = document.querySelector(".autumn");
const portfolioImages = document.querySelectorAll(".portfolio-image");

portfolioBtn.addEventListener("click", () => {
  portfolioImages.forEach(
    (img, index) => (img.src = `./assets/img/winter/${index + 1}.jpg`)
  );
});

portfolioBtn2.addEventListener("click", () => {
  portfolioImages.forEach(
    (img, index) => (img.src = `./assets/img/spring/${index + 1}.jpg`)
  );
});

portfolioBtn3.addEventListener("click", () => {
  portfolioImages.forEach(
    (img, index) => (img.src = `./assets/img/summer/${index + 1}.jpg`)
  );
});

portfolioBtn4.addEventListener("click", () => {
  portfolioImages.forEach(
    (img, index) => (img.src = `./assets/img/autumn/${index + 1}.jpg`)
  );
});

// кеширование изображений

function preloadSummerImages() {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/summer/${i}.jpg`;
  }
}
preloadSummerImages();

function preloadSummerImages() {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/autumn/${i}.jpg`;
  }
}
preloadSummerImages();

function preloadSummerImages() {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/spring/${i}.jpg`;
  }
}
preloadSummerImages();

function preloadSummerImages() {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/winter/${i}.jpg`;
  }
}
preloadSummerImages();

// подсвечивание кнопок

// находим все кнопки
//   const btns = document.querySelectorAll('.portfolio-btn');
//   убираем класс у всех кнопок
//   btns.forEach(btn => btn.classList.remove('active-btn') );

// ищем все кнопки которые нахоядтся внутри элемента portfolio-btns
const portfolioBtns = document.querySelector(".portfolio-btns");
// каждой кнопке добавляем слушателя на событие клик
portfolioBtns.forEach(btn => btn.addEventListener('click', changeActiveStatus));
// функция для смены статуса кнопки по которой щелкнули
function changeActiveStatus(event) {
  portfolioBtns.forEach((btn) => btn.classList.remove("active-btn"));
  if (event.target.classList.contains("portfolio-btn")) {
    event.target.classList.add("active-btn");
  }
}

function getTranslate(lang) {
  const dataTranlate = document.querySelectorAll('[data-i18]')
//   dataTranlate.forEach(element => {})
console.log(dataTranlate)
}
getTranslate()

