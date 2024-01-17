let score = JSON.parse(localStorage.getItem('score'));
if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}


function updateScore() {
    document.querySelector('.js-score').innerHTML =
        `wins : ${score.wins} losses : ${score.losses} ties : ${score.ties}`;
}

function res() {
    document.querySelector('.js-result').innerHTML =
        result;
}


function player(move) {
    var randomNumber = Math.random();
    var computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissor';
    }
    var result = '';
    if (move === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie';
        }
        else if (computerMove === 'paper') {
            result = 'you loss';
        }
        else if (computerMove === 'scissor') {
            result = 'you win';
        }
    }
    else if (move === 'paper') {
        if (computerMove === 'rock') {
            result = 'you win';
        }

        else if (computerMove === 'paper') {
            result = 'tie';
        }

        else if (computerMove === 'scissor') {
            result = 'you loss';
        }
    }

    else if (move === 'scissor') {
        if (computerMove === 'rock') {
            result = 'you loss';
        }

        else if (computerMove === 'paper') {
            result = 'you win';
        }

        else if (computerMove === 'scissor') {
            result = 'tie';
        }
    }

    if (result === 'you win') {
        score.wins += 1;
    }
    else if (result === 'you loss') {
        score.losses += 1;
    }
    else if (result === 'tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${move}-emoji.png" class="images">
    <img src="images/${computerMove}-emoji.png" class="images">
    Computer`;

}

function reset() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score')
    updateScore();
};
