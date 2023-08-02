// Background Colors
const colors = [
  "#DB7093",
  "#DC143C",
  "#DCDCDC",
  "#DDA0DD",
  "#DEB887",
  "#E0FFFF",
  "#E6E6FA",
  "#E9967A",
  "#EE82EE",
  "#EEE8AA",
  "#F08080",
  "#F0E68C",
  "#F0F8FF",
  "#F0FFF0",
  "#F0FFFF",
  "#F4A460",
  "#F5DEB3",
];

// Selecting Elements
const bgColor = document.querySelector(".container");
const color = document.querySelector(".color");
const btn = document.querySelector(".btn");

// Function to get random number
const getRandomNumber = () => Math.floor(Math.random() * colors.length);

// Adding click event to change background color
btn.addEventListener("click", () => {
  let randomNumber = getRandomNumber();

  color.textContent = colors[randomNumber];
  bgColor.style.backgroundColor = colors[randomNumber];
});
