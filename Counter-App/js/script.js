// Selecting the value
const value = document.querySelector(".value");

// Selecting each button
const btnIncrement = document.querySelector(".increment");
const btnDecrement = document.querySelector(".decrement");
const btnReset = document.querySelector(".reset");

let count = 0;

// Click event for increment
btnIncrement.addEventListener("click", () => {
  count++;
  value.textContent = count;
});

// Click event for decrement
btnDecrement.addEventListener("click", () => {
  count--;
  value.textContent = count;
});

// Click event for reset count
btnReset.addEventListener("click", () => {
  count = 0;
  value.textContent = count;
});
