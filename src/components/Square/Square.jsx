import React from "react";
import "./square.css";

const Square = (props) => {
  const squareStyle = {
    backgroundColor:
      props.winner && props.value === props.winner
        ? "green"
        : "rgb(87, 86, 86)",
    color: "white", // Set text color to white
  };

  return (
    <button className="square" onClick={props.onClickEvent} style={squareStyle}>
      {props.value}
    </button>
  );
};

export default Square;
