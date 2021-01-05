import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
  };
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
  }

  flipCellsAround(coord) {
    console.log("flipping");
    let { ncols, nrows } = this.props;
    let { board, hasWon } = this.state;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);
    flipCell(y + 1, x);
    flipCell(y - 1, x);

    let offNums = 0;
    for (let x = 0; x < this.props.nrows; x++) {
      for (let y = 0; y < this.props.ncols; y++) {
        if (board[x][y] === true) {
          offNums++;
        }
      }
    }

    if (offNums === 0) {
      hasWon = true;
    }

    this.setState({
      board,
      hasWon,
    });
  }

  createBoard() {
    let board = [];
    for (let x = 0; x < this.props.nrows; x++) {
      let row = [];
      for (let y = 0; y < this.props.ncols; y++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }

  handleClick = (e) => {
    this.setState({
      board: this.createBoard(),
      hasWon: false,
    });
  };

  render() {
    if (this.state.hasWon) {
      return (
        <>
          <div className="Board-winner">
            <div className="neon">You</div>
            <div className="flux">win!</div>
          </div>
          <div className="Board-retry">
            <button className="Board-button" onClick={this.handleClick}>
              Play again <i className="fas fa-undo-alt"></i>
            </button>
          </div>
        </>
      );
    }

    let tableBoard = [];
    for (let x = 0; x < this.props.nrows; x++) {
      let row = [];
      for (let y = 0; y < this.props.ncols; y++) {
        let coord = `${x}-${y}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[x][y]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      tableBoard.push(<tr key={x}>{row}</tr>);
    }

    return (
      <div>
        <div className="Board-neons">
          <div className="neon">Lights</div>
          <div className="flux">Out</div>
        </div>
        <table className="Board">
          <tbody>{tableBoard}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;
