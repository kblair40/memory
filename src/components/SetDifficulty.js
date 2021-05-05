import React, { Component } from "react";
import styles from "../styles/SetDifficultyStyles";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Fab from "@material-ui/core/Fab";

class SetDifficulty extends Component {
  render() {
    const { handleChange, difficulty, classes } = this.props;
    return (
      <div className={classes.mainContainer}>
        <div className={classes.optionsContainer}>
          <FormLabel classes={{ root: classes.label }}>
            Select Difficulty
          </FormLabel>
          <RadioGroup
            onChange={handleChange}
            aria-label="Difficulty"
            name="difficulty"
          >
            <FormControlLabel
              classes={{ label: classes.item }}
              value="easy"
              control={
                <Radio
                  classes={{
                    root: classes.easy,
                    checked: classes.checked,
                  }}
                />
              }
              label="Easy"
              checked={difficulty === "easy"}
            />
            <FormControlLabel
              classes={{ label: classes.item }}
              value="moderate"
              control={
                <Radio
                  classes={{
                    root: classes.moderate,
                    checked: classes.checked,
                  }}
                />
              }
              label="Moderate"
              checked={difficulty === "moderate"}
            />
            <FormControlLabel
              classes={{ label: classes.item }}
              value="hard"
              control={
                <Radio
                  classes={{
                    root: classes.hard,
                    checked: classes.checked,
                  }}
                />
              }
              label="Hard"
              checked={difficulty === "hard"}
            />
          </RadioGroup>
        </div>
        <Fab
          className={classes.playBtn}
          onClick={this.props.handleClick}
          variant="extended"
          color="primary"
        >
          Play!
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(SetDifficulty);
