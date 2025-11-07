'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Correct Number!";

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);

---------------------------------------------------------------------

// old code snippet
if (score > 1) {
        if (!guess) {
            document.querySelector('.message').textContent = '⛔ No number!';
        }
        else if (secretNumber < guess) {
            document.querySelector('.message').textContent = '📈 Too High';
            decScore();
        }
        else if (secretNumber > guess) {
            document.querySelector('.message').textContent = '📉 Too low';
            decScore()
        }
    }
    else {
        document.querySelector('.message').textContent = '💀 Game Over';
    }
*/

/*  old code 
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

function decScore() {

    score--;
    document.querySelector('.score').textContent = score;
}

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (secretNumber === guess) {
        displayMessage('🎉Correct Guess!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else {
        if (score > 1) {
            if (!guess) {
                displayMessage('⛔ No number!');
            }
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too low');
            decScore();
        }
        else {
            displayMessage('💀 Game Over');
        }
    }

});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function decScore() {
    score--;
    document.querySelector('.score').textContent = score;
}

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

//main logics
const mainWork = function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (secretNumber === guess) {
        displayMessage('🎉Correct Guess!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else {
        if (score > 1) {
            if (!guess) {
                displayMessage('⛔ No number!');
            }
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too low');
            decScore();
        }
        else {
            displayMessage('💀 Game Over');
        }
    }
}


document.querySelector('.check').addEventListener('click', mainWork);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        mainWork();
    }
})


document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
