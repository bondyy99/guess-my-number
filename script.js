"use strict";

let guess = 0;
let score = 20;
let number = 0;
document.querySelector(".number").textContent = "?";
document.querySelector(".message").textContent = "Start guessing...";
document.querySelector("body").style.backgroundColor = "#000000";
document.querySelector(".guess").textContent = guess;
document.querySelector(".score").textContent = score;
let scores = [];

function newNum() {
  number = Math.trunc(Math.random() * 20) + 1;
}

function checkHighscore(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

newNum();

document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector(".guess").value);

  //   When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No Number!";

    // When player wins
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "🏆 Congrats";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // When guess is too high
  } else if (guess > number && score > 1) {
    document.querySelector(".message").textContent = "Try a little lower...";
    score--;
    document.querySelector(".score").textContent = score;

    // When guess is too low
  } else if (guess < number && score > 1) {
    document.querySelector(".message").textContent = "Try a little higher...";
    score--;
    document.querySelector(".score").textContent = score;

    // When score hits 0
  } else {
    document.querySelector(".message").textContent = "💥 You lost!";
    document.querySelector(".score").textContent = 0;
    document.querySelector("body").style.backgroundColor = "#ff0000";
  }
});

// When play again button is pressed
document.querySelector(".again").addEventListener("click", function () {
  // Restore DOM and UI to pre-game states
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".guess").value = null;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  // Restore Javascript to pre-game states
  newNum();
  scores.push(score);
  let highscore = checkHighscore(scores);
  console.log(scores);
  console.log(highscore);
  document.querySelector(".highscore").textContent = highscore;
  score = 20;
});
