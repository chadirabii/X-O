import "./square.css";

// Square component represents a single square on the board
const Square = (props) => {
  // Determine if this square is part of the winning combination
  const isWinnerSquare =
    props.winner &&
    props.winnerSquares &&
    props.winnerSquares.includes(props.index);

  // Define square style based on whether it's a winner square
  const squareStyle = {
    backgroundColor: isWinnerSquare ? "green" : "rgb(87, 86, 86)",
    color: "white",
  };

  return (
    <button className="square" onClick={props.onClickEvent} style={squareStyle}>
      {props.value}
    </button>
  );
};

export default Square;
