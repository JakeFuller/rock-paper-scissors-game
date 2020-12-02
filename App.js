// Establish scores globally
let playerScore = 0;
let computerScore = 0;
let round = 0;

// Moveset will never change
const moves = ["rock", "paper", "scissors"];

//  Pick a random move from the moves array for the computer
function computerPlay() {
  return moves[Math.floor(Math.random() * moves.length)];
}

// Go through one round, get computerMove for the round, compare to player move and increment score and round.
function playRound(playerMove) {
  computerMove = moves[Math.floor(Math.random() * moves.length)];
  playerMove = playerMove.toLowerCase();
  round++;
  if (playerMove == computerMove) {
    document.querySelector(".message").textContent = `Draw! Double ${capitalize(
      playerMove
    )}. Score: P:${playerScore} C:${computerScore}.`;
    return `Draw! Double ${capitalize(playerMove)}. Score: P:${playerScore} C:${computerScore}.`;
  } else if (
    (playerMove == "rock" && computerMove == "scissors") ||
    (playerMove == "scissors" && computerMove == "paper") ||
    (playerMove == "paper" && computerMove == "rock")
  ) {
    playerScore++;
    document.querySelector(".message").textContent = `You Win! ${capitalize(
      playerMove
    )} beats ${capitalize(computerMove)}. Score: P:${playerScore} C:${computerScore}.`;
    return `You Win! ${capitalize(playerMove)} beats ${capitalize(
      computerMove
    )}. Score: P:${playerScore} C:${computerScore}.`;
  } else {
    computerScore++;
    document.querySelector(".message").textContent = `You Lose! ${capitalize(
      computerMove
    )} beats ${capitalize(playerMove)}. Score: P:${playerScore} C:${computerScore}.`;
    return `You Lose! ${capitalize(computerMove)} beats ${capitalize(
      playerMove
    )}. Score: P:${playerScore} C:${computerScore}.`;
  }
}

//  Run rounds up to 5, display final score.
function game() {
  console.clear();
  const gameButton = document.querySelectorAll("#playerMoves button");
  gameButton.forEach((button) => {
    button.addEventListener("click", function handleGame() {
      if (round <= 5) {
        console.log(playRound(button.value));
      } else {
        button.removeEventListener("click", handleGame);
      }
      if (round == 5) {
        if (playerScore == computerScore) {
          document.querySelector(
            ".message"
          ).textContent = `Tie Game! Final Score: P:${playerScore} C:${computerScore}.`;
          console.log(`Tie Game! Final Score: P:${playerScore} C:${computerScore}.`);
        } else if (playerScore > computerScore) {
          document.querySelector(
            ".message"
          ).textContent = `You Win! Final Score: P:${playerScore} C:${computerScore}.`;
          console.log(`You Win! Final Score: P:${playerScore} C:${computerScore}.`);
        } else {
          document.querySelector(
            ".message"
          ).textContent = `You Lose! Final Score: P:${playerScore} C:${computerScore}.`;
          console.log(`You Lose! Final Score: P:${playerScore} C:${computerScore}.`);
        }
      }
    });
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function fragment(parentElement) {
  parent = document.querySelector(`${parentElement}`);
}

function updateUI(phase) {
  if (phase == 1) {
    // Move selection
    startBtn.classList = "hidden";
    const wrapper = document.querySelector("#wrapper");
    const moveSet = document.createElement("div");
    moveSet.classList = "game moveset";
    moveSet.id = "playerMoves";
    const pickRock = document.createElement("button");
    pickRock.classList = "button";
    pickRock.value = "Rock";
    pickRock.textContent = "Rock";
    const pickPaper = document.createElement("button");
    pickPaper.classList = "button";
    pickPaper.value = "Paper";
    pickPaper.textContent = "Paper";
    const pickScissors = document.createElement("button");
    pickScissors.classList = "button";
    pickScissors.value = "Scissors";
    pickScissors.textContent = "Scissors";

    moveSet.appendChild(pickRock);
    moveSet.appendChild(pickPaper);
    moveSet.appendChild(pickScissors);
    wrapper.appendChild(moveSet);

    // Message Centre
    const message = document.createElement("h1");
    message.classList = "message";
    wrapper.appendChild(message);

    // Score Tracker
    const scoreList = document.createElement("ul");
    scoreList.classList = "score";
    wrapper.appendChild(scoreList);
  }
}

const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", function startGame() {
  updateUI(1);
  game();
});
