document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.rps-button');
    const resultText = document.getElementById('rps-result');
    const choices = ['rock', 'paper', 'scissors'];

    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function handleButtonClick() {
        const playerChoice = this.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    }

    buttons.forEach(button => button.addEventListener('click', handleButtonClick));
});
