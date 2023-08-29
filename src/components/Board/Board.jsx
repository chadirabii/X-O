import React, { useState } from "react";
import Square from "../Square/Square";
import "./board.css";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c]; // Return the winning squares as an array of indices
    }
  }
  return null;
}

const Board = () => {
  const initialSquares = [null, null, null, null, null, null, null, null, null];

  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClickEvent = (i) => {
    const newSquares = [...squares];
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClickEvent={() => handleClickEvent(i)}
        isWinner={winner && winner.includes(i)} // Add this prop
      />
    );
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0, winner)}
        {renderSquare(1, winner)}
        {renderSquare(2, winner)}
      </div>
      <div className="board-row">
        {renderSquare(3, winner)}
        {renderSquare(4, winner)}
        {renderSquare(5, winner)}
      </div>
      <div className="board-row">
        {renderSquare(6, winner)}
        {renderSquare(7, winner)}
        {renderSquare(8, winner)}
      </div>
    </div>
  );
};

export default Board;
