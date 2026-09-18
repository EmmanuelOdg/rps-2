//Game header
function gameOpen(){
    console.log(`Welcome to my game, Rock 🪨, Paper 📄, Scissors ✂️..Lets play 😊`)
    console.log(`Kindly choose your input`)
}

//user input
function user(){
    let userInput = prompt(`Choose btwn Rock, Paper or Scissors`)

    if(userInput === null){
        console.log(`Its okay if you dont want to play, kindly click cancel on the next question`)
        return
    }

    const userInputlowerCase = userInput.toLowerCase()

    if(userInputlowerCase === `rock` || userInputlowerCase === `paper` || userInputlowerCase === `scissors`){
        console.log(`You choose ${userInputlowerCase}`)
        return userInputlowerCase
    } else {
        console.log(`Please select either Rock, Paper or Scissor`)
        return user()
    }
}

//computer input
function computer(){
    let computerInput = Math.floor(Math.random() * 3) + 1
    if (computerInput === 1){
        console.log(`Computer choose rock`)
        return `rock`
    } else if (computerInput === 2){
        console.log(`Computer choose paper`)
        return `paper`
    } else {
        console.log(`Computer choose scissors`)
        return `scissors`
    }
}

//Decision phase
function playGame(userChoice, computerChoice){
    if (userChoice === undefined){
        return
    }

    if(userChoice === `rock` && computerChoice === `scissors`){
        console.log(`Yahhh...You won😊`)
    } else if(userChoice === `paper` && computerChoice === `rock`){
        console.log(`Yahhh...You won😊`)
    } else if(userChoice === `scissors` && computerChoice === `paper`){
        console.log(`Yahhh...You won😊`)
    } else if (userChoice === computerChoice){
        console.log(`Its a tie...Try again`)
    } else {
        console.log(`Computer wins...`)
    }
}

//Round chain
function startRound(){
    const userChoice = user()
    if (userChoice === undefined){
        return
    }
    const computerChoice = computer()
    playGame(userChoice, computerChoice)
}

function playAgain(){
    let playAgainInput = prompt(`Do you want to play again? (yes/no)`)

    if (playAgainInput === null){
        console.log(`Thanks for playing! Goodbye 😊`)
        return
    }

    const playAgainLowerCase = playAgainInput.toLowerCase()

    if (playAgainLowerCase === `no`){
        console.log(`Thanks for playing! Goodbye 😊`)
        return
    } else if (playAgainLowerCase === `yes`){
        startRound()
        playAgain()
    } else {
        console.log(`Please type either yes or no`)
        playAgain()
    }
}
gameOpen()
startRound()
playAgain()