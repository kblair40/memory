import { withStyles } from "@material-ui/core";
import React, { Component } from "react";

const styles = {
  EndGame: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "2rem",
    letterSpacing: ".1rem",
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

class GameOver extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.EndGame}>Game Over!</div>;
  }
}
export default withStyles(styles)(GameOver);
