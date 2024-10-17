let currentPlayer = 'X';
let player1Name = '';
let player2Name = '';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const resultBox = document.getElementById('result-box');
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
const restartbtn = document.getElementById('restart-btn')





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

function makeMove(index) {
  const cell = document.getElementById('cell-' + index);

  
  if (cell.textContent !== '' || !gameActive) {
      return;
  }

  cell.textContent = currentPlayer;

  gameBoard[index] = currentPlayer;


  checkWinner();
  SwitchPlayer();
}

function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard[c] === currentPlayer) {
          roundWon = true;
          break;
      }
  }
  if (roundWon) {
      showresult(`${currentPlayer === 'X' ? player1Name : player2Name} wins!`);
      gameActive = false;
  } else if (!gameBoard.includes('')) {
      showresult("It's a draw!");
      gameActive = false;
  }
}


function SwitchPlayer() {
  if (currentPlayer === 'X') {
      setActivePlayer('O');
  } else {
      setActivePlayer('X');
  }
}

function setActivePlayer(player) {
  currentPlayer = player;
  if (player === 'X') {
      playerOneElement.classList.add('active');
      playerTwoElement.classList.remove('active');
  } else {
      playerOneElement.classList.remove('active');
      playerTwoElement.classList.add('active');
  }
}



function showresult(message){
  const lastBoxMessage = document.getElementById('last-box-message');
  lastBoxMessage.textContent= message;
  gameBoardScreen.style.display = 'none';
  resultBox.style.display = 'block';

  restartbtn.style.display = 'block';
}


function restartGame() {
  
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';

  
  cells.forEach(cell => cell.textContent = '');

 
  resultBox.style.display = 'none';
  restartbtn.style.display = 'none'; 
  gameBoardScreen.style.display = 'block'; 

  setActivePlayer('X');
}
