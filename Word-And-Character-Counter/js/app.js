// Selecting DOM Element
let inputTextArea = document.querySelector("#input-textarea");
let wordCount = document.querySelector("#word-count");
let characterCount = document.querySelector("#character-count");

// Adding input event on textarea
inputTextArea.addEventListener("input", () => {
  let text = inputTextArea.value;

  // This will split a word from whitespaces(either one or more) and create an array of words and return the length of an array
  let totalWords = text.split(/\s+/).filter((item) => item).length;

  // This will count the total characters including whitespaces
  let totalCharacters = text.length;

  characterCount.textContent = totalCharacters;
  wordCount.textContent = totalWords;
});
