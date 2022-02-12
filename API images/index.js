const button = document.querySelector(".btn");
const qt = document.querySelector(".qoute-text");
const qa = document.querySelector(".quote-author");
const quotes = 'quotes.json';
let randomNumber = 0;

async function getQuotes() {
  try {
    
        const res = await fetch(quotes);
        const data = await res.json(); 
        // console.log(data);
        randomNumber = Math.round(Math.random() * data.length);
        // console.log(data[randomNumber]);
        // console.log(randomNumber);
        qt.textContent = data[randomNumber].text;
        qa.textContent = data[randomNumber].author;


  } catch (error) {
    console.log(error);
  }
}
getQuotes()

button.addEventListener("click", () => {
    getQuotes();
});