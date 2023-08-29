import React from "react";
import "./square.css";

const Square = (props) => {
  const squareStyle = {
    backgroundColor: props.isWinner ? "green" : "rgb(87, 86, 86)",
  };

  return (
    <button className="square" onClick={props.onClickEvent} style={squareStyle}>
      {props.value}
    </button>
  );
};

export default Square;
