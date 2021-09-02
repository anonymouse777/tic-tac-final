// variables 
let playerXsymbol = 1;
let playerOsymbol = 0;
let win_flag = false;
let widraw_flag = false;
let history = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let winner_name = 'none';

document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('.grid div');
    let playerDisplay = document.getElementById('player');

    squares.forEach(function (square) {
        square.addEventListener('click', clickOutcome);
    });

    function clickOutcome(event) {
        const myarray = Array.from(squares);
        const index = myarray.indexOf(event.target);
        if (win_flag == false && widraw_flag == false) {
            if (history[index] == -1) {
                if (playerDisplay.innerHTML == 'playerX') {
                    squares[index].classList.add('playerX');
                    history[index] = playerXsymbol;
                    playerDisplay.innerHTML = 'playerO';
                    checkWinner(playerXsymbol);
                }
                else {
                    squares[index].classList.add('playerO');
                    history[index] = playerOsymbol;
                    playerDisplay.innerHTML = 'playerX';
                    checkWinner(playerOsymbol);
                }
            }
            else {
                alert('The box is already filled.');
            }
            setTimeout(result, 0);
        }
        else {
            if (confirm(`${winner_name} won the game. Press ok to play again.`)) {
                window.location.reload();
            }
        }
    }

    function checkWinner(symbol) {
        if (((history[0] == symbol) && (history[1] == symbol) && (history[2] == symbol)) ||
        ((history[3] == symbol) && (history[4] == symbol) && (history[5] == symbol)) ||
        ((history[6] == symbol) && (history[7] == symbol) && (history[8] == symbol)) ||
        ((history[0] == symbol) && (history[3] == symbol) && (history[6] == symbol)) ||
        ((history[1] == symbol) && (history[4] == symbol) && (history[7] == symbol)) ||
        ((history[2] == symbol) && (history[5] == symbol) && (history[8] == symbol)) ||
        ((history[0] == symbol) && (history[4] == symbol) && (history[8] == symbol)) ||
        ((history[2] == symbol) && (history[4] == symbol) && (history[6] == symbol))) {
            if ((history[0] == symbol) && (history[1] == symbol) && (history[2] == symbol)) {
                squares[0].classList.add("horizontal");
                squares[1].classList.add("horizontal");
                squares[2].classList.add("horizontal");
            }
            else if ((history[3] == symbol) && (history[4] == symbol) && (history[5] == symbol)) {
                squares[3].classList.add("horizontal");
                squares[4].classList.add("horizontal");
                squares[5].classList.add("horizontal");
            }
            else if ((history[6] == symbol) && (history[7] == symbol) && (history[8] == symbol)) {
                squares[6].classList.add("horizontal");
                squares[7].classList.add("horizontal");
                squares[8].classList.add("horizontal");
            }
            else if ((history[0] == symbol) && (history[3] == symbol) && (history[6] == symbol)) {
                squares[0].classList.add("vertical");
                squares[3].classList.add("vertical");
                squares[6].classList.add("vertical");
            }
            else if ((history[1] == symbol) && (history[4] == symbol) && (history[7] == symbol)) {
                squares[1].classList.add("vertical");
                squares[4].classList.add("vertical");
                squares[7].classList.add("vertical");
            }
            else if ((history[2] == symbol) && (history[5] == symbol) && (history[8] == symbol)) {
                squares[2].classList.add("vertical");
                squares[5].classList.add("vertical");
                squares[8].classList.add("vertical");
            }
            else if ((history[0] == symbol) && (history[4] == symbol) && (history[8] == symbol)) {
                squares[0].classList.add("right_diagonal");
                squares[4].classList.add("right_diagonal");
                squares[8].classList.add("right_diagonal");
            }
            else if ((history[2] == symbol) && (history[4] == symbol) && (history[6] == symbol)) {
                squares[2].classList.add("left_diagonal");
                squares[4].classList.add("left_diagonal");
                squares[6].classList.add("left_diagonal");
            }
            setWinner(symbol);
        }
        else if ((history[0] != -1) && (history[1] != -1) && (history[2] != -1) && (history[3] != -1) && (history[4] != -1) && (history[5] != -1) && (history[6] != -1) && (history[7] != -1) && (history[8] != -1)) {
            widraw_flag = true;
            winner_name = "Nobody";
        }
        else { }
    }
    
    function setWinner(symbol) {
        if (symbol == playerXsymbol) {
            winner_name = 'playerX';
        }
        else if (symbol == playerOsymbol){
            winner_name = 'playerO';
        }
        win_flag = true;
    }

    function result() {
        if (win_flag) {
            document.getElementById('result').innerHTML = `${winner_name} won the game.`;
            if (confirm(`${winner_name} won the game. Press ok to play again.`)) {
                window.location.reload();
            }
        }
        if (widraw_flag) {
            document.getElementById('result').innerHTML = `${winner_name} won the game.`;
            if (confirm(`${winner_name} won the game. Press ok to play again.`)) {
                window.location.reload();
            }
        }
    }
});
