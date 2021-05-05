import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import styles from "../styles/ScoreKeeperStyles";

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
