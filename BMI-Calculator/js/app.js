const bmiData = document.querySelector(".bmi-data");
const weight = document.querySelector(".weight-val");
const height = document.querySelector(".height-val");
const bmiResult = document.querySelector(".bmi-result");
const bmiVal = document.querySelector(".bmi-val");

bmiData.addEventListener("submit", (e) => {
  e.preventDefault();

  const weightVal = weight.value;
  const heightVal = height.value / 100;
  const bmi = weightVal / Math.pow(heightVal, 2);

  if (bmi < 18.5) {
    bmiStatus = "Underweight";
  } else if (bmi < 25) {
    bmiStatus = "Normal";
  } else if (bmi < 30) {
    bmiStatus = "Overweight";
  } else if (bmi < 40) {
    bmiStatus = "Obese";
  } else {
    bmiStatus = "Extreme Obese";
  }

  bmiResult.innerHTML = `<p class="bmi-val">${bmi.toFixed(
    2
  )}</p> <p class="bmi-status">${bmiStatus}</p>`;
});
