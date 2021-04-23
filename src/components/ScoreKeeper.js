import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
const styles = {
  scoreKeeper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  matchCount: {
    margin: ".5rem 0",
  },
  attempts: {
    margin: ".5rem 0",
  },
  progress: {
    width: "50%",
  },
  header: {
    fontWeight: "600",
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
          className={classes.progress}
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
