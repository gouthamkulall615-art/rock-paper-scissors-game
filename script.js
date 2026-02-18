// --- Score State ---
let wins = 0;
let losses = 0;
let ties = 0;

// --- DOM References ---
const scoreElement = document.getElementById("score");
const resultElement = document.getElementById("result");
const detailsElement = document.getElementById("details");
const resetButton = document.getElementById("reset");

// --- Update Score Display ---
function updateScore() {
  scoreElement.textContent =
    `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}

// --- Get Computer Move ---
function getComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber < 1/3) return "rock";
  if (randomNumber < 2/3) return "paper";
  return "scissors";
}

// --- Determine Winner ---
function determineResult(playerMove, computerMove) {
  if (playerMove === computerMove) return "tie";

  if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    return "win";
  }

  return "lose";
}

// --- Handle Player Click ---
document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {

    const playerMove = button.dataset.choice;
    const computerMove = getComputerMove();
    const result = determineResult(playerMove, computerMove);

    if (result === "win") {
      wins++;
      resultElement.textContent = "🎉You Win!🎉";
    } 
    else if (result === "lose") {
      losses++;
      resultElement.textContent = "You Lose!😭";
    } 
    else {
      ties++;
      resultElement.textContent = "It's a Tie!🤝";
    }

    detailsElement.textContent =
      `You chose ${playerMove} | Computer chose ${computerMove}`;

    updateScore();
  });
});

// --- Reset Button ---
resetButton.addEventListener("click", () => {
  wins = 0;
  losses = 0;
  ties = 0;

  updateScore();
  resultElement.textContent = "Make a move";
  detailsElement.textContent = "";
});

// --- Initialize ---
updateScore();
