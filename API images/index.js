const button = document.querySelector(".btn");
const qt = document.querySelector(".qoute-text");
const qa = document.querySelector(".quote-author");
let quotes = 'quotes.json';
const rus = document.querySelector(".ru");
const bel = document.querySelector(".be");
const img = document.querySelector(".img");

function switchLang (event) {
    // event.target.classList.toggle("active-lang");
    if (event.target.classList.contains('ru')){
        bel.classList.remove('active-lang');
        rus.classList.add('active-lang');
        quotes = 'quotes.json';
    }
    if (event.target.classList.contains('be')){
        quotes = 'belarusian_quotes.json';
        rus.classList.remove('active-lang');
        bel.classList.add('active-lang');
    }
    getQuotes()
}
bel.addEventListener('click', switchLang );
rus.addEventListener('click', switchLang );


async function getQuotes() {
  try {
    
        const res = await fetch(quotes);
        const data = await res.json(); 
        console.log(data);
        randomNumber = Math.round(Math.random() * data.length);
        // console.log(data[randomNumber]);
        // console.log(randomNumber);

        // метод js который добавляет текст в html элемент
        // qt.textContent = data.value.joke;
        qt.textContent = data[randomNumber].text;
        qa.textContent = data[randomNumber].author;


  } catch (error) {
    console.log(error);
  }
}
getQuotes()



button.addEventListener("click", getQuotes);

function startAnimation(){
img.classList.toggle('animation');
    
    setTimeout(() => {
        img.classList.remove('animation');
    }, 500);
}
button.addEventListener("click", startAnimation)


// button.addEventListener("click", () => {
//     img.classList.add();
// });