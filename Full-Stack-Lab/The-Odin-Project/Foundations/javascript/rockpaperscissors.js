function playRound(humanChoice, computerChoice, rounds) {
  for (let i = rounds; i > 0; i--) {
    humanChoice = humanSelection();
    computerChoice = computerSelection();
    if (humanChoice == computerChoice) { console.log("You Tied"); continue; };
    switch (humanChoice) {
      case "Rock":
        computerChoice == "Paper" ? (computerScore++, console.log("You Lose ,Paper Beats Rock")) : (humanScore++, console.log("You Won ,Rock Beats Scissors"));
        break;
      case "Paper":
        computerChoice == "scissors" ? (computerScore++, console.log("You lose ,Scissors Beats Paper")) : (humanScore++, console.log("You Won ,Paper Beats Rock"));
        break;
      case "scissors":
        computerChoice == "Rock" ? (computerScore++, console.log("You lose ,Rock Beats Scissors")) : (humanScore++, console.log("You Won ,Scissors Beats Paper"));
        break;
    };
    console.log(`Your Score: ${humanScore} , Computer Score: ${computerScore}`);
  };
};

const humanSelection = () => {
  let humanchoices = ["Rock", "Paper", "scissors", "Rock"];
  return humanchoices.pop();
};
const computerSelection = () => {
  let computerChoices = ["Rock", "Paper", "scissors"];
  return computerChoices[Math.round(Math.random() * 2)];
};
let humanScore = 0;
let computerScore = 0;
playRound("", "", 4);




