let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


function generateTarget() {
  return Math.floor(Math.random() * 10);
}
const compareGuesses = (humanGuess, computerGuess, numberGuess) => {
  let humanDistance = Math.abs(humanGuess - numberGuess);
  let computerDistance = Math.abs(computerGuess - numberGuess);
    if (humanDistance <= computerDistance) {
      return true
    } else {
      return false
    }
}; 
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};
const advanceRound = () => {
  currentRoundNumber += 1;
}

