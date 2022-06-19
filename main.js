//3 ways to include javascript - when player picks fire/water/grass, the output will tell them of they lost against the computer.
//player clicking a button to pick a choice
//computer generating a choice

//pseudo code - a version of rock paper scissors. What does it need to do?
/* First we need a way for players to select either fire, water, or grass. 
Then we need a way for the computer to randomly generate one of those 3 choices. 
After, we need to compare (conditional?) players choice to computers choice. If player beats computer, console log "You beat Team Rocket".
If player ties with computer, console.log "It's a tie"
If player loses, console.log "Team rocket wins!"*/


//im testing something down here
//i have the computers choice as computerplay
//then i have the 1 round that plays.
//i need to make the rounds so i can use a for loop
//for the loop i need the score.

let playerScore = 0
let computerScore = 0

function computerPlay() {
   const pick = ["fire", "grass", "water"]
   const randomchoice = pick[Math.floor(Math.random() * pick.length)]
   //we need to connect pick to the final selection...
   return randomchoice
}


function fullGame() {
  while (playerScore <= 5 && computerScore <= 5) {
    let playerSelection = prompt('Choose your pokemon type to beat Team Rocket!')
    let computerSelection = computerPlay()

    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    alert(playRound(playerSelection, computerSelection))
  }
  alert(winCondition())
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a tie!"
    } else if ((playerSelection === "water" && computerSelection === "fire") || 
    (playerSelection === "fire" && computerSelection === "grass") ||
    (playerSelection === "grass" && computerSelection=== "water")) {
        playerScore += 1
        return "You win!"
    } else {
        computerScore += 1
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function winCondition() {
    if (playerScore > 5) {
        return 'You beat Team Rocket!'
    }
    if (computerScore > 5) {
        return 'Team Rocket wins!'
    }
}
fullGame()
console.log(`You: ${playerScore} Team Rocket: ${computerScore}`)