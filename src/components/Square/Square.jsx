import React from "react";
import "./square.css";

const Square = (props) => {
  const isWinnerSquare =
    props.winner && props.winnerSquares.includes(props.index);

  const squareStyle = {
    backgroundColor: isWinnerSquare ? "green" : "rgb(87, 86, 86)",
    color: "white", // Set text color to white
  };

  return (
    <button className="square" onClick={props.onClickEvent} style={squareStyle}>
      {props.value}
    </button>
  );
};

export default Square;
