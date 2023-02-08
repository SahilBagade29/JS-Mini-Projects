const digits = document.querySelectorAll("li");
const timeDigits = document.querySelectorAll(".time-digits");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const timeLines = document.querySelectorAll(".time-lines");

for (let i = 1; i < 12; i++) {
  digits[i].style.transform = "rotate(" + 30 * i + "deg)";
  timeDigits[i].style.transform = "rotate(" + -30 * i + "deg)";
}

function currentTime() {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let secDeg = (sec / 60) * 360 + 90;
  const minDeg = (min / 60) * 360 + (sec / 60) * 6 + 90;
  let hrDeg = (hr / 12) * 360 + (min / 60) * 30 + 90;

  hourHand.style.transform = `rotate(${hrDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  secondHand.style.transform = `rotate(${secDeg}deg)`;
}
setInterval(currentTime, 1000);
