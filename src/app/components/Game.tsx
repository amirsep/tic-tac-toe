"use client";
import React, { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description: string;
    if (move > 0) {
      description = `Move #${move}`;
    } else {
      description = "Start Game";
    }
    return (
      <li key={move}>
        <button
          className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors duration-300"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-indigo-600 mb-6">
        Tic Tac Toe
      </h1>
      <div className="flex w-full max-w-4xl mx-auto space-x-8">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <div className="game-info">
          <h2 className="text-2xl font-semibold mb-2 text-purple-600">Moves</h2>
          <ol className="list-decimal space-y-2">{moves}</ol>
        </div>
      </div>
    </div>
  );
}
