import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
const styles = {
  scoreKeeper: {
    fontFamily: "Roboto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  matchCount: {
    color: "#fff",
    margin: ".5rem 0",
    fontWeight: "400",
    letterSpacing: ".05rem",
  },
  attempts: {
    color: "#fff",
    margin: ".5rem 0",
    fontWeight: "400",
    letterSpacing: ".05rem",
  },
  secondaryColor: {
    backgroundColor: "rgb(95, 101, 129)",
  },
  progress: {
    backgroundColor: "#fff",
    width: "50%",
  },
  header: {
    fontFamily: "Roboto",
    fontWeight: "500",
    marginRight: ".5rem",
  },
};
class ScoreKeeper extends Component {
  render() {
    const { classes, attempts, increment, matchCount } = this.props;
    return (
      <div className={classes.scoreKeeper}>
        <div className={classes.attempts}>
          <span className={classes.header}>Attempts </span>
          <span>{attempts}</span>
        </div>
        <LinearProgress
          classes={{
            root: classes.progress,
            barColorPrimary: classes.secondaryColor,
          }}
          variant="determinate"
          value={increment * matchCount}
        />
        <div className={classes.matchCount}>
          <span className={classes.header}>Matches </span>
          <span>{matchCount}</span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ScoreKeeper);
