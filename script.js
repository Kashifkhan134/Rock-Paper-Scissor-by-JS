let computerChoiceDisplay = document.getElementById('computer-choice')
let userChoiceDisplay = document.getElementById('user-choice')
let displayResult = document.getElementById('result')
const possibleChoices  = document.querySelectorAll('button')

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3) + 1
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper' 
    }
    if(randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'its draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lose!'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lose!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lose!'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win!'
    }
    displayResult.innerHTML = result
}








