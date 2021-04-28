import React, { Component } from "react";
import Table from "./Table";
import SetDifficulty from "./SetDifficulty";
import { withStyles } from "@material-ui/core/styles";

const DECKURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=";

const styles = {
  Game: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff",
    backgroundColor: "rgba(55, 70, 74, 1)",
    overflow: "hidden",
    // overflowY: "scroll",
    // overflowx: "hidden",
  },
};

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
  }

  handleChange(e) {
    this.setState({ difficulty: e.target.value });
  }

  handleClick() {
    this.setState({ gameStarted: true });
  }

  endGame() {
    this.setState({ gameStarted: false });
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
