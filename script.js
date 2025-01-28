let gameBoard = Array(9).fill('');
let currentPlayer = 'X';
let gameOver = false;

// Function to start the game
function startGame() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('game-board').classList.remove('hidden');
}

// Function to make a move
function makeMove(cellIndex) {
  if (gameOver || gameBoard[cellIndex] !== '') return;

  gameBoard[cellIndex] = currentPlayer;
  const cell = document.getElementById(`cell-${cellIndex}`);
  cell.innerText = currentPlayer;
  cell.classList.add(currentPlayer);

  if (checkWinner()) {
    document.getElementById('status').innerText = `🎉 Player ${currentPlayer} Wins! 🎉`;
    gameOver = true;
    setTimeout(() => alert(`Congratulations Player ${currentPlayer}!`), 500);
    return;
  }

  if (gameBoard.every(cell => cell !== '')) {
    document.getElementById('status').innerText = 'It\'s a Draw! 🤝';
    gameOver = true;
    setTimeout(() => alert('It\'s a Draw!'), 500);
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('status').innerText = `Player ${currentPlayer}'s Turn`;
}

// Function to check the winner
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
