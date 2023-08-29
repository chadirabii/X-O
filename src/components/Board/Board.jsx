import React, { useState } from "react";
import Square from "../Square/Square";
import "./board.css";

// Function to check if there's a winner and return the winning symbol and squares
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  // Loop through all possible winning combinations
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    // If the squares have the same symbol and it's not null, return the winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], squares: lines[i] };
    }
  }

  // If no winner, return null
  return { winner: null, squares: [] };
}

const Board = () => {
  // Initialize the board with all squares as null
  const initialSquares = [null, null, null, null, null, null, null, null, null];

  // State for the current state of squares and who's the next player
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  // Function to handle a square click event
  const handleClickEvent = (i) => {
    const newSquares = [...squares];

    // If there's a winner or the square is already filled, do nothing
    if (calculateWinner(newSquares).winner || newSquares[i]) {
      return;
    }

    // Update the square with "X" or "O" based on the next player
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);

    // Toggle the next player
    setXIsNext(!xIsNext);
  };

  // Calculate the winner and winning squares
  const { winner, squares: winnerSquares } = calculateWinner(squares);

  // Function to render a single square
  const renderSquare = (i) => {
    return (
      <Square
        index={i}
        key={i}
        value={squares[i]}
        onClickEvent={() => handleClickEvent(i)}
        winner={winner}
        winnerSquares={winnerSquares}
      />
    );
  };

  // Determine the game status message
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // Render the game board
  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
