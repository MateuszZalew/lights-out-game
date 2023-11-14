import { useState, FC } from "react";
import Cell from "./Cell.js";
import "./Board.css";

type BoardProps = {
  numCols: number;
  numRows: number;
};

export const Board: FC<BoardProps> = ({ numCols = 5, numRows = 5 }) => {
  const [chanceLightStartsOn, setChangeLightStartsOn] = useState(0.25);
  const [hasWon, setHasWon] = useState(false);
  const createBoard = (): boolean[][] => {
    const board: boolean[][] = [];
    for (let x = 0; x < numRows; x++) {
      const singleRow: boolean[] = [];
      for (let y = 0; y < numCols; y++) {
        singleRow.push(Math.random() < chanceLightStartsOn);
      }
      board.push(singleRow);
    }
    return board;
  };
  const [board, setBoard] = useState<boolean[][]>(createBoard);

  const flipCell = (y: number, x: number, board: boolean[][]): boolean[][] => {
    if (x >= 0 && x < numRows && y >= 0 && y < numCols) {
      board[y][x] = !board[y][x];
    }
    return board;
  };

  const flipCellsAround = (coordinates: string): void => {
    const [y, x] = coordinates.split("-").map(Number);
    let newBoard = board!;

    newBoard = flipCell(y, x, newBoard);
    newBoard = flipCell(y, x + 1, newBoard);
    newBoard = flipCell(y, x - 1, newBoard);
    newBoard = flipCell(y + 1, x, newBoard);
    newBoard = flipCell(y - 1, x, newBoard);

    let offNums = 0;
    for (let x = 0; x < numRows; x++) {
      for (let y = 0; y < numCols; y++) {
        if (board !== null && board[x][y] === true) {
          offNums++;
        }
      }
    }

    if (offNums === 0) {
      setHasWon(true);
    } else {
      setBoard(newBoard);
      setChangeLightStartsOn((prev) => prev + 1);
    }
  };

  const handlePlayAgainClick = () => {
    setBoard(createBoard());
    setHasWon(false);
    setChangeLightStartsOn(0.25);
  };

  if (hasWon) {
    return (
      <>
        <div className="Board-winner">
          <div className="neon">You</div>
          <div className="flux">win!</div>
        </div>
        <div className="Board-retry">
          <button className="Board-button" onClick={handlePlayAgainClick}>
            Play again <i className="fas fa-undo-alt"></i>
          </button>
        </div>
      </>
    );
  }

  if (board) {
    const tableBoard = [];
    for (let x = 0; x < numRows; x++) {
      const row = [];
      for (let y = 0; y < numCols; y++) {
        const coordinates = `${x}-${y}`;
        row.push(
          <Cell
            key={coordinates}
            isLit={board[x][y]}
            flipCellsAroundMe={() => flipCellsAround(coordinates)}
          />
        );
      }
      tableBoard.push(<tr key={x}>{row}</tr>);
    }

    return (
      <div>
        <div className="Board-neons">
          <div
            className="neon"
            onClick={() => setChangeLightStartsOn((prev) => prev + 1)}
          >
            Lights
          </div>
          <div className="flux">Out</div>
        </div>
        <table className="Board">
          <tbody>{tableBoard}</tbody>
        </table>
      </div>
    );
  }
};

export default Board;
