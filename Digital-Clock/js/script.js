setInterval(displayTime, 1000);

function displayTime() {
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");
  let session = document.querySelector(".session");

  let date = new Date();
  let currentHour = date.getHours();
  hours.textContent = currentHour;

  let currentMinute = date.getMinutes();
  minutes.textContent = currentMinute;

  let currentSecond = date.getSeconds();
  seconds.textContent = currentSecond;

  if (hours.innerHTML === 0) {
    hours.innerHTML = 12;
  }

  if (hours.innerHTML > 12) {
    hours.innerHTML -= 12;
    session.textContent = "PM";
  }
  console.log(session.textContent);

  hours.innerHTML =
    hours.innerHTML < 10 ? "0" + hours.innerHTML : hours.innerHTML;
  minutes.innerHTML =
    minutes.innerHTML < 10 ? "0" + minutes.innerHTML : minutes.innerHTML;
  seconds.innerHTML =
    seconds.innerHTML < 10 ? "0" + seconds.innerHTML : seconds.innerHTML;
}
displayTime();
