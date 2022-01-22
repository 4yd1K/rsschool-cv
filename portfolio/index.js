const hamburger = document.querySelector('.hamburger');
const rMenu = document.querySelector('.right-menu');

console.log(hamburger);
console.log(rMenu);

function toggleMenu() {
  hamburger.classList.toggle('open');

//   rMenu.classList.toggle('.open-menu');
}
hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', openMenu);
// rMenu.addEventListener('click', toggleMenu);
function openMenu(){
    rMenu.classList.toggle('open-menu');
}

rMenu.addEventListener('click', openMenu);