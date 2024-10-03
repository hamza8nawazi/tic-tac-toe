let currentPlayer = 'X';
let player1Name = '';
let player2Name = '';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const gameBoardScreen = document.getElementById('game-board-screen');
const playerInputScreen = document.getElementById('player-input-screen');
const playerOneElement = document.getElementById('player-one');
const playerTwoElement = document.getElementById('player-two');
const cells = document.querySelectorAll('.cell');


// Function to start the game
function startGame() {
  const playerOneInput = document.getElementById('player-one-input').value;
  const playerTwoInput = document.getElementById('player-two-input').value;
    if (playerOneInput === '' || playerTwoInput === '') {
        alert('Please enter both player names.');
        return;
    }

    player1Name = playerOneInput;
    player2Name = playerTwoInput;


    playerOneElement.textContent = player1Name;
    playerTwoElement.textContent = player2Name;

    playerInputScreen.style.display = 'none';
    gameBoardScreen.style.display = 'block';
    
    setActivePlayer('X');
}

