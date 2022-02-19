const area = document.querySelector(".area");
let move = 0;
let result = "";
const contentWrapper = document.querySelector(".content");
const modalResult = document.querySelector(".modal-result-wrapper");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close");

area.addEventListener("click", (event) => {
  if (event.target.className === "box" && !event.target.classList.contains("not")) {
      event.target.classList.add("not");
      move % 2 === 0 ? (event.target.innerHTML = "X") : (event.target.innerHTML = "0");
        
      move++;
      check();
    } 
  });
    


const check = () => {
  const boxes = document.getElementsByClassName("box");
  
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML == "X" && boxes[arr[i][1]].innerHTML == "X" && boxes[arr[i][2]].innerHTML == "X"
    ) {
      result = "крестики";
      prepareResult(result);
    } else if (
      boxes[arr[i][0]].innerHTML == "0" && boxes[arr[i][1]].innerHTML == "0" && boxes[arr[i][2]].innerHTML == "0"
    ) {
      result = "нолики";
      prepareResult(result);
    } else if (
       move === 9 && result !== "крестики" &&  result !=="нолики"
      ) {
        result = "ничья";
        nobodyWin(result);
      }
  }
};

const prepareResult = (winner) => {
  contentWrapper.innerHTML = `Победили ${winner} !`;
  modalResult.style.display = "block";
};

const nobodyWin = (nowin) => {
    contentWrapper.innerHTML = `${nowin} !`;
    modalResult.style.display = "block";
  };

const closeModal = () => {
  modalResult.style.display = "none";
  location.reload();
};

overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);
