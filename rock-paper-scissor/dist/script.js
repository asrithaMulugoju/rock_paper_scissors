document.getElementById('rock').onclick = playGame;
document.getElementById('paper').onclick = playGame;
document.getElementById('scissors').onclick = playGame;

function playGame(event) {
    const userChoice = event.target.id;
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
        document.body.className = 'tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = 'You win!';
        document.body.className = 'win';
    } else {
        result = 'You lose!';
        document.body.className = 'lose';
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Computer chose ${computerChoice}. ${result}`;
    resultElement.style.opacity = '0';
    setTimeout(() => {
        resultElement.style.opacity = '1';
    }, 50);

    // Apply random color to the result message
    resultElement.style.color = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}