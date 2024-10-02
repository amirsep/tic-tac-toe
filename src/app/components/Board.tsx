// Board Component
import React from "react";
import Square from "./Square";
import CalculateWinner from "./calculateWinner";

interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
}

const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
  function handleClick(i: number): void {
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = CalculateWinner(squares);
  let status = winner
    ? `🎉 Winner: ${winner}!`
    : `Next player: ${xIsNext ? "❌" : "⭕"}`;

  return (
    <>
      <div className="mb-4 text-xl font-bold text-purple-700">{status}</div>
      <div className="grid grid-cols-3 gap-4">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
