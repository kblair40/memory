import React, { Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { green, red, orange } from "@material-ui/core/colors";
// import green from "@material-ui/core/colors/green";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import "./SetDifficulty.css";

const styles = {
  label: {
    color: "rgba(0,0,0,0.8)",
  },
  item: {
    marginBottom: "-10px",
  },
  easy: {
    color: green[500],
    "&$checked": {
      color: green[400],
    },
  },
  moderate: {
    color: orange[500],
    "&$checked": {
      color: orange[400],
    },
  },
  hard: {
    color: red[500],
    "&$checked": {
      color: red[400],
    },
  },
  checked: {},
};

class SetDifficulty extends Component {
  render() {
    const { handleChange, difficulty, classes } = this.props;
    return (
      <div className="SetDifficulty">
        <FormLabel classes={{ root: classes.label }}>
          Select Difficulty
        </FormLabel>
        <RadioGroup
          onChange={handleChange}
          aria-label="Difficulty"
          name="difficulty"
        >
          <FormControlLabel
            classes={{ root: classes.item }}
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
            classes={{ root: classes.item }}
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
    );
  }
}

export default withStyles(styles)(SetDifficulty);
