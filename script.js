const form = document.querySelector(".input-container");
const input = document.querySelector("#input");
const showArray = document.querySelector(".array");
const showResult = document.querySelector(".result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  array = [];
  escribo(input.value);
  input.value = "";
});

let array = [];

const escribo = (num) => {
  for (let i = num - 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      array.push(i);
    }
  }

  const total = array.reduce((acc, value) => acc + value);

  showArray.innerHTML = `Números válidos: ${array}`;
  showResult.innerHTML = `Resultado do somatório:  ${total}`;
};
