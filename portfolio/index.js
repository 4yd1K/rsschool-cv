const hamburger = document.querySelector('.hamburger');
const rMenu = document.querySelector('.right-menu');
const rightMenuFirstlink = document.querySelector('.R1')
const rightMenuSecondlink = document.querySelector('.R2')
const rightMenuThirdlink = document.querySelector('.R3')
const rightMenuFourthlink = document.querySelector('.R4')
const rightMenuFifthlink = document.querySelector('.R5')

console.log(hamburger);
console.log(rMenu);

function toggleMenu() {
  hamburger.classList.toggle('open');

//   rMenu.classList.toggle('.open-menu');
}
function openMenu(){
    rMenu.classList.toggle('open-menu');
}

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', openMenu);
rightMenuFirstlink.addEventListener('click', openMenu)
rightMenuSecondlink.addEventListener('click',openMenu)
rightMenuThirdlink.addEventListener('click', openMenu)
rightMenuFourthlink.addEventListener('click',openMenu)
rightMenuFifthlink.addEventListener('click', openMenu)

rightMenuFirstlink.addEventListener('click', toggleMenu)
rightMenuSecondlink.addEventListener('click',toggleMenu)
rightMenuThirdlink.addEventListener('click', toggleMenu)
rightMenuFourthlink.addEventListener('click', toggleMenu)
rightMenuFifthlink.addEventListener('click', toggleMenu)

// rMenu.addEventListener('click', toggleMenu);


// rMenu.addEventListener('click', openMenu);

// портфолио 3

const portfolioBtn = document.querySelector('.winter');
const portfolioBtn2 = document.querySelector('.spring');
const portfolioBtn3 = document.querySelector('.summer');
const portfolioBtn4 = document.querySelector('.autumn');
const portfolioImages = document.querySelectorAll('.portfolio-image');;

portfolioBtn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
});

portfolioBtn2.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
});

portfolioBtn3.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
});

portfolioBtn4.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
});


// const portfolioBtns = document.querySelector('.portfolio-btns');


// function changeImage(event) {
//     dataset.winter('portfolio-btn')
//     if(event.target.classList.contains('portfolio-btn')) {
//         portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`); // здесь код функции, меняющей src изображений
//     }
//   }
  