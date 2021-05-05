import React, { Component } from "react";
import styles from "../styles/GameStyles";
import Table from "./Table";
import SetDifficulty from "./SetDifficulty";
import { withStyles } from "@material-ui/core/styles";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    });
  }

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
            // key={uuid()}
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
