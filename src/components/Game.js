import React, { Component } from "react";
import Table from "./Table";
import SetDifficulty from "./SetDifficulty";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const DECKURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=";
// Game: {
//   width: "100vw",
//   height: "100vh",
//   maxWidth: "1000px",
//   maxHeight: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
// },
// gameContainer: {
//   height: "100%",
// },
// playBtn: {
//   width: "33%",
// },
// };
const styles = {
  Game: {
    width: "100vw",
    height: "100vh",
    maxHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    background: "rgb(144,202,249);",
    background:
      "linear-gradient(128deg, rgba(144,202,249,1) 0%, rgba(100,181,246,1) 100%)",
  },
  gameContainer: {
    height: "100%",
    maxHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  playBtn: {
    fontFamily: "Roboto",
    fontSize: "22px",
    width: "100%",
    // borderRadius: "10px ",
    marginTop: "1rem",
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
          <div className={classes.gameContainer}>
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
        </div>
      );
    } else {
      return (
        <div className={classes.Game}>
          <div className={classes.gameContainer}>
            <Table
              endGame={this.endGame}
              gameOver={gameOver}
              difficulty={difficulty}
            />
          </div>
        </div>
      );
    }
  }
}

export default withStyles(styles)(Game);
