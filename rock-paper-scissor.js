function player(move){
    var randomNumber = Math.random();
    var computerMove = '';
    if(randomNumber >= 0 && randomNumber <1/3){
        computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber <2/3){
        computerMove = 'paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissor';
    }
    var result = '';
        if(move === 'rock'){
            if(computerMove === 'rock'){
                result = 'tie';
            }
            else if(computerMove === 'paper'){
                result = 'you lose';
            }
            else if(computerMove === 'scissor'){
                result = 'you win';
            }
            alert(`you picked ${move}. computer picked ${computerMove}. ${result}`);
        }
        else if (move === 'paper') {
            if(computerMove === 'rock'){
                result = 'you win';
            }
    
            else if(computerMove === 'paper'){
                result = 'tie';
            }
    
            else if(computerMove === 'scissor'){
                result = 'you loss';
            }
            alert(`you picked paper. computer picked ${computerMove}. ${result}`);
        }

        else if(move === 'scissor'){
            if(computerMove === 'rock'){
                result = 'you loss';
            }
    
            else if(computerMove === 'paper'){
                result = 'you win';
            }
    
            else if(computerMove === 'scissor'){
                result = 'tie';
            }
            alert(`you picked scissor. computer picked ${computerMove}. ${result}`);
        }

}
