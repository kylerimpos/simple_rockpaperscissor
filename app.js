const hands = {
  1: "Rock",
  2: "Scissor",
  3: "Paper",
};

let playerHand = 0;
let computerHand = 0;
let playerScore = 0;
let computerScore = 0;
let restartBtn = document.getElementById("restart");
let Btns = document.querySelectorAll(".gameBtn");

Btns.forEach((btn) => {
  btn.onclick = () => {
    playerHand = parseInt(btn.value);
    game();
    console.log(playerHand);
  };
});

restartBtn.onclick = () => {
  computerScore = 0;
  playerScore = 0;
  document.getElementById("player-score").innerText = playerScore;
  document.getElementById("computer-score").innerText = computerScore;
  document.getElementById("player-hand").innerText = "-";
  document.getElementById("computer-hand").innerText = "-";
  document.getElementById("status").innerText = "VS";
};

const game = () => {
  computerHand = Math.floor(Math.random() * 3) + 1;

  document.getElementById("player-hand").innerText = hands[playerHand];
  document.getElementById("computer-hand").innerText = hands[computerHand];

  switch (computerHand) {
    case 1:
      if (playerHand == 2) {
        lose();
      } else if (playerHand == 3) {
        win();
      } else {
        draw();
      }
      break;

    case 2:
      if (playerHand == 1) {
        win();
      } else if (playerHand == 3) {
        lose();
      } else {
        draw();
      }
      break;
    case 3:
      if (playerHand == 1) {
        lose();
      } else if (playerHand == 2) {
        win();
      } else {
        draw();
      }
      break;
  }
};

const win = () => {
  playerScore += 1;
  document.getElementById("player-score").innerText = playerScore;
  document.getElementById("status").innerText = "Win!";
};

const lose = () => {
  computerScore += 1;
  document.getElementById("computer-score").innerText = computerScore;
  document.getElementById("status").innerText = "Lose!";
};

const draw = () => {
  document.getElementById("status").innerText = "Draw!";
};
