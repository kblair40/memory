import React, { Component } from "react";
import Table from "./Table";
import SetDifficulty from "./SetDifficulty";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const DECKURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=";

const styles = {
  Game: {
    width: "100vw",
    maxWidth: "1000px",
    marginTop: "25px",
    maxHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  playBtn: {
    width: "25%",
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
          />
          <Fab
            className={classes.playBtn}
            onClick={this.handleClick}
            variant="extended"
            color="primary"
          >
            Play!
          </Fab>
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
