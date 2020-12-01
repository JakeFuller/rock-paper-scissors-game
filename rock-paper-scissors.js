// Establish scores globally
let playerScore = 0;
let computerScore = 0;

// Moveset will never change
const moves = ["rock", "paper", "scissors"];

//  Pick a random move from the moves array for the computer
function computerPlay() {
  return moves[Math.floor(Math.random() * moves.length)];
}

// Go through one round, get computerMove for the round, compare to player move and increment score.
function playRound(playerMove) {
  computerMove = computerPlay();
  if (playerMove == computerMove) {
    return `Draw! Double ${capitalize(playerMove)}. Score: P:${playerScore} C:${computerScore}.`;
  } else if (
    (playerMove == "rock" && computerMove == "scissors") ||
    (playerMove == "scissors" && computerMove == "paper") ||
    (playerMove == "paper" && computerMove == "rock")
  ) {
    playerScore++;
    return `You Win! ${capitalize(playerMove)} beats ${capitalize(
      computerMove
    )}. Score: P:${playerScore} C:${computerScore}.`;
  } else {
    computerScore++;
    return `You Lose! ${capitalize(computerMove)} beats ${capitalize(
      computerMove
    )}. Score: P:${playerScore} C:${computerScore}.`;
  }
}

//  Run rounds up to number gameRounds, display final score.
function game() {
  console.clear();
  for (let i = 0; i < 5; i++) {
    let playerMove = prompt("Choose: Rock, Paper, or Scissors");
    playerMove = playerMove.toLowerCase();
    console.log(playRound(playerMove));
  }
  if (playerScore == computerScore) {
    console.log(`Tie Game! Final Score: P:${playerScore} C:${computerScore}.`);
  } else if (playerScore > computerScore) {
    console.log(`You Win! Final Score: P:${playerScore} C:${computerScore}.`);
  } else {
    console.log(`You Lose! Final Score: P:${playerScore} C:${computerScore}.`);
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", () => {
  game();
});
