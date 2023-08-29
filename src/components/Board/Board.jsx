import React, { useState } from "react";
import Square from "../Square/Square";
import "./board.css";

const Board = () => {
  const initalialSquares = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  const [squares, setSquares] = useState(initalialSquares);

  const handleClickEvent = (i) => {
    const newSquares = [...squares];
    newSquares[i] = "X";
    setSquares(newSquares);
  };

  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare()} {renderSquare()} {renderSquare()}
      </div>

      <div className="board-row">
        {renderSquare()} {renderSquare()} {renderSquare()}
      </div>

      <div className="board-row">
        {renderSquare()} {renderSquare()} {renderSquare()}
      </div>
    </div>
  );
};
export default Board;
