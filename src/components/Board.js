import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  const renderSquare = i =>
    <Square value={squares[i]} onClick={() => onClick(i)}  />;
    
  const createBoard = () => {
    let board = []
    
    for (let i = 0; i < 3; i++) {
      board.push(
        <div className="board-row" key={i}>
          {renderSquare(3*i)}  
          {renderSquare(3*i+1)}  
          {renderSquare(3*i+2)}  
        </div>
      )
    }
    return board
  }


  return(
    <div>
      {createBoard()}
    </div>
  )
};

export default Board;
