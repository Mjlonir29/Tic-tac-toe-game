let gameBoard = Array(9).fill('');
let currentPlayer = 'X';
let gameOver = false;
let scores = { X: 0, O: 0, Draw: 0 };




function startGame() {
  
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('game-board').classList.remove('hidden');

  
}


function makeMove(cellIndex) {
  if (gameOver || gameBoard[cellIndex] !== '') return;
  

  gameBoard[cellIndex] = currentPlayer;
  document.getElementById(`cell-${cellIndex}`).innerText = currentPlayer;
  document.getElementById(`cell-${cellIndex}`).classList.add(currentPlayer);
  

  if (checkWinner()) {
    document.getElementById('status').innerText = `🎉 Player ${currentPlayer} Wins! 🎉`;
    
    scores[currentPlayer]++;
    updateScores();
    gameOver = true;
    return;
  }

  if (gameBoard.every(cell => cell !== '')) {
    document.getElementById('status').innerText = 'It\'s a Draw! 🤝';
    scores.Draw++;
    updateScores();
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('status').innerText = `Player ${currentPlayer}'s Turn`;
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winningCombos.some(combo => 
    gameBoard[combo[0]] === currentPlayer &&
    gameBoard[combo[1]] === currentPlayer &&
    gameBoard[combo[2]] === currentPlayer
  );
}

function restartGame() {
  gameBoard.fill('');
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
  gameOver = false;
  document.getElementById('status').innerText = `Player X's Turn`;
  currentPlayer = 'X';
}

function updateScores() {
  document.getElementById('score-x').innerText = scores.X;
  document.getElementById('score-o').innerText = scores.O;
  document.getElementById('score-draw').innerText = scores.Draw;
}
