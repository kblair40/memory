import { withStyles } from "@material-ui/core";
import React, { Component } from "react";

const styles = {
  EndGame: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "rgb(22, 124, 178)",
    fontSize: "2rem",
    letterSpacing: ".05rem",
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
