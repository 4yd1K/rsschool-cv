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

const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImage = document.querySelector('.portfolio-image');

portfolioBtn.addEventListener('click', () => {
   portfolioImage.src = "/portfolio/assets/img/winter/1.jpg"
});

const portfolioBtns = document.querySelector('.portfolio-btns');


// function changeImage(event) {
//     dataset.winter('portfolio-btn')
//     if(event.target.classList.contains('portfolio-btn')) {
//         portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`); // здесь код функции, меняющей src изображений
//     }
//   }
  