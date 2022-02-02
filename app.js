// create a counter app

const buttonAdd = document.getElementById("add-counter");
const number = document.getElementById("number-counter");

let counter = 0;

function addNumber() {
  number.innerHTML = counter;
  counter++;
  console.log(counter);
}

function lessNumber() {
  number.innerHTML = counter;
  counter--;
}

