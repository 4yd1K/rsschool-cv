// import i18Obj from './translate.js';

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

const portfolioBtns = document.querySelector(".portfolio-btns");
// каждой кнопке добавляем слушателя на событие клик
// portfolioBtns.forEach(btn => btn.addEventListener('click', changeActiveStatus));

// функция для смены статуса кнопки по которой щелкнули
function changeActiveStatus(event) {
  portfolioBtns.forEach((btn) => btn.classList.remove("active-btn"));
  if (event.target.classList.contains("portfolio-btn")) {
    event.target.classList.add("active-btn");
  }
}

// язык

const languages = document.querySelector(".switch-lng");
const language = document.querySelectorAll(".lang");
const rus = document.querySelector(".ru");
const eng = document.querySelector(".en");

function getTranslate(lang) {
  const data = document.querySelectorAll("[data-i18]");
  localStorage.setItem("lang", lang);
  data.forEach((element) => {
    element.textContent = i18Obj[lang][element.dataset.i18];
  });
}

rus.addEventListener("click", () => getTranslate("ru"));
eng.addEventListener("click", () => getTranslate("en"));

// смена темы
const skillblock = document.querySelector(".skills");
const portfolioblock = document.querySelector(".portfolio");
const videoBlock = document.querySelector(".video");
const priceBlock = document.querySelector(".price");

const span = document.querySelector(".span");
const span2 = document.querySelector(".span2");
const span3 = document.querySelector(".span3");
const span4 = document.querySelector(".span4");
const titleSkills = document.querySelector(".section-title-skills");
const titlePor = document.querySelector(".section-title-por");
const titleVid = document.querySelector(".section-title-vid");
const titlePr = document.querySelector(".section-title-pr");
const priceItem1 = document.querySelector(".card1");
const priceItem2 = document.querySelector(".card2");
const priceItem3 = document.querySelector(".card3");
const titleItem1 = document.querySelector(".title-card1");
const titleItem2 = document.querySelector(".title-card2");
const titleItem3 = document.querySelector(".title-card3");
const btnWinter = document.querySelector(".winter");
const btnSpring = document.querySelector(".spring");
const btnSummer = document.querySelector(".summer");
const btnAutumn = document.querySelector(".autumn");
const sunButton = document.querySelector(".sun-img");

const elToChange = [];
const elToChange2 = [];


elToChange.push(skillblock, portfolioblock, videoBlock, priceBlock);
elToChange2.push(span, span2, span3, span4);
let titleListToChange = [];
titleListToChange.push(titleSkills, titlePor, titleVid, titlePr);
let priceItemToChange = [];
priceItemToChange.push(priceItem1, priceItem2, priceItem3);
let titleItemToChange = [];
titleItemToChange.push(titleItem1, titleItem2, titleItem3);
let btnToChange = [];
btnToChange.push(btnWinter, btnSpring, btnSummer, btnAutumn);

function switchSun(event) {
  let theme;
  event.target.classList.toggle("sun-active");
  if (event.target.classList.contains("sun-active")) {
    localStorage.setItem("theme", "light");
    theme = "light";
  } else {
    localStorage.setItem("theme", "dark");
    theme = "dark";
  }
  changeTheme(theme);
}

function changeTheme(theme) {
 
  if (theme === "light") {
    titleListToChange.forEach((el) => el.classList.add("title-light"));
    elToChange2.forEach((el) => el.classList.add("span-light"));
    elToChange.forEach((el) => el.classList.add("block-light"));
    priceItemToChange.forEach((el) => el.classList.add("price-item-light"));
    titleItemToChange.forEach((el) => el.classList.add("title-card-light"));
    btnToChange.forEach((el) => el.classList.add("btn-light"));
  } else {
    titleListToChange.forEach((el) => el.classList.remove("title-light"));
    elToChange2.forEach((el) => el.classList.remove("span-light"));
    elToChange.forEach((el) => el.classList.remove("block-light"));
    priceItemToChange.forEach((el) => el.classList.remove("price-item-light"));
    titleItemToChange.forEach((el) => el.classList.remove("title-card-light"));
    btnToChange.forEach((el) => el.classList.remove("btn-light"));
  }
}

sunButton.addEventListener("click", switchSun);

// переменные дял работы с хранилищем
let lang;
let theme;

function getLocalStorage() {
  // получаем значение языка
  lang = localStorage.getItem("lang");
  // если не уствноывлен
  if (!lang) {
    localStorage.setItem("lang", "en");
  } else {
    getTranslate(lang);
  }

  // получаем значение темы
  theme = localStorage.getItem("theme");
  // если тема не задана или выбрана светлая
  if (!theme || theme === "light") {
    localStorage.setItem("theme", "light");
    theme = "light";
    sunButton.classList.add("sun-active");
  }
  changeTheme(theme);
}
window.addEventListener("load", getLocalStorage);

// для span

// elToChange3.push(span)

// document.querySelector('.sun').addEventListener('click', () => {
//   elToChange3.forEach(el => el.classList.toggle('span-light'));

// });

// span 2

// elToChange4.push(span2)

// document.querySelector('.sun').addEventListener('click', () => {
//   elToChange4.forEach(el => el.classList.toggle('span2-light'));

// });

// // для title
// elToChange2.push(title)

// document.querySelector('.sun').addEventListener('click', () => {
//   elToChange2.forEach(el => el.classList.toggle('title-light'));

// });

// // для title 2 por
// elToChange5.push(title2)

// document.querySelector('.sun').addEventListener('click', () => {
//   elToChange5.forEach(el => el.classList.toggle('title-light'));

// });

// // var theme = ['.skills', '.portfolio'];
// // theme.forEach(

// //  )

const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
  },
};

// подсвечивание кнопок

// находим все кнопки
// const btns = document.querySelectorAll('.portfolio-btn');
// убираем класс у всех кнопок
// btns.forEach(btn => btn.classList.remove('active-btn') );

// ищем все кнопки которые нахоядтся внутри элемента portfolio-btns
