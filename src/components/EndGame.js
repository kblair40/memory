import { withStyles } from "@material-ui/core";
import React, { Component } from "react";

const styles = {
  EndGame: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
};

class EndGame extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.EndGame}>{}</div>;
  }
}
export default withStyles(styles)(EndGame);
