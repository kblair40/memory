import React, { Component } from "react";
import Table from "./Table";
import SetDifficulty from "./SetDifficulty";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  Game: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(55, 70, 74, 1)",
    overflowY: "scroll",
  },
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      gameStarted: false,
      gameOver: false,
      numOfCards: 10,
      difficulty: "easy",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.endGame = this.endGame.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  newGame() {
    this.setState({ gameOver: false, gameStarted: true });
  }

  handleChange(e) {
    this.setState({ difficulty: e.target.value });
  }

  handleClick() {
    this.setState({ gameStarted: true });
  }

  endGame() {
    this.setState({
      gameStarted: false,
      gameOver: true,
      key: this.state.key + 1,
    });
  }

  // getKey() {
  //   let key = this.state.key;
  //   this.setState({ key: this.state.key + 1 });
  //   return key;
  // }

  render() {
    const { gameStarted, gameOver, difficulty } = this.state;
    const { classes } = this.props;

    if (!gameStarted) {
      return (
        <div className={classes.Game}>
          <SetDifficulty
            difficulty={difficulty}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
        </div>
      );
    } else {
      return (
        <div className={classes.Game}>
          <Table
            key={this.state.key}
            newGame={this.newGame}
            endGame={this.endGame}
            gameOver={gameOver}
            difficulty={difficulty}
          />
        </div>
      );
    }
  }
}

export default withStyles(styles)(Game);
