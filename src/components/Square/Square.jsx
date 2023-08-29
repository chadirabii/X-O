import React from "react";
import "./square.css";

const Square = (props) => {
  // Check if the current square is part of the winning combination
  const isWinnerSquare =
    props.winner && props.winnerSquares.includes(props.index);

  // Define the style for the square
  const squareStyle = {
    backgroundColor: isWinnerSquare ? "green" : "rgb(87, 86, 86)", // Apply green background if it's a winning square
    color: "white", // Set text color to white for better visibility
  };

  return (
    <button className="square" onClick={props.onClickEvent} style={squareStyle}>
      {props.value}
    </button>
  );
};

export default Square;
