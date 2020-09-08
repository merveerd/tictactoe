import React, { Component } from "react";
import "./App.css";
import Status from "./components/Status";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    };
  }

  checkWinner() {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ];

    this.checkMatch(winLines);
  }

  checkMatch(winLines) {
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      let board = this.state.board;

      if (board[a] && board[a] === board[b] && board[c] === board[a]) {
        this.setState({
          winner: this.state.player
        });
      }
    }
  }
  handleClick(index) {
    if (
      this.state.player &&
      !this.state.winner &&
      this.state.board[index] === null
    ) {
      let newBoard = this.state.board;

      newBoard[index] = this.state.player;

      this.setState({
        board: newBoard,
        player: this.state.player === "X" ? "O" : "X"
      });

      this.checkWinner();
    }
  }

  renderBoxes() {
    return this.state.board.map((box, index) => (
      <div
        className="box-type"
        key={index}
        onClick={e => this.handleClick(index)}
      >
        {box}
      </div>
    ));
  }

  setPlayer(player) {
    // player props una pass ettigimiz sey gamer.value,  yani argument olarak onu alacak.
    this.setState({ player });
  }

  reset() {
    this.state({
      player: null,
      winner: null,
      board: Array(9).fill(null)
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe App</h1>
        <Status
          player={this.state.player}
          setPlayer={e => {
            this.setPlayer(e);
          }}
          winner={this.state.winner}
        />

        <div className="board">{this.renderBoxes()}</div>
        <button disabled={!this.state.winner} onClick={() => this.reset()}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
