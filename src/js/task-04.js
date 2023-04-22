const counter = document.querySelector("#counter");
const valueSpan = counter.querySelector("#value");
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});
